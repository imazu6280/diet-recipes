<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recipes = Recipe::with('steps')->get();
        return response()->json($recipes);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'comments' => 'nullable|string',
                'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|max:10240',
                'calories' => 'required|integer',
                'people' => 'required|integer',
                'is_favorite' => 'required|boolean',
                'ingredients' => 'required|array',
                'steps' => 'required|array',
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Validation failed', ['errors' => $e->errors()]);
            return response()->json(['errors' => $e->errors()], 422);
        }


        // S3にアップロード
        $thumbnail = $request->file('thumbnail');
        Log::info('Thumbnail file details', [
            'original_name' => $thumbnail->getClientOriginalName(),
            'mime_type' => $thumbnail->getMimeType(),
            'size' => $thumbnail->getSize(),
        ]);

        $path = $thumbnail->store('recipe-thumbnails', 's3'); // 'recipe-thumbnails' ディレクトリに保存

        Log::info("Uploaded file path: " . $path);

        // アップロードした画像のURLを取得
        $url = Storage::disk('s3')->url($path);

        Log::info('Generated S3 URL:', ['url' => $url]);


        // レシピの保存
        $recipe = Recipe::create([
            'name' => $validatedData['name'],
            'comments' => $validatedData['comments'],
            'thumbnail' => $url,
            'calories' => $validatedData['calories'],
            'people' => $validatedData['people'],
            'is_favorite' => $validatedData['is_favorite'],
            'ingredients' => json_decode($validatedData['ingredients'], true),
            // 'ingredients' => $validatedData['ingredients'],
        ]);

        // ingredientsのリレーションを保存
        foreach ($validatedData['ingredients'] as $ingredientData) {
            // 食材の名前と数量などの詳細情報を保存
            $ingredient = Ingredient::firstOrCreate([
                'name' => $ingredientData['name'],
            ], [
                'fat' => $ingredientData['fat'],
                'carbs' => $ingredientData['carbs'],
                'protein' => $ingredientData['protein'],
                'calories' => $ingredientData['calories'],
                'quantity' => $ingredientData['quantity'],
            ]);

            // リレーションに追加
            // $recipe->ingredients()->attach($ingredient->id, [
            //     'quantity' => $ingredientData['quantity'], // 例えば食材に対する量
            // ]);
        }


        // ステップの保存
        foreach ($validatedData['steps'] as $stepData) {
            // 画像のアップロード（thumbnailは必ずある）
            Log::info('Processing step', ['stepData' => $stepData]);

            $stepPath = $stepData['thumbnail']->store('step-thumbnails', 's3');
            Log::info('Step thumbnail uploaded', ['stepPath' => $stepPath]);

            $stepData['thumbnail'] = Storage::disk('s3')->url($stepPath);
            Log::info('Generated S3 URL for thumbnail', ['thumbnailUrl' => $stepData['thumbnail']]);

            // ステップを作成
            $step = $recipe->steps()->create([
                'step_number' => $stepData['step_number'],
                'description' => $stepData['description'],
                'thumbnail' => $stepData['thumbnail'],
            ]);

            Log::info('Step created', ['step' => $step]);
        }


        return response()->json(['message' => 'Recipe created successfully', 'recipe' => $recipe], 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // レシピを取得
    $recipe = Recipe::find($id);

    if (!$recipe) {
        return response()->json(['error' => 'Recipe not found'], 404);
    }

    // JSONフィールドからステップと材料をデコード
    $steps = $recipe->steps;
    $ingredients = $recipe->ingredients;

    // 最新のステップをステップ番号ごとにグループ化し、最新のものだけを保持
    $latestSteps = collect($steps)
                    ->groupBy('step_number')
                    ->map(function ($group) {
                        return $group->sortByDesc('id')->first();
                    })
                    ->sortBy('step_number')
                    ->values();

    // レシピの詳細を構築
    $recipeDetails = [
        'id' => $recipe->id,
        'name' => $recipe->name,
        'comments' => $recipe->comments,
        'thumbnail' => $recipe->thumbnail,
        'calories' => $recipe->calories,
        'people' => $recipe->people,
        'is_favorite' => $recipe->is_favorite,
        'steps' => $latestSteps,
        'ingredients' => $ingredients,
        'created_at' => $recipe->created_at,
        'updated_at' => $recipe->updated_at,
    ];

    return response()->json($recipeDetails);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function favorites()
    {
        $favoriteRecipes = Recipe::with('steps')
        ->where('is_favorite', 1)
        ->get();

        return response()->json($favoriteRecipes);
    }
}
