<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // レシピのダミーデータを10件作成
        foreach (range(1, 10) as $index) {
            DB::table('recipes')->insert([
                'name' => $faker->word(), // 料理名（ランダムな単語）
                'steps' => $faker->text(), // レシピの手順（ランダムなテキスト）
                'thumbnail_image' => $faker->imageUrl(), // サムネイル画像URL（ランダムな画像URL）
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
