<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    protected $fillable = [
        'name',
        'fat',
        'carbs',
        'protein',
        'calories',
        'quantity',
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);  // Recipeとのリレーション
    }
}
