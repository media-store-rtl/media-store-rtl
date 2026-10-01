<script setup>
import { computed, ref } from 'vue';
import { useForm, usePage, Link } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import Editor from '@/Components/Editor.vue';

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
    name_en: '',
    slug: '',
    tag: '',
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
                            <div class="card-header">
                                <h4>اطلاعات</h4>
                            </div>
                            <div class="card-body">
                                <div class="col-lg-12">
                                    <div class="row gx-2">
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">نام پلن<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy.trim="form.name" placeholder="اینجا تایپ کنید" type="text" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.name" class="text-danger">{{ errorBag.name }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4 me-1">
                                                <label class="form-label">نام انگلیسی<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy.trim="form.name_en" placeholder="اینجا تایپ کنید" type="text" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.name_en" class="text-danger">{{ errorBag.name_en }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="row gx-2">
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">اسلاگ<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy.trim="form.slug" placeholder="اینجا تایپ کنید" type="text" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.slug" class="text-danger">{{ errorBag.slug }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">تگ سئو: طول کارکتر بین ۱۲۰ تا ۱۶۰ کاراکتر و شامل کلمه کلیدی اصلی<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <textarea v-model.lazy.trim="form.tag" class="form-control" cols="30" rows="4" placeholder="اینجا تایپ کنید"></textarea>
                                                </div>
                                                <small v-if="errorBag.tag" class="text-danger">{{ errorBag.tag }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="row gx-2">
                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <label class="form-label">قیمت (تومان)<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy="form.price" type="number" min="0" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.price" class="text-danger">{{ errorBag.price }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <label class="form-label">مدت اشتراک (روز)<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy="form.duration_days" type="number" min="1" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.duration_days" class="text-danger">{{ errorBag.duration_days }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <label class="form-label">حداکثر کاربر<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy="form.max_users" type="number" min="1" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.max_users" class="text-danger">{{ errorBag.max_users }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="row gx-2">
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">گروه اشتراک<span class="text-danger">*</span></label>
                                                <select v-model.lazy="form.group" class="form-select" @change="group">
                                                    <option v-if="menus.length > 0" :value="menu" v-for="(menu, index) in menus" :key="index">{{ menu.name }}</option>
                                                    <option v-else disabled>گزینه ای یافت نشد.</option>
                                                </select>
                                                <small v-if="errorBag.group" class="text-danger">{{ errorBag.group }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">نوع اشتراک<span class="text-danger">*</span></label>
                                                <select v-model.lazy="form.type" @change="type" class="form-select">
                                                    <option v-if="menu.length > 0 && form.group" v-for="(type, index) in menu" :key="index" :value="type">{{ type.name }}</option>
                                                    <option v-else disabled>گزینه ای یافت نشد.</option>
                                                </select>
                                                <small v-if="errorBag.type" class="text-danger">{{ errorBag.type }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">دسته‌بندی اشتراک<span class="text-danger">*</span></label>
                                                <select v-model.lazy="form.category" class="form-select">
                                                    <option :value="null">بدون دسته‌بندی</option>
                                                    <option v-if="sections.length > 0 && form.type" v-for="(category, index) in sections" :key="index" :value="category">{{ category.name }}</option>
                                                </select>
                                                <small v-if="errorBag.category" class="text-danger">{{ errorBag.category }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="row gx-2">
                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <label class="form-label">قیمت (تومان)<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy="form.price" type="number" min="0" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.price" class="text-danger">{{ errorBag.price }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <label class="form-label">مدت اشتراک (روز)<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy="form.duration_days" type="number" min="1" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.duration_days" class="text-danger">{{ errorBag.duration_days }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <label class="form-label">حداکثر کاربر<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy="form.max_users" type="number" min="1" class="form-control" />
                                                </div>
                                                <small v-if="errorBag.max_users" class="text-danger">{{ errorBag.max_users }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="row gx-2">
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">گروه اشتراک<span class="text-danger">*</span></label>
                                                <select v-model.lazy="form.group" class="form-select" @change="group">
                                                    <option v-if="menus.length > 0" :value="menu" v-for="(menu, index) in menus" :key="index">{{ menu.name }}</option>
                                                    <option v-else disabled>گزینه ای یافت نشد.</option>
                                                </select>
                                                <small v-if="errorBag.group" class="text-danger">{{ errorBag.group }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">نوع اشتراک<span class="text-danger">*</span></label>
                                                <select v-model.lazy="form.type" @change="type" class="form-select">
                                                    <option v-if="menu.length > 0 && form.group" v-for="(type, index) in menu" :key="index" :value="type">{{ type.name }}</option>
                                                    <option v-else disabled>گزینه ای یافت نشد.</option>
                                                </select>
                                                <small v-if="errorBag.type" class="text-danger">{{ errorBag.type }}</small>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">دسته‌بندی اشتراک</label>
                                                <select v-model.lazy="form.category" class="form-select">
                                                    <option :value="null">بدون دسته‌بندی</option>
                                                    <option v-if="sections.length > 0 && form.type" v-for="(category, index) in sections" :key="index" :value="category">{{ category.name }}</option>
                                                </select>
                                                <small v-if="errorBag.category" class="text-danger">{{ errorBag.category }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="mt-4">
                                        <label class="form-label">تصویر کاور<span class="text-danger">*</span></label>
                                        <div class="input-upload">
                                            <input class="form-control" type="file" @input="form.image = $event.target.files[0]" id="image" accept="image/*" />
                                            <progress v-if="form.progress" :value="form.progress.percentage" max="5">
                                                {{ form.progress.percentage }}%
                                            </progress>
                                        </div>
                                        <small v-if="errorBag.image" class="text-danger">{{ errorBag.image }}</small>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="mt-4">
                                        <label class="form-label">توضیحات<span class="text-danger">*</span></label>
                                        <div class="row gx-2">
                                            <Editor v-model.lazy="form.description" />
                                        </div>
                                        <small v-if="errorBag.description" class="text-danger">{{ errorBag.description }}</small>
                                    </div>
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
