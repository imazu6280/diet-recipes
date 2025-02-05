<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'comments','people', 'calories', 'is_favorite','ingredients','steps'];

    protected $casts = [
        'ingredients' => 'array',
        'steps' => 'array',
    ];
}
