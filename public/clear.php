<?php

// Laravel cache clear
exec('php artisan optimize:clear');

// OPcache clear
if (function_exists('opcache_reset')) {
    opcache_reset();
    echo "✅ Laravel & OPcache cleared!";
} else {
    echo "✅ Laravel cache cleared! ❌ OPcache not enabled.";
}
