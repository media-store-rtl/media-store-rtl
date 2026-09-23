<script setup>

import { computed, ref,watch,onMounted } from 'vue';
import Footer from './Footer2.vue';
import Header from './Header2.vue';
import Seo from '@/Components/Seo.vue';
import { useForm, usePage,Link } from '@inertiajs/vue3';
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    menus: Object,socials: Object,path: String,
    time:String,companies:Object,menu: Object
    ,cart:Object,namads:Object
});




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

watch(() => errors.value, (val) => {
  if (val && Object.keys(val).length > 0) {
    Object.values(val).forEach((errMsg) => {
      swal
        .mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        })
        .fire({
          title: errMsg,
          icon: "error",
        });
    });
  }
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


// const titleSeo = ''; // عنوانی که در تب مرورگر و نتایج گوگل نمایش داده می شود


// const descriptionSeo = ''; // توضیح کوتاهی که زیر عنوان در نتایج جستجو دیده میشود


//  const keywordsSeo = ''; // کلمات کلیدی مرتبط با صفحه (موتورهای جستجوی جدید کمتر استفاده میکنند)

// const noIndexSeo = true; // دستور به موتور جستجو برای ایندکس شدن یا نشدن صفحه (مثلاً "index, follow" یا "noindex, nofollow")


</script>
<template>
    <Seo :title="'درباره حسابداری | فروشگاه مدیا'" :description="'معرفی خدمات حسابداری و امکانات مرتبط با مدیریت مالی و کسب‌وکار در فروشگاه مدیا.'" :noIndex="false" />
     <Head title="index" /> 
    <Header :companies="props.companies"  :Quickview="Quickview" :menus="props.menus" :cart="props.cart" :menu="props.menu"
        @event-submit-quickview="submitQuickview" 
     />
    <!-- <p v-if="typeof window === 'undefined'">✅ SSR رندر شد (سمت سرور)</p>
    <p v-else>👀 این فقط در مرورگر دیده میشه</p> -->
    <!--End header-->
    <main class="main pages">

        <div class="page-content pt-50">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 col-lg-12 m-auto">
                        <section class="row align-items-center mb-50">
                            <div class="col-lg-6">
                                <img  v-if="props.companies" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" class="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4" />
                            </div>
                            <div class="col-lg-6">
                                <div class="pr-25">
                                    <h2 class="mb-30" v-if="props.companies"> به {{ props.companies.name_show }} خوش آمدید </h2>
                                    <p class="mb-25" v-if="props.companies">
                                    {{ props.companies.name_show }} یک مجموعه تخصصی در حوزه خدمات حسابداری و حسابرسی است که با هدف ارتقای شفافیت مالی، نظم‌بخشی به امور مالی و بهبود فرآیندهای مدیریتی راه‌اندازی شده است.
                                    </p>

                                    <p class="mb-25" v-if="props.companies">
                                    در {{ props.companies.name_show }} تلاش کرده‌ایم بستری حرفه‌ای فراهم کنیم تا کسب‌وکارها، مدیران و صاحبان مشاغل بتوانند با اطمینان کامل امور مالی خود را مدیریت کنند. 
                                    از ثبت و تنظیم اسناد حسابداری و تهیه صورت‌های مالی گرفته تا حسابرسی، مشاوره مالیاتی و بهینه‌سازی ساختار مالی، 
                                    تمامی خدمات در {{ props.companies.name_show }} به‌صورت دقیق، شفاف و مطابق با استانداردهای مالی ارائه می‌شود.
                                    </p>
                                    <h3 class="mb-25">خدمات ما شامل:</h3>
                                    <div class="mb-25">
                                        <li> انجام کلیه امور حسابداری مالی و مدیریتی</li>
                                        <li> تهیه و تنظیم صورت‌های مالی مطابق با استانداردهای حسابداری</li>
                                        <li> انجام خدمات حسابرسی داخلی و مستقل</li>
                                        <li> مشاوره و برنامه‌ریزی مالیاتی و تنظیم اظهارنامه‌های مالیاتی</li>
                                        <li> راه‌اندازی و بهینه‌سازی سیستم‌های مالی و نرم‌افزارهای حسابداری</li>
                                        <li> ارائه گزارش‌های تحلیلی مالی جهت تصمیم‌گیری مدیران</li>
                                    </div>
                                    <h3 class="mb-25">چرا ما؟</h3>
                                    <p class="mb-25" v-if="props.companies">
                                    ما باور داریم دقت، شفافیت و تعهد حرفه‌ای سه اصل اساسی در ارائه خدمات مالی و حسابرسی هستند. 
                                    به همین دلیل در {{ props.companies.name_show }} تمامی خدمات با رعایت کامل استانداردهای حسابداری و قوانین مالیاتی انجام می‌شود. 
                                    پایبندی به زمان‌بندی، حفظ محرمانگی اطلاعات مالی و ارائه گزارش‌های دقیق و قابل اتکا، از اولویت‌های اصلی ماست و کیفیت خدمات به‌صورت مستمر ارزیابی و بهبود داده می‌شود.
                                    </p>
                                    <p class="mb-25" v-if="props.companies">
                                    {{ props.companies.name_show }} یک مجموعه تخصصی خدمات حسابداری و حسابرسی است که با هدف ایجاد شفافیت مالی، ارتقای انضباط مالی و کمک به رشد پایدار کسب‌وکارها فعالیت می‌کند.
                                    </p>
                                    <div class="carausel-3-columns-cover position-relative">
                                        <div id="carausel-3-columns-arrows"></div>
                                        <div class="carausel-3-columns" id="carausel-3-columns">
                                            <!-- <img src="assets/imgs/page/about-2.png" alt="" />
                                            <img src="assets/imgs/page/about-3.png" alt="" />
                                            <img src="assets/imgs/page/about-4.png" alt="" />
                                            <img src="assets/imgs/page/about-2.png" alt="" /> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="text-center mb-50">
                            <h2 class="title style-3 mb-40">چه خدماتی ارائه می‌کنیم؟</h2>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 mb-24">
                                    <div class="featured-card">
                                        <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                                        <h4>تعرفه منصفانه و شفاف</h4>
                                        <p>ارائه خدمات حسابداری و حسابرسی با هزینه‌های منطقی، قراردادهای شفاف و بدون هزینه‌های پنهان.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mb-24">
                                    <div class="featured-card">
                                        <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                                        <h4>خدمات جامع مالی و مالیاتی</h4>
                                        <p>از ثبت اسناد حسابداری و تهیه صورت‌های مالی تا تنظیم اظهارنامه مالیاتی و مشاوره تخصصی، همه خدمات به‌صورت یکپارچه ارائه می‌شود.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mb-24">
                                    <div class="featured-card">
                                        <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                                        <h4>گزارش‌های دقیق و قابل اتکا</h4>
                                        <p>ارائه گزارش‌های مالی شفاف و تحلیلی برای کمک به تصمیم‌گیری بهتر مدیران و کاهش ریسک‌های مالی.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mb-24">
                                    <div class="featured-card">
                                        <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                                        <h4>پشتیبانی تخصصی و مستمر</h4>
                                        <p v-if="props.companies">تیم {{ props.companies.name_show }} در تمامی مراحل امور مالی و مالیاتی همراه شماست و پاسخگوی سوالات و نیازهای کسب‌وکار شما خواهد بود.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mb-24">
                                    <div class="featured-card">
                                        <img src="assets/imgs/theme/icons/icon-5.svg" alt="" />
                                        <h4>حفظ محرمانگی اطلاعات</h4>
                                        <p>اطلاعات مالی و اسناد شما با رعایت اصول حرفه‌ای و امنیت کامل نگهداری و پردازش می‌شود.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mb-24">
                                    <div class="featured-card">
                                        <img src="assets/imgs/theme/icons/icon-6.svg" alt="" />
                                        <h4>کاهش ریسک و جرائم مالیاتی</h4>
                                        <p v-if="props.companies">با خدمات تخصصی {{ props.companies.name_show }}، ریسک خطاهای مالی و جرائم مالیاتی به حداقل می‌رسد و کسب‌وکار شما با اطمینان بیشتری فعالیت می‌کند.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="row align-items-center mb-50">
                            <div class="row mb-50 align-items-center">
                                <div class="col-lg-7 pr-30">
                                    <img src="assets/imgs/page/about-5.png" alt="" class="mb-md-3 mb-lg-0 mb-sm-4" />
                                </div>
                                <div class="col-lg-5">
                                    <h4 class="mb-20 text-muted">عملکرد و تجربه ما</h4>
                                    <h1 class="heading-1 mb-40">همراه مطمئن شما در امور مالی و حسابرسی</h1>

                                    <p class="mb-30" v-if="props.companies">
                                        {{ props.companies.name_show }} مجموعه‌ای تخصصی در زمینه خدمات حسابداری، حسابرسی و مشاوره مالیاتی است که با هدف ایجاد شفافیت مالی و ارتقای سلامت اقتصادی کسب‌وکارها فعالیت می‌کند.
                                    </p>

                                    <p v-if="props.companies">
                                        از ثبت و ساماندهی اسناد مالی تا تهیه صورت‌های مالی، حسابرسی و ارائه راهکارهای مالیاتی، 
                                        {{ props.companies.name_show }} بستری حرفه‌ای و قابل اعتماد برای مدیریت صحیح امور مالی فراهم کرده است.
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                                    <h3 class="mb-30">ما که هستیم</h3>
                                    <p v-if="props.companies">
                                        {{ props.companies.name_show }} یک مجموعه تخصصی خدمات مالی است که با بهره‌گیری از کارشناسان مجرب، به کسب‌وکارها در مدیریت، ساماندهی و بهینه‌سازی امور مالی کمک می‌کند. 
                                        ما با تکیه بر دانش به‌روز و رعایت استانداردهای حرفه‌ای، خدماتی دقیق و قابل اتکا ارائه می‌دهیم.
                                    </p>
                                </div>

                                <div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                                    <h3 class="mb-30">تجربه ما</h3>
                                    <p v-if="props.companies">
                                        {{ props.companies.name_show }} فعالیت خود را با هدف ارائه خدمات مالی شفاف و قانون‌مند آغاز کرده و در طول زمان با همکاری شرکت‌ها و کسب‌وکارهای مختلف، تجربه ارزشمندی در حوزه حسابداری، حسابرسی و مشاوره مالیاتی کسب کرده است.
                                    </p>
                                </div>

                                <div class="col-lg-4">
                                    <h3 class="mb-30">ماموریت ما</h3>
                                    <p v-if="props.companies">
                                        ماموریت {{ props.companies.name_show }} ارتقای انضباط مالی، کاهش ریسک‌های مالیاتی و کمک به رشد پایدار کسب‌وکارها از طریق ارائه خدمات دقیق، شفاف و مسئولانه است. 
                                        هدف ما ایجاد اعتماد و آرامش خاطر برای مدیران در تصمیم‌گیری‌های مالی است.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <!-- <section class="container mb-50 d-none d-md-block">
                <div class="row about-count">
                     <div class="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
                        <h1 class="heading-1"><span class="count">12</span>+</h1>
                        <h4>Glorious years</h4>
                    </div>
                    <div class="col-lg-1-5 col-md-6 text-center">
                        <h1 class="heading-1"><span class="count">36</span>+</h1>
                        <h4>Happy clients</h4>
                    </div>
                    <div class="col-lg-1-5 col-md-6 text-center">
                        <h1 class="heading-1"><span class="count">58</span>+</h1>
                        <h4>Projects complete</h4>
                    </div>
                    <div class="col-lg-1-5 col-md-6 text-center">
                        <h1 class="heading-1"><span class="count">24</span>+</h1>
                        <h4>Team advisor</h4>
                    </div>
                    <div class="col-lg-1-5 text-center d-none d-lg-block">
                        <h1 class="heading-1"><span class="count">26</span>+</h1>
                        <h4>Products Sale</h4>
                    </div> 
                </div>
            </section> -->
            <!-- <div class="container">
                <div class="row">
                    <div class="col-xl-10 col-lg-12 m-auto">
                        <section class="mb-50">
                            <h2 class="title style-3 mb-40 text-center">تیم ما</h2>
                            <div class="row">
                                <div class="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                                    <h6 class="mb-5 text-brand">تیم ما</h6>
                                    <h1 class="mb-30">با تیم متخصص ما آشنا شوید</h1>
                                    <p class="mb-30" v-if="props.companies">
                                    تیم {{ props.companies.name_show }} متشکل از طراحان، توسعه‌دهندگان و مجریان حرفه‌ای است که با تجربه و تخصص خود، پروژه‌های دیجیتال و طراحی سایت را با بالاترین کیفیت اجرا می‌کنند.
                                    </p>
                                    <p class="mb-30">
                                    ما به کارفرمایان کمک می‌کنیم تا ایده‌های خود را به واقعیت تبدیل کنند و با ارائه پشتیبانی حرفه‌ای، تجربه‌ای مطمئن و شفاف در همکاری با مجریان فراهم می‌کنیم.
                                    </p>
                                    <a href="#" class="btn">مشاهده تمام اعضا</a>

                                </div>
                                <div class="col-lg-8">
                                     <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="team-card">
                                                <img src="assets/imgs/page/about-6.png" alt="" />
                                                <div class="content text-center">
                                                    <h4 class="mb-5">H. Merinda</h4>
                                                    <span>CEO & Co-Founder</span>
                                                    <div class="social-network mt-20">
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="team-card">
                                                <img src="assets/imgs/page/about-8.png" alt="" />
                                                <div class="content text-center">
                                                    <h4 class="mb-5">Dilan Specter</h4>
                                                    <span>Head Engineer</span>
                                                    <div class="social-network mt-20">
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>
                                                        <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div> -->
        </div>
    </main>
    <Footer :companies="props.companies" :socials="props.socials" :time="props.time" :menus="props.menus" :path="props.path" :namads="props.namads" />
</template>
