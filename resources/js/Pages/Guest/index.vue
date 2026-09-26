<script setup>

import { computed, ref, watch, onMounted } from 'vue';
import Footer from './Footer2.vue';
import Header from './Header2.vue';
import Seo from '@/Components/Seo.vue';
import { useForm, usePage,Link} from '@inertiajs/vue3';
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);

const loadDeferredHeroBackgrounds = () => {
  document.querySelectorAll('[data-deferred-bg]').forEach((element) => {
    const url = element.getAttribute('data-deferred-bg');
    if (url && !element.style.backgroundImage) {
      element.style.backgroundImage = `url("${url}")`;
    }
    element.removeAttribute('data-deferred-bg');
  });
};

onMounted(() => {
  const hero = document.querySelector('.homepage-hero');
  if (!hero) return;

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadDeferredHeroBackgrounds, { timeout: 1800 })
  } else {
    window.setTimeout(loadDeferredHeroBackgrounds, 1200)
  };

  hero.addEventListener('pointerdown', loadDeferredHeroBackgrounds, { once: true });
});

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
const submitQuickview = (result) =>{ Quickview.value = result }

const discounts = ref([]);
if (props.discounts.data) {
    props.discounts.data.forEach(discount => { discounts.value.push(discount) });
}
</script>
<template>
    <Seo :title="'فروشگاه مدیا | قالب سایت و محصولات دیجیتال'" :description="'خرید قالب سایت و محصولات دیجیتال از فروشگاه مدیا؛ مجموعه‌ای از قالب‌های آماده و ابزارهای دیجیتال برای راه‌اندازی و توسعه کسب‌وکار آنلاین.'" :noIndex="false" /> 
    <Header :companies="props.companies" :results="props.results" :Quickview="Quickview" :menus="props.menus" :cart="props.cart" :menu="props.menu"
        @event-submit-quickview="submitQuickview"  @event-submit-cart="submitCart" 
     />
    <main class="main">
        <section class="home-slider position-relative mb-30 homepage-hero">
            <div class="container">
                <div class="home-slide-cover mt-30">
                    <div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                        <div class="single-hero-slider single-animation-wrap" style="background-image: url(assets/imgs/slider/slider-1.webp)">
                            <div class="slider-content homepage-hero-content">
                                <span class="homepage-hero-kicker">ویژه طراح‌ها و کسب‌وکارها</span>
                                <h1 class="display-2 mb-25">چیزی که برای رشد کسب‌وکارت نیاز داری، همین‌جاست</h1>
                                <p class="homepage-hero-text">قالب، طرح، فرم و خدمات دیجیتال را با تجربه‌ای سریع‌تر و ساده‌تر پیدا کن.</p>
                            </div>
                        </div>
                        <div class="single-hero-slider single-animation-wrap" data-deferred-bg="/assets/imgs/slider/slider-2.webp">
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
        <section class="product-tabs section-padding position-relative" v-if="props.results.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn">
                    <h3>محصول </h3>
                    <ul class="nav nav-tabs links" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <Link class="show-all" :href="route('website-templates.index','q')+'all' " > نمایش <i class="fi-rs-angle-left"></i> </Link>
                        </li>
                    </ul>
                </div>
                <div class="tab-content" id="myTabContent" >
                    <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div class="row product-grid-4" v-if="props.results">
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6" v-for="(result,index) in props.results" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('website-templates.show',[result.slug])" v-if="result.image && (result.image.status == 4 || result.image.status == 5)">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                            </Link>
                                            <Link :href="route('website-templates.show',[result.slug])" v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                            </Link>
                                        </div>
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
                                        <div><span class="font-small text-muted"> {{ result.tag }} </span></div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block" >
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%'"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating" > ({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                        </div>
                                        <div><span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span></div>
                                        <div class="product-card-bottom" >
                                            <div class="product-price" v-if="result.discount">
                                                <span>{{ Number(result.price-(result.price*result.discount.percent/100)).toLocaleString("fa-IR")}}</span>
                                                <span class="old-price">{{ Number(result.price).toLocaleString("fa-IR") }}</span>
                                            </div>
                                            <div class="product-price" v-else><span>{{ Number(result.price).toLocaleString("fa-IR") }}</span></div>
                                            <div class="add-cart"><Link class="add" href="" @click.prevent="submitCart(result.id)" ><i class="fi-rs-shopping-cart mr-5"></i>خرید </Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="product-tabs section-padding position-relative" v-if="props.webDesigns.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>پلن </h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item" role="presentation"><Link class="show-all" :href="route('website-design.index','q')+'all' " > نمایش <i class="fi-rs-angle-left"></i> </Link></li></ul></div>
                <div class="tab-content" id="myTabContent" ><div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                    <div class="row product-grid-4" v-if="props.webDesigns"><div class="col-lg-3 col-md-4 col-12 col-sm-6" v-for="(result,index) in props.webDesigns" :key="index">
                        <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">
                            <Link :href="route('website-design.show',[result.slug])" v-if="result.image && (result.image.status == 4 || result.image.status == 5)"><img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" /><img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" /></Link>
                            <Link :href="route('website-design.show',[result.slug])" v-else-if="props.companies"><img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" /><img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" /></Link>
                        </div><div class="product-badges product-badges-position product-badges-mrg" v-if="result.discount"><span class="hot">{{result.discount.percent}}% تخفیف </span></div></div>
                        <div class="product-content-wrap"><div class="product-category"><template v-for="(menu,index) in result.menus" :key="index"><template v-for="(section,index) in menu.sections" :key="section.id"><Link href="" v-if="section.name == 'web_designs'" >{{ menu.name + ' '}}</Link></template></template></div>
                        <h2><Link :href="route('website-design.show',[result.slug])">{{ result.name }}</Link></h2><div><span class="font-small text-muted"> {{ result.tag }} </span></div>
                        <div class="product-rate-cover"><div class="product-rate d-inline-block"><div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%'"></div></div><span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating"> ({{ result.ratings_avg_rating }})</span><span class="font-small ml-5 text-muted" v-else> (0.000)</span></div>
                        <div><span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span></div>
                        <div class="product-card-bottom"><div class="product-price"><span>{{ Number(result.price).toLocaleString("fa-IR")}}</span></div><div class="add-cart"><Link class="add" href="" @click.prevent="submitWeb(result.id)"><i class="fi-rs-shopping-cart mr-5"></i>خرید</Link></div></div>
                        </div></div></div>
                </div></div>
            </div>
            </div>
        </section>
        <section class="product-tabs section-padding position-relative" v-if="props.cafes && props.cafes.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>کافه</h3></div>
                <div class="tab-content">
                    <div class="tab-pane fade show active">
                        <div class="row product-grid-4">
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6" v-for="(result,index) in props.cafes" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('cafe-net.show',[result.slug])" v-if="result.image && (result.image.status == 4 || result.image.status == 5)">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                            </Link>
                                            <Link :href="route('cafe-net.show',[result.slug])" v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'cafes'">{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>
                                        </div>
                                        <h2><Link :href="route('cafe-net.show',[result.slug])">{{ result.name }}</Link></h2>
                                        <div><span class="font-small text-muted">{{ result.tag }}</span></div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%'"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating">({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else>(0.000)</span>
                                        </div>
                                        <div><span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span></div>
                                        <div class="product-card-bottom">
                                            <div class="product-price"><span>{{ Number(result.price).toLocaleString("fa-IR") }}</span></div>
                                            <div class="add-cart"><Link class="add" href="" @click.prevent="submitCart(result.id)"><i class="fi-rs-shopping-cart mr-5"></i>خرید</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="product-tabs section-padding position-relative" v-if="props.forms && props.forms.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>فرم</h3></div>
                <div class="tab-content">
                    <div class="tab-pane fade show active">
                        <div class="row product-grid-4">
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6" v-for="(result,index) in props.forms" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('form.show',[result.slug])" v-if="result.image && (result.image.status == 4 || result.image.status == 5)">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                            </Link>
                                            <Link :href="route('form.show',[result.slug])" v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'forms'">{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>
                                        </div>
                                        <h2><Link :href="route('form.show',[result.slug])">{{ [result.group?.name, result.type?.name, result.category?.name, result.name].filter(Boolean).join(' ') }}</Link></h2>
                                        <div><span class="font-small text-muted">{{ result.tag }}</span></div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%'"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating">({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else>(0.000)</span>
                                        </div>
                                        <div><span class="font-small text-muted">فروشنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span></div>
                                        <div class="product-card-bottom">
                                            <div class="product-price"><span>{{ Number(result.price).toLocaleString("fa-IR") }}</span></div>
                                            <div class="add-cart"><Link class="add" href="" @click.prevent="submitCart(result.id)"><i class="fi-rs-shopping-cart mr-5"></i>خرید</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="product-tabs section-padding position-relative" v-if="props.blogs && props.blogs.length > 0">
            <div class="container">
                <div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>بلاگ</h3></div>
                <div class="tab-content">
                    <div class="tab-pane fade show active">
                        <div class="row product-grid-4">
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6" v-for="(result,index) in props.blogs" :key="index">
                                <div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link :href="route('blog.show',[result.slug])" v-if="result.image && (result.image.status == 4 || result.image.status == 5)">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" width="300" height="300" alt="" />
                                            </Link>
                                            <Link :href="route('blog.show',[result.slug])" v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" width="300" height="300" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="" v-if="section.name == 'blogs'">{{ menu.name + ' '}}</Link>
                                                </template>
                                            </template>
                                        </div>
                                        <h2><Link :href="route('blog.show',[result.slug])">{{ result.title }}</Link></h2>
                                        <div><span class="font-small text-muted">{{ result.tag }}</span></div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%'"></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating">({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else>(0.000)</span>
                                        </div>
                                        <div><span class="font-small text-muted">نویسنده <Link :href="route('guest-profile.show', result.user.user_name)">({{ result.user.name_show }})</Link></span></div>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span v-if="result.discount">
                                                    {{ (result.price-(result.price*result.discount.percent/100)).toLocaleString("fa-IR") }}
                                                    <span class="old-price">{{ result.price.toLocaleString("fa-IR") }}</span>
                                                </span>
                                            </div>
                                            <div class="add-cart"><Link class="add" :href="route('blog.show',[result.slug])">جزئیات</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer :companies="props.companies" :socials="props.socials" :time="props.time" :menus="props.menus" :path="props.path" :namads="props.namads" />
