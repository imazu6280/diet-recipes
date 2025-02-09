<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'comments','people', 'calories', 'is_favorite','ingredients'];

    protected $casts = [
        'ingredients' => 'array',
    ];

    public function steps()
    {
        return $this->hasMany(Step::class);  // Recipeに関連するStepを取得
    }
}
