<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recipes = Recipe::all();
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
        $data = $request->all();

        $data['calories'] = (int) $data['calories']; // caloriesを整数に変換
        $data['people'] = (int) $data['people'];
        $data['is_favorite'] = (bool) $data['is_favorite'];

        // バリデーションルール
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'comments' => 'nullable|string',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'calories' => 'nullable|integer',
            'people' => 'nullable|integer',
            'is_favorite' => 'nullable|boolean',
            'ingredients' => 'required|array',
            'steps' => 'required|array',
        ]);

        // S3にアップロード
        $thumbnail = $request->file('thumbnail');
        $path = $thumbnail->store('recipe-thumbnails', 's3'); // 'recipe-thumbnails' ディレクトリに保存

        // アップロードした画像のURLを取得
        $url = Storage::disks('s3')->url($path);

        // レシピの保存
        $recipe = Recipe::create([
            'name' => $validatedData['name'],
            'comments' => $validatedData['comments'],
            'thumbnail' => $url,
            'calories' => (int)$validatedData['calories'],
            'people' => (int)$validatedData['people'],
            'is_favorite' => (bool)$validatedData['is_favorite'],
            'ingredients' => json_encode($validatedData['ingredients']), // ingredientsはそのままJSONとして保存
        ]);

        // ステップの保存
        foreach ($validatedData['steps'] as $stepData) {
            $stepThumbnail = $stepData['thumbnail'] ?? null;

            // 画像のアップロード（もしあれば）
            if ($stepThumbnail) {
                $stepPath = $stepThumbnail->store('step-thumbnails', 's3');
                $stepData['thumbnail'] = Storage::disks('s3')->url($stepPath);
            }

            // ステップを作成
            $recipe->steps()->create([
                'step_number' => (int)$stepData['step_number'],
                'description' => $stepData['description'],
                'thumbnail' => $stepData['thumbnail'],
            ]);
        }

        // // レシピの保存
        // $recipe->save();

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
        $favoriteRecipes = Recipe::where('is_favorite', 1)->get();

        return response()->json($favoriteRecipes);
    }
}
