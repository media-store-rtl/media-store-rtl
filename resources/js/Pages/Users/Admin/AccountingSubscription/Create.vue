<script setup>
import { computed } from 'vue';
import { useForm, usePage, Link } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';

const props = defineProps({
    users: Object,
    wallet: Number,
    companies: Object,
    descriptions: Object,
    alert: Object,
    cart: Object,
});

const page = usePage();
const errorBag = computed(() => page.props.errors || {});
const form = useForm({
    name: '',
    slug: '',
    description: '',
    price: '',
    duration_days: 365,
    max_users: 5,
    status: 4,
});

const submit = () => {
    form.post(route('accountingSubscriptionAdmin.store'), {
        preserveScroll: true,
    });
};
</script>

<template>
    <Header :cart="props.cart" :wallet="props.wallet" :alert="props.alert" :users="props.users" :companies="props.companies" />

    <div class="screen-overlay"></div>

    <main class="main-wrap rtl">
        <section class="content-main">
            <div class="row content-header">
                <div class="d-flex col-sm-12 align-items-center">
                    <div class="content-title card-title">
                        <span v-if="props.descriptions" v-html="props.descriptions.subject"></span>
                        <span v-else>ایجاد پلن اشتراک حسابداری</span>
                    </div>
                    <div style="margin-right:auto; text-align:left;">
                        <Link :href="route('accountingSubscriptionAdmin.index')" class="btn btn-light btn-sm rounded font-sm">بازگشت</Link>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                </div>
            </div>

            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card mt-4">
                            <div class="card-header"><h4>اطلاعات پلن</h4></div>
                            <div class="card-body">
                                <div class="row gx-2">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">نام پلن</label>
                                        <input v-model="form.name" class="form-control" placeholder="مثلاً اشتراک یک‌ساله حسابداری">
                                        <small v-if="errorBag.name" class="text-danger">{{ errorBag.name }}</small>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Slug اختیاری</label>
                                        <input v-model="form.slug" class="form-control" placeholder="accounting-annual">
                                        <small v-if="errorBag.slug" class="text-danger">{{ errorBag.slug }}</small>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label class="form-label">توضیحات</label>
                                        <textarea v-model="form.description" class="form-control" rows="4"></textarea>
                                        <small v-if="errorBag.description" class="text-danger">{{ errorBag.description }}</small>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label">قیمت (تومان)</label>
                                        <input v-model="form.price" type="number" min="0" class="form-control">
                                        <small v-if="errorBag.price" class="text-danger">{{ errorBag.price }}</small>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label">مدت اشتراک (روز)</label>
                                        <input v-model="form.duration_days" type="number" min="1" class="form-control">
                                        <small v-if="errorBag.duration_days" class="text-danger">{{ errorBag.duration_days }}</small>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label">حداکثر کاربر</label>
                                        <input v-model="form.max_users" type="number" min="1" class="form-control">
                                        <small v-if="errorBag.max_users" class="text-danger">{{ errorBag.max_users }}</small>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label">وضعیت</label>
                                        <select v-model="form.status" class="form-control">
                                            <option :value="4">فعال و قابل خرید</option>
                                            <option :value="5">غیرفعال</option>
                                        </select>
                                        <small v-if="errorBag.status" class="text-danger">{{ errorBag.status }}</small>
                                    </div>
                                </div>
                                <button class="btn btn-primary" :disabled="form.processing">
                                    {{ form.processing ? 'در حال ثبت...' : 'ساخت پلن' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <Footer :companies="props.companies" />
    </main>
</template>