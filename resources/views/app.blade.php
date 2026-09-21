@php
    use App\Models\User;
@endphp
@include('sweetalert2::index')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl" class="rtl" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="google-site-verification" content="4YgwNE5vkPYKck1JCCpo8sgmR7_F6SKHCNTQvz8wjgI" />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        @if (User::first() && User::first()->image)
            <link rel="shortcut icon" href="{{ asset('storage/images/logo-2.png') }}" type="image/x-icon">
        @endif

        {{-- Storefront CSS: loaded statically to preserve the template cascade/order --}}
        <link rel="stylesheet" href="{{ asset('css/vendors/bootstrap.rtl.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/animate.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/magnific-popup.css') }}">
        <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/owl.theme.default.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/mohi.css') }}">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <link rel="stylesheet" href="{{ asset('css/style-rtl.css') }}">
        <link rel="stylesheet" href="{{ asset('css/responsive.css') }}">
        <link rel="stylesheet" href="{{ asset('css/themify-icons.css') }}">

        @routes
        @vite(['resources/js/app.ts'])
        @inertiaHead
    </head>
    <body class="opacity-0 transition-opacity duration-300">
        @inertia
    </body>
</html>
