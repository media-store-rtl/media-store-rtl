<script setup>
import { computed, watch } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import moment from 'moment-jalaali';
import fa from 'moment/src/locale/fa';
import Header from './Header2.vue';
import Footer from './Footer2.vue';
import Seo from '@/Components/Seo.vue';
import swal from 'sweetalert2';

const page = usePage();

const props = defineProps({
    plan: Object,
    planAverageRating: Number,
    planTimesRated: Number,
    seller: Object,
    users: Object,
    companies: Object,
    menus: Object,
    menu: Object,
    cart: Object,
    namads: Object,
    socials: Object,
    alert: Object,
});

const favorite = computed(() => {
    if (!props.users?.id || !Array.isArray(props.plan?.favorite)) return null;
    return props.plan.favorite.find((item) => item.user_id === props.users.id) || null;
});

const form = useForm({
    id: props.plan?.id ?? null,
    model: 'App\\Models\\AccountingSubscriptionPlan',
});

const buy = () => {
    form.post(route('cart.store'), { preserveScroll: true });
};

const favoriteForm = useForm({
    id: props.plan?.id ?? null,
    type: 'App\\Models\\AccountingSubscriptionPlan',
});

const submitFavorite = () => {
    if (!props.users?.id) return;
    favoriteForm.post(route('favorite.store'), { preserveScroll: true });
};

watch(
    () => props.alert,
    (val) => {
        if (!val) return;

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
                },
            }).fire({
                title: val.text,
                icon: val.icon,
            });
        }
    },
    { immediate: true }
);

