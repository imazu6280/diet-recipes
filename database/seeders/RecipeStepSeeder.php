<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeStepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $steps = [];
        $recipes = 10; // レシピ数
        $stepsPerRecipe = 5; // 各レシピのステップ数

        foreach (range(1, $recipes * $stepsPerRecipe) as $index) {
            $recipeId = ceil($index / $stepsPerRecipe);
            $stepNumber = $index % $stepsPerRecipe === 0 ? $stepsPerRecipe : $index % $stepsPerRecipe;

            $steps[] = [
                'recipe_id' => $recipeId,
                'step_number' => $stepNumber,
                'description' => "これはレシピ {$recipeId} のステップ {$stepNumber} です。",
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // データベースに挿入
        DB::table('recipe_steps')->insert($steps);
    }
}
