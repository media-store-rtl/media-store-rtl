<script setup>
import Seo from '@/Components/Seo.vue';
import { Link, usePage } from '@inertiajs/vue3';
import swal from 'sweetalert2';
import { computed, ref,onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import Footer from './Footer2.vue';
import Header from './Header2.vue';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    canLogin: Boolean,menu: Object,canRegister: Boolean,laravelVersion: String,phpVersion: String,auth: Object,
    results: Object,time: String,discounts: Object,coupon_count: Number,companies: Object,menus: Object,
    users_count: Number,querystring: String,products_count: Number,comments_count: Number,tarahis_count: Number,
    alert: Object,orders: Object,resultsNew: Object,usersOrders: Object,favorites:Object,topRated:Object,
    cart:Object,namads:Object,socials:Object,
});


const validate = (text) => {
    swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', swal.stopTimer);
            toast.addEventListener('mouseleave', swal.resumeTimer);
        },
    }).fire({
        title: text,
        icon: 'error',
    });
};


const discounts = ref([]);
if (props.discounts) {
    props.discounts.forEach((discount) => {
        discounts.value.push(discount);
    });
}
const Quickview = ref(null);

// فقط در محیط مرورگر
const getPageUrl = (baseUrl, page) => {
    if (typeof window !== 'undefined') {
        let queryString = window.location.search;

        // حذف پارامتر page از URL قبلی
        queryString = queryString.replace(/(\?|&)page=\d+/, '');

        // ساخت URL جدید با پارامتر page جدید
        let newUrl = `${baseUrl}?page=${page}${queryString ? '&' + queryString.substring(1) : ''}#result`;
        return newUrl;
    }
    return `${baseUrl}?page=${page}#result`; // در محیط سرور فقط این URL بدون query string
};



const showMore = ref(false)

const loadDeferredHeroBackgrounds = () => {
  document.querySelectorAll('[data-deferred-bg]').forEach((element) => {
    const url = element.getAttribute('data-deferred-bg')
    if (url && !element.style.backgroundImage) {
      element.style.backgroundImage = `url("${url}")`
    }
    element.removeAttribute('data-deferred-bg')
  })
}

onMounted(() => {
  const url = new URL(window.location.href)
  // اگه category توی کوئری باشه (مثلاً ?category=5) منو باز بشه
  showMore.value = url.searchParams.has('category')

  const hero = document.querySelector('.home-slider')
  if (!hero) return

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadDeferredHeroBackgrounds, { timeout: 1800 })
  } else {
    window.setTimeout(loadDeferredHeroBackgrounds, 1200)
  }

  hero.addEventListener('pointerdown', loadDeferredHeroBackgrounds, { once: true })
})

