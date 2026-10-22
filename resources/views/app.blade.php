<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl" class="rtl" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="google-site-verification" content="4YgwNE5vkPYKck1JCCpo8sgmR7_F6SKHCNTQvz8wjgI" />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="{{ asset('storage/images/logo-2.png') }}" type="image/png">

        {{-- Performance: discover critical dependencies early and avoid CSS @import waterfalls. --}}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net">

        <link rel="stylesheet" href="{{ asset('assets/css/vendors/bootstrap.rtl.min.css') }}">
        {{-- Icons are non-critical for first paint; load their stylesheet without blocking the initial render. --}}
        <link rel="preload" as="style" href="{{ asset('assets/css/vendors/uicons-regular-straight.css') }}" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="{{ asset('assets/css/vendors/uicons-regular-straight.css') }}"></noscript>
        <link rel="preload" as="style" href="{{ asset('assets/css/plugins/slick.css') }}" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="{{ asset('assets/css/plugins/slick.css') }}"></noscript>
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">
        <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"></noscript>
        <link rel="stylesheet" href="{{ asset('assets/css/mohi.css') }}">

        @if (request()->is('/'))
            <link rel="preload" as="image" href="{{ asset('assets/imgs/slider/slider-1.webp') }}" fetchpriority="high">
        @elseif (request()->is('website-templates'))
            <link rel="preload" as="image" href="{{ asset('assets/imgs/slider/slider-3.webp') }}" fetchpriority="high">
        @endif

        <style>
            /* Show useful feedback while the client-side Inertia app boots. */
            #initial-loader {
                position: fixed;
                inset: 0;
                z-index: 99999;
                display: grid;
                place-content: center;
                gap: 12px;
                background: #fff;
                color: #374151;
                text-align: center;
                font: 14px/1.6 system-ui, sans-serif;
                transition: opacity .2s ease;
            }
            #initial-loader .loader-spinner {
                width: 32px;
                height: 32px;
                margin: 0 auto;
                border: 3px solid #e5e7eb;
                border-top-color: #16a34a;
                border-radius: 50%;
                animation: initial-loader-spin .75s linear infinite;
            }
            @keyframes initial-loader-spin {
                to { transform: rotate(360deg); }
            }
            @media (prefers-reduced-motion: reduce) {
                #initial-loader .loader-spinner { animation-duration: 1.8s; }
            }
            /* Ensure regular-straight UI icons render consistently across Inertia pages. */
            i.fi-rs-check::before {
                font-family: uicons-regular-straight !important;
                font-style: normal;
                font-weight: normal !important;
                line-height: 1 !important;
            }
            .product-cart-wrap .product-img-action-wrap .product-img > a {
                aspect-ratio: auto;
            }
            .product-cart-wrap .product-img-action-wrap .product-img > a > img {
                height: auto;
                object-fit: contain;
            }
            /* Keep the second hero slide hidden until Slick initializes. */
            .hero-slider-1:not(.slick-initialized) .single-hero-slider:not(:first-child) {
                display: none !important;
            }
        </style>

        @routes
        @vite(['resources/js/app.ts'])
        @inertiaHead
    </head>
    <body>
        <div id="initial-loader" role="status" aria-live="polite">
            <span class="loader-spinner" aria-hidden="true"></span>
            <span>در حال بارگذاری فروشگاه مدیا…</span>
        </div>
        @inertia
    </body>
</html>