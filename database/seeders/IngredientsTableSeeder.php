<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ingredients = [
            ['name' => '鶏むね肉', 'calories' => 120, 'protein' => 22, 'carbs' => 0, 'fat' => 3],
            ['name' => '卵', 'calories' => 80, 'protein' => 6, 'carbs' => 0.6, 'fat' => 5],
            ['name' => '牛乳', 'calories' => 42, 'protein' => 3.4, 'carbs' => 4.8, 'fat' => 1],
            ['name' => '小松菜', 'calories' => 14, 'protein' => 1.5, 'carbs' => 2.2, 'fat' => 0.2],
            ['name' => 'じゃがいも', 'calories' => 76, 'protein' => 2, 'carbs' => 17, 'fat' => 0.1],
            ['name' => 'さつまいも', 'calories' => 131, 'protein' => 1.2, 'carbs' => 31, 'fat' => 0.2],
            ['name' => '豚肉', 'calories' => 242, 'protein' => 20, 'carbs' => 0, 'fat' => 18],
            ['name' => '牛肉', 'calories' => 250, 'protein' => 26, 'carbs' => 0, 'fat' => 17],
            ['name' => '玉ねぎ', 'calories' => 38, 'protein' => 1, 'carbs' => 9, 'fat' => 0.1],
            ['name' => 'にんじん', 'calories' => 37, 'protein' => 0.9, 'carbs' => 9, 'fat' => 0.1],
            ['name' => 'ピーマン', 'calories' => 22, 'protein' => 0.9, 'carbs' => 5.2, 'fat' => 0.1],
            ['name' => 'キャベツ', 'calories' => 23, 'protein' => 1.3, 'carbs' => 5.4, 'fat' => 0.1],
            ['name' => '白菜', 'calories' => 12, 'protein' => 1, 'carbs' => 2.2, 'fat' => 0.1],
            ['name' => 'きゅうり', 'calories' => 14, 'protein' => 0.9, 'carbs' => 3.4, 'fat' => 0.1],
            ['name' => 'トマト', 'calories' => 19, 'protein' => 0.8, 'carbs' => 4.7, 'fat' => 0.1],
            ['name' => '大根', 'calories' => 18, 'protein' => 0.5, 'carbs' => 4.1, 'fat' => 0.1],
            ['name' => 'ほうれん草', 'calories' => 23, 'protein' => 2.8, 'carbs' => 3.9, 'fat' => 0.1],
            ['name' => 'いんげん', 'calories' => 31, 'protein' => 2.3, 'carbs' => 7, 'fat' => 0.1],
            ['name' => '枝豆', 'calories' => 135, 'protein' => 11, 'carbs' => 10.3, 'fat' => 5.1],
            ['name' => '納豆', 'calories' => 200, 'protein' => 16.5, 'carbs' => 12.1, 'fat' => 10],
            ['name' => '豆腐', 'calories' => 56, 'protein' => 5, 'carbs' => 1.2, 'fat' => 3],
            ['name' => 'アボカド', 'calories' => 187, 'protein' => 2.5, 'carbs' => 6.2, 'fat' => 18],
            ['name' => 'さけ', 'calories' => 204, 'protein' => 22.5, 'carbs' => 0, 'fat' => 13],
            ['name' => 'さば', 'calories' => 234, 'protein' => 20, 'carbs' => 0, 'fat' => 18],
            ['name' => 'たら', 'calories' => 77, 'protein' => 17, 'carbs' => 0, 'fat' => 0.7],
            ['name' => 'マグロ', 'calories' => 125, 'protein' => 26, 'carbs' => 0, 'fat' => 1.7],
            ['name' => 'いか', 'calories' => 92, 'protein' => 18, 'carbs' => 1.5, 'fat' => 1.2],
            ['name' => 'えび', 'calories' => 99, 'protein' => 21, 'carbs' => 0, 'fat' => 1.5],
            ['name' => 'さんま', 'calories' => 290, 'protein' => 20, 'carbs' => 0, 'fat' => 24],
            ['name' => 'いわし', 'calories' => 217, 'protein' => 20, 'carbs' => 0, 'fat' => 15],
            ['name' => 'ほたて', 'calories' => 69, 'protein' => 12, 'carbs' => 1.5, 'fat' => 0.9],
            ['name' => 'かに', 'calories' => 83, 'protein' => 17, 'carbs' => 0, 'fat' => 1.3],
            ['name' => 'たこ', 'calories' => 76, 'protein' => 16.5, 'carbs' => 0.1, 'fat' => 0.7],
            ['name' => '鶏もも肉', 'calories' => 190, 'protein' => 19, 'carbs' => 0, 'fat' => 13],
            ['name' => 'ウィンナー', 'calories' => 310, 'protein' => 12, 'carbs' => 1, 'fat' => 28],
            ['name' => 'ベーコン', 'calories' => 400, 'protein' => 12, 'carbs' => 0, 'fat' => 40],
            ['name' => 'ハム', 'calories' => 130, 'protein' => 15, 'carbs' => 1, 'fat' => 8],
            ['name' => 'バター', 'calories' => 717, 'protein' => 0.8, 'carbs' => 0.1, 'fat' => 81],
            ['name' => 'チーズ', 'calories' => 402, 'protein' => 25, 'carbs' => 1.3, 'fat' => 33],
            ['name' => 'ヨーグルト', 'calories' => 59, 'protein' => 3.5, 'carbs' => 4.7, 'fat' => 3.3],
            ['name' => 'パン', 'calories' => 265, 'protein' => 9, 'carbs' => 49, 'fat' => 3.2],
            ['name' => 'ごはん', 'calories' => 168, 'protein' => 2.5, 'carbs' => 37, 'fat' => 0.3],
            ['name' => 'うどん', 'calories' => 105, 'protein' => 2.6, 'carbs' => 21.6, 'fat' => 0.2],
            ['name' => 'そば', 'calories' => 132, 'protein' => 5.1, 'carbs' => 24, 'fat' => 0.9],
            ['name' => 'パスタ', 'calories' => 371, 'protein' => 13, 'carbs' => 74, 'fat' => 1.5],
            ['name' => 'オリーブオイル', 'calories' => 884, 'protein' => 0, 'carbs' => 0, 'fat' => 100],
            ['name' => 'みそ', 'calories' => 200, 'protein' => 12, 'carbs' => 26, 'fat' => 5],
            ['name' => 'しょうゆ', 'calories' => 53, 'protein' => 5, 'carbs' => 6, 'fat' => 0],
            ['name' => '砂糖', 'calories' => 387, 'protein' => 0, 'carbs' => 100, 'fat' => 0],
            ['name' => '塩', 'calories' => 0, 'protein' => 0, 'carbs' => 0, 'fat' => 0],
        ];

        foreach ($ingredients as $ingredient) {
            DB::table('ingredients')->insert([
                'name' => $ingredient['name'],
                'calories' => $ingredient['calories'],
                'protein' => $ingredient['protein'],
                'carbs' => $ingredient['carbs'],
                'fat' => $ingredient['fat'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
