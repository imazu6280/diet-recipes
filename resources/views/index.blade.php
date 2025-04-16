<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">

        <title>diet-recipes</title>

        {{-- react に変更があったとき自動で --}}
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/ts/index.tsx'])

    </head>

    <body class="antialiased m-2 bg-beige md:m-0 font-sans">
        <div id="app"></div>
    </body>
</html>
