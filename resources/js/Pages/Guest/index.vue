<script setup>

import { computed, ref,watch,onMounted } from 'vue';
import Footer from './Footer2.vue';
import Header from './Header2.vue';
import Seo from '@/Components/Seo.vue';
import { useForm, usePage,Link,Head} from '@inertiajs/vue3';
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    auth: Object,discounts: Object,menus: Object,socials: Object,path: String,results:Object,cafes:Object,
    time:String,coupon_count:Number,companies:Object,querystring:String,menu: Object,forms:Object,
    alert: Object,orders:Object,usersOrders:Object,cart:Object,webDesigns:Object,blogs:Object,namads:Object
});


const submitCart = (id) => {
  form.id = id;
  form.model = 'App\\Models\\Product';
  form.post(route('cart.store'));
};
const submitWeb = (id) => {
  form.id = id;
  form.model = 'App\\Models\\WebDesign';
  form.post(route('cart.store'));
};


watch(() => props.alert, (val) => {
  if (val) {
    if (val.title) {
      swal.fire(val.title, val.text, val.icon);
    } else {
      swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', swal.stopTimer);
          toast.addEventListener('mouseleave', swal.resumeTimer);
        }
      }).fire({
        title: val.text,
        icon: val.icon,
      });
    }
  }
});

watch(errors, (newErrors) => {
  const errorMessages = Object.values(newErrors)
    .flat()
    .map(msg => `${msg}<br>`)
    .join('')

  if (errorMessages) {
    swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
      }
    }).fire({
      title: errorMessages,
      icon: 'error',
    })
  }
}, { immediate: true })

const form = useForm({
    menu: null,
    recepiant: null,
    subject: null,
    text: null,
    email: null,
    name: null,
    lasst_name: null,
    id: null,
    type:null,
    model:null,
});


const menus = ref([]);

if (props.menus && props.menus.length > 0) {
    props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
            element.routes.forEach((route) => {
                if (route.name == props.path) {
                    element.sections.forEach((section) => {
                        if (section.name == 'supports') {
                            menus.value.push(element);
                        }
                    });
                }
            });
        }
    });
}



const Quickview = ref(null);
const submitQuickview = (result) =>{
    Quickview.value = result

}

const discounts = ref([]);
if (props.discounts.data) {
    props.discounts.data.forEach(discount => {
        discounts.value.push(discount)
    });

}
// const titleSeo = ''; // عنوانی که در تب مرورگر و نتایج گوگل نمایش داده می شود


// const descriptionSeo = ''; // توضیح کوتاهی که زیر عنوان در نتایج جستجو دیده میشود


//  const keywordsSeo = ''; // کلمات کلیدی مرتبط با صفحه (موتورهای جستجوی جدید کمتر استفاده میکنند)

// const noIndexSeo = true; // دستور به موتور جستجو برای ایندکس شدن یا نشدن صفحه (مثلاً "index, follow" یا "noindex, nofollow")


