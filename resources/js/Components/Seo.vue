<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { usePage } from '@inertiajs/vue3'

const props = defineProps({
  title: {
    type: String,
    default: 'فروشگاه مدیا | قالب سایت و محصولات دیجیتال',
  },
  description: {
    type: String,
    default: 'فروشگاه مدیا؛ مرجع قالب سایت و محصولات دیجیتال برای راه‌اندازی و توسعه کسب‌وکار آنلاین.',
  },
  keywords: {
    type: String,
    default: '',
  },
  noIndex: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default: '/storage/images/logo-2.png',
  },
  type: {
    type: String,
    default: 'website',
  },
  canonical: {
    type: String,
    default: '',
  },
  schema: {
    type: [Object, Array],
    default: null,
  },
})

const page = usePage()
const siteUrl = computed(() => page.props?.ziggy?.url || '')
const currentUrl = computed(() => {
  if (props.canonical) return props.canonical
  const url = page.url || '/'
  try {
    const canonical = new URL(url, siteUrl.value || undefined)
    canonical.search = ''
    canonical.hash = ''
    return canonical.toString()
  } catch {
    return url.split('?')[0].split('#')[0]
  }
})
const imageUrl = computed(() => {
  if (!props.image) return ''
  try {
    return new URL(props.image, siteUrl.value || undefined).toString()
  } catch {
    return props.image
  }
})

const baseSchema = computed(() => [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'فروشگاه مدیا',
    url: siteUrl.value,
    inLanguage: 'fa-IR',
   },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'فروشگاه مدیا',
    url: siteUrl.value,
    logo: imageUrl.value,
  },
])

const pageSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': props.type === 'article' ? 'Article' : props.type === 'product' ? 'Product' : props.type === 'service' ? 'Service' : 'WebPage',
  name: props.title,
  description: props.description,
  url: currentUrl.value,
  inLanguage: 'fa-IR',
}))

const breadcrumbSchema = computed(() => {
  const path = currentUrl.value.replace(/^https?:\\/\\/[^/]+/, '').split('?')[0].split('#')[0]
  const segments = path.split('/').filter(Boolean)
  const labels = {
    'website-templates': 'قالب‌های آماده سایت',
    'website-design': 'پلن طراحی سایت',
    'blog': 'وبلاگ',
    'project': 'پروژه‌ها',
    'cafe-net': 'خدمات آنلاین',
    'form': 'فرم‌های آماده',
    'accounting': 'حسابداری',
    'about': 'درباره ما',
    'about-hesabdari': 'درباره حسابداری',
    'faq': 'سوالات متداول',
    'privacy': 'حریم خصوصی',
    'terms-conditions': 'قوانین و مقررات',
    'terms-seller': 'قوانین فروشندگان',
  }
  const items = [{
    '@type': 'ListItem',
    position: 1,
    name: 'فروشگاه مدیا',
    item: siteUrl.value,
  }]
  if (segments.length) {
    segments.forEach((segment, index) => {
      const itemUrl = siteUrl.value.replace(/\\/$/, '') + '/' + segments.slice(0, index + 1).map(encodeURIComponent).join('/')
      items.push({
        '@type': 'ListItem',
        position: index + 2,
        name: index === segments.length - 1 ? props.title : (labels[segment] || segment),
        item: itemUrl,
      })
    })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
})

const structuredData = computed(() => {
  const custom = props.schema ? (Array.isArray(props.schema) ? props.schema : [props.schema]) : []
  return [...baseSchema.value, pageSchema.value, breadcrumbSchema.value, ...custom]
})

useHead({
  title: () => props.title,
  link: [
    {
      rel: 'canonical',
      href: currentUrl,
    },
  ],
  meta: [
    { name: 'description', content: () => props.description },
    ...(props.keywords ? [{ name: 'keywords', content: () => props.keywords }] : []),
    {
      name: 'robots',
      content: () => props.noIndex ? 'noindex, nofollow' : 'index, follow',
    },
    { property: 'og:title', content: () => props.title },
    { property: 'og:description', content: () => props.description },
    { property: 'og:type', content: props.type },
    { property: 'og:url', content: currentUrl },
    { property: 'og:site_name', content: 'فروشگاه مدیا' },
    { property: 'og:locale', content: 'fa_IR' },
    { property: 'og:image', content: imageUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => props.title },
    { name: 'twitter:description', content: () => props.description },
    { name: 'twitter:image', content: imageUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: () => JSON.stringify(structuredData.value),
    },
  ],
})
</script>

<template>
</template>
