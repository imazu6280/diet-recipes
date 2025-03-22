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
            DB::table('recipes')->insert([
                'category_id' => rand(1, 5), // 1〜5のランダムなカテゴリーID
                'name' => "鶏肉{$i}",
                'comments' => "This is a comment for Recipe {$i}.",
                'thumbnail' => "recipe{$i}_thumbnail.jpg", // 仮のサムネイル画像
                'calories' => rand(100, 800), // 100〜800のランダムなカロリー
                'people' => rand(1, 5), // 1〜5人分
                'is_favorite' => rand(0, 1), // お気に入り (0 or 1)
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
