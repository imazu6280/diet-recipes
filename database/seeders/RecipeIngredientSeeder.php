<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeIngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('recipe_ingredients')->insert([
            ['recipe_id' => 1, 'ingredient_id' => 1, 'quantity' => 100, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 1, 'ingredient_id' => 2, 'quantity' => 200, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 1, 'ingredient_id' => 3, 'quantity' => 150, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 2, 'ingredient_id' => 4, 'quantity' => 100, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 2, 'ingredient_id' => 5, 'quantity' => 200, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 2, 'ingredient_id' => 6, 'quantity' => 250, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 3, 'ingredient_id' => 7, 'quantity' => 300, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 3, 'ingredient_id' => 8, 'quantity' => 100, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 3, 'ingredient_id' => 9, 'quantity' => 200, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 4, 'ingredient_id' => 10, 'quantity' => 150, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 4, 'ingredient_id' => 11, 'quantity' => 250, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 4, 'ingredient_id' => 12, 'quantity' => 300, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 5, 'ingredient_id' => 13, 'quantity' => 120, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 5, 'ingredient_id' => 14, 'quantity' => 220, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 5, 'ingredient_id' => 15, 'quantity' => 180, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 6, 'ingredient_id' => 16, 'quantity' => 150, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 6, 'ingredient_id' => 17, 'quantity' => 200, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 6, 'ingredient_id' => 18, 'quantity' => 220, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 7, 'ingredient_id' => 19, 'quantity' => 180, 'created_at' => now(), 'updated_at' => now()],
            ['recipe_id' => 7, 'ingredient_id' => 20, 'quantity' => 250, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
