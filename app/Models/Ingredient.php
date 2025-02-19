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
        return $this->belongsToMany(Recipe::class, 'recipe_ingredient')
                    ->withPivot('quantity')
                    ->withTimestamps();
    }
}
