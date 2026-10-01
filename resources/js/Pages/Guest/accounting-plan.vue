<script setup>
import { computed, watch } from 'vue';
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

                    <section class="section-padding pb-0">
                        <div class="text-center mb-40">
                            <h2>پلن‌های اشتراک حسابداری</h2>
                            <p class="text-muted mb-0">
                                پلن مناسب کسب‌وکارتان را انتخاب کنید و از امکانات حسابداری استفاده کنید.
                            </p>
                        </div>
                    </section>

                    <section v-if="props.plans.length" class="product-tabs section-padding position-relative">
                        <div class="section-title style-2">
                            <h3>پلن ها</h3>
                        </div>

                        <div class="tab-content">
                            <div class="tab-pane fade show active">
                                <div class="row product-grid-4">

                                    <div
                                        v-for="plan in props.plans"
                                        :key="plan.id"
                                        class="col-lg-1-5 col-md-4 col-12 col-sm-6"
                                    >
                                        <div class="product-cart-wrap mb-30">
                                            <div class="product-img-action-wrap">
                                                <div class="product-img product-img-zoom">
                                                    <img
                                                        v-if="plan.image && (plan.image.status == 4 || plan.image.status == 5)"
                                                        class="default-img"
                                                        loading="lazy"
                                                        decoding="async"
                                                        :src="$page.props.ziggy.url + '/storage/' + plan.image.url"
                                                        :alt="plan.name"
                                                    />
                                                    <img
                                                        v-if="plan.image && (plan.image.status == 4 || plan.image.status == 5)"
                                                        class="hover-img"
                                                        loading="lazy"
                                                        decoding="async"
                                                        :src="$page.props.ziggy.url + '/storage/' + plan.image.url"
                                                        :alt="plan.name"
                                                    />
                                                </div>
                                            </div>

                                            <div class="product-content-wrap">
                                                <div class="product-category">
                                                    اشتراک حسابداری
                                                </div>

                                                <h2>
                                                    {{ plan.name }}
                                                </h2>

                                                <div class="product-price mb-10">
                                                    <span>
                                                        {{ Number(plan.price).toLocaleString('fa-IR') }} تومان
                                                    </span>
                                                </div>

                                                <div class="mb-2">
                                                    <span class="text-muted">مدت اشتراک:</span>
                                                    <strong>
                                                        {{ Number(plan.duration_days).toLocaleString('fa-IR') }} روز
                                                    </strong>
                                                </div>

                                                <div class="mb-15">
                                                    <span class="text-muted">حداکثر کاربر:</span>
                                                    <strong>
                                                        {{ Number(plan.max_users).toLocaleString('fa-IR') }} نفر
                                                    </strong>
                                                </div>

                                                <div
                                                    v-if="plan.description"
                                                    class="mb-15 text-muted"
                                                    v-html="plan.description"
                                                ></div>

                                                <div class="product-action-1 show">
                                                    <button
                                                        type="button"
                                                        class="action-btn"
                                                        :disabled="form.processing"
                                                        @click="buy(plan)"
                                                        aria-label="خرید اشتراک"
                                                    >
                                                        <i class="fi-rs-shopping-bag-add"></i>
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    class="btn w-100 mt-10"
                                                    :disabled="form.processing"
                                                    @click="buy(plan)"
                                                >
                                                    خرید اشتراک
                                                </button>
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
