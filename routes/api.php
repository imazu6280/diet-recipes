<?php

use App\Http\Controllers\RecipeController;
use App\Http\Controllers\RecipeIngredientController;
use App\Http\Controllers\RecipeStepController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/recipes', [RecipeController::class, 'index']);
Route::get('/recipes/favorites', [RecipeController::class, 'favorites']);
Route::get('/recipes/{id}', [RecipeController::class, 'show']);
Route::get('/recipes/{id}/ingredients', [RecipeIngredientController::class, 'index']);
Route::post('/recipes/ingredients', [RecipeIngredientController::class, 'store']);
Route::get('/api/recipes/{recipe}/steps', [RecipeStepController::class, 'index']);
Route::post('/api/recipes/steps', [RecipeStepController::class, 'store']);
