<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipe_id',
        'step_number',
        'description',
        'thumbnail',
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);  // Recipeとのリレーション
    }
}
