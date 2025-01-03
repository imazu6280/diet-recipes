<?php

namespace App\Http\Controllers;

use App\Models\RecipeStep;
use Illuminate\Http\Request;

class RecipeStepController extends Controller
{
    public function index($recipeId)
    {
        return RecipeStep::where('recipe_id', $recipeId)->orderBy('step_number')->get();
    }

    public function store(Request $request)
    {
        // バリデーション
        $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
            'step_number' => 'required|integer',
            'description' => 'required|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // 画像のバリデーション
        ]);

        // 画像が存在する場合、ストレージに保存
        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('thumbnails', 'public'); // publicディスクに保存
        } else {
            $path = null; // 画像がない場合
        }

        // データの保存
        $recipeStep = RecipeStep::create([
            'recipe_id' => $request->recipe_id,
            'step_number' => $request->step_number,
            'description' => $request->description,
            'thumbnail' => $path, // 保存した画像のパスを保存
        ]);

        return response()->json($recipeStep, 201);
    }
}
