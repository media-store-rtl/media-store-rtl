<script setup>
import { ref,onMounted,onBeforeUnmount} from 'vue';
import { Link, useForm } from '@inertiajs/vue3';


const props = defineProps({products:Object,companies:Object});

const form = useForm({
    id: null,
});
const style = ref('desktop');
const submitCart =(id) => {
    form.id = id
    form.post(route('cart.store'))
}



onMounted(() => {
  const saveHandler = (e) => {
    
    // Ctrl+S یا Cmd+S
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
      e.preventDefault(); // جلوگیری از Save Page As

      // ساخت محتوای HTML برای دانلود
      const content = `
        <!DOCTYPE html>
        <html lang="fa">
        <head>
          <meta charset="UTF-8">
          <title>فایل سفارشی</title>
        </head>
        <body>
         <h1> کاربرگرامی لطفا قالب را خریداری نمایید.</h1>
        </body>
        </html>
      `;

      const blob = new Blob([content], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "download-page.html"; // اسم فایل
      a.click();

      URL.revokeObjectURL(url);
    }
  };
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener("keydown", saveHandler);

  // پاکسازی هنگام خروج از کامپوننت
  onBeforeUnmount(() => {
    document.removeEventListener("keydown", saveHandler);
  });
});
</script>
<template v-cloak>
    <head>
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/bootstrap.min.css'" type="text/css" />
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/magnific-popup.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/themify-icons.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/animate.min.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/jquery.mb.YTPlayer.min.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/owl.carousel.min.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/owl.theme.default.min.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/style.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/style-rtl.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/responsive.css'">
        <link rel="stylesheet" :href="$page.props.ziggy.url+'/css/mohi.css'">
    </head>
    <section class="hero-section " style="background: url('../img/hero-bg-shape-2.png')no-repeat center center / cover">
    <header class="header">
        <nav class="navbar navbar-expand-lg fixed-top custom-nav white-bg">
            <div class="container">
                <Link class="navbar-brand" :href="route('index')" v-if="props.companies">
                    <img v-if="props.companies.image" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="70" height="40" :alt="props.companies.name_show" class="">
                </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="ti-menu"></span>
                    </button>
                <div v-if="$page.props.auth.user" class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                             <Link class="nav-link page-scroll"  :href="route('form.show',[props.products.slug])">خرید و دانلود</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" id="navbarBlogPage"
                            class="nav-link page-scroll dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                                ریسپانسیو
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarBlogPage">
                                <a @click.prevent="style = 'desktop'" class="dropdown-item">
                                    <img src="https://img.icons8.com/material/24/null/monitor--v1.png" />
                                </a>
                                <a @click.prevent="style = 'tablet'" class="dropdown-item">
                                    <img src="https://img.icons8.com/material/24/null/windows8-tablet--v1.png" />
                                </a>
                                <a @click.prevent="style = 'mobile'" class="dropdown-item">
                                    <img src="https://img.icons8.com/material/24/null/iphone.png" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                    <div v-else class="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                           <Link class="nav-link page-scroll" :href="route('index')">خرید و دانلود</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
        <div class="preview " :class="[style]">
            <iframe   :src="props.products.demo_link"> </iframe>
        </div>
        </section>
</template>
<style>
[v-cloak] {
  display: none;
}
</style>
