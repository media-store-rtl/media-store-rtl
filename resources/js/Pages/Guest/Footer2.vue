<script setup>

import {Link} from '@inertiajs/vue3';

const props = defineProps({
    companies:Object,socials:Object,time: String,menus:Object,path:String,namads:Object

});

</script>
<template>

    <footer class="main">
        <section class="newsletter mb-15">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="position-relative newsletter-inner">
                            <div class="newsletter-content">
                                <h2 class="mb-20">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">وب سایت خود</span>
                                    </span><br>
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;"> را از فروشگاه ما
                                            دریافت کنید</span>
                                    </span>
                                </h2>
                                <!-- <p class="mb-45">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">جهت اطلاع از آخرین اخبار</span>
                                    </span><span class="text-brand">
                                        <span style="vertical-align: inherit;" v-if="props.companies">
                                            <span style="vertical-align: inherit;"> {{ props.companies.name_show }}</span>
                                        </span>
                                    </span>
                                    در خبرنامه ثبت نام کنید
                                </p>
                                <form class="form-subcriber d-flex">
                                    <input type="email" placeholder="آدرس ایمیل شما">
                                    <button class="btn" type="submit">
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">اشتراک</span>
                                        </span>
                                    </button>
                                </form> -->
                            </div>
                            <!-- <img :src="$page.props.ziggy.url+'/assets/imgs/banner/banner-9.png'" alt="خبرنامه"> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="featured section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn  animated"
                            style="visibility: hidden; animation-name: none;">
                            <div class="banner-icon">
                                <img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-1.svg'" alt="">
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">بهترین قیمت ها </span>
                                    </span>
                                </h3>
                                <p>
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">اصلی و اورجینال</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn  animated"
                            style="visibility: hidden; animation-name: none;">
                            <div class="banner-icon">
                                <img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-2.svg'" alt="">
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">فرصت های شغلی</span>
                                    </span>
                                </h3>
                                <p>
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">همکاری با ما</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn  animated"
                            style="visibility: hidden; animation-name: none;">
                            <div class="banner-icon">
                                <img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-3.svg'" alt="">
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">محصولات شگفت انگیز</span>
                                    </span>
                                </h3>
                                <p>
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">خرید بصرفه</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn  animated"
                            style="visibility: hidden; animation-name: none;">
                            <div class="banner-icon">
                                <img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-4.svg'" alt="">
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">انتخاب متنوع</span>
                                    </span>
                                </h3>
                                <p>
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;"> مگا منو</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn  animated"
                            style="visibility: hidden; animation-name: none;">
                            <div class="banner-icon">
                                <img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-5.svg'" alt="">
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">بازگشت وجه</span>
                                    </span>
                                </h3>
                                <p>
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">طی 14 روز کاری</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                        <div class="banner-left-icon d-flex align-items-center wow fadeIn  animated animated"
                            style="visibility: visible;">
                            <div class="banner-icon">
                                <img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-6.svg'" alt="">
                            </div>
                            <div class="banner-text">
                                <h3 class="icon-box-title">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">تحویل ایمن</span>
                                    </span>
                                </h3>
                                <p>
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">طی 30 روز</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        <section class="section-padding footer-mid">
            <div class="container pt-15 pb-20">
                <div class="row">
                    <div class="col">
                        <div class="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                            <div class="logo mb-30">
                                <Link href="" class="mb-15" v-if="props.companies && props.companies.image && props.companies.image.status == 4">
                                    <img :src="$page.props.ziggy.url + '/storage/images/logo-2.png' " class="" height="40" width="60" :alt="props.companies.name_show" />
                                </Link>
                                <p class="font-lg text-heading">
                                    <span style="vertical-align: inherit;" v-if=" props.companies">
                                        <span style="vertical-align: inherit;"> وب سایت {{ props.companies.name_show }}
                                            </span>
                                    </span>
                                </p>
                            </div>
                            <ul class="contact-infor">
                                <li><img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-location.svg'" alt=""><strong>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">آدرس: </span>
                                        </span>
                                    </strong> <span>
                                        <span style="vertical-align: inherit;" v-if="props.companies && props.companies.profile">
                                            <span style="vertical-align: inherit;"> {{ props.companies.profile.ostan }},{{ props.companies.profile.shahr }},
                                                {{ props.companies.profile.address }}</span>
                                        </span>
                                    </span></li>
                                <li v-if="props.companies" ><img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-contact.svg'" alt=""><strong>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">با ما تماس بگیرید: </span>
                                        </span>
                                    </strong><span>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">{{ '0' + props.companies.phone }}
                                               <template v-if="props.companies && props.companies.tel !== null"> -{{ '0' + props.companies.tel }}</template>
                                            </span>
                                 
                                        </span>
                                    </span></li>
                                <li v-if="props.companies"><img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-email-2.svg'" alt=""><strong>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">ایمیل: </span>
                                        </span>
                                    </strong><span>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">{{ props.companies.email }}</span>
                                        </span>
                                    </span></li>
                                <li><img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/icon-clock.svg'" alt=""><strong>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">ساعت کاری: </span>
                                        </span>
                                    </strong><span>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">07:00 - 17:00، شنبه الی چهار شنبه</span>
                                        </span>
                                    </span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-link-widget col">
                        <h4 class="widget-title">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;" v-if="props.companies">{{ props.companies.name_show }}</span>
                            </span>
                        </h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><Link :href="route('about.index')">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">درباره ما</span>
                                    </span>
                                </Link></li>
                            <li><Link :href="route('faq.index')">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">سوالات متداول</span>
                                    </span>
                                </Link></li>
                            <li><Link :href="route('privacy.index')">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">سیاست حفظ حریم خصوصی</span>
                                    </span>
                                </Link></li>
                            <li><Link :href="route('terms-conditions.index')">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">شرایط و ضوابط</span>
                                    </span>
                                </Link></li>
                        </ul>
                    </div>
                    <div class="footer-link-widget col">
                        <h4 class="widget-title">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;">حساب</span>
                            </span>
                        </h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li v-if="$page.props.auth.user == null">
                                <Link :href="route('register')" >
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">ایجاد</span>
                                    </span>
                                </Link>
                                <Link :href="route('login')" >
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">ورود</span>
                                    </span>
                                </Link>
                                
                            </li>
                            <li v-if="$page.props.auth.user !== null"><Link :href="route('dashboard.index')">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">داشبورد</span>
                                    </span>
                                </Link></li>
                            <li><Link :href="route('favorite.index')" v-if="$page.props.auth.user !== null">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">علاقه مندی های من</span>
                                    </span>
                                </Link></li>
                            <li><Link :href="route('support.index')" v-if="$page.props.auth.user !== null">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">پشتیبانی</span>
                                    </span>
                                </Link></li>
                                

                            <!-- <li><a href="#">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">مقایسه محصولات</span>
                                    </span>
                                </a>
                            </li> -->
                        </ul>
                    </div>
                    <!--<div class="footer-link-widget col">
                        <h4 class="widget-title">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;">همکاری با ما</span>
                            </span>
                        </h4>
                        <ul class="footer-list mb-sm-5 mb-md-0">
                            <li><a href="#">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">فروشنده شوید</span>
                                    </span>
                                </a></li>

                            <li><a href="#">
                                    <span style="vertical-align: inherit;">
                                        <span style="vertical-align: inherit;">طراح شوید</span>
                                    </span>
                                </a></li>

                        </ul>
                    </div>-->
                    
                    <div class="footer-link-widget widget-install-app col">
                         <!-- <h4 class="widget-title">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;">برنامه را نصب کنید</span>
                            </span>
                        </h4>
                        <p class="wow fadeIn animated" style="visibility: hidden; animation-name: none;">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;">از اپ استور یا گوگل پلی</span>
                            </span>
                        </p>
                        <div class="download-app">
                            <a href="#" class="hover-up mb-sm-2 mb-lg-0"><img class="active"
                                    :src="$page.props.ziggy.url+'/assets/imgs/theme/app-store.jpg'" alt=""></a>
                            <a href="#" class="hover-up mb-sm-2"><img
                                    :src="$page.props.ziggy.url+'/assets/imgs/theme/google-play.jpg'" alt=""></a>
                        </div>  -->
                         <h4 class="widget-title">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;">درگاه های پرداخت امن</span>
                            </span>
                        </h4>
                        <img class="wow fadeIn animated" :src="$page.props.ziggy.url+'/assets/imgs/theme/payment-method.png'" alt=""
                            style="visibility: hidden; animation-name: none;"> 
                       
                    </div> 
                    <div class="footer-link-widget widget-install-app col">
                         <h4 class="widget-title">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;">نماد ها</span>
                            </span>
                        </h4>
                        <p class="wow fadeIn animated" style="visibility: hidden; animation-name: none;">
                            <span style="vertical-align: inherit;">
                                <template v-for="namad in props.namads" :key="namad.id">
                                    <div    v-html="namad.tag" ></div>
                            </template>
                            </span>
                        </p>
                        
                            
                    </div> 
                </div>
            </div>
        </section>
        <div class="container pb-30">
            <div class="row align-items-center">
                <div class="col-12 mb-30">
                    <div class="footer-bottom"></div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <p class="span-sm mb-0">
                        <span style="vertical-align: inherit;">
                            <!-- <span style="vertical-align: inherit;"> 1400 </span> -->
                        </span><strong class="text-brand">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;"></span>
                            </span>
                        </strong>
                        <span style="vertical-align: inherit;" v-if="props.companies" >
                            <span style="vertical-align: inherit;"> - {{ new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(new Date(time)) }}  <Link :href="route('website-design.index','q')+'all'">طراحی</Link>  توسط
                                <Link :href="route('guest-profile.show',props.companies.user_name)"> {{ props.companies.name + ' ' + props.companies.lasst_name }}</Link>
                            </span>
                        </span><br>
                        <span style="vertical-align: inherit;" v-if="props.companies" >
                            <span style="vertical-align: inherit;"> ©کلیه حقوق مادی و معنوی {{ props.companies.name_show }} محفوظ است.</span>
                        </span>
                    </p>
                </div>
                <div class="col-xl-4  col-lg-6 text-center d-none d-xl-block">
                    <div class="hotline d-lg-inline-flex mr-30">
                        <img :src="$page.props.ziggy.url+'/assets/imgs/theme/icons/phone-call.svg'" alt="خط تلفن">
                        <p v-if="props.companies && props.companies.phone !== null">
                            {{ '0' + props.companies.phone }}
                            <template v-if="props.companies && props.companies.tel !== null"> -{{ '0' + props.companies.tel }}</template>
                            <span>
                                <span style="vertical-align: inherit;">
                                    <span style="vertical-align: inherit;">ساعت کاری 7:00 الی 17:00</span>
                                </span>
                            </span></p>
                    </div>

                </div>
                <div class="col-xl-4  col-lg-6  col-md-6 text-end d-none d-md-block">
                    <div class="mobile-social-icon">
                        <h6 v-if="props.socials && props.socials.length > 0">
                            <span style="vertical-align: inherit;">
                                <span style="vertical-align: inherit;">شبکه های اجتماعی</span>
                            </span>
                        </h6>
                        <template v-for="social in props.socials" :key="social.id">
                            <a v-if="social.link && social.menu"  :href="social.link.link"  :title="social.menu.name" v-html="social.tag" ></a>
                        </template>
                        
                        <!-- <a href="#" ><img src="assets/imgs/theme/icons/icon-facebook-white.svg"
                                alt=""></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg"
                                alt=""></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg"
                                alt=""></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                                alt=""></a>
                        <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg"
                                alt=""></a> -->
                    </div>
                    <p class="font-sm">
                        <span style="vertical-align: inherit;">
                            <span style="vertical-align: inherit;">ما رو در شبکه های اجتماعی دنبال کنید</span>
                        </span>
                    </p> 
                </div>
            </div>
        </div>
    </footer>

</template>


