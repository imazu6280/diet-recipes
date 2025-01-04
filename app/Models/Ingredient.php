<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $fillable = [
        'name',
        'calories',
        'protein',
        'carbs',
        'fat',
    ];

    public function recipeIngredients()
    {
        return $this->hasMany(RecipeIngredient::class);
    }
}
