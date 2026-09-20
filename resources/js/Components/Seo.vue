<script setup>
import { useHead } from '@vueuse/head'

const props = defineProps({
  title: {
    type: String,
    default: 'فروشگاه مدیا | قالب سایت، محصولات دیجیتال، طراحی سایت ،حسابداری،استخدام، فریلنسر حرفه‌ای',
  },
  description: {
    type: String,
    default: 'فروشگاه مدیایک پلتفرم تخصصی در حوزه محصولات دیجیتال است که با هدف ساده‌سازی مسیر طراحی سایت، حسابداری ،فروش قالب‌های آماده و اجرای پروژه‌های سفارشی راه‌اندازی شده است.',
  },
  keywords: {
    type: String,
    default: 'قالب سایت, محصولات دیجیتال, طراحی سایت اختصاصی, فریلنسری, فروشگاه مدیا, پروژه آنلاین, ابزار دیجیتال,استخدام,حسابداری',
  },
  noIndex: {
    type: Boolean,
    default: true, // یعنی به‌صورت پیش‌فرض ایندکس نمبشه
  },
})

useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    { name: 'keywords', content: props.keywords },
    {
      name: 'robots',
      content: props.noIndex ? 'noindex, nofollow' : 'index, follow',
    },
  ],
})

</script>
<template>

</template>
