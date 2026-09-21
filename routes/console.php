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
    {--json : Output machine-readable JSON}', function () {
    $root = base_path($this->option('path'));
    $minBytes = max(0, (int) $this->option('min-kb')) * 1024;
    $limit = max(1, (int) $this->option('limit'));

    if (! is_dir($root)) {
        $this->error("Image directory not found: {$root}");
        return 1;
    }

    $allowed = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'];
    $rows = [];

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
        ['File', 'Format', 'Width', 'Height', 'KB', 'MB'],
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