const seoDescription = computed(() =>
    String(props.plan?.description || props.plan?.tag || props.plan?.name || '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 160)
);
</script>

<template>
    <Seo
        :title="props.plan.name + ' | اشتراک حسابداری | فروشگاه مدیا'"
        :description="seoDescription"
        :image="props.plan.image?.url ? '/storage/' + props.plan.image.url : '/storage/images/logo-2.png'"
        type="service"
    />

    <Header
        :cart="props.cart"
        :alert="props.alert"
        :users="props.users"
        :companies="props.companies"
        :menus="props.menus"
        :menu="props.menu"
    />

    <main class="main">
        <div class="container mb-30">
            <div class="row">
                <div class="col-xl-8 col-lg-8">
                    <div class="product-detail accordion-detail">
                        <div class="row mb-50 mt-30">
                            <div class="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                <div class="detail-gallery">
                                    <span class="zoom-icon"><i class="fi-rs-search"></i></span>
                                    <div class="product-image-slider">
                                        <figure class="border-radius-10" v-if="props.plan.image?.url">
                                            <img
                                                :src="$page.props.ziggy.url + '/storage/' + props.plan.image.url"
                                                width="600"
                                                height="600"
                                                loading="eager"
                                                decoding="async"
                                                alt="تصویر پلن اشتراک حسابداری"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="detail-info pr-30 pl-30">
                                    <span class="stock-status in-stock">اشتراک حسابداری</span>
                                    <h2 class="title-detail">{{ props.plan.name }}</h2>

                                    <div class="product-detail-rating">
                                        <div class="product-rate-cover text-end">
                                            <div class="product-rate d-inline-block">
                                                <div
                                                    class="product-rating"
                                                    :style="'width:' + props.planAverageRating * 20 + '%'"
                                                ></div>
                                            </div>
                                            <span class="font-small ml-5 text-muted">
                                                ({{ props.planAverageRating ?? 0 }})
                                            </span>
                                        </div>
                                    </div>

                                    <div class="clearfix product-price-cover">
                                        <div class="product-price primary-color float-left">
                                            <span class="current-price text-brand">
                                                {{ Number(props.plan.price).toLocaleString('fa-IR') }}
                                            </span>
                                            <!-- <span class="font-md"> تومان</span> -->
                                        </div>
                                    </div>

                                    <div class="short-desc mb-30">
                                        <p class="font-lg" v-if="props.plan.tag">{{ props.plan.tag }}</p>
                                        <p class="font-lg">
                                            مدت اشتراک:
                                            <strong>{{ Number(props.plan.duration_days).toLocaleString('fa-IR') }} روز</strong>
                                        </p>
                                        <p class="font-lg">
                                            حداکثر کاربران:
                                            <strong>{{ Number(props.plan.max_users).toLocaleString('fa-IR') }} نفر</strong>
                                        </p>
                                    </div>

                                    <div class="attr-detail attr-size mb-30"></div>

                                    <div class="detail-extralink mb-50">
                                        <div class="detail-qty border radius">
                                            <span class="qty-val">1</span>
                                        </div>
                                        <div class="product-extra-link2">
                                            <button
                                                style="margin: 0 5px;"
                                                type="button"
                                                class="button button-add-to-cart"
                                                :disabled="form.processing"
                                                @click.prevent="buy"
                                            >
                                                <i class="fi-rs-shopping-cart"></i>
                                                {{ form.processing ? 'در حال افزودن...' : 'خرید' }}
                                            </button>
                                            <a aria-label="افزودن به علاقه‌مندی" class="action-btn hover-up" :class="favorite ? 'text-brand' : ''" href="" @click.prevent="submitFavorite">
                                                <i class="fi-rs-heart"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="font-xs">
                                        <ul class="mr-50 float-start">
                                            <li class="mb-5">
                                                انتشار:
                                                <span class="text-brand">
                                                    {{ moment(props.plan.created_at).locale('fa', fa).format('jYYYY/jM/jD') }}
                                                </span>
                                            </li>
                                        </ul>
                                        <ul class="float-start">
                                            <li class="mb-5">
                                                بروز رسانی:
                                                <span class="text-brand">
                                                    {{ moment(props.plan.updated_at).locale('fa', fa).format('jYYYY/jM/jD') }}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-info">
                    <div class="tab-style3">
                        <ul class="nav nav-tabs text-uppercase">
                            <li class="nav-item">
                                <a class="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">
                                    توضیحات
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">
                                    فروشنده
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content shop_info_tab entry-main-content">
                            <div class="tab-pane fade show active" id="Description">
                                <div v-if="props.plan.description" v-html="props.plan.description"></div>
                                <p v-else>توضیحاتی برای این پلن ثبت نشده است.</p>
                            </div>

                            <div class="tab-pane fade" id="Vendor-info">
                                <div class="vendor-logo d-flex mb-30">
                                    <img
                                        v-if="props.seller && props.seller.image"
                                        :src="$page.props.ziggy.url + '/storage/' + props.seller.image.url"
                                        :alt="props.seller.name_show"
                                    />
                                    <img
                                        v-else
                                        :src="$page.props.ziggy.url + '/storage/images/default-user.png'"
                                        alt=""
                                    />
                                    <div class="vendor-name ml-15">
                                        <h6>
                                            <Link
                                                v-if="props.seller"
                                                :href="route('profile.show', [props.seller.user_name])"
                                            >
                                                {{ props.seller.name_show }}
                                            </Link>
                                            <span v-else>فروشنده</span>
                                        </h6>
                                    </div>
                                </div>

                                <p v-if="props.seller && props.seller.profile">
                                    {{ props.seller.profile.biography }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-30 text-center">
                    <Link :href="route('accounting.plan')" class="btn btn-outline">
                        بازگشت به پلن‌های اشتراک حسابداری
                    </Link>
                </div>
                <div class="col-sm-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-30 mt-30">
                                <div class="card mt-3 mb-3">
                                    <div class="card-header text-bg-success">مشخصات اشتراک حسابداری</div>
                                    <div class="card-body">
                                        <div class="d-flex bd-highlight mt-3">
                                            <div class="bd-highlight">
                                                <h5 class="card-title">مدت اشتراک</h5>
                                            </div>
                                            <div class="ms-3 bd-highlight d-flex">
                                                <p class="card-text">
                                                    {{ Number(props.plan.duration_days).toLocaleString('fa-IR') }} روز
                                                </p>
                                            </div>
                                        </div>
                                        <div class="d-flex bd-highlight mt-3">
                                            <div class="bd-highlight">
                                                <h5 class="card-title">حداکثر کاربران</h5>
                                            </div>
                                            <div class="ms-3 bd-highlight d-flex">
                                                <p class="card-text">
                                                    {{ Number(props.plan.max_users).toLocaleString('fa-IR') }} نفر
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="card mb-30">
                                <div class="card-header text-bg-success">سایر اطلاعات</div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <div class="list-group-item">
                                            <p>
                                                <i class="fi-rs-check"></i>
                                                نام پلن: {{ props.plan.name }}
                                            </p>
                                            <p v-if="props.plan.tag">
                                                <i class="fi-rs-check"></i>
                                                {{ props.plan.tag }}
                                            </p>
                                            <p>
                                                <i class="fi-rs-check"></i>
                                                مدت اشتراک: {{ Number(props.plan.duration_days).toLocaleString('fa-IR') }} روز
                                            </p>
                                            <p>
                                                <i class="fi-rs-check"></i>
                                                حداکثر کاربران: {{ Number(props.plan.max_users).toLocaleString('fa-IR') }} نفر
                                            </p>
                                            <p>
                                                <i class="fi-rs-check"></i>
                                                مبلغ اشتراک: {{ Number(props.plan.price).toLocaleString('fa-IR') }} 
                                            </p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>    
        </div>
    </main>

    <Footer
        :companies="props.companies"
        :socials="props.socials"
        :namads="props.namads"
        :menus="props.menus"
        :path="'accounting-plan'"
    />
</template>
