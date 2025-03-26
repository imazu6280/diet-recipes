<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeIngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) { // 10件のデータを作成
            DB::table('recipe_ingredient')->insert([
                'recipe_id' => rand(1, 5), // 1～5のランダムなレシピID
                'ingredient_id' => rand(1, 10), // 1～20のランダムな食材ID
                'fat' => rand(0, 20), // 0～20gの脂質
                'carbs' => rand(0, 100), // 0～100gの炭水化物
                'protein' => rand(0, 50), // 0～50gのタンパク質
                'calories' => rand(50, 600), // 50～600 kcal
                'quantity' => rand(1, 500), // 1～500g or 個数
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
