<?php

use App\Http\Controllers\RecipeController;
use App\Http\Controllers\RecipeIngredientController;
use App\Http\Controllers\RecipeStepController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/recipes', [RecipeController::class, 'index']);
Route::post('/recipes', [RecipeController::class, 'store']);
Route::get('/recipes/favorites', [RecipeController::class, 'favorites']);
Route::get('/recipes/{id}', [RecipeController::class, 'show']);
Route::get('/recipes/edit/{id}', [RecipeController::class, 'edit']);
Route::put('/recipes/{id}', [RecipeController::class, 'update']);
