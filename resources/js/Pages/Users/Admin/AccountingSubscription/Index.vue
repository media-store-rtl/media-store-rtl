<script setup>
import { computed, ref } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';

const props = defineProps({
    plans: { type: Array, default: () => [] },
});

const page = usePage();
const errorBag = computed(() => page.props.errors || {});
const success = computed(() => page.props.flash?.success || null);

const form = useForm({
    name: '',
    slug: '',
    description: '',
    price: '',
    duration_days: 365,
    max_users: 5,
    is_active: true,
});

const submit = () => {
    form.post(route('accountingSubscriptionAdmin.store'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('name', 'slug', 'description', 'price');
            form.duration_days = 365;
            form.max_users = 5;
            form.is_active = true;
        },
    });
};
</script>

<template>
    <Header />

    <main class="main-wrap rtl">
        <section class="content-main">
            <div class="content-header">
                <h2 class="content-title">پلن‌های اشتراک حسابداری</h2>
                <p>ساخت پلن اشتراک فقط از این بخش انجام می‌شود. پس از ساخت، پلن می‌تواند برای خرید در سایت فعال باشد.</p>
            </div>

            <div v-if="success" class="alert alert-success mb-4">{{ success }}</div>

            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="mb-4">ساخت پلن جدید</h5>

                    <form @submit.prevent="submit">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">نام پلن</label>
                                <input v-model="form.name" class="form-control" placeholder="مثلاً اشتراک یک‌ساله حسابداری">
                                <small v-if="errorBag.name" class="text-danger">{{ errorBag.name }}</small>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label class="form-label">Slug اختیاری</label>
                                <input v-model="form.slug" class="form-control" placeholder="accounting-annual">
                            </div>

                            <div class="col-12 mb-3">
                                <label class="form-label">توضیحات</label>
                                <textarea v-model="form.description" class="form-control" rows="3"></textarea>
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="form-label">قیمت (تومان)</label>
                                <input v-model="form.price" type="number" min="0" class="form-control">
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="form-label">مدت اشتراک (روز)</label>
                                <input v-model="form.duration_days" type="number" min="1" class="form-control">
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="form-label">حداکثر کاربر</label>
                                <input v-model="form.max_users" type="number" min="1" class="form-control">
                            </div>

                            <div class="col-12 mb-3">
                                <label class="form-check">
                                    <input v-model="form.is_active" type="checkbox" class="form-check-input">
                                    <span class="form-check-label">فعال و قابل خرید باشد</span>
                                </label>
                            </div>
                        </div>

                        <button class="btn btn-primary" :disabled="form.processing">
                            {{ form.processing ? 'در حال ثبت...' : 'ساخت پلن' }}
                        </button>
                    </form>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="mb-4">پلن‌های ساخته‌شده</h5>

                    <div v-if="plans.length" class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>نام</th>
                                    <th>قیمت</th>
                                    <th>مدت</th>
                                    <th>کاربر</th>
                                    <th>وضعیت</th>
                                    <th>محصول فروش</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="plan in plans" :key="plan.id">
                                    <td>{{ plan.name }}</td>
                                    <td>{{ Number(plan.price).toLocaleString('fa-IR') }}</td>
                                    <td>{{ plan.duration_days }} روز</td>
                                    <td>{{ plan.max_users }} نفر</td>
                                    <td>{{ plan.is_active ? 'فعال' : 'غیرفعال' }}</td>
                                    <td>#{{ plan.product_id }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p v-else class="mb-0">هنوز پلنی ساخته نشده است.</p>
                </div>
            </div>
        </section>

        <Footer />
    </main>
</template>
