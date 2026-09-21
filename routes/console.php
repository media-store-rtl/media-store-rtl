<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('media:audit-images
    {--path=storage/app/public : Directory to scan}
    {--min-kb=200 : Only report files at or above this size}
    {--limit=100 : Maximum rows to display}
    {--json : Output machine-readable JSON}\n    {--related : Include database record and imageable title}', function () {
    $root = base_path($this->option('path'));
    $minBytes = max(0, (int) $this->option('min-kb')) * 1024;
    $limit = max(1, (int) $this->option('limit'));

    if (! is_dir($root)) {
        $this->error("Image directory not found: {$root}");
        return 1;
    }

    $allowed = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'];
    $rows = [];
    $imageRecords = $this->option('related')
        ? \App\Models\Image::query()->with('imageable')->get()->keyBy('url')
        : collect();

    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS)
    );

    foreach ($iterator as $file) {
        if (! $file->isFile()) {
            continue;
        }

        $extension = strtolower($file->getExtension());
        if (! in_array($extension, $allowed, true)) {
            continue;
        }

        $bytes = $file->getSize();
        if ($bytes < $minBytes) {
            continue;
        }

        $dimensions = @getimagesize($file->getPathname());

        $rows[] = [
            'file' => str_replace(base_path() . DIRECTORY_SEPARATOR, '', $file->getPathname()),
            'format' => strtoupper($extension === 'JPG' ? 'JPEG' : $extension),
            'width' => $dimensions[0] ?? null,
            'height' => $dimensions[1] ?? null,
            'size_kb' => round($bytes / 1024, 1),
            'size_mb' => round($bytes / 1024 / 1024, 2),
        ];

        if ($this->option('related')) {
            $relativePath = str_replace($root . DIRECTORY_SEPARATOR, '', $file->getPathname());
            $image = $imageRecords->get($relativePath) ?? $imageRecords->get('images/' . $relativePath);

            if ($image) {
                $record = $image->imageable;
                $rows[array_key_last($rows)]['image_id'] = $image->id;
                $rows[array_key_last($rows)]['imageable_type'] = class_basename($image->imageable_type);
                $rows[array_key_last($rows)]['imageable_id'] = $image->imageable_id;
                $rows[array_key_last($rows)]['title'] = $record?->name
                    ?? $record?->title
                    ?? $record?->slug
                    ?? '-';
            }
        }
    }

    usort($rows, fn (array $a, array $b) => $b['size_kb'] <=> $a['size_kb']);
    $rows = array_slice($rows, 0, $limit);

    if ($this->option('json')) {
        $this->line(json_encode($rows, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        return 0;
    }

    if ($rows === []) {
        $this->info('No matching images found.');
        return 0;
    }

    $this->table(
        ['File', 'Format', 'Width', 'Height', 'KB', 'MB', 'Type', 'ID', 'Title'],
        array_map(fn (array $row) => [
            $row['file'],
            $row['format'],
            $row['width'] ?? '-',
            $row['height'] ?? '-',
            $row['size_kb'],
            $row['size_mb'],
        ], $rows)
    );

    $this->newLine();
    $this->comment('Sorted by file size. Start with the largest files used by Product/Card components.');
    return 0;
});


Artisan::command('media:generate-webp
    {files* : Relative image paths under storage/app/public or public}
    {--quality=78 : WebP quality from 0 to 100}', function () {
    if (! function_exists('imagewebp')) {
        $this->error('PHP GD WebP support is not available (imagewebp missing).');
        return 1;
    }

    $quality = min(100, max(0, (int) $this->option('quality')));
    $generated = 0;

    foreach ($this->argument('files') as $relativePath) {
        $relativePath = ltrim(str_replace('\\\\', '/', $relativePath), '/');
        $candidates = [
            public_path($relativePath),
            storage_path('app/public/' . $relativePath),
        ];
        $source = collect($candidates)->first(fn ($path) => is_file($path));

        if (! $source) {
            $this->warn("Not found: {$relativePath}");
            continue;
        }

        $extension = strtolower(pathinfo($source, PATHINFO_EXTENSION));
        $loader = match ($extension) {
            'jpg', 'jpeg' => 'imagecreatefromjpeg',
            'png' => 'imagecreatefrompng',
            default => null,
        };

        if (! $loader || ! function_exists($loader)) {
            $this->warn("Unsupported image: {$relativePath}");
            continue;
        }

        $image = @$loader($source);
        if (! $image) {
            $this->warn("Could not read: {$relativePath}");
            continue;
        }

        imagepalettetotruecolor($image);
        imagealphablending($image, true);
        imagesavealpha($image, true);

        $target = preg_replace('/\\.[^.]+$/', '.webp', $source);
        if (! $target || ! imagewebp($image, $target, $quality)) {
            imagedestroy($image);
            $this->warn("Could not write: {$relativePath}");
            continue;
        }

        $before = filesize($source) ?: 0;
        $after = filesize($target) ?: 0;
        $saving = $before > 0 ? round((1 - ($after / $before)) * 100, 1) : 0;
        $this->line(sprintf('%s -> %s KB (%s%% smaller)', $relativePath, round($after / 1024, 1), $saving));
        $generated++;
        imagedestroy($image);
    }

    $this->info("Generated {$generated} WebP file(s).");
    return 0;
});


