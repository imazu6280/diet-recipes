<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>diet-recipes</title>

        
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.js', 'resources/ts/index.tsx']); ?>

    </head>

    <body class="antialiased m-2 bg-beige md:m-0">
        <div id="app"></div>
    </body>
</html>
<?php /**PATH /var/www/html/resources/views/index.blade.php ENDPATH**/ ?>