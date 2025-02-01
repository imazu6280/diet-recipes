<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $recipes = [];

        for ($i = 1; $i <= 10; $i++) {
            $recipes[] = [
                'name' => "Recipe $i",
                'comments' => "This is a comment for recipe $i.",
                // 'thumbnail' => "recipe{$i}_thumbnail.jpg",
                'calories' => rand(100, 500),
                'people' => rand(1, 6),
                'is_favorite' => (bool)rand(0, 1),
                // 'ingredients' => json_encode([
                //     ["id" => 1, "name" => "ingredient1", "calories" => rand(50, 150), "protein" => rand(1, 10), "carbs" => rand(10, 50), "fat" => rand(1, 10), "quantity" => rand(5, 200)],
                //     ["id" => 2, "name" => "ingredient2", "calories" => rand(50, 150), "protein" => rand(1, 10), "carbs" => rand(10, 50), "fat" => rand(1, 10), "quantity" => rand(5, 200)]
                // ]),
                // 'steps' => json_encode([
                //     ["id" => 1, "step_number" => 1, "description" => "Step 1 for recipe $i", "thumbnail" => "step1.jpg"],
                //     ["id" => 2, "step_number" => 2, "description" => "Step 2 for recipe $i", "thumbnail" => "step2.jpg"]
                // ]),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('recipes')->insert($recipes);
    }
}
