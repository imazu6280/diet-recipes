<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('icon');
            $table->timestamps();
        });

        $categories = [
            ['name' => '野菜', 'icon' => '/images/image03.png'],
            ['name' => '鶏肉', 'icon' => '/images/image04.png'],
            ['name' => '魚介', 'icon' => '/images/image05.png'],
            ['name' => 'たまご', 'icon' => '/images/image06.png'],
            ['name' => 'スープ', 'icon' => '/images/image07.png'],
            ['name' => '豚肉', 'icon' => '/images/image04.png'],
            ['name' => 'ごはんもの', 'icon' => '/images/image08.png'],
            ['name' => '麺', 'icon' => '/images/image09.png'],
            ['name' => '牛肉', 'icon' => '/images/image04.png'],
            ['name' => 'パン', 'icon' => '/images/image10.png'],
            ['name' => 'お菓子', 'icon' => '/images/image11.png'],
            ['name' => 'サラダ', 'icon' => '/images/image12.png'],
        ];

        // 各カテゴリを挿入する
        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category['name'],
                'icon' => $category['icon'],
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
