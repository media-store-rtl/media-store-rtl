<script setup>
import { computed, ref } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import Editor from '@/Components/Editor.vue';

const props = defineProps({
    plan: Object, users: Object, wallet: Number, companies: Object,
    descriptions: Object, alert: Object, cart: Object,
    menus: { type: Array, default: () => [] }, path: String,
});
const page = usePage();
const errors = computed(() => page.props.errors || {});

const form = useForm({
    name: props.plan?.name ?? '',
    name_en: props.plan?.name_en ?? '',
    slug: props.plan?.slug ?? '',
    tag: props.plan?.tag ?? '',
    description: props.plan?.description ?? '',
    price: props.plan?.price ?? '',
    duration_days: props.plan?.duration_days ?? 365,
    max_users: props.plan?.max_users ?? 5,
    status: props.plan?.status ?? 4,
    group: null,
    type: null,
    category: null,
    image: null,
});

const groups = ref([]);
const types = ref([]);
const categories = ref([]);

const loadGroups = () => {
    groups.value = (props.menus || []).filter(item =>
        item.routes?.some(r => r.name === props.path)
    );

    form.group = groups.value.find(item => Number(item.id) === Number(props.plan?.group_id)) || null;
    loadTypes(false);
};

const loadTypes = (reset = true) => {
    if (reset) {
        form.type = null;
        form.category = null;
        categories.value = [];
    }

    types.value = [];
    const selected = form.group;

    selected?.children?.forEach(child => {
        if (child.routes?.some(r => r.name === props.path)) {
            types.value.push(child);
        }
    });

    if (!reset) {
        form.type = types.value.find(item => Number(item.id) === Number(props.plan?.type_id)) || null;
    }

    loadCategories(false);
};

const loadCategories = (reset = true) => {
    if (reset) form.category = null;

    categories.value = [];
    const selected = form.type;

    selected?.children?.forEach(child => {
        if (child.routes?.some(r => r.name === props.path)) {
            categories.value.push(child);
        }
    });

    if (!reset) {
        form.category = categories.value.find(item => Number(item.id) === Number(props.plan?.category_id)) || null;
    }
};

loadGroups();

const submit = () => {
    form.put(route('accountingSubscriptionAdmin.update', props.plan.id), {
        preserveScroll: true,
        forceFormData: true,
    });
};
</script>

<template>
<Header :cart="props.cart" :wallet="props.wallet" :alert="props.alert" :users="props.users" :companies="props.companies" />
<main class="main-wrap rtl">
<section class="content-main">
<div class="row content-header">
    <div class="d-flex col-sm-12" style="direction:ltr; justify-content:space-between; align-items:center;">
        <div class="d-flex align-items-center gap-2" style="direction:ltr; margin-left:auto;">
            <button @click.prevent="submit" :disabled="form.processing" class="btn btn-md rounded font-sm hover-up">
                {{ form.processing ? 'ارسال...' : 'ارسال' }}
            </button>
            <div style="direction:rtl;">
                <select v-model="form.status" class="form-select form-select-sm" style="min-width:120px;">
                    <option :value="4">فعال</option>
                    <option :value="5">غیرفعال</option>
                </select>
            </div>
        </div>
        <div class="content-title card-title" style="direction:rtl;">
            <span>ویرایش پلن اشتراک حسابداری</span>
        </div>
    </div>
    <div class="col-sm-12"><div v-if="props.descriptions" v-html="props.descriptions.text"></div></div>
</div>