</script>
<template>
    <Seo :noIndex="false"/>
     <Head title="صفحه اصلی" /> 
    <Header :companies="props.companies" :results="props.results" :Quickview="Quickview" :menus="props.menus" :cart="props.cart" :menu="props.menu"
        @event-submit-quickview="submitQuickview"  @event-submit-cart="submitCart" 
     />
    <!-- <p v-if="typeof window === 'undefined'">✅ SSR رندر شد (سمت سرور)</p>
    <p v-else>👀 این فقط در مرورگر دیده میشه</p> -->
    <!--End header-->
    <main class="main">
        <section class="home-slider position-relative mb-30 homepage-hero">
            <div class="container">
                <div class="home-slide-cover mt-30">
                    <div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                        <div class="single-hero-slider single-animation-wrap" style="background-image: url(assets/imgs/slider/slider-1.png)">
                            <div class="slider-content homepage-hero-content">
                                <span class="homepage-hero-kicker">ویژه طراح‌ها و کسب‌وکارها</span>
                                <h1 class="display-2 mb-25">چیزی که برای رشد کسب‌وکارت نیاز داری، همین‌جاست</h1>
                                <p class="homepage-hero-text">قالب، طرح، فرم و خدمات دیجیتال را با تجربه‌ای سریع‌تر و ساده‌تر پیدا کن.</p>

                            </div>
                        </div>
                        <div class="single-hero-slider single-animation-wrap" style="background-image: url(assets/imgs/slider/slider-2.png)">
                            <div class="slider-content homepage-hero-content">
                                <span class="homepage-hero-kicker">پیشنهادهای تازه</span>
                                <h1 class="display-2 mb-25">فرصت‌های خوب برای شروع یک پروژه حرفه‌ای</h1>
                                <p class="homepage-hero-text">محصولات و خدمات منتخب را ببین و گزینه مناسب پروژه‌ات را سریع‌تر پیدا کن.</p>

                            </div>
                        </div>
                    </div>
                    <div class="slider-arrow hero-slider-1-arrow"></div>
                </div>
            </div>
        </section>
        <!--End hero slider-->       <section class="product-tabs section-padding position-relative" v-if="props.results.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>محصول </h3>
                    <ul class="nav nav-tabs links" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <Link class="show-all" :href="route('website-templates.index','q')+'all' " > نمایش <i class="fi-rs-angle-left"></i> </Link>
                        </li>

                    </ul>
                </div>
                <!--End nav-tabs-->
                <div class="tab-content" id="myTabContent" >
                    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div class="row product-grid-4" v-if="props.results">
                            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6"  v-for="(result ,index) in props.results" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"  >
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('website-templates.show',[result.slug])" v-if="result.image && result.image.status == 4 || 5">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                            </Link>
                                            <Link :href="route('website-templates.show',[result.slug])"  v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                            </Link>
                                        </div>
                                        <!-- <div class="product-action-1">
                                            <a aria-label="واچ لیست" class="action-btn" href="/shop-wishlist"><i class="fi-rs-heart"></i></a>
                                            <a aria-label="مقایسه" class="action-btn" href="/shop-compare"><i class="fi-rs-shuffle"></i></a>
                                            <a @click.prevent="submitQuickview(result)" aria-label="نمایش سریع" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"
                                                ><i class="fi-rs-eye"></i
                                            ></a>
                                        </div> -->
                                        <div class="product-badges product-badges-position product-badges-mrg" v-if="result.discount" >
                                            <span class="hot">{{result.discount.percent}}% تخفیف </span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap" >
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'products'" >{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>

                                        </div>
                                        <h2><Link :href="route('website-templates.show',[result.slug])">{{ result.name }}</Link></h2>
                                        <div>
                                            <span class="font-small text-muted"> {{ result.tag }} </span>
                                        </div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block" >
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%' "></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating" > ({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                        </div>
                                        <div>
                                            <span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span>
                                        </div>
                                        
                                        <div class="product-card-bottom" >
                                            <div class="product-price" v-if="result.discount">
                                                <span>{{ Number(result.price-(result.price*result.discount.percent/100)).toLocaleString("fa-IR")}}</span>
                                                <span class="old-price">{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                            </div>
                                            <div class="product-price" v-else>
                                                <span>{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                                <!-- <span class="old-price">$32.8</span> -->
                                            </div>
                                            <div class="add-cart">
                                                <Link class="add" href="" @click.prevent="submitCart(result.id)" ><i class="fi-rs-shopping-cart mr-5"></i>خرید </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end product card-->
                        </div>
                        <!--End product-grid-4-->
                    </div>
                    <!--En tab one-->
                </div>
                <!--End tab-content-->
            </div>
        </section>
        <section class="product-tabs section-padding position-relative" v-if="props.webDesigns.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>پلن </h3>
                    <ul class="nav nav-tabs links" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <Link class="show-all" :href="route('website-design.index','q')+'all' " > نمایش <i class="fi-rs-angle-left"></i> </Link>
                        </li>

                    </ul>
                </div>
                <!--End nav-tabs-->
                <div class="tab-content" id="myTabContent" >
                    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div class="row product-grid-4" v-if="props.webDesigns">
                            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6"  v-for="(result ,index) in props.webDesigns" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"  >
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('website-design.show',[result.slug])" v-if="result.image && result.image.status == 4 || 5">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                            </Link>
                                            <Link :href="route('website-design.show',[result.slug])"  v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                            </Link>
                                        </div>
                                        <!-- <div class="product-action-1">
                                            <a aria-label="واچ لیست" class="action-btn" href="/shop-wishlist"><i class="fi-rs-heart"></i></a>
                                            <a aria-label="مقایسه" class="action-btn" href="/shop-compare"><i class="fi-rs-shuffle"></i></a>
                                            <a @click.prevent="submitQuickview(result)" aria-label="نمایش سریع" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"
                                                ><i class="fi-rs-eye"></i
                                            ></a>
                                        </div> -->
                                        <div class="product-badges product-badges-position product-badges-mrg" v-if="result.discount" >
                                            <span class="hot">{{result.discount.percent}}% تخفیف </span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap" >
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'web_designs'" >{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>

                                        </div>
                                        <h2><Link :href="route('website-design.show',[result.slug])">{{ result.name }}</Link></h2>
                                        <div>
                                                    <span class="font-small text-muted"
                                                        > {{ result.tag }} </span
                                                    >
                                                </div>
                                                <div>
                                                    <span class="font-small text-muted"
                                                        >حداقل {{ result.rouzekari }} روز کاری</span
                                                    >
                                                </div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block" >
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%' "></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating" > ({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                        </div>
                                        <div>
                                            <span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span>
                                        </div>
                                        <div class="product-card-bottom" >
                                            <div class="product-price" v-if="result.discount">
                                                <span>{{ Number(result.price-(result.price*result.discount.percent/100)).toLocaleString("fa-IR")}}</span>
                                                <span class="old-price">{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                            </div>
                                            <div class="product-price" v-else>
                                                <span>{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                                <!-- <span class="old-price">$32.8</span> -->
                                            </div>
                                            <div class="add-cart">
                                                <Link class="add" href="" @click.prevent="submitWeb(result.id)" ><i class="fi-rs-shopping-cart mr-5"></i>خرید </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end product card-->
                        </div>
                        <!--End product-grid-4-->
                    </div>
                    <!--En tab one-->
                </div>
                <!--End tab-content-->
            </div>
        </section>
        <section class="product-tabs section-padding position-relative" v-if="props.cafes.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>خدمات </h3>
                    <ul class="nav nav-tabs links" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <Link class="show-all" :href="route('cafe-net.index','q')+'all' " > نمایش <i class="fi-rs-angle-left"></i> </Link>
                        </li>

                    </ul>
                </div>
                <!--End nav-tabs-->
                <div class="tab-content" id="myTabContent" >
                    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div class="row product-grid-4" v-if="props.cafes">
                            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6"  v-for="(result ,index) in props.cafes" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"  >
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('cafe-net.show',[result.slug])" v-if="result.image && result.image.status == 4 || 5">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                            </Link>
                                            <Link :href="route('cafe-net.show',[result.slug])"  v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                            </Link>
                                        </div>
                                        <!-- <div class="product-action-1">
                                            <a aria-label="واچ لیست" class="action-btn" href="/shop-wishlist"><i class="fi-rs-heart"></i></a>
                                            <a aria-label="مقایسه" class="action-btn" href="/shop-compare"><i class="fi-rs-shuffle"></i></a>
                                            <a @click.prevent="submitQuickview(result)" aria-label="نمایش سریع" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"
                                                ><i class="fi-rs-eye"></i
                                            ></a>
                                        </div> -->
                                        <div class="product-badges product-badges-position product-badges-mrg" v-if="result.discount" >
                                            <span class="hot">{{result.discount.percent}}% تخفیف </span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap" >
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'cafes'" >{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>

                                        </div>
                                        <h2><Link :href="route('cafe-net.show',[result.slug])">{{ result.group.name + ' ' + result.type.name + ' ' + result.category.name + ' ' +  result.name }}</Link></h2>
                                        <div>
                                                    <span class="font-small text-muted"
                                                        > {{ result.tag }} </span
                                                    >
                                                </div>
                                                <div>
                                                    <span class="font-small text-muted"
                                                        >حداقل {{ result.rouzekari }} روز کاری</span
                                                    >
                                                </div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block" >
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%' "></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating" > ({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                        </div>
                                        <div>
                                            <span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span>
                                        </div>
                                        <div class="product-card-bottom" >
                                            <div class="product-price" v-if="result.discount">
                                                <span>{{ Number(result.price-(result.price*result.discount.percent/100)).toLocaleString("fa-IR")}}</span>
                                                <span class="old-price">{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                            </div>
                                            <div class="product-price" v-else>
                                                <span>{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                                <!-- <span class="old-price">$32.8</span> -->
                                            </div>
                                            <div class="add-cart">
                                                <Link class="add" href="" @click.prevent="submitWeb(result.id)" ><i class="fi-rs-shopping-cart mr-5"></i>خرید </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end product card-->
                        </div>
                        <!--End product-grid-4-->
                    </div>
                    <!--En tab one-->
                </div>
                <!--End tab-content-->
            </div>
        </section>
        <section class="product-tabs section-padding position-relative" v-if="props.forms && props.forms.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>فرم </h3>
                    <ul class="nav nav-tabs links" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <Link class="show-all" :href="route('form.index','q')+'all' " > نمایش <i class="fi-rs-angle-left"></i> </Link>
                        </li>

                    </ul>
                </div>
                <!--End nav-tabs-->
                <div class="tab-content" id="myTabContent" >
                    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div class="row product-grid-4" v-if="props.forms">
                            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6"  v-for="(result ,index) in props.forms" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"  >
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('form.show',[result.slug])" v-if="result.image && result.image.status == 4 || 5">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                            </Link>
                                            <Link :href="route('form.show',[result.slug])"  v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                            </Link>
                                        </div>
                                        <!-- <div class="product-action-1">
                                            <a aria-label="واچ لیست" class="action-btn" href="/shop-wishlist"><i class="fi-rs-heart"></i></a>
                                            <a aria-label="مقایسه" class="action-btn" href="/shop-compare"><i class="fi-rs-shuffle"></i></a>
                                            <a @click.prevent="submitQuickview(result)" aria-label="نمایش سریع" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"
                                                ><i class="fi-rs-eye"></i
                                            ></a>
                                        </div> -->
                                        <div class="product-badges product-badges-position product-badges-mrg" v-if="result.discount" >
                                            <span class="hot">{{result.discount.percent}}% تخفیف </span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap" >
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'forms'" >{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>

                                        </div>
                                        <h2><Link :href="route('form.show',[result.slug])">{{ result.group.name + ' ' + result.type.name + ' ' + result.category.name + ' ' + result.name }}</Link></h2>
                                        <div>
                                                    <span class="font-small text-muted"
                                                        > {{ result.tag }} </span
                                                    >
                                                </div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block" >
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%' "></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating" > ({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                        </div>
                                        <div>
                                            <span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span>
                                        </div>
                                        
                                        <div class="product-card-bottom" >
                                            <div class="product-price" v-if="result.discount">
                                                <span>{{ Number(result.price-(result.price*result.discount.percent/100)).toLocaleString("fa-IR")}}</span>
                                                <span class="old-price">{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                            </div>
                                            <div class="product-price" v-else>
                                                <span>{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                                <!-- <span class="old-price">$32.8</span> -->
                                            </div>
                                            <div class="add-cart">
                                                <Link class="add" href="" @click.prevent="submitCart(result.id)" ><i class="fi-rs-shopping-cart mr-5"></i>خرید </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end product card-->
                        </div>
                        <!--End product-grid-4-->
                    </div>
                    <!--En tab one-->
                </div>
                <!--End tab-content-->
            </div>
        </section>
        <section class="product-tabs section-padding position-relative" v-if="props.blogs.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>بلاگ</h3>
                    <ul class="nav nav-tabs links" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <Link class="show-all" :href="route('blog.index') " > نمایش <i class="fi-rs-angle-left"></i> </Link>
                        </li>

                    </ul>
                </div>
                <!--End nav-tabs-->
                <div class="tab-content" id="myTabContent" >
                    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div class="row product-grid-4">
                            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6"  v-for="(result ,index) in props.blogs" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"  >
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('blog.show',[result.slug])" v-if="result.image && result.image.status == 4 || 5">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                            </Link>
                                            <Link :href="route('blog.show',[result.slug])"  v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                            </Link>
                                        </div>

                                        <div class="product-badges product-badges-position product-badges-mrg" >
                                            <!-- <span class="hot"></span> -->
                                        </div>
                                    </div>
                                    <div class="product-content-wrap" >
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'blogs'" >{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>

                                        </div>
                                        <h2><Link :href="route('blog.show',[result.slug])">{{result.title}}</Link></h2>
                                        <div>
                                                    <span class="font-small text-muted"
                                                        > {{ result.tag }} </span
                                                    >
                                                </div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block" >
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%' "></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating" > ({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                        </div>
                                        <div>
                                            <span class="font-small text-muted">نویسنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span>
                                        </div>
                                        
                                        <div class="product-card-bottom" >
                                            <div class="product-price" v-if="result.discount">
                                                <span>{{(result.price-(result.price*result.discount.percent/100)).toLocaleString("fa-IR")}}</span>
                                                <span class="old-price">{{(result.price).toLocaleString("fa-IR")}}</span>
                                            </div>
                                            <div class="product-price" v-else>

                                                <!-- <span class="old-price">$32.8</span> -->
                                            </div>
                                            <div class="add-cart">
                                                <Link class="add" :href="route('blog.show',[result.slug])" ><i class=" mr-5"></i>جزئیات </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--end product card-->
                        </div>
                        <!--End product-grid-4-->
                    </div>
                </div>
                <!--End tab-content-->
            </div>
        </section>

    </main>
    <Footer :companies="props.companies" :socials="props.socials" :time="props.time" :menus="props.menus" :path="props.path" :namads="props.namads" />
</template>

<style>
/* Homepage hero: keep only the intended text content and remove any legacy HTML actions/points. */
.homepage-hero .homepage-hero-actions,
.homepage-hero .homepage-hero-points,
.homepage-hero .homepage-hero-button,
.homepage-hero .homepage-hero-link,
.homepage-hero .slider-content > a,
.homepage-hero .slider-content > button,
.homepage-hero .slider-content > .button,
.homepage-hero .slider-content > .btn,
.homepage-hero .slider-content > :not(.homepage-hero-kicker):not(h1):not(.homepage-hero-text) {
    display: none !important;
}

.homepage-hero .slider-content > .homepage-hero-kicker,
.homepage-hero .slider-content > h1,
.homepage-hero .slider-content > .homepage-hero-text {
    display: block !important;
}
</style>
