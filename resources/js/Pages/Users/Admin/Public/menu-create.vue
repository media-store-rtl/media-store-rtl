<script setup>

import { computed,ref} from 'vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);


const props = defineProps({
    users:Object,cartPrice:Number,cartCount:Number,cartDiscount:Number,cartCoupon:Number,cartTotal:Number,
    notifications:Object,companies:Object,descriptions:Object,path:String,alert:Object, menus: Object,
    wallet:Number,cart:Object
});

const form =  useForm({section:null,parent_id:null,name:['']});

const validate = (text)=>{
    swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
    }}).fire({
        title: text,
        icon:'error',
    })
}


const submit = () => {

    const names = form.name
        .map(item => item.trim())
        .filter(item => item !== '')

    if (names.length === 0) {
        validate('موارد ستاره دار الزامی است.')
        return
    }

    form.transform(data => ({
        ...data,
        name: names
    })).post(route('menu.store'))
}

</script>
<template>
<Header :cart="props.cart" :cartPrice="props.cartPrice" :cartCount="props.cartCount" :cartDiscount="props.cartDiscount" :wallet="props.wallet"
            :cartCoupon="props.cartCoupon" :cartTotal="props.cartTotal" :alert="props.alert" :users="props.users"
            :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
<main class="main-wrap rtl">
    <section class="content-main">
        <div class="row content-header">
                    <div class="d-flex col-sm-12">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <td class="me-auto">
                            <button @click.prevent="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="btn btn-md rounded font-sm hover-up">
                                <span v-if="form.processing">پردازش...</span>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                <span v-else >ایجاد</span>
                            </button>
                        </td>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
        <form >
            <div class="row">
                <div class="col-lg-6">
                    <div class="card mt-4">
                        <div class="card-header">
                            <h4>اطلاعات</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-lg-12">
                                <div class="row  gx-2">
                                    <div class="col-lg-6">
                                        <div class="mt-4">
                                            <label class="form-label">نام<span class="text-danger">*</span></label>
                                            <div class="row gx-2">
                                                <!-- <input v-model.lazy.trim="form.name" placeholder="اینجا تایپ کنید" type="text" class="form-control" /> -->
                                                 <div v-for="(item, index) in form.name" :key="index" class="d-flex mb-2">
                                                    <input
                                                        v-model.lazy.trim="form.name[index]"
                                                        placeholder="اینجا تایپ کنید"
                                                        type="text"
                                                        class="form-control"
                                                    />

                                                    <button
                                                        type="button"
                                                        class="btn btn-success ms-2"
                                                        @click="form.name.push('')"
                                                    >
                                                        +
                                                    </button>

                                                    <button
                                                        v-if="form.name.length > 1"
                                                        type="button"
                                                        class="btn btn-danger ms-2"
                                                        @click="form.name.splice(index, 1)"
                                                    >
                                                        -
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mt-4">
                                            <label class="form-label">شناسه والد</label>
                                            <select class="form-select" v-model.lazy="form.parent_id">
                                                <option v-if="props.menus && props.menus.length > 0" v-for="menu,index in props.menus" :key="index" :value="menu.id">
                                                    <span style="vertical-align: inherit;"> </span>
                                                    <span style="vertical-align: inherit;">{{menu.name}}
                                                        (
                                                        <span style="vertical-align: inherit;" v-if="menu.sections" v-for="section,index in menu.sections" :key="index"> قسمت:{{ section.name }}</span>
                                                        )
                                                    </span>
                                                </option>
                                                <option v-else disabled>گزینه ای یافت نشد.</option>
                                            </select>
                                        </div>
                                    </div>
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
