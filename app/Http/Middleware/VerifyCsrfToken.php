<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * مسیرهایی که از CSRF محافظت نمی‌شن
     *
     * @var array<int, string>
     */
    protected $except = [
        '/users/verify',
        // اینجا هر مسیری که نیاز داری اضافه کن
    ];
}
