<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('index');
});

Route::get('/api/hoge', function (Request $request) {
    return response()->json(['hoge' => 'Hello Laravel!']);
});
