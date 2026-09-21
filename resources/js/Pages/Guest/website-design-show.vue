<script setup>

const seoPage = usePage()
const seoSiteUrl = computed(() => seoPage.props?.ziggy?.url || '')

const seoWebDesignSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: props.tarahis.name,
    description: props.tarahis.tag || props.tarahis.name,
    image: props.tarahis.image?.url ? [seoSiteUrl.value + '/storage/' + props.tarahis.image.url] : undefined,
    provider: { '@type': 'Organization', name: 'فروشگاه مدیا', url: seoSiteUrl.value },
    offers: props.tarahis.price != null ? {
        '@type': 'Offer',
        url: seoSiteUrl.value + '/website-design/' + encodeURIComponent(props.tarahis.slug || ''),
        priceCurrency: 'IRR',
        price: Number(props.tarahis.price),
    } : undefined,
    aggregateRating: props.tarahi_averageRating && props.tarahi_timesRated > 0 ? {
        '@type': 'AggregateRating',
        ratingValue: Number(props.tarahi_averageRating),
        ratingCount: Number(props.tarahi_timesRated),
    } : undefined,
}))


import Header from './Header2.vue';
import Footer from './Footer2.vue';
import { computed, ref,watch } from 'vue';
import { Link, useForm ,usePage } from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import Editor from '@tinymce/tinymce-vue';
import 'vue3-carousel/dist/carousel.css'
import CommentReply from '@/Components/CommentReply.vue';
import swal from 'sweetalert2';
import Seo from '@/Components/Seo.vue';

const ApiKey = ref('cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow');
const page = usePage()
const errors = computed(() => page.props?.errors || {})

const props = defineProps({
    tarahis: Object, cart: Object, time: String, count: Number, menus: Object,auth:Object,
    alert: Object, flash: String, tarahi_count: Number, tarahi_order: Number ||String, coupon_count: Number,
    companies: Object, reqdesigners: Object,carousels:Object,users:Object,tarahi_usersRated:Object,
    tarahi_averageRating : Number, tarahi_timesRated : Number,companies2: Object,menu: Object,namads:Object,
    socials:Object,
});



const rawFavorite = computed(() => page.props.tarahis.favorite)
const favorite = ref(null);

const results = ref(props.tarahis);

const validate = (text)=>{
    swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
    }}).fire({
        title: text,
        icon:'error',
    })
}

watch(rawFavorite, (val) => {


    favorite.value = null
        val.forEach(element => {


        if (element.favoritable_id == page.props.tarahis.id && props.auth.user && props.auth.user.id == element.user_id) {
            favorite.value = element

        }
        else
        {
            favorite.value = null

        }

    });


})

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
    id:null,
    name:null,
    expired: null,
    price:null,
    tarahi_id:null,
    type:null,
    text:null,
    user_id:null,
    model:null,
});


const submitFavorite = (tarahi) => {

        form.id = tarahi.id
        form.type = 'App\\Models\\WebDesign'
        form.post(route('favorite.store'))

};

const submit = () => {
    form.tarahi_id = props.tarahis.id
        if(form.expired == null && form.id == null)
        {
            let text
            text = 'مورد ستاره دار الزامی است.'
            validate(text)
        }
        else
        {
            form.post(route('reqDesigner.store'));
        }


};
const submitCart = (id) => {
  form.id = id;
  form.model = 'App\\Models\\WebDesign';
  form.post(route('cart.store'));
};
const submitlogin = () => {

    if (props.auth.user)
    {
        emit('EventSubmit',form.expired,form.price)
    }
    else
    {
        let text
        text = 'لطفا وارد حساب کاربری خود شوید.'
        validate(text)
    }
};


props.tarahis.favorite.forEach(element => {
    if (props.auth.user && element.user_id == props.auth.user.id) {
        favorite.value = element
        }
});




const settings={
      itemsToShow: 1,
      snapAlign: 'center',
};

const breakpoints={
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
}

const role = ref();
if (props.users) {
    props.users.roles.forEach(element => {

    if (element.id == 3) {
        role.value = element
    }
    });
}

const show = ref(true);

