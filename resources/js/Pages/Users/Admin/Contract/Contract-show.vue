<script setup>

import { computed,ref,watch} from 'vue';
import {useForm, usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import swal from 'sweetalert2';
import Editor from '@/Components/Editor.vue';

const errors = computed(() => usePage().props.errors);


const props = defineProps({
    users:Object,cartPrice:Number,cartCount:Number,cartDiscount:Number,cartCoupon:Number,cartTotal:Number,wallet:Number,
    notifications:Object,companies:Object,descriptions:Object,path:String,alert:Object, menus: Object,contract:Object,
    cart:Object
});

const form =  useForm({
    id:props.contract.id,status:props.contract.status,
    file:props.contract.file,
});

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

watch(() => props.alert, (val) => {
  if (val) {
    if (val.title) {
      swal.fire(val.title, val.text, val.icon);
    } else {
      swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', swal.stopTimer);
          toast.addEventListener('mouseleave', swal.resumeTimer);
        }
      }).fire({
        title: val.text,
        icon: val.icon,
      });
    }
  }
});

const submit = () =>{

    if(form.id == null && form.file == null)
    {
        let text
        text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    else
    {
        form.post(route('contractAdmin.store'))
    }
};

</script>
<template>
<Header :cart="props.cart" :cartCount="props.cartCount" :cartDiscount="props.cartDiscount" :wallet="props.wallet"
        :cartCoupon="props.cartCoupon" :cartTotal="props.cartTotal" :alert="props.alert" :users="props.users"
        :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
<main class="main-wrap rtl">
    <section class="content-main">
        <div class="row content-header">
                    <div class="d-flex col-sm-12">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <td class="d-flex me-auto">
                            <select v-model.lazy="form.status" class="form-select" >
                                <option value="0">ثبت</option>
                                <option value="1">انتظار</option>
                                <option value="2">مسدود</option>
                                <option value="3">منقضی</option>
                                <option value="4">تایید</option>
                                <option value="5">متوقف</option>
                        </select>
                            <button @click.prevent="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="btn btn-md rounded font-sm hover-up">
                                <span v-if="form.processing">پردازش...</span>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                <span v-else >ارسال</span>
                            </button>
                        </td>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
        <form >
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mt-4">
                        <div class="card-header">
                            <h4>اطلاعات</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-lg-12">
                                <div class="row  gx-3">
                                    <div class="row">
                                        <div class="card-body col-sm-6">
                                            <label class="form-label">فایل <span class="text-danger">*</span></label>
                                            <div class="input-upload">
                                                <div class="mt-2">
                                                    <a v-if="form.file && form.file.url" :href="$page.props.ziggy.url+'/storage/'+form.file.url">دانلود</a>
                                                </div>

                                                <input class="form-control mt-5" type="file" @input="form.file = $event.target.files[0]"
                                                    id="file" accept="zip/rar/*" />
                                                <progress v-if="form.progress" :value="form.progress.percentage" max="5">
                                                    {{ form.progress.percentage }}%
                                                </progress>
                                            </div>

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