</template>

<style>
.product-cart-wrap{position:relative;display:flex;flex-direction:column;height:100%;border:1px solid #e6e9ed;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 5px 18px rgba(20,30,40,.055);transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease}
.product-cart-wrap:hover{transform:translateY(-7px);border-color:#cfe8dc;box-shadow:0 18px 42px rgba(20,30,40,.12)}
.product-cart-wrap .product-img-action-wrap{position:relative;min-width:0;padding:0}
.product-cart-wrap .product-img{position:relative;width:100%;min-height:0;border-radius:14px;overflow:hidden;background:#f5f7f8;display:flex;align-items:center;justify-content:center}
.product-cart-wrap .product-img a{display:block;width:100%;max-width:100%;overflow:hidden}
.product-cart-wrap .product-img::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,transparent 65%,rgba(0,0,0,.08))}
.product-cart-wrap .product-img img{display:block;width:100%;height:auto;max-width:100%;max-height:100%;object-fit:contain!important;object-position:center;overflow:hidden;transition:transform .45s ease}
.product-cart-wrap .product-img .hover-img{object-fit:contain}
.product-cart-wrap:hover .product-img .default-img{transform:scale(1.015)}
.product-cart-wrap .product-badges{z-index:3}
.product-cart-wrap .product-badges .hot{border-radius:999px;padding:7px 11px;font-size:11px;font-weight:700;box-shadow:0 4px 12px rgba(0,0,0,.12)}
.product-cart-wrap .product-content-wrap{display:flex;flex:1;flex-direction:column;min-width:0;padding:15px 17px 17px}
.product-cart-wrap .product-category{margin-bottom:6px;min-height:20px;max-width:100%;font-size:11px;font-weight:700;color:#3bb77e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.product-cart-wrap h2{font-size:17px;line-height:1.7;min-height:57.8px;max-height:57.8px;margin:0 0 5px;font-weight:700;overflow:hidden}
.product-cart-wrap h2 a{display:-webkit-box;color:#253d4e;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-word}
.product-cart-wrap h2 a:hover{color:#3bb77e}
.product-cart-wrap .product-content-wrap>div:not(.product-card-bottom){min-width:0;max-width:100%;overflow:hidden}\n.product-cart-wrap .product-content-wrap>.font-small,
.product-cart-wrap .product-content-wrap>div>span.font-small{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.product-cart-wrap .product-rate-cover{display:flex;align-items:center;min-width:0;min-height:25px;margin:7px 0 4px;overflow:hidden}
.product-cart-wrap .product-rate-cover .product-rate{flex:0 0 auto}
.product-cart-wrap .product-rate-cover>span{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.product-cart-wrap .product-card-bottom{display:flex;align-items:center;justify-content:space-between;gap:10px;min-width:0;margin-top:auto;padding-top:13px;border-top:1px solid #edf0f2}
.product-cart-wrap .product-price{display:flex;flex:1;min-width:0;flex-direction:column;line-height:1.45;overflow:hidden}
.product-cart-wrap .product-price>span:first-child{font-size:19px;font-weight:800;color:#253d4e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.product-cart-wrap .product-price .old-price{margin-left:0;font-size:11px;color:#a7adb2;white-space:nowrap}
.product-cart-wrap .add-cart{flex:0 0 auto}
.product-cart-wrap .add-cart .add{display:inline-flex;align-items:center;justify-content:center;min-width:82px;border-radius:10px;padding:9px 13px;background:#3bb77e;color:#fff!important;font-size:13px;font-weight:700;white-space:nowrap;box-shadow:0 5px 13px rgba(59,183,126,.22);transition:transform .2s ease,background .2s ease}
.product-cart-wrap .add-cart .add:hover{background:#2fa66e;transform:translateY(-1px)}
@media(max-width:575px){.product-cart-wrap .product-content-wrap{padding:13px 13px 15px}.product-cart-wrap h2{font-size:15px;line-height:1.7;min-height:51px;max-height:51px}.product-cart-wrap .product-price>span:first-child{font-size:17px}.product-cart-wrap .add-cart .add{min-width:74px;padding:8px 10px;font-size:12px}}
</style>