function toggleShowMore(event) {
  event.preventDefault() // اینجا جلوی رفرش صفحه رو می‌گیریم

  showMore.value = !showMore.value

  const url = new URL(window.location.href)
  if (showMore.value) {
    url.searchParams.set('category', 'open') // مقدار فقط واسه باز شدن دستی
  } else {
    url.searchParams.delete('category')
  }
  window.history.replaceState({}, '', url)
}
const titleSeo = 'قالب‌های آماده سایت – سریع، اقتصادی و قابل اطمینان'
const descriptionSeo ='اگر دنبال راهی سریع‌تر و مقرون‌به‌صرفه برای راه‌اندازی سایت هستید، قالب‌های آماده یک گزینه عالی هستن.ما مجموعه‌ای از قالب‌های حرفه‌ای، ریسپانسیو و بهینه‌شده برای سئو آماده کردیم که می‌تونید با کمترین هزینه تهیه کنید و در کوتاه‌ترین زمان سایتتون رو راه بندازید.'
</script>
<template>
    <Seo :title="titleSeo" :description="descriptionSeo" :noIndex="false" />
    <Header :companies="props.companies" :results="props.results"  :menus="props.menus" :cart="props.cart" :menu="props.menu" />

    <main class="main">

        <div class="mb-30 container">
            <div class="row flex-row-reverse">
                <div class="col-lg-4-5">
                    <section class="home-slider position-relative mb-30">
                        <div class="home-slide-cover mt-30">
                            <div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                                <div class="single-hero-slider single-animation-wrap" style="background-image: url(assets/imgs/slider/slider-3.webp)">
                                    <div class="slider-content">
                                        <h1 class="display-2 mb-40">
                                            تخفیفات شگفت انگیز
                                            <br />
                                              را از دست ندهید

                                        </h1>
                                        <!-- <p class="mb-65">برای خبرنامه روزانه ثبت نام کنید</p>
                                        <form class="form-subcriber d-flex">
                                            <input type="email" placeholder="آدرس ایمیل شما" />
                                            <button class="btn" type="submit">اشتراک</button>
                                        </form> -->
                                    </div>
                                </div>
                                <div class="single-hero-slider single-animation-wrap" data-deferred-bg="/assets/imgs/slider/slider-4.webp">
                                    <div class="slider-content">
                                        <h1 class="display-2 mb-40">
                                             از بن های تخفیف
                                            <br />
                                         روزانه استفاده نمایید
                                        </h1>
                                        <!-- <p class="mb-65">برای خبرنامه روزانه ثبت نام کنید</p>
                                        <form class="form-subcriber d-flex">
                                            <input type="email" placeholder="آدرس ایمیل شما" />
                                            <button class="btn" type="submit">اشتراک</button>
                                        </form> -->
                                    </div>
                                </div>
                            </div>
                            <div class="slider-arrow hero-slider-1-arrow"></div>
                        </div>
                    </section>
                    <!--End hero-->
                    <body id="tinymce" class="mce-content-body " data-id="tiny-vue_23772426321754249352926" aria-label="Rich Text Area" contenteditable="true" spellcheck="false">
                        <p data-start="293" data-end="347"><strong data-start="293" data-end="347">قالب‌های آماده سایت – سریع، اقتصادی و قابل اطمینان</strong></p>
                        <p data-start="349" data-end="612">اگر دنبال راهی سریع‌تر و مقرون‌به‌صرفه برای راه‌اندازی سایت هستید، قالب‌های آماده یک گزینه عالی هستن.<br data-start="450" data-end="453">ما مجموعه‌ای از قالب‌های حرفه‌ای، ریسپانسیو و بهینه‌شده برای سئو آماده کردیم که می‌تونید با کمترین هزینه تهیه کنید و در کوتاه‌ترین زمان سایتتون رو راه بندازید.</p>
                        <p data-start="614" data-end="638">📦 قالب‌ها مناسب برای:</p>
                        <ul data-start="639" data-end="721">
                            <li data-start="639" data-end="653"><p data-start="641" data-end="653">فروشگاه‌ها</p></li>
                            <li data-start="654" data-end="675"><p data-start="656" data-end="675">وب‌سایت‌های شرکتی</p></li>
                            <li data-start="676" data-end="689"><p data-start="678" data-end="689">نمونه‌کار</p></li>
                            <li data-start="690" data-end="705"><p data-start="692" data-end="705">بلاگ و مجله</p></li>
                            <li data-start="706" data-end="721"><p data-start="708" data-end="721">خدماتی و شخصی</p></li>
                            <li data-start="706" data-end="721">و.......</li>
                        </ul>
                        <p data-start="830" data-end="956">
                            <strong data-start="830" data-end="956">فرقی نمی‌کنه که طراحی اختصاصی سفارش بدید یا از قالب آماده استفاده کنید، هدف ما اینه که شما زودتر به یه سایت حرفه‌ای برسید.</strong>
                        </p>
                    </body>
                    <section class="product-tabs section-padding position-relative"  v-if="props.results && props.results.total > 0">
                        <div class="section-title style-2">
                            <h3>محصولات</h3>
                            <ul class="nav nav-tabs links" id="myTab" role="tablist">
                                <li class="nav-item" >
                                    <Link
                                        class="nav-link " :class="props.querystring == 0 ? 'active' : ' '"
                                        :href="route('website-templates.index','q')+'all'+'#result'"
                                    >
                                       کل
                                    </Link>
                                </li>
                                <li class="nav-item" >
                                    <Link
                                        class="nav-link" :class="props.querystring == 'sort=DESC'? 'active' : ' '"

                                        :href="route('website-templates.index','sort')+'DESC'+'#result'"
                                    >
                                       جدیدترین
                                    </Link>
                                </li>
                                <li class="nav-item" >
                                    <Link
                                        class="nav-link" :class="props.querystring == 'sort=Bestselling'? 'active' : ' '"
                                        :href="route('website-templates.index','sort')+'Bestselling'+'#result'"
                                    >
                                        پرفرش ترین
                                    </Link>
                                </li>
                                <li class="nav-item" >
                                    <Link
                                        class="nav-link" :class="props.querystring == 'sort=Discount'? 'active' : ' '"
                                        :href="route('website-templates.index','sort')+'Discount'+'#result'"

                                    >
                                       شگفت انگیز
                                    </Link>
                                </li>
                                <li class="nav-item" >
                                    <Link
                                        class="nav-link" :class="props.querystring == 'sort=expensive'? 'active' : ' '"
                                        :href="route('website-templates.index','sort')+'expensive'+'#result'"
                                    >
                                        گران ترین
                                    </Link>
                                </li>
                                <li class="nav-item" >
                                    <Link
                                        class="nav-link" :class="props.querystring == 'sort=cheapest'? 'active' : ' '"
                                        :href="route('website-templates.index','sort')+'cheapest'+'#result'"
                                    >
                                        ارزان ترین
                                    </Link>
                                </li>
                                <li class="nav-item" >
                                    <Link
                                        class="nav-link" :class="props.querystring == 'updated=updateDate'? 'active' : ' '"
                                        :href="route('website-templates.index','updated')+'updateDate'+'#result'"
                                    >
                                        بروزترین
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <!--End nav-tabs-->
                        <div class="tab-content" id="myTabContent" v-if="props.results && props.results.total > 0">
                            <div class="tab-pane fade show active" >
                                <div class="row product-grid-4">
                                    <div class="col-lg-1-4 col-md-4 col-12 col-sm-6" v-for="(result, index) in props.results.data" :key="index">
                                        <div class="product-cart-wrap mb-30">
                                            <div class="product-img-action-wrap">
                                                <div class="product-img product-img-zoom">
                                                    <Link
                                                        :href="route('website-templates.show', [result.slug])"
                                                        v-if="(result.image && result.image.status == 4) || 5"
                                                    >
                                                        <img
                                                            class="default-img"
                                                            loading="lazy" decoding="async" :src="$page.props.ziggy.url + '/storage/' + result.image.url"
                                                            alt=""
                                                        />
                                                        <img class="hover-img" loading="lazy" decoding="async" :src="$page.props.ziggy.url + '/storage/' + result.image.url" width="300" height="300" alt="" />
                                                    </Link>
                                                    <Link :href="route('website-templates.show', [result.slug])" v-else-if="props.companies">
                                                        <img
                                                            class="default-img"
                                                            loading="lazy" decoding="async" :src="$page.props.ziggy.url + '/storage/' + props.companies.image.url"
                                                            alt=""
                                                        />
                                                        <img
                                                            class="hover-img"
                                                            :src="$page.props.ziggy.url + '/storage/' + props.companies.image.url"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <!-- <div class="product-action-1">
                                                        <a aria-label="Add To Wishlist" class="action-btn" href="shop-wishlist.html"><i class="fi-rs-heart"></i></a>
                                                        <a aria-label="Compare" class="action-btn" href="shop-compare.html"><i class="fi-rs-shuffle"></i></a>
                                                        <a aria-label="Quick view" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i class="fi-rs-eye"></i></a>
                                                    </div> -->
                                                <div class="product-badges product-badges-position product-badges-mrg" v-if="result.discount">
                                                    <span class="hot">{{ result.discount.percent }}% تخفیف </span>
                                                </div>
                                            </div>
                                            <div class="product-content-wrap">
                                                <div class="product-category">
                                                    <template v-for="(menu, index) in result.menus" :key="index">
                                                        <template v-for="(section, index) in menu.sections" :key="section.id">
                                                            <a href="" v-if="section.name == 'products'">{{ menu.name + ' ' }}</a>
                                                        </template>
                                                    </template>
                                                </div>
                                                <h2>
                                                    <Link :href="route('website-templates.show', [result.slug])">{{ result.name }}</Link>
                                                </h2>
                                                <div>
                                                    <span class="font-small text-muted"
                                                        > {{ result.tag }} </span
                                                    >
                                                </div>
                                                <div class="product-rate-cover">
                                                    <div class="product-rate d-inline-block">
                                                        
                                                        <div class="product-rating" v-if="result.RatingsAvgRating" :style="'width:' + result.RatingsAvgRating*20 + '%' "></div>
                                                    </div>
                                                    <span class="font-small ml-5 text-muted" v-if="result.RatingsAvgRating" > ({{ result.RatingsAvgRating }})</span>
                                                    <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                                </div>
                                                <div>
                                                    <span class="font-small text-muted"
                                                        >فروشنده
                                                        <Link :href="route('guest-profile.show', result.user.user_name)"
                                                            >({{ result.user.name_show }})</Link
                                                        ></span
                                                    >
                                                </div>
                                                <div class="product-card-bottom">
                                                    <div class="product-price" v-if="result.discount">
                                                        <span class="d-flex flex-column">
                                                            <span>{{
                                                                Number(result.price - (result.price * result.discount.percent) / 100).toLocaleString(
                                                                    'fa-IR',
                                                                )
                                                            }}</span>
                                                            <span class="old-price">{{ Number(result.price).toLocaleString('fa-IR') }}</span>
                                                        </span>
                                                    </div>
                                                    <div class="product-price" v-else>
                                                        <span>{{ Number(result.price).toLocaleString('fa-IR') }}</span>
                                                        <!-- <span class="old-price">$32.8</span> -->
                                                    </div>
                                                    <div class="add-cart">
                                                        <Link class="add" :href="route('website-templates.show', [result.slug])"
                                                            ><i class="mr-5"></i>نمایش
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pagination-area mb-20 mt-20" v-if="props.results.total > 9">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-start">
                                                <!-- فلش قبلی -->
                                                <li
                                                    class="page-item"
                                                    :class="{ disabled: !props.results.prev_page_url || props.results.current_page === 1 }"
                                                >
                                                    <Link
                                                        class="page-link"
                                                        :href="
                                                            props.results.prev_page_url && props.results.current_page > 1
                                                                ? props.results.prev_page_url
                                                                : '#'
                                                        "
                                                        preserve-scroll
                                                        preserve-state
                                                        aria-disabled="props.results.current_page === 1"
                                                    >
                                                        <i class="fi-rs-arrow-small-right"></i>
                                                    </Link>
                                                </li>

                                                <!-- صفحه اول -->
                                                <li class="page-item" :class="{ active: props.results.current_page === 1 }">
                                                    <Link
                                                        class="page-link"
                                                        :href="getPageUrl(props.results.first_page_url, 1)"
                                                        preserve-scroll
                                                        preserve-state
                                                        >1</Link
                                                    >
                                                </li>

                                                <!-- ... قبل از currentPage -2 -->
                                                <li class="page-item" v-if="props.results.current_page > 4">
                                                    <span class="page-link dot">...</span>
                                                </li>

                                                <!-- صفحات وسط (currentPage -2 تا currentPage +2) -->
                                                <template v-for="i in 5" :key="i">
                                                    <li
                                                        class="page-item"
                                                        v-if="
                                                            props.results.current_page - 3 + i > 1 &&
                                                            props.results.current_page - 3 + i < props.results.last_page
                                                        "
                                                        :class="{ active: props.results.current_page === props.results.current_page - 3 + i }"
                                                    >
                                                        <Link
                                                            class="page-link"
                                                            :href="getPageUrl(props.results.path, props.results.current_page - 3 + i)"
                                                            preserve-scroll
                                                            preserve-state
                                                        >
                                                            {{ props.results.current_page - 3 + i }}
                                                        </Link>
                                                    </li>
                                                </template>

                                                <!-- ... بعد از currentPage +2 -->
                                                <li class="page-item" v-if="props.results.current_page < props.results.last_page - 3">
                                                    <span class="page-link dot">...</span>
                                                </li>

                                                <!-- صفحه آخر -->
                                                <li
                                                    class="page-item"
                                                    v-if="props.results.last_page !== 1"
                                                    :class="{ active: props.results.current_page === props.results.last_page }"
                                                >
                                                    <Link
                                                        class="page-link"
                                                        :href="getPageUrl(props.results.path, props.results.last_page)"
                                                        preserve-scroll
                                                        preserve-state
                                                    >
                                                        {{ props.results.last_page }}
                                                    </Link>
                                                </li>

                                                <!-- فلش بعدی -->
                                                <li
                                                    class="page-item"
                                                    :class="{
                                                        disabled:
                                                            !props.results.next_page_url || props.results.current_page === props.results.last_page,
                                                    }"
                                                >
                                                    <Link
                                                        class="page-link"
                                                        :href="
                                                            props.results.next_page_url && props.results.current_page < props.results.last_page
                                                                ? props.results.next_page_url
                                                                : '#'
                                                        "
                                                        preserve-scroll
                                                        preserve-state
                                                        aria-disabled="props.results.current_page === props.results.last_page"
                                                    >
                                                        <i class="fi-rs-arrow-small-left"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <!--end product card-->
                                </div>
                                <!--End product-grid-4-->
                            </div>
                            <!--En tab one-->
                        </div>
                        <!--End tab-content-->
                    </section>
                    <!--Products Tabs-->
                    <section class="section-padding pb-5" v-if="discounts.length > 4">
                        <div class="section-title">
                            <h3 class="">محصولات شگفت انگیز</h3>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <div class="tab-content" id="myTabContent-1">
                                        <div class="tab-pane fade show active" id="tab-one-1" role="tabpanel" aria-labelledby="tab-one-1">
                                            <div class="carausel-4-columns-cover arrow-center position-relative">
                                                <div
                                                    class="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                                    id="carausel-4-columns-arrows"
                                                ></div>
                                                <div class="carausel-4-columns carausel-arrow-center" id="carausel-4-columns">
                                                    <div class="product-cart-wrap " v-for="result in discounts" :key="result.id">
                                                        <div class="product-img-action-wrap">
                                                            <div class="product-img">
                                                                <Link :href="route('website-templates.show', [result.discountable.slug])">
                                                                    <img
                                                                        class="h-250"
                                                                        v-if="
                                                                            (result.discountable.image && result.discountable.image.status == 4) ||
                                                                            result.discountable.image.status == 5
                                                                        "
                                                                        :src="$page.props.ziggy.url + '/storage/' + result.discountable.image.url"
                                                                        :alt="result.discountable.name"
                                                                    />
                                                                    <img v-else src="/storage/images/logo.jpg" width="300" height="250" :alt="props.companies.name_show" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div class="product-content-wrap">
                                                            <div class="deals-countdown-wrap">
                                                                <div class="deals-countdown" :data-countdown="result.expired"></div>
                                                            </div>
                                                            <div class="deals-content">
                                                                <h2>
                                                                    <Link :href="route('website-templates.show', [result.discountable.slug])">{{
                                                                        result.discountable.name
                                                                    }}</Link>
                                                                </h2>
                                                                <div class="product-rate-cover">
                                                                    <div class="product-rate d-inline-block">
                                                                        <div
                                                                            class="product-rating"
                                                                            v-if="result.discountable.ratings_avg_rating"
                                                                            :style="'width:' + result.discountable.ratings_avg_rating * 20 + '%'"
                                                                        ></div>
                                                                    </div>

                                                                    <span
                                                                        class="font-small ml-5 text-muted"
                                                                        v-if="result.discountable.ratings_avg_rating"
                                                                    >
                                                                        ({{ result.discountable.ratings_avg_rating }})</span
                                                                    >
                                                                    <span class="font-small ml-5 text-muted" v-else> (0.0000)</span>
                                                                </div>
                                                                <div>
                                                                    <span class="font-small text-muted"
                                                                        >فروشنده
                                                                        <Link :href="route('guest-profile.show', result.discountable.user.user_name)"
                                                                            >({{ result.discountable.user.name_show }})</Link
                                                                        ></span
                                                                    >
                                                                </div>
                                                                <div class="product-card-bottom">
                                                                    <div class="product-price">
                                                                        <span class="d-flex flex-column">
                                                                            <span>{{
                                                                                (
                                                                                    result.discountable.price -
                                                                                    (result.discountable.price * result.percent) / 100
                                                                                ).toLocaleString('fa-IR')
                                                                            }}</span>
                                                                            <span class="old-price">{{
                                                                                result.discountable.price.toLocaleString('fa-IR')
                                                                            }}</span>
                                                                        </span>
                                                                    </div>
                                                                    <div class="add-cart">
                                                                        <Link
                                                                            class="add"
                                                                            :href="route('website-templates.show', [result.discountable.slug])"
                                                                            ><i class="fi-rs-shopping-cart mr-5"></i>نمایش
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!--End Deals-->

                </div>
                <div class="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                    <div class="sidebar-widget widget-category-2 mb-30">
                        <h5 class="section-title style-1 mb-30">دسته بندی محصولات</h5>
                        <ul v-for="(menu, index) in props.menus" :key="index">
                            <template v-for="(men, index) in menu.children" :key="index">
                                <li v-if="men.products_count > 0">
                                    <Link :href="route('website-templates.index', 'type') + men.id + '#result'">
                                        <!-- <img src="assets/imgs/theme/icons/category-1.svg" alt="" /> -->
                                        {{ menu.name + ' ' + men.name }}
                                    </Link>
                                    <span class="count">{{ men.products_count }}</span>
                                </li>
                            </template>

                                <a
                                    href="javascript:void(0);"
                                    class="text-primary text-decoration-none d-inline-flex align-items-center mb-2"
                                    @click="toggleShowMore($event)"
                                >
                                    <i :class="showMore ? 'fas fa-times me-1' : 'fas fa-folder-open me-1'"></i>
                                    <span v-if="!showMore">بیشتر...</span>
                                    <span v-else>کمتر</span>
                                </a>
                                <template v-for="(men, index) in menu.children" :key="index">
                                <div v-show="showMore" class="list-unstyled">
                                    <template v-for="(me, index) in men.children" :key="index">
                                    <li v-if="me.products_count > 0">
                                        <Link :href="route('website-templates.index', 'category') + me.id + '#result'">
                                        {{ men.name + ' ' +me.name }}
                                        </Link>
                                        <span class="count">{{ me.products_count }}</span>
                                    </li>
                                    </template>
                                </div>
                            </template>
                        </ul>
                    </div>
                    <!-- Product sidebar Widget -->
                </div>
            </div>
        </div>

        <!--End category slider-->
        <section class="section-padding mb-30">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0" v-if="props.orders.length > 0">
                        <h4 class="section-title style-1 mb-30 animated animated">پرفروش ترین</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up" v-for="(result,index) in props.orders " :key="index">
                                <figure class="col-md-4 mb-0">
                                    <Link :href="route('website-templates.show', [result.product.slug])"
                                    v-if="(result.image && result.image.status == 4) || 5" >
                                        <img loading="lazy" decoding="async" :src="$page.props.ziggy.url + '/storage/' + result.product.image.url" width="100" height="100" alt="" />
                                    </Link>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <Link :href="route('website-templates.show', [result.product.slug])" >{{ result.product.name }}</Link>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" :style="'width:' + result.product.ratings_avg_rating * 20 + '%'"></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted" v-if=" result.product.ratings_avg_rating">({{ result.product.ratings_avg_rating }})</span>
                                        <span class="font-small ml-5 text-muted" v-else>(0.0000)</span>
                                    </div>
                                    <div class="product-price" v-if="result.product.discount">
                                        <span class="d-flex flex-column">
                                            <span>{{(result.product.price -(result.product.price * result.product.discount.percent) / 100).toLocaleString('fa-IR')}}</span>
                                            <span class="old-price">{{ Number(result.product.price).toLocaleString('fa-IR')}}</span>
                                        </span>
                                    </div>
                                    <div class="product-price" v-else >
                                        <span>{{ Number(result.product.price).toLocaleString('fa-IR')}}</span>
                                        <span class="old-price"></span>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-md-0" v-if="props.favorites.length > 0">
                        <h4 class="section-title style-1 mb-30 animated animated">پرطرفدارترین</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up" v-for="result,index in props.favorites" :key="index">
                                <figure class="col-md-4 mb-0 ">
                                    <Link :href="route('website-templates.show', [result.favoritable.slug])"><img loading="lazy" decoding="async" :src="$page.props.ziggy.url + '/storage/' + result.favoritable.image.url" width="100" height="100" alt="" /></Link>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <Link :href="route('website-templates.show', [result.favoritable.slug])">{{ result.favoritable.name }}</Link>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" :style="'width:' + result.favoritable.ratings_avg_rating * 20 + '%'"></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted" v-if="result.favoritable.ratings_avg_rating"> ({{ result.favoritable.ratings_avg_rating }})</span>
                                        <span class="font-small ml-5 text-muted" v-else > (0.0000)</span>
                                    </div>
                                    <div class="product-price" v-if="result.favoritable.discount">
                                        <span class="d-flex flex-column">
                                            <span>{{(result.favoritable.price -(result.favoritable.price * result.favoritable.discount.percent) / 100).toLocaleString('fa-IR')}}</span>
                                            <span class="old-price">{{ Number(result.favoritable.price).toLocaleString('fa-IR')}}</span>
                                        </span>
                                    </div>
                                    <div class="product-price" v-else >
                                        <span>{{ Number(result.favoritable.price).toLocaleString('fa-IR')}}</span>
                                        <span class="old-price"></span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block" v-if="props.resultsNew.length">
                        <h4 class="section-title style-1 mb-30 animated animated">جدیدترین</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up"  v-for="(result, index) in props.resultsNew" :key="index">
                                <figure class="col-md-4 mb-0">
                                    <Link :href="route('website-templates.show', [result.slug])">
                                        <img loading="lazy" decoding="async" :src="$page.props.ziggy.url + '/storage/' + result.image.url" width="100" height="100" alt="" />
                                    </Link>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <Link :href="route('website-templates.show', [result.slug])">{{ result.name }}</Link>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" :style="'width:' + result.ratings_avg_rating * 20 + '%'"></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating"> ({{ result.ratings_avg_rating }})</span>
                                        <span class="font-small ml-5 text-muted" v-else> (0.0000)</span>
                                    </div>
                                    <div class="product-price" v-if="result.discount">
                                        <span class="d-flex flex-column">
                                            <span>{{(result.price -(result.price * result.discount.percent) / 100).toLocaleString('fa-IR')}}</span>
                                            <span class="old-price">{{ Number(result.price).toLocaleString('fa-IR')}}</span>
                                        </span>
                                    </div>
                                    <div class="product-price" v-else >
                                        <span>{{ Number(result.price).toLocaleString('fa-IR')}}</span>
                                        <span class="old-price"></span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block" v-if="props.topRated.length > 0">
                        <h4 class="section-title style-1 mb-30 animated animated">رتبه برتر</h4>
                        <div class="product-list-small animated animated">
                            <article class="row align-items-center hover-up" v-for="result,index in props.topRated" :key="index">
                                <figure class="col-md-4 mb-0">
                                    <Link :href="route('website-templates.show', [result.slug])">
                                        <img loading="lazy" decoding="async" :src="$page.props.ziggy.url + '/storage/' + result.image.url" width="100" height="100" alt="" />
                                    </Link>
                                </figure>
                                <div class="col-md-8 mb-0">
                                    <h6>
                                        <Link :href="route('website-templates.show', [result.slug])">{{ result.name }}</Link>
                                    </h6>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            <div class="product-rating" :style="'width:' + result.avg_rating * 20 + '%'"></div>
                                        </div>
                                        <span class="font-small ml-5 text-muted" v-if="result.avg_rating"> ({{ result.avg_rating }})</span>
                                        <span class="font-small ml-5 text-muted" v-else> (0.0000)</span>
                                    </div>
                                    <div class="product-price" v-if="result.discount">
                                        <span class="d-flex flex-column">
                                            <span>{{(result.price -(result.price * result.discount.percent) / 100).toLocaleString('fa-IR')}}</span>
                                            <span class="old-price">{{Number(result.price).toLocaleString('fa-IR')}}</span>
                                        </span>
                                    </div>
                                    <div class="product-price" v-else >
                                        <span>{{Number(result.price).toLocaleString('fa-IR')}}</span>
                                        <span class="old-price"></span>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End 4 columns-->
    </main>
    <Footer :companies="props.companies" :socials="props.socials" :time="props.time" :menus="props.menus" :path="props.path" :namads="props.namads" />
</template>
<style>
.carousel__item {
    min-height: 200px;
    width: 100%;

    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
.no-animation__card {
    font-size: 1rem !important;
}
</style>
