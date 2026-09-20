<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
const props = defineProps({
    companies:Object
});
var now = new Date();


</script>
<template>
    <footer class="main-footer font-xs">
        <div class="row pb-30 pt-15 rtl">
            <div class="col-sm-6" v-if="props.companies">
                {{ moment(now).locale("fa", fa).format('jYYYY').toLocaleString("fa-IR") }}-{{(1400).toLocaleString("fa-IR")}} © طراحی توسط  <Link v-if="props.companies" :href="route('website-design.index', 'q')+'all'">{{ props.companies.name + ' '+ props.companies.lasst_name }}</Link>
            </div>
            <div class="col-sm-6">
                <div class="text-sm-start" v-if="props.companies" >کلیه حقوق مادی و معنوی {{ props.companies.name_show }} محفوظ است.</div>
            </div>
        </div>
    </footer>
</template>


