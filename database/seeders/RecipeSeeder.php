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
            'steps' => Str::random(50), // ランダムなレシピ手順（50文字）
            'thumbnail_image' => 'https://via.placeholder.com/150',  // ダミー画像URL
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
    }
}
