<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recipes = Recipe::with(['ingredients', 'steps'])->get();
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // レシピとそのステップ（最新のstep_numberごとに絞り込む）
        $recipe = Recipe::with(['steps' => function ($query) use ($id) {
            // 最新のstep_numberごとに絞り込む
            $query->where('recipe_id', $id)
                  ->whereIn('id', function ($subQuery) use ($id) {
                      $subQuery->selectRaw('max(id)')
                               ->from('recipe_steps')
                               ->where('recipe_id', $id)  // 特定のrecipe_idでフィルタリング
                               ->groupBy('step_number');  // step_numberごとにグループ化
                  })
                  ->orderBy('step_number');  // step_numberでソート
        }, 'ingredients'])->find($id);

        if (!$recipe) {
            return response()->json(['error' => 'Recipe not found'], 404);
        }


        return response()->json($recipe);
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
