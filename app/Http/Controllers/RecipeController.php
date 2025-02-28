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
                // 'steps.*.thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|max:10240',
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Validation failed', ['errors' => $e->errors()]);
            return response()->json(['errors' => $e->errors()], 422);
        }


        // S3にアップロード
        $thumbnail = $request->file('thumbnail');
        $path = $thumbnail->store('recipe-thumbnails', 's3');

        // アップロードした画像のURLを取得
        $url = Storage::disk('s3')->url($path);


        // レシピの保存
        $recipe = Recipe::create([
            'name' => $validatedData['name'],
            'comments' => $validatedData['comments'],
            'thumbnail' => $url,
            'calories' => $validatedData['calories'],
            'people' => $validatedData['people'],
            'is_favorite' => $validatedData['is_favorite'],
        ]);

        // ingredientsのリレーションを保存
        foreach ($validatedData['ingredients'] as $ingredientData) {

            // 食材の作成または更新
            $ingredient = Ingredient::updateOrCreate(
                ['name' => $ingredientData['name']]
            );

            $recipe->ingredients()->attach($ingredient->id, [
                'fat' => $ingredientData['fat'],
                'carbs' => $ingredientData['carbs'],
                'protein' => $ingredientData['protein'],
                'calories' => $ingredientData['calories'],
                'quantity' => $ingredientData['quantity'],
            ]);
        }


        // ステップの保存
        foreach ($validatedData['steps'] as $stepData) {

            $stepPath = $stepData['thumbnail']->store('step-thumbnails', 's3');

            $stepData['thumbnail'] = Storage::disk('s3')->url($stepPath);

            // ステップを作成
            $step = $recipe->steps()->create([
                'step_number' => $stepData['step_number'],
                'description' => $stepData['description'],
                'thumbnail' => $stepData['thumbnail'],
            ]);

        }


        return response()->json([
            'recipe' => $recipe,
            'ingredients' => $recipe->ingredients,
            'steps' => $step,
        ], 201);
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
        $recipe = Recipe::find($id);

        if(!$recipe) {
            return response()->json(['error' => 'Recipe not found'], 404);
        }

        $steps = $recipe->steps;
        $ingredients = $recipe->ingredients;

        $latestSteps = collect($steps)->groupBy('step_number')->map(function ($group) {
            return $group->sortByDesc('id')->first();
        })
        ->sortBy('step_number')
        ->values();

        $recipeUpdates = [
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

        return response()->json($recipeUpdates);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Log::info('Update Request Data: ', $request->all());
        try {
            Log::info('Update Request Data: ', $request->all());
            // バリデーション
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'comments' => 'nullable|string',
                'calories' => 'required|integer',
                'people' => 'required|integer',
                'is_favorite' => 'required|boolean',
                'ingredients' => 'required|array',
                'steps' => 'required|array',
                // 'steps.*.thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|max:10240',
            ]);

            if ($request->hasFile('thumbnail')) {
                // 画像ファイルが存在する場合、画像のバリデーションを適用
                $request->validate([
                    'thumbnail' => 'image|mimes:jpeg,png,jpg,gif|max:10240',
                ]);
            } elseif ($request->filled('thumbnail')) {
                // URLが文字列として送信されている場合
                $request->validate([
                    'thumbnail' => 'url',
                ]);
            }

        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Validation failed', ['errors' => $e->errors()]);
            return response()->json(['errors' => $e->errors()], 422);
        }

        // レシピを見つける
        $recipe = Recipe::findOrFail($id);

       // サムネイルの処理
       if ($request->hasFile('thumbnail') && $request->file('thumbnail')->isValid()) {
        // 画像ファイルが送信されている場合
        // S3に画像ファイルを保存し、URLを取得
        $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 's3');
        // S3のURLを取得
        $thumbnailUrl = Storage::disk('s3')->url($thumbnailPath);
    } elseif ($request->filled('thumbnail')) {
        // 既存のURLが送信されている場合
        $thumbnailUrl = $request->input('thumbnail'); // URLそのまま使用
    } else {
        // 画像もURLも送信されていない場合
        $thumbnailUrl = ""; // 必要に応じてデフォルト値
    }

    // データベースの更新処理（例）
    $recipe = Recipe::find($id);
    $recipe->thumbnail = $thumbnailUrl;
    $recipe->save();

        // レシピの更新
        $recipe->update([
            'name' => $validatedData['name'],
            'comments' => $validatedData['comments'],
            'calories' => $validatedData['calories'],
            'people' => $validatedData['people'],
            'is_favorite' => $validatedData['is_favorite'],
        ]);

        // ingredientsのリレーションを更新
        $recipe->ingredients()->detach(); // 既存のリレーションを削除
        foreach ($validatedData['ingredients'] as $ingredientData) {

            // 食材の作成または更新
            $ingredient = Ingredient::updateOrCreate(
                ['name' => $ingredientData['name']]
            );

            // 食材の関連を追加
            $recipe->ingredients()->attach($ingredient->id, [
                'fat' => $ingredientData['fat'],
                'carbs' => $ingredientData['carbs'],
                'protein' => $ingredientData['protein'],
                'calories' => $ingredientData['calories'],
                'quantity' => $ingredientData['quantity'],
            ]);
        }

        // ステップの更新
        foreach ($validatedData['steps'] as $stepData) {
            // ステップサムネイルのアップロード（新しい画像があれば更新）
            if ($request->hasFile('steps.' . $stepData['step_number'] . '.thumbnail')) {
                $file = $request->file('steps.' . $stepData['step_number'] . '.thumbnail');
                $stepPath = $file->store('step-thumbnails', 's3');
                $stepData['thumbnail'] = Storage::disk('s3')->url($stepPath);
            } elseif (isset($stepData['thumbnail']) && is_string($stepData['thumbnail'])) {
                // 既存のURLが送信されている場合
                $stepData['thumbnail'] = $stepData['thumbnail']; // URLそのまま使用
            } else {
                // 画像もURLも送信されていない場合
                $stepData['thumbnail'] = ""; // 必要に応じてデフォルト値
            }

            // ステップの作成または更新
            $step = $recipe->steps()->updateOrCreate(
                ['step_number' => $stepData['step_number']],
                [
                    'description' => $stepData['description'],
                    'thumbnail' => $stepData['thumbnail'],
                ]
            );
        }

        return response()->json([
            'recipe' => $recipe,
            'ingredients' => $recipe->ingredients,
            'steps' => $step
        ], 200);
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
