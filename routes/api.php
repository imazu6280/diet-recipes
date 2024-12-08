<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/hoge', function (Request $request) {
    return response()->json(['hoge' => 'Hello Laravel!']);
});