<form @submit.prevent="submit" enctype="multipart/form-data">
<div class="row"><div class="col-lg-12"><div class="card mt-4"><div class="card-header"><h4>اطلاعات پلن</h4></div>
<div class="card-body">
<div class="row gx-2">
<div class="col-lg-6"><div class="mt-4"><label class="form-label">نام پلن<span class="text-danger">*</span></label><input v-model.lazy.trim="form.name" class="form-control" /><small v-if="errors.name" class="text-danger">{{ errors.name }}</small></div></div>
<div class="col-lg-6"><div class="mt-4"><label class="form-label">نام انگلیسی<span class="text-danger">*</span></label><input v-model.lazy.trim="form.name_en" class="form-control" /><small v-if="errors.name_en" class="text-danger">{{ errors.name_en }}</small></div></div>
</div>
<div class="row gx-2">
<div class="col-lg-6"><div class="mt-4"><label class="form-label">اسلاگ<span class="text-danger">*</span></label><input v-model.lazy.trim="form.slug" class="form-control" /><small v-if="errors.slug" class="text-danger">{{ errors.slug }}</small></div></div>
<div class="col-lg-6"><div class="mt-4"><label class="form-label">تگ سئو<span class="text-danger">*</span></label><textarea v-model.lazy.trim="form.tag" class="form-control" rows="4"></textarea><small v-if="errors.tag" class="text-danger">{{ errors.tag }}</small></div></div>
</div>
<div class="row gx-2">
<div class="col-lg-4"><div class="mt-4"><label class="form-label">قیمت (تومان)<span class="text-danger">*</span></label><input v-model.lazy="form.price" type="number" min="0" class="form-control" /><small v-if="errors.price" class="text-danger">{{ errors.price }}</small></div></div>
<div class="col-lg-4"><div class="mt-4"><label class="form-label">مدت اشتراک (روز)<span class="text-danger">*</span></label><input v-model.lazy="form.duration_days" type="number" min="1" class="form-control" /><small v-if="errors.duration_days" class="text-danger">{{ errors.duration_days }}</small></div></div>
<div class="col-lg-4"><div class="mt-4"><label class="form-label">حداکثر کاربر<span class="text-danger">*</span></label><input v-model.lazy="form.max_users" type="number" min="1" class="form-control" /><small v-if="errors.max_users" class="text-danger">{{ errors.max_users }}</small></div></div>
</div>
<div class="row gx-2">
<div class="col-lg-6"><div class="mt-4"><label class="form-label">گروه اشتراک<span class="text-danger">*</span></label><select v-model="form.group" @change="loadTypes()" class="form-select"><option v-for="item in groups" :key="item.id" :value="item">{{ item.name }}</option></select><small v-if="errors.group" class="text-danger">{{ errors.group }}</small></div></div>
<div class="col-lg-6"><div class="mt-4"><label class="form-label">نوع اشتراک<span class="text-danger">*</span></label><select v-model="form.type" @change="loadCategories()" class="form-select"><option v-for="item in types" :key="item.id" :value="item">{{ item.name }}</option></select><small v-if="errors.type" class="text-danger">{{ errors.type }}</small></div></div>
<div class="col-lg-6"><div class="mt-4"><label class="form-label">دسته‌بندی اشتراک</label><select v-model="form.category" class="form-select"><option :value="null">بدون دسته‌بندی</option><option v-for="item in categories" :key="item.id" :value="item">{{ item.name }}</option></select></div></div>

</div>
<div class="mt-4"><label class="form-label">تصویر کاور</label>
<div v-if="props.plan?.image?.url" class="mb-3"><img :src="$page.props.ziggy.url + '/storage/' + props.plan.image.url" alt="تصویر فعلی پلن" style="width:120px;height:120px;object-fit:cover;border-radius:8px;"></div>
<input class="form-control" type="file" @input="form.image = $event.target.files[0]" accept="image/*" />
<small class="text-muted d-block mt-2">اگر تصویر جدید انتخاب نکنید، تصویر فعلی حفظ می‌شود.</small><small v-if="errors.image" class="text-danger">{{ errors.image }}</small></div>
<div class="mt-4"><label class="form-label">توضیحات<span class="text-danger">*</span></label><Editor v-model.lazy="form.description" /><small v-if="errors.description" class="text-danger">{{ errors.description }}</small></div>
</div></div></div></div>
</form>
</section>
<Footer :companies="props.companies" />
</main>
</template>
