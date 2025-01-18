<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'comments', 'thumbnail', 'calories', 'is_favorite'];

 public function steps()
 {
    return $this->hasMany(RecipeStep::class);
 }

 public function ingredients()
 {
    return $this->belongsToMany(Ingredient::class, 'recipe_ingredients')->withPivot('quantity');
 }
}
