<script setup>
import { computed } from 'vue';
import Header from './Header2.vue';
import Footer from './Footer2.vue';
import { ref} from 'vue';
import { useForm,Head,Link} from '@inertiajs/vue3';
import Seo from '@/Components/Seo.vue';
import { usePage } from '@inertiajs/vue3';

const page = usePage();

const props = defineProps({
    user:Object,results:Object,orders_count:Number,companies:Object,role:Object,
    auth: Object,discounts: Object,menus: Object,socials: Object,path: String,
    time:String,coupon_count:Number,querystring:String,menu: Object,users:Object,
    alert: Object,orders:Object,cart:Object,namads:Object,userResults:Object
});

const form = useForm({
    q: null,
});

const siklls = ref([]);
if (props.user && props.user.siklls)
{
    props.user.siklls.forEach(element => {
        if (element.status == 4)
        {
            siklls.value.push(element)
        }
    });
}

const getPageUrl = (baseUrl, page) => {
    if (typeof window !== 'undefined') {
        let queryString = window.location.search;

        // حذف پارامتر page از URL قبلی
        queryString = queryString.replace(/(\?|&)page=\d+/, '');

        // ساخت URL جدید با پارامتر page جدید
        let newUrl = `${baseUrl}?page=${page}${queryString ? '&' + queryString.substring(1) : ''}`;
        return newUrl;
    }
    return `${baseUrl}?page=${page}`; // در محیط سرور فقط این URL بدون query string
};
// console.log(props.userResults);

const titleSeo = props.user.user_name;
const descriptionSeo = String(props.user.name + ' ' + props.user.lasst_name + '-' + (props.user.profile?.biography || ''))
    .replace(/<[^>]*>/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim()
    .slice(0, 160)

const seoProfileSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: profileName.value,
    description: descriptionSeo.value,
    url: page.props.ziggy.url + '/guest-profile/' + encodeURIComponent(props.user.user_name || props.user.id),
    mainEntity: {
        '@type': 'Person',
        name: profileName.value,
        alternateName: props.user.user_name || undefined,
        description: descriptionSeo,
    },
}))

</script>
<template>
    <Seo :title="titleSeo" :description="descriptionSeo" :noIndex="false" type="profile" :schema="seoProfileSchema" />
     <Head title="index" /> 
    <Header :companies="props.companies" :results="props.results" :Quickview="Quickview" :menus="props.menus" :cart="props.cart" :menu="props.menu" />
        <main class="main">
            <div class="container mb-30">
                <div class="archive-header-2 text-center pt-80 pb-50">

                </div>
                <div class="row flex-row-reverse">
                    <div class="col-lg-4-5" >
                        <div class="shop-product-fillter">
                            <div class="totall-product">
                                <p>ما <strong class="text-brand">{{ props.userResults.total }}</strong> مورد پیدا کردیم!</p>
                            </div>
                            <div class="sort-by-product-area">

                            </div>
                        </div>
                        <div class="row product-grid" >
                            <div class="col-lg-4 col-md-4 col-12 col-sm-6" v-for="(result,index) in props.userResults.data" :key="index">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <Link href="#" v-if="result.image && result.image.status == 4 || result.image.status == 5">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+result.image.url" alt="" />
                                            </Link>
                                            <Link href="#" v-else-if="props.companies">
                                                <img class="default-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                                <img class="hover-img" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="" />
                                            </Link>
                                        </div>
                                        <!-- <div class="product-action-1">
                                            <a aria-label="Add To Wishlist" class="action-btn" href="shop-wishlist.html"><i class="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" class="action-btn" href="shop-compare.html"><i class="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" class="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i class="fi-rs-eye"></i></a>
                                        </div> -->
                                        <div class="product-badges product-badges-position product-badges-mrg" v-if="result.discount">
                                            <span class="hot">{{result.discount.percent}}% تخفیف </span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <template v-for="(menu,index) in result.menus" :key="index">
                                                <template v-for="(section,index) in menu.sections" :key="section.id">
                                                    <Link href="#" v-if="section.name == 'products' || section.name == 'web_designs' || section.name == 'blogs'" >{{ menu.name + ' '}}</Link>
                                                </template>

