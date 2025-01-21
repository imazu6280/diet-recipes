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
       // ダミーデータを10件挿入
       for ($i = 0; $i < 10; $i++) {
        DB::table('recipes')->insert([
            'name' => 'Recipe ' . ($i + 1),
            'comments' => 'This is a sample comment for Recipe ' . ($i + 1),
            'thumbnail' => 'https://via.placeholder.com/150', // サンプルの画像URL
            'calories' => 200 + ($i * 50), // 200〜750カロリーの範囲
            'people' => 2 + ($i % 4), // 2〜5人分
            'is_favorite' => $i % 2 === 0, // 偶数番目はお気に入り
            'ingredients' => json_encode([
                'ingredient1' => 'Ingredient 1 for Recipe ' . ($i + 1),
                'ingredient2' => 'Ingredient 2 for Recipe ' . ($i + 1),
                'ingredient3' => 'Ingredient 3 for Recipe ' . ($i + 1),
            ]),
            'steps' => json_encode([
                'Step 1 for Recipe ' . ($i + 1),
                'Step 2 for Recipe ' . ($i + 1),
                'Step 3 for Recipe ' . ($i + 1),
            ]),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
    }
}
