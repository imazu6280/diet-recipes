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
        Schema::create('steps', function (Blueprint $table) {
            $table->id();  // 自動インクリメントID
            $table->foreignId('recipe_id')  // Recipeと関連付け
                  ->constrained()  // 外部キー制約
                  ->onDelete('cascade');  // Recipeが削除されたらStepも削除される
            $table->integer('step_number');  // ステップ番号
            $table->text('description');  // ステップの説明
            $table->string('thumbnail')->nullable();  // ステップのサムネイル画像（S3等に保存）
            $table->timestamps();  // created_at と updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('steps');
    }
};
