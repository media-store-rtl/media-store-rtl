@php
    use App\Models\User;
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl" class="rtl" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>صفحه پیدا نشد | {{ config('app.name', 'Web2022') }}</title>

    <link rel="icon" href="{{ asset('storage/images/logo-2.png') }}" type="image/png">
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/bootstrap.rtl.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/uicons-regular-straight.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/mohi.css') }}">
    <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"></noscript>

    <style>
        .page-404 {
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
        .page-404 .error-code {
            font-size: clamp(90px, 15vw, 180px);
            line-height: 1;
            font-weight: 800;
            margin-bottom: 20px;
        }
        .page-404 .error-icon {
            width: 96px;
            height: 96px;
            margin: 0 auto 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #f2f3f4;
            font-size: 42px;
        }
    </style>
</head>
<body>
    <div class="body-overlay-1"></div>

    <main class="main page-404">
        <div class="page-content w-100 py-100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                        <div class="error-icon">
                            <i class="fi-rs-search"></i>
                        </div>

                        <div class="error-code">404</div>

                        <h1 class="display-4 mb-30">صفحه پیدا نشد</h1>

                        <p class="font-lg text-grey-700 mb-30">
                            صفحه‌ای که به دنبال آن می‌گردید وجود ندارد یا به‌طور موقت از دسترس خارج شده است.
                        </p>

                        <a class="btn btn-default submit-auto-width font-xs hover-up mt-20" href="{{ url('/') }}">
                            <i class="fi-rs-home mr-5"></i>
                            صفحه اصلی
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
