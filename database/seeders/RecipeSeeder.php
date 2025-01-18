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
       foreach (range(1, 10) as $index) {
        DB::table('recipes')->insert([
            'name' => Str::random(10),  // ランダムな料理名（10文字）
            'comments' => Str::random(50), // ランダムなコメント（50文字）
            'thumbnail' => 'https://placehold.jp/350x240.png',  // ダミー画像URL
            'calories' => rand(100, 500), // ランダムなカロリー情報
            'peaple' => rand(1, 6), // ランダムなカロリー情報
            'is_favorite' => (bool)rand(0, 1), // 0または1のランダムな値（お気に入りフラグ）
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
    }
}
