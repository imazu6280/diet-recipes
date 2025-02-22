<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recipe_ingredient', function (Blueprint $table) {
            $table->id();  // 中間テーブルのID（自動連番）
            $table->foreignId('recipe_id')->constrained()->onDelete('cascade'); // レシピID
            $table->foreignId('ingredient_id')->constrained()->onDelete('cascade'); // 食材ID
            $table->integer('fat')->default(0); // 脂質
            $table->integer('carbs')->default(0); // 炭水化物
            $table->integer('protein')->default(0); // タンパク質
            $table->integer('calories')->default(0); // カロリー
            $table->integer('quantity')->default(0); // 食材の量（gや個数）
            $table->timestamps(); // created_at / updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipe_ingredient');
    }
};
