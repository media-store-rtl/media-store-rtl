<script setup>

import { computed,ref} from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import swal from 'sweetalert2';
import Editor from '@/Components/Editor.vue';

const errors = computed(() => usePage().props.errors);


const props = defineProps({
    users:Object,cartPrice:Number,cartCount:Number,cartDiscount:Number,cartCoupon:Number,cartTotal:Number,
    notifications:Object,companies:Object,descriptions:Object,alert:Object,menus:Object,path:String,
    wallet:Number,cart:Object
});

const form =  useForm({title_en:null,title:null,text:null,image:null,type:null,group:null,tag:null});

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

const submit = () =>{

    if(form.title_en == null || form.title == null || form.text == null|| form.type == null)
    {
        let text
        text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    else
    {
        form.post(route('blogAdmin.store'))
    }
};
const menus = ref([]);

if (props.menus && props.menus.length > 0) {

    props.menus.forEach(element => {
        if (element.sections.length > 0 && element.routes.length > 0) {
            element.routes.forEach(route => {
                if(route.name == props.path)
                {
                    element.sections.forEach(section => {
                        if(section.name == 'blogs')
                        {
                            menus.value.push(element)
                        }
                    });
                }
            });
        }
    });
}


const menu = ref([]);
const sections = ref([]);

const group = () => {
    if (menu.value.length > 0) {
        menu.value.splice(0)
    }
    // form.type = null,
    menus.value.forEach(element => {
        if (form.group == element && element.children.length > 0 ) {

            element.children.forEach(child => {
                if(child.routes.length > 0){
                    child.routes.forEach(route => {
                        if (route.name == props.path)
                        {
                            if (child.sections.length > 0)
                            {
                                child.sections.forEach(section =>
                                {
                                    if(section.name == 'blogs')
                                    {
                                        menu.value.push(child)
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
    });
};

const type = () => {
    if (sections.value.length > 0) {
        sections.value.splice(0)
    }
    // form.category = null,
        menu.value.forEach(element => {
            if (form.type ==  element && element.children.length > 0) {
                element.children.forEach(child => {
                    if(child.routes.length > 0)
                    {
                        child.routes.forEach( route => {
                            if (route.name == props.path)
                            {
                                if (child.sections.length > 0)
                                {
                                    child.sections.forEach(section => {
                                        if(section.name == 'blogs')
                                        {
                                            sections.value.push(child)
                                        }

                                    });
                                }
                            }
                        });
                    }
                });

            }

        });

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
                <div class="col-lg-12">
                    <div class="card mt-4">
                        <div class="card-header">
                            <h4>اطلاعات</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-lg-12">
                                <div class="row  gx-2">
                                    <div class="col-lg-6">
                                        <div class="mt-4">
                                            <label class="form-label">عنوان<span class="text-danger">*</span></label>
                                            <div class="row gx-2">
                                                <input v-model.lazy.trim="form.title" placeholder="اینجا تایپ کنید" type="text" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mt-4 me-1">
                                            <label class="form-label">عنوان انگلیسی<span class="text-danger">*</span></label>
                                            <div class="row gx-2">
                                                <input v-model.lazy.trim="form.title_en" placeholder="اینجا تایپ کنید" type="text" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row  gx-2">
                                    <div class="col-lg-6">
                                        <label class="form-label">گروه مقاله<span class="text-danger">*</span></label>
                                        <select v-model.lazy="form.group" class="form-select" @change="group">
                                            <option v-if="menus.length > 0" :value="menu" v-for="(menu, index) in menus" :key="index">{{ menu.name }}</option>
                                            <option v-else disabled>گزینه ای یافت نشد.</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="form-label"> نوع مقاله<span class="text-danger">*</span></label>
                                        <select v-model.lazy="form.type" @change="type" class="form-select">
                                            <option v-if="menu.length > 0 && form.group" v-for="(type, index) in menu" :key="index" :value="type">{{ type.name }}</option>
                                            <option v-else disabled>گزینه ای یافت نشد.</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="mt-4">
                                            <label class="form-label">تصویر کاور <span class="text-danger">*</span></label>
                                            <div class="input-upload">

                                                <input class="form-control" type="file" @input="form.image = $event.target.files[0]"
                                                    id="image" accept="image/*" />
                                                <progress v-if="form.progress" :value="form.progress.percentage" max="5">
                                                    {{ form.progress.percentage }}%
                                                </progress>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <label class="form-label">تگ سئو: طول کارکتر بین ۱۲۰ تا ۱۶۰ کاراکتر و شامل کلمه کلیدی اصلی<span class="text-danger">*</span></label>
                                            <div class="row gx-2">
                                                <textarea v-model.lazy.trim="form.tag"  class="form-control" cols="30" rows="10" placeholder="اینجا تایپ کنید"></textarea>
                                                
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <label class="form-label">کد<span class="text-danger">*</span></label>
                                            <div class="row gx-2">
                                                <!-- <textarea v-model.lazy.trim="form.text"  class="form-control" cols="30" rows="10" placeholder="اینجا تایپ کنید"></textarea> -->
                                                <Editor  v-model.lazy.trim="form.text" />
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
