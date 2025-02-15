<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'comments','people','thumbnail', 'calories', 'is_favorite'];

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'recipe_ingredient')
                    ->withPivot('quantity') // 中間テーブルのカラムを追加
                    ->withTimestamps();
    }

    public function steps()
    {
        return $this->hasMany(Step::class);  // Recipeに関連するStepを取得
    }
}
