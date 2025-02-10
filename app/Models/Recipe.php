<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'comments','people','thumbnail', 'calories', 'is_favorite'];

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class); // 1対多のリレーション
    }

    public function steps()
    {
        return $this->hasMany(Step::class);  // Recipeに関連するStepを取得
    }
}
