<script setup>

import { computed,ref,reactive} from 'vue';
import { Head, Link, useForm,usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import swal from 'sweetalert2';
import Editor from '@/Components/Editor.vue';
import VueMultiselect from 'vue-multiselect';

const errors = computed(() => usePage().props.errors);


const props = defineProps({
    table:Object,users:Object,cart:Object,alert: Object,companies:Object,menus: Object,
    descriptions:Object,path:String,wallet:Number,cart:Object,subject:Object,
});

const form = useForm({
    table:props.table,
    subject :props.subject,
})


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
        form.post(route('dataBase.store'));  
};

</script>
<template>
<Header :cartPrice="props.cartPrice" :cartCount="props.cartCount" :cartDiscount="props.cartDiscount" :wallet="props.wallet"
        :cartCoupon="props.cartCoupon" :cartTotal="props.cartTotal" :alert="props.alert" :users="props.users"
        :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />

<main class="main-wrap rtl">
    <section class="content-main">
        <div class="row content-header">
            <div class="d-flex col-sm-12">
                <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                <td class="me-auto">
                   
                    <button  @click.prevent="submit" :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing" class="btn btn-md rounded font-sm hover-up me-auto">
                        <span v-if="form.processing">پردازش...</span>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                        <span v-else >ویرایش</span>
                    </button>

                    
                </td>
            </div>
            <div class="col-sm-12">
                <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
            </div>
        </div>
        <div class="row">
                <form class="row">
                    <div class="col-lg-12">
                        <div class="card" >
                            <div class="card-header">
                                <h4>اطلاعات پایه</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="mt-1 col-sm-6" v-for="(pro,key) in form.table" :key="key">
                                        <label for="product_name" class="form-label"> {{ key }}<span
                                                class="text-danger">*</span></label>
                                        <input v-if="form" v-model="form.table[key]" type="text" placeholder="اینجا تایپ کنید"
                                            class="form-control" id="product_name" />
                                    </div>
                                    
                                </div>
                               
                                <!-- <div class="mt-4">
                                    <label class="form-label">توضیحات کامل درباره محصول <span
                                            class="text-danger">*</span></label>
                                    <Editor  v-model="form.text" />
                                </div> -->
                            </div>
                        </div>
                </div>
            </form>
        </div>
    </section>
    <Footer :companies="props.companies" />
</main>
</template>
<style>
@import 'vue-multiselect/dist/vue-multiselect.css';
</style>
