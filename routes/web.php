<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;

// Route::resource('recipes', RecipeController::class);

// フロントエンドのすべてのリクエストをキャッチするルート
Route::get('{any}', function () {
    return view('index');
})->where('any','.*');
