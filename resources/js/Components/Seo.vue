<script setup>
import { computed } from 'vue'
import { useHead, usePage } from '@inertiajs/vue3'

const props = defineProps({
  title: {
    type: String,
    default: 'فروشگاه مدیا | قالب سایت، محصولات دیجیتال و خدمات دیجیتال',
  },
  description: {
    type: String,
    default: 'فروشگاه مدیا؛ مرجع قالب سایت، محصولات دیجیتال، طراحی سایت و خدمات آنلاین.',
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
  return siteUrl.value ? new URL(url, siteUrl.value).toString() : url
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
    potentialAction: {
      '@type': 'SearchAction',
      target: siteUrl.value ? `${siteUrl.value}/search?q={search_term_string}` : '/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'فروشگاه مدیا',
    url: siteUrl.value,
    logo: imageUrl.value,
  },
])

const structuredData = computed(() => {
  const custom = props.schema ? (Array.isArray(props.schema) ? props.schema : [props.schema]) : []
  return [...baseSchema.value, ...custom]
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
