<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ingredients = [
            ['name' => 'Tomato'],
            ['name' => 'Potato'],
            ['name' => 'Carrot'],
            ['name' => 'Onion'],
            ['name' => 'Garlic'],
            ['name' => 'Chicken'],
            ['name' => 'Beef'],
            ['name' => 'Pork'],
            ['name' => 'Fish'],
            ['name' => 'Egg'],
        ];

        foreach ($ingredients as $ingredient) {
            DB::table('ingredients')->insert([
                'name' => $ingredient['name'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
