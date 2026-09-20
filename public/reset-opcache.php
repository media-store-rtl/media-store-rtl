<?php
if (function_exists('opcache_reset')) {
    opcache_reset();
    echo "OPcache ریست شد!";
} else {
    echo "OPcache فعال نیست یا دسترسی نداری.";
}
