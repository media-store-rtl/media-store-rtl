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
        <link rel="stylesheet" href="{{ asset('assets/css/vendors/uicons-regular-straight.css') }}">
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
        @inertia
    </body>
</html>
