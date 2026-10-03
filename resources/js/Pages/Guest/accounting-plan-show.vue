<script setup>
import { computed } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Header from './Header2.vue';
import Footer from './Footer2.vue';
import Seo from '@/Components/Seo.vue';

const page = usePage();

const props = defineProps({
    plan: Object,
    users: Object,
    companies: Object,
    menus: Object,
    menu: Object,
    cart: Object,
    namads: Object,
    socials: Object,
    alert: Object,
});

const form = useForm({
    id: props.plan?.id ?? null,
    model: 'App\\Models\\AccountingSubscriptionPlan',
});

const buy = () => {
    form.post(route('cart.store'), { preserveScroll: true });
};

const seoDescription = computed(() =>
    String(props.plan?.description || '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\\s+/g, ' ')
        .trim()
        .slice(0, 160)
);
</script>

<template>
    <Seo
        :title="props.plan.name + ' | اشتراک حسابداری | فروشگاه مدیا'"
        :description="seoDescription"
        :image="props.plan.image?.url ? '/storage/' + props.plan.image.url : '/storage/images/logo-2.png'"
        type="product"
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
                <div class="col-xl-8 col-lg-10 m-auto">
                    <div class="product-detail accordion-detail">
                        <div class="row mb-50 mt-30">
                            <div class="col-md-6 col-sm-12 mb-md-0 mb-sm-5">
                                <div class="detail-gallery">
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

                            <div class="col-md-6 col-sm-12">
                                <div class="detail-info pr-30 pl-30">
                                    <span class="stock-status in-stock">اشتراک حسابداری</span>
                                    <h2 class="title-detail">{{ props.plan.name }}</h2>

                                    <div class="clearfix product-price-cover">
                                        <div class="product-price primary-color float-left">
                                            <span class="current-price text-brand">
                                                {{ Number(props.plan.price).toLocaleString('fa-IR') }}
                                            </span>
                                            <span class="font-md"> تومان</span>
                                        </div>
                                    </div>

                                    <div class="short-desc mb-30">
                                        <p class="font-lg">
                                            مدت اشتراک:
                                            <strong>{{ Number(props.plan.duration_days).toLocaleString('fa-IR') }} روز</strong>
                                        </p>
                                        <p class="font-lg">
                                            حداکثر کاربران:
                                            <strong>{{ Number(props.plan.max_users).toLocaleString('fa-IR') }} نفر</strong>
                                        </p>
                                    </div>

                                    <div class="detail-extralink mb-50">
                                        <div class="product-extra-link2">
                                            <button
                                                type="button"
                                                class="button button-add-to-cart"
                                                :disabled="form.processing"
                                                @click="buy"
                                            >
                                                <i class="fi-rs-shopping-cart"></i>
                                                {{ form.processing ? 'در حال افزودن...' : 'خرید' }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="product-info">
                            <div class="tab-style3">
                                <ul class="nav nav-tabs text-uppercase">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">توضیحات</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">فروشنده</a>
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
                                                v-if="props.plan.user && props.plan.user.image"
                                                :src="$page.props.ziggy.url + '/storage/' + props.plan.user.image.url"
                                                :alt="props.plan.user.name_show"
                                            />
                                            <img
                                                v-else
                                                :src="$page.props.ziggy.url + '/storage/images/default-user.png'"
                                                alt=""
                                            />
                                            <div class="vendor-name ml-15">
                                                <h6>
                                                    <Link
                                                        v-if="props.plan.user"
                                                        :href="route('profile.show', [props.plan.user.user_name])"
                                                    >
                                                        {{ props.plan.user.name_show }}
                                                    </Link>
                                                    <span v-else>فروشنده</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <p v-if="props.plan.user && props.plan.user.profile">
                                            {{ props.plan.user.profile.biography }}
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