const submitComment = () => {

    form.user_id = results.value.user.id,
    form.tarahi_id = results.value.id
    if(form.text == null)
    {
        let text
        text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    else
    {
        form.post(route('comment.store'))
    }

}

const submitReply = (id) => {
    form.parent_id = id
    form.user_id= results.value.user_id
    form.tarahi_id= results.value.id

    if(form.text == null)
    {
        let text
        text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    else
    {
        form.post(route('comment.store'));
    }
}
</script>
<template>
    <Seo :title="props.tarahis.name + ' | فروشگاه مدیا'" :description="props.tarahis.tag || props.tarahis.name" :image="props.tarahis.image?.url ? '/storage/' + props.tarahis.image.url : '/storage/images/logo-2.png'" type="service" :noIndex="false" :schema="seoWebDesignSchema" />
    <Header :companies="props.companies" :results="props.results"  :menus="props.menus" :cart="props.cart"  :menu="props.menu" />
        <main class="main">
            <div class="container mb-30">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 m-auto">
                        <div class="product-detail accordion-detail">
                            <div class="row mb-50 mt-30">
                                <div class="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                    <div class="detail-gallery">
                                        <span class="zoom-icon"><i class="fi-rs-search"></i></span>
                                        <!-- MAIN SLIDES -->
                                        <div class="product-image-slider">
                                            <figure class="border-radius-10">
                                                <img :src="$page.props.ziggy.url + '/storage/' + props.tarahis.image.url" width="600" height="600" alt="product image" />
                                            </figure>

                                        </div>
                                        <!-- THUMBNAILS -->

                                    </div>
                                    <!-- End Gallery -->
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="detail-info pr-30 pl-30">
                                        <span class="stock-status out-stock" v-if="props.tarahis.discount"> تخفیف </span>
                                        <h2 class="title-detail">{{  props.tarahis.name }}</h2>
                                        <div class="product-detail-rating">
                                            <div class="product-rate-cover text-end">
                                                <div class="product-rate d-inline-block">
                                                    <div class="product-rating" v-if="props.tarahis.ratings_avg_rating"
                                                    :style="'width:' + props.tarahis.ratings_avg_rating * 20 + '%'"></div>
                                                </div>
                                                <span class="font-small ml-5 text-muted" v-if="props.tarahis.ratings_avg_rating"> ({{ props.tarahis.ratings_avg_rating }})</span>
                                                <span class="font-small ml-5 text-muted" v-else> (0.0000)</span>
                                            </div>
                                        </div>
                                        <div class="clearfix product-price-cover">
                                            <div class="product-price primary-color float-left" v-if="props.tarahis.discount">
                                                <span class="current-price text-brand" >
                                                    {{
                                                                (props.tarahis.price - (props.tarahis.price * props.tarahis.discount.percent) / 100).toLocaleString(
                                                                    'fa-IR',
                                                                )
                                                            }}
                                                </span>
                                                <span>
                                                    <span class="save-price font-md color3 ml-15" v-if="props.tarahis.discount">{{props.tarahis.discount.percent}}% تخفیف</span>
                                                    <span class="old-price font-md ml-15">{{ Number(props.tarahis.price).toLocaleString('fa-IR') }}</span>
                                                </span>
                                            </div>

                                            <div class="product-price primary-color float-left" v-else>
                                                <span class="current-price text-brand" >
                                                    {{
                                                                Number(props.tarahis.price).toLocaleString(
                                                                    'fa-IR',
                                                                )
                                                            }}
                                                </span>

                                            </div>
                                        </div>
                                        <div class="short-desc mb-30">
                                            <p class="font-lg">
                                                <template v-for="(menu, index) in props.tarahis.menus" :key="index">
                                                    <template v-for="(section, index) in menu.sections" :key="section.id">
                                                        <span href="" v-if="section.name == 'web_designs'">{{ menu.name + ' ' }}</span>
                                                    </template>
                                                </template>
                                            </p>
                                        </div>
                                        <div class="attr-detail attr-size mb-30">
                                            <!-- <strong class="mr-10">Size / Weight: </strong>
                                            <ul class="list-filter size-filter font-small">
                                                <li><a href="#">50g</a></li>
                                                <li class="active"><a href="#">60g</a></li>
                                                <li><a href="#">80g</a></li>
                                                <li><a href="#">100g</a></li>
                                                <li><a href="#">150g</a></li>
                                            </ul> -->
                                        </div>
                                        <div class="detail-extralink mb-50">
                                            <div class="detail-qty border radius">
                                                <!-- <a href="#" class="qty-down"><i class="fi-rs-angle-small-down"></i></a> -->
                                                <span class="qty-val">1</span>
                                                <!-- <a href="#" class="qty-up"><i class="fi-rs-angle-small-up"></i></a> -->
                                            </div>
                                            <div class="product-extra-link2">
                                                <button style="margin: 0 5px;" type="submit" class="button button-add-to-cart" @click.prevent="submitCart( props.tarahis.id)"><i class="fi-rs-shopping-cart"></i>خرید</button>
                                                <a aria-label="Add To Wishlist" class="action-btn hover-up " :class="favorite && favorite.favoritable_id == props.tarahis.id ? 'text-brand' : ''" href="" @click.prevent="submitFavorite(props.tarahis)"><i class="fi-rs-heart"></i></a>
                                                <!-- <a aria-label="Compare" class="action-btn hover-up" href=""><i class="fi-rs-shuffle"></i></a> -->
                                            </div>
                                        </div>
                                        <div class="font-xs">
                                            <ul class="mr-50 float-start">
                                                <li class="mb-5">ورژن: 
                                                    <span class="text-brand" v-if="props.tarahis.version">{{ props.tarahis.version }}</span>
                                                    <span class="text-brand" v-else>-</span>
                                                </li>
                                                <li class="mb-5">انتشار:<span class="text-brand"> {{ moment(tarahis.created_at).locale("fa", fa).format('jYYYY/jM/jD') }}</span></li>
                                            </ul>
                                            <ul class="float-start">
                                                <li class="mb-5">بروز رسانی: <a href="">{{ moment(tarahis.updated_at).locale("fa", fa).format('jYYYY/jM/jD') }}</a></li>
                                                <!--<li class="mb-5">تگ: <a href="" rel="tag">Snack</a>, <a href="" rel="tag">Organic</a>, <a href="" rel="tag">Brown</a></li>-->

                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Detail Info -->
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="tab-style3">
                                    <ul class="nav nav-tabs text-uppercase">
                                        
                                        <li class="nav-item">
                                            <a class="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description" >توضیحات</a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a class="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">فروشنده</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">بازخورد </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content shop_info_tab entry-main-content">
                                        
                                        <div class="tab-pane fade show active" id="Description">
                                            <div v-html="props.tarahis.text">

                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="live">
                                            <Link :href="route('website-templates.create', ['product']) + props.tarahis.slug">
                                            پیش نمایش
                                            </Link>
                                        </div>
                                        <div class="tab-pane fade" id="Vendor-info">
                                            <div class="vendor-logo d-flex mb-30">
                                                <img v-if="props.tarahis.user && props.tarahis.user.image" :src="$page.props.ziggy.url + '/storage/' + props.tarahis.user.image.url" alt="" />
                                                <img v-else :src="$page.props.ziggy.url + '/storage/images/default-user.png'" alt="" />
                                                <div class="vendor-name ml-15">
                                                    <h6>
                                                        <Link :href="route('profile.show', [props.tarahis.user.user_name])">{{ props.tarahis.user.name_show }}</Link>
                                                    </h6>
                                                    <div class="product-rate-cover text-end" v-if="props.tarahis.ratings_avg_rating > 0 ">
                                                        <div class="product-rate d-inline-block">
                                                            <div class="product-rating" :style="'width:' + props.tarahis.ratings_avg_rating * 20 + '%'"></div>
                                                        </div>
                                                        <span class="font-small ml-5 text-muted"> ({{ props.tarahis.ratings_avg_rating }})</span>
                                                    </div>
                                                    <div class="product-rate-cover text-end" v-else>
                                                    <div class="product-rate d-inline-block">
                                                        <div class="product-rating" style="width: 0%"></div>
                                                    </div>
                                                    <span class="font-small ml-5 text-muted"> (0.000)</span>
                                                </div>
                                                </div>
                                            </div>

                                            <div class="d-flex mb-55">
                                                <!-- <div class="mr-30">
                                                    <p class="text-brand font-xs">Rating</p>
                                                    <h4 class="mb-0">92%</h4>
                                                </div>
                                                <div class="mr-30">
                                                    <p class="text-brand font-xs">ارسال به موقع</p>
                                                    <h4 class="mb-0">100%</h4>
                                                </div>
                                                <div>
                                                    <p class="text-brand font-xs">پاسخ چت</p>
                                                    <h4 class="mb-0">89%</h4>
                                                </div> -->
                                            </div>
                                            <p v-if="props.tarahis.user && props.tarahis.user.profile">{{ props.tarahis.user.profile.biography }}</p>
                                        </div>
                                        <div class="tab-pane fade" id="Reviews">
                                            <!--Comments-->
                                            <div class="comments-area">
                                                <div class="row">
                                                     <div class="col-lg-8">
                                                        <h4 class="mb-30">پرسش و پاسخ</h4>
                                                        <div class="comment-list" style="position: relative;">
                                                            <template v-for="(comment,index) in props.tarahis.comments" :key="index">
                                                                <div class="single-comment justify-content-between d-flex mb-30"  >
                                                                        <div class="user justify-content-between d-flex">
                                                                            <div class="thumb text-center">
                                                                                <img  v-if="comment.user.image  && comment.user.image.url && comment.user.image.status == 4" :src="$page.props.ziggy.url+'/storage/'+comment.user.image.url" :alt="comment.user.name_show" />
                                                                                <img v-else :src="$page.props.ziggy.url+'/storage/images/default-user.png'" :alt="comment.user.name_show" >
                                                                                <a href="" class="font-heading text-brand">{{comment.user.name_show}}</a>
                                                                            </div>
                                                                            <div class="desc">
                                                                                <div class="d-flex justify-content-between mb-10">
                                                                                    <div class="d-flex align-items-center">
                                                                                        <span class="font-xs text-muted">{{ moment(comment.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}</span>
                                                                                    </div>
                                                                                    <!-- <div class="product-rate d-inline-block">
                                                                                        <div class="product-rating" style="width: 100%"></div>
                                                                                    </div> -->
                                                                                </div>
                                                                                <p class="mb-10"> <span v-html="comment.text"> </span>
                                                                                    <a v-if="props.auth.user"
                                                                                    data-bs-toggle="collapse" :href="'#multiCollapseExample'+comment.id"
                                                                                    aria-expanded="false" :aria-controls="'multiCollapseExample'+comment.id"
                                                                                    class="reply">پاسخ</a>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                 <!--comment form-->
                                                                 <div class="comment-form collapse " :id="'multiCollapseExample' + comment.id" >
                                                                    <h4 class="mb-15">ارسال پاسخ</h4>
                                                                    <div class="product-rate d-inline-block mb-30"></div>
                                                                    <div class="row" >
                                                                        <div class="col-lg-8 col-md-12" >
                                                                            <form class="form-contact comment_form" id="commentForm">
                                                                                <div class="row">
                                                                                    <div class="col-12">
                                                                                        <div class="form-group">
                                                                                            <!-- <textarea class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea> -->
                                                                                            <Editor :api-key="ApiKey" :init="{menubar: false }" v-model="form.text" />
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="form-group">
                                                                                    <button type="submit" @click.prevent="submitReply(comment.id)" class="button button-contactForm" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                                                                        <span v-if="form.processing">پردازش...</span>
                                                                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                                                                        <span v-else >ارسال</span>
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                        <!-- <div class="comment-respond mt-5" v-else>
                                                                            <p class="comment-notes">برای ارسال نظر وارد حساب کاربری خود شوید.</p>
                                                                        </div> -->
                                                                    </div>
                                                                </div>
                                                                <CommentReply :comments="comment.replies" :comment_id ="comment.id"  :product="props.tarahis"  />
                                                            </template>

                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-lg-4">
                                                        <h4 class="mb-30">نظرات</h4>
                                                        <div class="d-flex mb-30">
                                                            <div class="product-rate d-inline-block mr-15">
                                                                <div class="product-rating" style="width: 90%"></div>
                                                            </div>
                                                            <h6>4.8 out of 5</h6>
                                                        </div>
                                                        <div class="progress">
                                                            <span>5 star</span>
                                                            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                        </div>
                                                        <div class="progress">
                                                            <span>4 star</span>
                                                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                        </div>
                                                        <div class="progress">
                                                            <span>3 star</span>
                                                            <div class="progress-bar" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                                        </div>
                                                        <div class="progress">
                                                            <span>2 star</span>
                                                            <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                                        </div>
                                                        <div class="progress mb-30">
                                                            <span>1 star</span>
                                                            <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                                        </div>
                                                        <a href="#" class="font-xs text-muted">How are ratings calculated?</a>
                                                    </div> -->
                                                </div>

                                            </div>
                                            <!--comment form-->
                                            <div class="comment-form  " >
                                                <h4 class="mb-15">ارسال نظر</h4>
                                                <div class="product-rate d-inline-block mb-30"></div>
                                                <div class="row" >
                                                    <div class="col-lg-8 col-md-12" v-if="props.auth.user" >
                                                        <form class="form-contact comment_form" id="commentForm">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <!-- <textarea class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea> -->
                                                                        <Editor :api-key="ApiKey" :init="{menubar: false }" v-model="form.text" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="form-group">
                                                                <button type="submit" @click.prevent="submitComment" class="button button-contactForm" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                                                    <span v-if="form.processing">پردازش...</span>
                                                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                                                    <span v-else >ارسال</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="comment-respond mt-5" v-else>
                                                        <p class="comment-notes">برای ارسال نظر وارد حساب کاربری خود شوید.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="row mt-60">-->
                            <!--    <div class="col-12">-->
                            <!--        <h2 class="section-title style-1 mb-30">محصولات مرتبط</h2>-->
                            <!--    </div>-->
                            <!--    <div class="col-12">-->
                            <!--        <div class="row related-products">-->
                            <!--            <div class="col-lg-3 col-md-4 col-12 col-sm-6">-->
                            <!--                <div class="product-cart-wrap hover-up">-->
                            <!--                    <div class="product-img-action-wrap">-->
                            <!--                        <div class="product-img product-img-zoom">-->
                            <!--                            <a href="shop-product-right.html" tabindex="0">-->
                            <!--                                <img class="default-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-2-1.jpg'" alt="" />-->
                            <!--                                <img class="hover-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-2-2.jpg'" alt="" />-->
                            <!--                            </a>-->
                            <!--                        </div>-->

                            <!--                        <div class="product-badges product-badges-position product-badges-mrg">-->
                            <!--                            <span class="hot">Hot</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                    <div class="product-content-wrap">-->
                            <!--                        <h2><a href="shop-product-right.html" tabindex="0">Ulstra Bass Headphone</a></h2>-->
                            <!--                        <div class="rating-result" title="90%">-->
                            <!--                            <span> </span>-->
                            <!--                        </div>-->
                            <!--                        <div class="product-price">-->
                            <!--                            <span>$238.85 </span>-->
                            <!--                            <span class="old-price">$245.8</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                </div>-->
                            <!--            </div>-->
                            <!--            <div class="col-lg-3 col-md-4 col-12 col-sm-6">-->
                            <!--                <div class="product-cart-wrap hover-up">-->
                            <!--                    <div class="product-img-action-wrap">-->
                            <!--                        <div class="product-img product-img-zoom">-->
                            <!--                            <a href="shop-product-right.html" tabindex="0">-->
                            <!--                                <img class="default-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-3-1.jpg'" alt="" />-->
                            <!--                                <img class="hover-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-4-2.jpg'" alt="" />-->
                            <!--                            </a>-->
                            <!--                        </div>-->

                            <!--                        <div class="product-badges product-badges-position product-badges-mrg">-->
                            <!--                            <span class="sale">-12%</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                    <div class="product-content-wrap">-->
                            <!--                        <h2><a href="shop-product-right.html" tabindex="0">Smart Bluetooth Speaker</a></h2>-->
                            <!--                        <div class="rating-result" title="90%">-->
                            <!--                            <span> </span>-->
                            <!--                        </div>-->
                            <!--                        <div class="product-price">-->
                            <!--                            <span>$138.85 </span>-->
                            <!--                            <span class="old-price">$145.8</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                </div>-->
                            <!--            </div>-->
                            <!--            <div class="col-lg-3 col-md-4 col-12 col-sm-6">-->
                            <!--                <div class="product-cart-wrap hover-up">-->
                            <!--                    <div class="product-img-action-wrap">-->
                            <!--                        <div class="product-img product-img-zoom">-->
                            <!--                            <a href="shop-product-right.html" tabindex="0">-->
                            <!--                                <img class="default-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-4-1.jpg'" alt="" />-->
                            <!--                                <img class="hover-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-4-2.jpg'" alt="" />-->
                            <!--                            </a>-->
                            <!--                        </div>-->

                            <!--                        <div class="product-badges product-badges-position product-badges-mrg">-->
                            <!--                            <span class="new">New</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                    <div class="product-content-wrap">-->
                            <!--                        <h2><a href="shop-product-right.html" tabindex="0">HomeSpeak 12UEA Goole</a></h2>-->
                            <!--                        <div class="rating-result" title="90%">-->
                            <!--                            <span> </span>-->
                            <!--                        </div>-->
                            <!--                        <div class="product-price">-->
                            <!--                            <span>$738.85 </span>-->
                            <!--                            <span class="old-price">$1245.8</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                </div>-->
                            <!--            </div>-->
                            <!--            <div class="col-lg-3 col-md-4 col-12 col-sm-6 d-lg-block d-none">-->
                            <!--                <div class="product-cart-wrap hover-up mb-0">-->
                            <!--                    <div class="product-img-action-wrap">-->
                            <!--                        <div class="product-img product-img-zoom">-->
                            <!--                            <a href="shop-product-right.html" tabindex="0">-->
                            <!--                                <img class="default-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-5-1.jpg'" alt="" />-->
                            <!--                                <img class="hover-img" :src="$page.props.ziggy.url +'/assets/imgs/shop/product-3-2.jpg'" alt="" />-->
                            <!--                            </a>-->
                            <!--                        </div>-->

                            <!--                        <div class="product-badges product-badges-position product-badges-mrg">-->
                            <!--                            <span class="hot">Hot</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                    <div class="product-content-wrap">-->
                            <!--                        <h2><a href="shop-product-right.html" tabindex="0">Dadua Camera 4K 2024EF</a></h2>-->
                            <!--                        <div class="rating-result" title="90%">-->
                            <!--                            <span> </span>-->
                            <!--                        </div>-->
                            <!--                        <div class="product-price">-->
                            <!--                            <span>$89.8 </span>-->
                            <!--                            <span class="old-price">$98.8</span>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                            <!--                </div>-->
                            <!--            </div>-->
                            <!--        </div>-->
                            <!--    </div>-->
                            <!--</div>-->
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card mb-50 mt-30" >
                            <div class="card-header text-bg-success">
                               سایر اطلاعات 
                            </div>
                            <div class="card-body" >
                               <div class="row ">
                                 
                                <div class="col-sm-4 d-flex justify-content-end">
                                            <select  class="form-select" >
                                                <option>
                                                <span> عادی</span>
                                                    

                                                </option>
                                                <!-- <option>
                                                    <span> مجوز ویژه</span>
                                                </option> -->
                                            </select>
                                        </div>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <div class="list-group-item">
                                        
                                    
                                        <p>مجوز عادی : استفاده توسط یک شخص در یک پروژه </p>
                                        <!-- <p>مجوز ویژه : استفاده توسط یک شخص در تعداد نامحدود پروژه </p>     -->
                                    </div>
                                <div class="list-group-item">
                                    <p v-if="props.companies" >
                                        <span class="material-symbols-outlined">check</span>
                                       خدمات  تحویل شده مدت 60 روز گارانتی رفع خطا دارد
                                    </p>
                                    
                                    <p >
                                        <span class="material-symbols-outlined">check</span>
                                        انجام فعالیت های طراحی مرتبط با موضوع و رعایت کیفیت و زمان بندی
                                    </p>
                                    <p v-if="props.companies" >
                                        <span class="material-symbols-outlined">check</span>
                                        انتخاب نام دامنه با نظر کارفرما
                                    </p>
                                    
                                    <p >
                                        <span class="material-symbols-outlined">check</span>
                                        با قرارداد
                                    </p>
                                </div>
                                </ul>
                                
                            </div>
                        </div>
                        <div class="mb-50 mb-50 mt-30">  
                            <div class="card mt-3 mb-3">
                                <div class="card-header text-bg-success">
                                    مشخصات خدمات:
                                </div>
                                <div class="card-body">
                                    <div class="d-flex bd-highlight mt-3" >
                                        <div class="bd-highlight">
                                            <h5 class="card-title">صفحات </h5>
                                        </div>
                                        <div class="ms-3 bd-highlight d-flex">   
                                            <p class="card-text">{{ props.tarahis.pages}},</p>
                                        </div>
                                    </div>
                                    <div class="d-flex bd-highlight mt-3">
                                        <div class="bd-highlight">
                                            <h5 class="card-title">امکانات</h5>
                                        </div>
                                        <div class="ms-3 bd-highlight d-flex">
                                            
                                                <p class="card-text">{{ props.tarahis.basic}},</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
.sr-only{
    left:0 !important
}
</style>

