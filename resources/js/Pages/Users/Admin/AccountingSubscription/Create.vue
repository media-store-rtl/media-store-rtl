<script setup>
import { computed, ref } from 'vue';
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
    menus: {
        type: Array,
        default: () => [],
    },
    path: String,
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
    group: null,
    type: null,
    category: null,
    image: null,
});

const menus = ref([]);
const menu = ref([]);
const sections = ref([]);

if (props.menus && props.menus.length > 0) {
    props.menus.forEach(element => {
        if (element.sections?.length > 0 && element.routes?.length > 0) {
            element.routes.forEach(route => {
                if (route.name === props.path) {
                    menus.value.push(element);
                }
            });
        }
    });
}

const group = () => {
    if (menu.value.length > 0) {
        menu.value.splice(0);
    }
    sections.value.splice(0);
    form.type = null;
    form.category = null;

    menus.value.forEach(element => {
        if (form.group === element && element.children?.length > 0) {
            element.children.forEach(child => {
                if (child.routes?.some(route => route.name === props.path)) {
                    menu.value.push(child);
                }
            });
        }
    });
};

const type = () => {
    if (sections.value.length > 0) {
        sections.value.splice(0);
    }
    form.category = null;

    menu.value.forEach(element => {
        if (form.type === element && element.children?.length > 0) {
            element.children.forEach(child => {
                if (child.routes?.some(route => route.name === props.path)) {
                    sections.value.push(child);
                }
            });
        }
    });
};

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
                <div class="d-flex col-sm-12" style="direction:ltr; justify-content:space-between; align-items:center;">
                    <div style="direction:rtl;">
                        <button @click.prevent="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="btn btn-md rounded font-sm hover-up">
                            <span v-if="form.processing">پردازش...</span>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                            <span v-else>ایجاد</span>
                        </button>
                    </div>
                    <div class="content-title card-title" style="direction:rtl;">
                        <span v-if="props.descriptions" v-html="props.descriptions.subject"></span>
                        <span v-else>ایجاد پلن اشتراک حسابداری</span>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                </div>
            </div>

            <form @submit.prevent="submit" enctype="multipart/form-data">
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
                                </div>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-header">
                                <h4>اطلاعات تکمیلی</h4>
                            </div>
                            <div class="card-body">
                                <div class="row gx-2">
                                    <div class="col-lg-6">
                                        <label class="form-label">گروه اشتراک<span class="text-danger">*</span></label>
                                        <select v-model.lazy="form.group" class="form-select" @change="group">
                                            <option v-if="menus.length > 0" :value="menu" v-for="(menu, index) in menus" :key="index">{{ menu.name }}</option>
                                            <option v-else disabled>گزینه ای یافت نشد.</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="form-label">نوع اشتراک<span class="text-danger">*</span></label>
                                        <select v-model.lazy="form.type" @change="type" class="form-select">
                                            <option v-if="menu.length > 0 && form.group" v-for="(type, index) in menu" :key="index" :value="type">{{ type.name }}</option>
                                            <option v-else disabled>گزینه ای یافت نشد.</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-6 mt-4">
                                        <label class="form-label">دسته‌بندی اشتراک</label>
                                        <select v-model.lazy="form.category" class="form-select">
                                            <option :value="null">بدون دسته‌بندی</option>
                                            <option v-if="sections.length > 0 && form.type" v-for="(category, index) in sections" :key="index" :value="category">{{ category.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-header"><h4>تصویر پلن</h4></div>
                            <div class="card-body">
                                <input class="form-control" type="file" @input="form.image = $event.target.files[0]" id="image" accept="image/*">
                                <small v-if="errorBag.image" class="text-danger">{{ errorBag.image }}</small>
                                <progress v-if="form.progress" class="mt-2" :value="form.progress.percentage" max="100">
                                    {{ form.progress.percentage }}%
                                </progress>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-header">
                                <h4>وضعیت</h4>
                            </div>
                            <div class="card-body">
                                <div class="col-lg-6">
                                    <label class="form-label">وضعیت</label>
                                    <select v-model.lazy="form.status" class="form-select">
                                        <option :value="4">فعال و قابل خرید</option>
                                        <option :value="5">غیرفعال</option>
                                    </select>
                                    <small v-if="errorBag.status" class="text-danger">{{ errorBag.status }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <Footer :companies="props.companies" />
    </main>
</template>
