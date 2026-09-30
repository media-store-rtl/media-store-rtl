<script setup>
import { computed } from 'vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    plans: { type: Array, default: () => [] },
});

const form = useForm({
    id: null,
    model: 'App\\Models\\Product',
});

const buy = (plan) => {
    form.id = plan.product_id;
    form.model = 'App\\Models\\Product';
    form.post(route('cart.store'));
};
</script>

<template>
    <main class="main-wrap rtl">
        <section class="content-main">
            <div class="content-header text-center">
                <h1 class="content-title">اشتراک حسابداری صنعتی</h1>
                <p>پلن موردنظر را انتخاب کنید و برای خرید وارد حساب کاربری شوید.</p>
            </div>

            <div v-if="!props.plans.length" class="alert alert-info">
                در حال حاضر پلن فعالی برای فروش وجود ندارد.
            </div>

            <div v-else class="row justify-content-center">
                <div v-for="plan in props.plans" :key="plan.id" class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body d-flex flex-column">
                            <h4 class="mb-3">{{ plan.name }}</h4>
                            <p v-if="plan.description" class="text-muted">{{ plan.description }}</p>

                            <div class="mb-2">
                                مدت: <strong>{{ plan.duration_days.toLocaleString('fa-IR') }} روز</strong>
                            </div>
                            <div class="mb-4">
                                حداکثر کاربران: <strong>{{ plan.max_users.toLocaleString('fa-IR') }} نفر</strong>
                            </div>

                            <div class="mt-auto">
                                <div class="fs-4 fw-bold mb-3">
                                    {{ Number(plan.price).toLocaleString('fa-IR') }} تومان
                                </div>
                                <button
                                    class="btn btn-primary w-100"
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
        </section>
    </main>
</template>
