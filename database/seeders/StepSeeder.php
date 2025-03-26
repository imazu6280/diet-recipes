<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table('steps')->insert([
                'recipe_id' => 1, // すべてのステップを recipe_id = 1 に関連付け
                'step_number' => $i, // ループの回数を step_number として使用
                'description' => "ステップ {$i} の説明です。",
                'thumbnail' => "steps/step{$i}.jpg", // 動的にファイル名を変更
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
