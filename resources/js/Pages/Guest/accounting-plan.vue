<script setup>
import { computed, watch } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { useForm, usePage } from '@inertiajs/vue3';
import Header from './Header2.vue';
import Footer from './Footer2.vue';
import Seo from '@/Components/Seo.vue';
import swal from 'sweetalert2';

const page = usePage();

const props = defineProps({
    auth: Object,
    menus: Object,
    menu: Object,
    alert: Object,
    users: Object,
    companies: Object,
    cart: Object,
    plans: { type: Array, default: () => [] },
    namads: Object,
    socials: Object,
    path: String,
});

const errors = computed(() => page.props.errors || {});
const seoHasQuery = computed(() => String(page.url || '').includes('?'));

const form = useForm({
    id: null,
    model: 'App\\Models\\AccountingSubscriptionPlan',
});

const buy = (plan) => {
    form.id = plan.id;
    form.model = 'App\\Models\\AccountingSubscriptionPlan';
    form.post(route('cart.store'), {
        preserveScroll: true,
    });
};

watch(() => props.alert, (val) => {
    if (!val) return;

    swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    }).fire({
        title: val.text || val.title,
        icon: val.icon || 'info',
    });
}, { immediate: true });

watch(errors, (newErrors) => {
    const errorMessages = Object.values(newErrors)
        .flat()
        .join('<br>');

    if (errorMessages) {
        swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
        }).fire({
            title: errorMessages,
            icon: 'error',
        });
    }
}, { immediate: true });

const titleSeo = 'پلن‌های اشتراک حسابداری | فروشگاه مدیا';
const descriptionSeo = 'مشاهده و خرید پلن‌های اشتراک حسابداری فروشگاه مدیا با قیمت، مدت اشتراک و تعداد کاربران مشخص.';
</script>

<template>
    <Seo
        :title="titleSeo"
        :description="descriptionSeo"
        :noIndex="seoHasQuery"
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
        <div class="mb-30 container">
            <div class="row flex-row-reverse">
                <div class="col-lg-12">

                    <section class="home-slider position-relative mb-30">
                        <div class="home-slide-cover mt-30">
                            <div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">

                                <div
                                    class="single-hero-slider single-animation-wrap"
                                    style="background-image: url(assets/imgs/slider/slider-3.png)"
                                >
                                    <div class="slider-content">
                                        <h1 class="display-2 mb-40">
                                            پلن‌های اشتراک حسابداری
                                            <br />
                                            متناسب با کسب‌وکار شما
                                        </h1>
                                    </div>
                                </div>

                                <div
                                    class="single-hero-slider single-animation-wrap"
                                    style="background-image: url(assets/imgs/slider/slider-4.png)"
                                >
                                    <div class="slider-content">
                                        <h1 class="display-2 mb-40">
                                            مدیریت مالی ساده‌تر
                                            <br />
                                            با اشتراک حسابداری
                                        </h1>
                                    </div>
                                </div>

                            </div>
                            <div class="slider-arrow hero-slider-1-arrow"></div>
                        </div>
                    </section>

                    <body id="tinymce" class="mce-content-body accounting-intro">
                        <p><strong>پلن‌های اشتراک حسابداری – ساده، کاربردی و متناسب با نیاز کسب‌وکار</strong></p>
                        <p>پلن‌های اشتراک حسابداری فروشگاه مدیا برای مدیریت بهتر امور مالی و استفاده از امکانات حسابداری طراحی شده‌اند. پلن مناسب خود را انتخاب کنید و با توجه به مدت اشتراک و تعداد کاربران، سرویس مورد نیازتان را تهیه کنید.</p>
                        <p>📦 هر پلن شامل مشخصات شفاف درباره مدت اشتراک، تعداد کاربران و هزینه است تا بتوانید انتخاب دقیق‌تری داشته باشید.</p>
                    </body>

                    <section v-if="props.plans.length" class="product-tabs section-padding position-relative">
                        <div class="section-title style-2">
                            <h3>پلن ها</h3>
                            <ul class="nav nav-tabs links" id="myTab" role="tablist"></ul>
                        </div>

                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active">
                                <div class="row product-grid-4">
                                    <div
                                        v-for="(plan, index) in props.plans"
                                        :key="plan.id || index"
                                        class="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                    >
                                        <div class="product-cart-wrap mb-30">
                                            <div class="product-img-action-wrap">
                                                <div class="product-img product-img-zoom">
                                                    <a
                                                        href="#"
                                                        @click.prevent
                                                        v-if="plan.image && (plan.image.status == 4 || plan.image.status == 5)"
                                                    >
                                                        <img
                                                            class="default-img"
                                                            loading="lazy"
                                                            decoding="async"
                                                            :src="$page.props.ziggy.url + '/storage/' + plan.image.url"
                                                            width="300"
                                                            height="300"
                                                            alt=""
                                                        />
                                                        <img
                                                            class="hover-img"
                                                            loading="lazy"
                                                            decoding="async"
                                                            :src="$page.props.ziggy.url + '/storage/' + plan.image.url"
                                                            width="300"
                                                            height="300"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div class="product-badges product-badges-position product-badges-mrg">
                                                </div>
                                            </div>

                                            <div class="product-content-wrap">
                                                <div class="product-category">
                                                    <span>اشتراک حسابداری</span>
                                                </div>

                                                <h2>{{ plan.name }}</h2>

                                                <div>
                                                    <span class="font-small text-muted">
                                                        مدت اشتراک {{ Number(plan.duration_days).toLocaleString('fa-IR') }} روز
                                                    </span>
                                                </div>
                                                <div>
                                                    <span class="font-small text-muted">
                                                        حداکثر {{ Number(plan.max_users).toLocaleString('fa-IR') }} کاربر
                                                    </span>
                                                </div>
                                                <div v-if="plan.description">
                                                    <span class="font-small text-muted plan-description" v-html="plan.description"></span>
                                                </div>
                                                <div class="product-card-bottom">
                                                    <div class="product-price">
                                                        <span>{{ Number(plan.price).toLocaleString('fa-IR') }}</span>
                                                    </div>
                                                    <div class="add-cart">
                                                        <button
                                                            type="button"
                                                            class="add"
                                                            :disabled="form.processing"
                                                            @click="buy(plan)"
                                                        >
                                                            <i class="fi-rs-shopping-bag-add mr-5"></i>خرید
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section v-else class="section-padding">
                        <div class="alert alert-info text-center">
                            در حال حاضر پلن فعالی برای فروش وجود ندارد.
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </main>

    <Footer
        :companies="props.companies"
        :socials="props.socials"
        :namads="props.namads"
        :menus="props.menus"
        :path="props.path"
    />
</template>

<style>
.accounting-intro {
    direction: rtl;
    line-height: 2;
    margin: 25px 0 5px;
}
.accounting-intro p {
    margin-bottom: 12px;
}
.plan-description {
    line-height: 1.9;
    display: block;
    max-height: 80px;
    overflow: hidden;
}
.product-card-bottom .add-cart button.add {
    border: 0;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
}
.product-card-bottom .add-cart button.add:disabled {
    opacity: .6;
    cursor: not-allowed;
}
</style>