Artisan::command('media:generate-responsive-webp
    {--path=storage/app/public : Directory to scan}
    {--min-kb=100 : Only convert files at or above this size}
    {--quality=78 : WebP quality from 0 to 100}
    {--widths=300,600 : Comma-separated output widths}', function () {
    if (! function_exists('imagewebp')) {
        $this->error('PHP GD WebP support is not available (imagewebp missing).');
        return 1;
    }

    $directory = $this->option('path');
    $root = is_dir($directory)
        ? $directory
        : (str_starts_with($directory, 'storage/app/public/')
            ? base_path($directory)
            : storage_path('app/public/' . ltrim($directory, '/')));

    if (! is_dir($root)) {
        $this->error("Directory not found: {$root}");
        return 1;
    }

    $minBytes = max(0, (int) $this->option('min-kb')) * 1024;
    $quality = min(100, max(0, (int) $this->option('quality')));
    $widths = collect(explode(',', (string) $this->option('widths')))
        ->map(fn ($width) => (int) trim($width))
        ->filter(fn ($width) => $width > 0)
        ->unique()
        ->sort()
        ->values();

    $generated = 0;
    $skipped = 0;

    foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS)) as $source) {
        if (! $source->isFile() || $source->getSize() < $minBytes) {
            continue;
        }

        $extension = strtolower($source->getExtension());
        $loader = match ($extension) {
            'jpg', 'jpeg' => 'imagecreatefromjpeg',
            'png' => 'imagecreatefrompng',
            default => null,
        };

        if (! $loader || ! function_exists($loader)) {
            continue;
        }

        $image = @$loader($source->getPathname());
        if (! $image) {
            $this->warn("Could not read: {$source->getPathname()}");
            continue;
        }

        $sourceWidth = imagesx($image);
        $sourceHeight = imagesy($image);
        $relative = ltrim(str_replace(base_path(), '', $source->getPathname()), '/');

        foreach ($widths as $width) {
            if ($width >= $sourceWidth) {
                continue;
            }

            $height = max(1, (int) round($sourceHeight * ($width / $sourceWidth)));
            $target = preg_replace('/\.[^.]+$/', '-' . $width . '.webp', $source->getPathname());

            if (! $target || (is_file($target) && filemtime($target) >= filemtime($source->getPathname()))) {
                $skipped++;
                continue;
            }

            $resized = imagecreatetruecolor($width, $height);
            imagealphablending($resized, false);
            imagesavealpha($resized, true);
            imagecopyresampled($resized, $image, 0, 0, 0, 0, $width, $height, $sourceWidth, $sourceHeight);

            if (! imagewebp($resized, $target, $quality)) {
                imagedestroy($resized);
                $this->warn("Could not write: {$target}");
                continue;
            }

            $this->line(sprintf('%s -> %s', $relative, basename($target)));
            $generated++;
            imagedestroy($resized);
        }

        imagedestroy($image);
    }

    $this->info("Generated {$generated} responsive WebP file(s); skipped {$skipped} existing file(s).");
    return 0;
});

Artisan::command('media:generate-webp-all
    {--path=storage/app/public : Directory to scan}
    {--min-kb=100 : Only convert files at or above this size}
    {--quality=78 : WebP quality from 0 to 100}', function () {
    if (! function_exists('imagewebp')) {
        $this->error('PHP GD WebP support is not available (imagewebp missing).');
        return 1;
    }

    $directory = $this->option('path');
    $root = is_dir($directory)
        ? $directory
        : (str_starts_with($directory, 'storage/app/public/')
            ? base_path($directory)
            : storage_path('app/public/' . ltrim($directory, '/')));

    if (! is_dir($root)) {
        $this->error("Directory not found: {$root}");
        return 1;
    }

    $minBytes = max(0, (int) $this->option('min-kb')) * 1024;
    $quality = min(100, max(0, (int) $this->option('quality')));
    $generated = 0;
    $skipped = 0;

    foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS)) as $source) {
        if (! $source->isFile() || $source->getSize() < $minBytes) {
            continue;
        }

        $extension = strtolower($source->getExtension());
        $loader = match ($extension) {
            'jpg', 'jpeg' => 'imagecreatefromjpeg',
            'png' => 'imagecreatefrompng',
            default => null,
        };

        if (! $loader || ! function_exists($loader)) {
            continue;
        }

        $target = preg_replace('/\\.[^.]+$/', '.webp', $source->getPathname());
        if (! $target) {
            continue;
        }

        if (is_file($target) && filemtime($target) >= filemtime($source->getPathname())) {
            $skipped++;
            continue;
        }

        $image = @$loader($source->getPathname());
        if (! $image) {
            $this->warn("Could not read: {$source->getPathname()}");
            continue;
        }

        imagepalettetotruecolor($image);
        imagealphablending($image, true);
        imagesavealpha($image, true);

        if (! imagewebp($image, $target, $quality)) {
            imagedestroy($image);
            $this->warn("Could not write: {$target}");
            continue;
        }

        $before = $source->getSize();
        $after = filesize($target) ?: 0;
        $saving = $before > 0 ? round((1 - ($after / $before)) * 100, 1) : 0;
        $relative = ltrim(str_replace(base_path(), '', $source->getPathname()), '/');
        $this->line(sprintf('%s -> %s KB (%s%% smaller)', $relative, round($after / 1024, 1), $saving));
        $generated++;
        imagedestroy($image);
    }

    $this->info("Generated {$generated} WebP file(s); skipped {$skipped} up-to-date file(s).");
    return 0;
});
