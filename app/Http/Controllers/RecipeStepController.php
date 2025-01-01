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
        $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
            'step_number' => 'required|integer',
            'description' => 'required|string',
        ]);

        return RecipeStep::create($request->all());
    }
}
