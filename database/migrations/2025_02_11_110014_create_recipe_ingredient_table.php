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
            $table->decimal('quantity', 8, 2); // 食材の量（gや個数）
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
