<?php

namespace App\Http\Controllers;

use App\Models\RecipeIngredient;
use Illuminate\Http\Request;

class RecipeIngredientController extends Controller
{
    public function index($recipeId)
    {
        $recipeIngredients = RecipeIngredient::with('ingredient')
            ->where('recipe_id', $recipeId)
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'recipe_id' => $item->recipe_id,
                    'ingredient_id' => $item->ingredient_id,
                    'quantity' => $item->quantity,
                    'ingredient_name' => $item->ingredient ? $item->ingredient->name : null, // 食材名がない場合はnull
                ];
            });

        return response()->json($recipeIngredients);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
            'ingredient_id' => 'required|exists:ingredients,id',
            'quantity' => 'required|numeric',
        ]);

        $recipeIngredient = RecipeIngredient::create($data);

        return response()->json($recipeIngredient, 201);
    }
}