<style scoped>
.public-profile-card{position:relative;overflow:hidden;padding:28px 22px 22px;border:1px solid #eef0f3!important;border-radius:18px;background:#fff!important;box-shadow:0 10px 30px rgba(15,23,42,.06);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.public-profile-card:before{content:'';position:absolute;inset:0 0 auto;height:4px;background:linear-gradient(90deg,#3bb77e,#8ed1b0)}
.public-profile-card:hover{transform:translateY(-3px);border-color:#dfe8e3!important;box-shadow:0 16px 38px rgba(15,23,42,.09)}
.public-profile-avatar{width:112px;height:112px;margin:4px auto 18px!important;padding:4px;border-radius:50%;background:linear-gradient(135deg,#3bb77e,#e9f8f1);box-shadow:0 8px 22px rgba(59,183,126,.18)}
.public-profile-avatar img{width:100%!important;height:100%!important;display:block;object-fit:cover;border-radius:50%;border:3px solid #fff}
.public-profile-content{text-align:center}.public-profile-role{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:4px 11px;margin-bottom:7px;border-radius:999px;background:#effaf5;color:#2f9e6d!important;font-size:12px;font-weight:600}
.public-profile-name{margin-bottom:10px!important;font-size:20px!important;line-height:1.6;font-weight:800}.public-profile-name a{color:#253047!important}
.public-profile-bio{margin:0 auto 20px!important;padding:13px 14px;border:1px solid #f0f1f4;border-radius:12px;background:#fafbfc;text-align:right}.public-profile-bio p{margin:0;color:#687080!important;font-size:13px;line-height:2}
.public-profile-social{padding-top:17px;margin-bottom:18px!important;border-top:1px solid #f0f1f4}.public-profile-social h6{margin-bottom:10px!important;color:#253047;font-size:13px}.public-profile-social .social-network{display:flex;justify-content:center;flex-wrap:wrap;gap:7px}.public-profile-social .social-network li{margin:0!important}.public-profile-social .social-network a{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid #edf0f2;border-radius:11px;background:#fff;transition:.2s ease}.public-profile-social .social-network a:hover{transform:translateY(-2px);border-color:#cdebdc;background:#effaf5}
.public-profile-contact{padding-top:16px;border-top:1px solid #f0f1f4}.public-profile-contact ul{margin-bottom:0!important}.public-profile-contact li{display:flex;align-items:center;gap:7px;min-height:38px;padding:8px 10px;margin-bottom:7px;border:1px solid #f0f1f4;border-radius:10px;background:#fff;font-size:12px}.public-profile-contact li:last-child{margin-bottom:0}.public-profile-contact li strong{color:#3b4352;white-space:nowrap}.public-profile-contact li span{color:#7a8190;overflow-wrap:anywhere}.public-profile-contact li img{width:17px;height:17px;margin:0!important;flex:0 0 auto}
@media(max-width:991px){.public-profile-card{margin-bottom:25px}}
</style>
                                            </template>
                                        </div>
                                        <h2>
                                            <Link href="#" v-if="result.group && result.type && result.category && result.name">
                                                {{ result.name }}
                                            </Link>
                                            <Link href="#" v-else-if="result.group && result.type && result.title">
                                                {{ result.group.name + ' ' + result.type.name + ' ' + ' ' + result.title }}
                                            </Link>
                                        </h2>
                                        <div>
                                            <span class="font-small text-muted" v-if="result.tag"> {{ result.tag }} </span>
                                        </div>
                                        <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" v-if="result.ratings_avg_rating" :style="'width:' + result.ratings_avg_rating*20 + '%' "></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted" v-if="result.ratings_avg_rating" > ({{ result.ratings_avg_rating }})</span>
                                            <span class="font-small ml-5 text-muted" v-else > (0.000)</span>
                                        </div>
                                        <div>
                                            <!-- <span class="font-small text-muted">By <Link href="">NestFood</Link></span> -->
                                        </div>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <!-- <span>$28.85</span>
                                                <span class="old-price">$32.8</span> -->
                                            </div>
                                            <div class="add-cart" v-if="result.image.imageable_type == 'App\\Models\\Product'">
                                                <Link class="add" :href="route('website-templates.show', [result.slug])"><i class="fi-rs-shopping-cart mr-5"></i>نمایش </Link>
                                            </div>
                                            <div class="add-cart" v-if="result.image.imageable_type == 'App\\Models\\Blog'">
                                                <Link class="add" :href="route('blog.show',[result.slug])"><i class="fi-rs-shopping-cart mr-5"></i>نمایش </Link>
                                            </div>
                                            <div class="add-cart" v-if="result.image.imageable_type == 'App\\Models\\WebDesign'">
                                                <Link class="add" :href="route('website-design.show', [result.slug])"><i class="fi-rs-shopping-cart mr-5"></i>نمایش </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--product grid-->
                        <!-- <div class="pagination-area mt-20 mb-20">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="fi-rs-arrow-small-right"></i></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link dot" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="fi-rs-arrow-small-left"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div> -->
                        <div class="pagination-area mb-20 mt-20" v-if="props.userResults && props.userResults.total > 9">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item" :class="{ disabled: !props.userResults.prev_page_url || props.userResults.current_page === 1 }" >
                                        <Link class="page-link" :href=" props.userResults.prev_page_url && props.userResults.current_page > 1 ? props.userResults.prev_page_url : ''" preserve-scroll preserve-state :aria-disabled="props.userResults.current_page === 1">
                                            <i class="fi-rs-arrow-small-right"></i>
                                        </Link>
                                    </li>
                                    <li class="page-item" :class="{ active: props.userResults.current_page === 1 }">
                                        <Link class="page-link" :href="getPageUrl(props.userResults.first_page_url, 1)" preserve-scroll preserve-state >1</Link>
                                    </li>
                                    <li class="page-item" v-if="props.userResults.current_page > 4">
                                        <span class="page-link dot">...</span>
                                    </li>
                                    <template v-for="i in 5" :key="i">
                                        <li class="page-item" v-if=" props.userResults.current_page - 3 + i > 1 && props.userResults.current_page - 3 + i < props.userResults.last_page" :class="{ active: props.userResults.current_page === props.userResults.current_page - 3 + i }">
                                            <Link class="page-link" :href="getPageUrl(props.userResults.path, props.userResults.current_page - 3 + i)" preserve-scroll preserve-state >
                                                {{ props.userResults.current_page - 3 + i }}
                                            </Link>
                                        </li>
                                    </template>

                                    <li class="page-item" v-if="props.userResults.current_page < props.userResults.last_page - 3">
                                        <span class="page-link dot">...</span>
                                    </li>
                                    <li class="page-item" v-if="props.userResults.last_page !== 1" :class="{ active: props.userResults.current_page === props.userResults.last_page }">
                                        <Link class="page-link" :href="getPageUrl(props.userResults.path, props.userResults.last_page)" preserve-scroll preserve-state>
                                            {{ props.userResults.last_page }}
                                        </Link>
                                    </li>
                                    <li class="page-item" :class="{ disabled:!props.userResults.next_page_url || props.userResults.current_page === props.userResults.last_page,}">
                                        <Link class="page-link" :href="props.userResults.next_page_url && props.userResults.current_page < props.userResults.last_page
                                                    ? props.userResults.next_page_url: ''"preserve-scroll preserve-state :aria-disabled="props.userResults.current_page === props.userResults.last_page">
                                            <i class="fi-rs-arrow-small-left"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-1-5 primary-sidebar sticky-sidebar">
                        <div class="sidebar-widget widget-store-info mb-30 bg-3 border-0 public-profile-card">
                            <div class="vendor-logo mb-30 public-profile-avatar">
                                <!-- <img src="assets/imgs/vendor/vendor-16.png" alt="" /> -->
                                <img v-if="props.user.image && props.user.image.status == 4 " :src="$page.props.ziggy.url+'/storage/'+props.user.image.url" :alt="props.user.user_name" />
                                <img v-else :src="$page.props.ziggy.url+'/storage/images/default-user.png'"  :alt="props.user.user_name" />
                            </div>
                            <div class="vendor-info">
                                <div class="product-category">
                                    <span class="text-muted" v-if="props.role && props.role.id == 1" >{{ props.role.name   }}</span>
                                    <span class="text-muted" v-else-if="props.role &&  props.role.id == 2" >{{ props.role.name }} </span>
                                    <span class="text-muted" v-else-if="props.role &&  props.role.id == 3" >{{ props.role.name }}</span>
                                    <span class="text-muted" v-else-if="props.role &&  props.role.id == 4" >{{ props.role.name }}</span>
                                    <span class="text-muted" v-else >خریدار/کارفرما </span>
                                </div>
                                <h4 class="mb-5 public-profile-name"><a href="#" class="text-heading">{{ props.user.name_show }}</a></h4>

                                <div class="product-rate-cover mb-15">
                                    <!-- <div class="product-rate d-inline-block">
                                        <div class="product-rating" style="width: 90%"></div>
                                    </div>
                                    <span class="font-small ml-5 text-muted"> (4.0)</span> -->
                                </div>

                                <div class="vendor-des mb-30 public-profile-bio">
                                    <p class="font-sm text-heading" v-if=" props.user && props.user.profile ">{{ props.user.profile.biography }}</p>
                                </div>
                                <div class="follow-social mb-20 public-profile-social" v-if="props.role &&  props.role.id > 3 && props.user && props.user.socials">
                                    <h6 class="mb-15">دنبال کن</h6>
                                    <ul class="social-network" >

                                        <li class="hover-up mobile-social-icon" v-for="(social,index) in props.user.socials" :key="index">
                                            <!-- <a href="#" v-if="social.link" :href="social.link.link" :title="social.menu.name" v-html="social.tag"></a> -->
                                             
                                                <a v-if="social.links && social.menu"  :href="social.links.link"  :title="social.menu.name" v-html="social.tag" ></a>
                                            
                                        </li>

                                        <!-- <li class="hover-up">
                                            <a href="#">
                                                <img src="assets/imgs/theme/icons/social-tw.svg" alt="" />
                                            </a>
                                        </li>
                                        <li class="hover-up">
                                            <a href="#">
                                                <img src="assets/imgs/theme/icons/social-fb.svg" alt="" />
                                            </a>
                                        </li>
                                        <li class="hover-up">
                                            <a href="#">
                                                <img src="assets/imgs/theme/icons/social-insta.svg" alt="" />
                                            </a>
                                        </li>
                                        <li class="hover-up">
                                            <a href="#">
                                                <img src="assets/imgs/theme/icons/social-pin.svg" alt="" />
                                            </a>
                                        </li> -->
                                    </ul>
                                </div>

                                <div class="vendor-info">
                                    <ul class="font-sm mb-20" >
                                        <li v-if="props.user && props.user.email && props.role &&  props.role.id > 3" ><img class="mr-5" src="/assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>ایمیل: </strong> <span>{{ props.user.email }}</span></li>
                                        <li v-if="props.user && props.user.tel && props.user.tel > 0 && props.role &&  props.role.id > 3"><img class="mr-5" src="/assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>تماس:</strong><span>{{'0' + props.user.tel }}</span></li>
                                    </ul>
                                    <!-- <a href="vendor-details-1.html" class="btn btn-xs">تماس <i class="fi-rs-arrow-small-right"></i></a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- <div class="main">
            <section class="hero-section pt-100 "
                            style="background: url('../img/hero-bg-shape-2.png')no-repeat center center / cover;">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-9 col-lg-7">
                            <div class="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                                <h1 class="text-white mb-0">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">پروفایل کاربر</font>
                                    </font>
                                </h1>
                                <div class="custom-breadcrumb">
                                    <ol class="breadcrumb d-inline-block bg-transparent list-inline py-0">
                                        <li class="list-inline-item breadcrumb-item"><a href="#">
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">صفحه اصلی</font>
                                                </font>
                                            </a></li>
                                        <li class="list-inline-item breadcrumb-item"><a href="#">
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">صفحات</font>
                                                </font>
                                            </a></li>
                                        <li class="list-inline-item breadcrumb-item active">
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">پروفایل کاربر</font>
                                            </font>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="background-header" style="height:5rem"></div>
            </section>
            <section class="promo-section ptb-100">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-sm-12 col-lg-5">
                            <div class="team-single-img">
                                <img v-if="props.user.image && props.user.image.status == 4 " :src="$page.props.ziggy.url+'/storage/'+props.user.image.url" :alt="props.user.user_name" class="img-fluid rounded shadow-sm">
                                <img v-else :src="$page.props.ziggy.url+'/storage/images/default-user.png'" class="img-fluid rounded shadow-sm" :alt="props.user.user_name" />
                                </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-6">
                            <div class="team-single-text">
                                <div class="team-name mb-4">
                                    <h4 class="mb-1">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">{{ props.user.name_show }}</font>
                                        </font>
                                    </h4>
                                    <span>
                                        <font style="vertical-align: inherit;" >
                                            <font style="vertical-align: inherit;" v-if="props.role" >{{ props.role.name }}</font>
                                            <font style="vertical-align: inherit;" v-else >خریدار</font> 
                                        </font>
                                    </span>
                                </div>
                                <ul class="team-single-info" v-if="props.role &&  props.role.id > 2">
                                    <li v-if="props.user && props.user.tel">
                                        <strong>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">تلفن: </font>
                                            </font>
                                        </strong><span>
                                            <a :href="'tel:'+props.user.tel">
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;" v-if="props.user && props.user.tel > 0">{{ props.user.tel }}</font>
                                                    <font style="vertical-align: inherit;" v-else>-</font>
                                                </font>
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <strong>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">ایمیل: </font>
                                            </font>
                                        </strong><span>
                                            <a :href="'mailto:'+props.user.email">
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;" v-if="props.user && props.user.email" >{{ props.user.email }}</font>
                                                <font style="vertical-align: inherit;" v-else>-</font>
                                            </font>
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                                <div class="text-content mt-20">
                                    <p v-if="props.user && props.user.profile">
                                        <font style="vertical-align: inherit;">
                                            {{ props.user.profile.biography }}
                                        </font>
                                    </p>

                                </div>
                                <ul class="team-social-list list-inline mt-4" v-if="props.role && props.role.id > 2">
                                     <li v-for="(links,index) in props.user.socials" :key="index" class="list-inline-item" v-html="links.tag"></li> 
                                        <li class="list-inline-item" v-for="(social,index) in props.user.socials" :key="index" >
                                            <a v-if="social.link" :href="social.link.link" v-html="social.tag" class="color-primary"></a>
                                        </li>

                                    <li class="list-inline-item">
                                        <a href="#" class="color-primary"><span
                                                class="ti-facebook"></span></a>
                                        </li>
                                    <li class="list-inline-item"><a href="#" class="color-primary"><span
                                                class="ti-instagram"></span></a></li>
                                    <li class="list-inline-item"><a href="#" class="color-primary"><span
                                                class="ti-dribbble"></span></a></li>
                                    <li class="list-inline-item"><a href="#" class="color-primary"><span
                                                class="ti-linkedin"></span></a></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="section-heading">
                                <h5>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">عناوین و سمت</font>
                                    </font>
                                </h5>
                                <div class="section-heading-line-left"></div>
                            </div>
                            <ul class="list-unstyled">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="badge badge-primary mr-3"><span class="ti-check"></span>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="mb-0">
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;" v-if="props.role &&  props.role.id == 1" >{{ props.role.name }}</font>
                                                    <font style="vertical-align: inherit;" v-else-if="props.role && props.role.id == 2" >{{ props.role.name }}</font>
                                                    <font style="vertical-align: inherit;" v-else-if="props.role && props.role.id == 3" >تیم مدیریت {{ props.companies.name }}</font>
                                                    <font style="vertical-align: inherit;" v-else-if="props.role && props.role.id == 4" >مدیریت {{ props.companies.name }}</font>
                                                    <font style="vertical-align: inherit;" v-else >خریدار/کارفرما</font>
                                                </font>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="section-heading mt-40">
                                <h5>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">مهارتهای حرفه ای</font>
                                    </font>
                                </h5>
                                <div class="section-heading-line-left"></div>
                            </div>
                            <div class="mt-3" v-if="props.user && props.user.siklls.length > 0 ">
                                <div class="progress-item" v-for="sikll,index in siklls" :key="index">
                                    <div v-if="sikll.status == 4">
                                        <div class="progress-title">
                                            <h6>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">{{ sikll.subject }}</font>
                                                </font>
                                                <span class="float-right" ><span class="progress-number">
                                                        <font style="vertical-align: inherit;">
                                                            <font style="vertical-align: inherit;">{{ sikll.number }}</font>
                                                        </font>
                                                    </span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;"> درصد</font>
                                                    </font>
                                                </span>
                                            </h6>
                                        </div>
                                        <div class="progress p-1">
                                            <span :style="'width: '+ sikll.number+'%'"><span
                                                    class="progress-line"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <h6>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">ثبت نشده {{ index }}</font>
                                            </font>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <h6 v-else>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">ثبت نشده</font>
                                </font>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </div> -->


    <Footer :companies="props.companies" :socials="props.socials" :time="props.time" :menus="props.menus" :path="props.path" :namads="props.namads" />
</template>

