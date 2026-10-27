<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { usePage } from '@inertiajs/vue3'

const props = defineProps({
  title: { type: String, default: 'فروشگاه مدیا | قالب سایت و محصولات دیجیتال' },
  description: { type: String, default: 'فروشگاه مدیا؛ مرجع قالب سایت و محصولات دیجیتال برای راه‌اندازی و توسعه کسب‌وکار آنلاین.' },
  keywords: { type: String, default: '' },
  noIndex: { type: Boolean, default: true },
  image: { type: String, default: '/storage/images/logo-2.png' },
  type: { type: String, default: 'website' },
  canonical: { type: String, default: '' },
  schema: { type: [Object, Array], default: null },
})

const page = usePage()
const siteUrl = computed(() => String(page.props?.ziggy?.url || '').trim().replace(/\/+$/, ''))
const isCafeProduct = computed(() => String(page.url || '').split('?')[0].startsWith('/cafe-net/'))
const tarahis = computed(() => page.props?.tarahis || null)

const seoTitle = computed(() => String(props.title || 'فروشگاه مدیا | قالب سایت و محصولات دیجیتال').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim())
const seoDescription = computed(() => String(props.description || 'فروشگاه مدیا؛ مرجع قالب سایت و محصولات دیجیتال برای راه‌اندازی و توسعه کسب‌وکار آنلاین.').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160))
const effectiveKeywords = computed(() => String(props.keywords || tarahis.value?.tag || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim())

const currentUrl = computed(() => {
  const rawUrl = props.canonical || page.url || '/'
  try {
    const canonical = siteUrl.value ? new URL(rawUrl, siteUrl.value + '/') : new URL(rawUrl)
    canonical.search = ''
    canonical.hash = ''
    return canonical.toString()
  } catch {
    return String(rawUrl).split('?')[0].split('#')[0]
  }
})

const imageUrl = computed(() => {
  const source = props.image || (tarahis.value?.image?.url ? '/storage/' + tarahis.value.image.url : '')
  try {
    return source && siteUrl.value ? new URL(source, siteUrl.value + '/').toString() : source
  } catch {
    return source
  }
})

const siteLogoUrl = computed(() => {
  try {
    return siteUrl.value ? new URL('/storage/images/logo-2.png', siteUrl.value + '/').toString() : ''
  } catch {
    return ''
  }
})

const baseSchema = computed(() => [
  { '@context': 'https://schema.org', '@type': 'WebSite', name: 'فروشگاه مدیا', url: siteUrl.value || undefined, inLanguage: 'fa-IR' },
  { '@context': 'https://schema.org', '@type': 'Organization', name: 'فروشگاه مدیا', url: siteUrl.value || undefined, logo: siteLogoUrl.value || undefined },
])

const pageSchema = computed(() => {
  if (props.type === 'product' || props.type === 'profile' || (props.schema && ['article', 'service'].includes(props.type))) return null
  return { '@context': 'https://schema.org', '@type': props.type === 'article' ? 'Article' : props.type === 'service' ? 'Service' : 'WebPage', name: seoTitle.value, description: seoDescription.value, url: currentUrl.value, inLanguage: 'fa-IR' }
})

const cafeProductSchema = computed(() => {
  const product = tarahis.value
  if (!isCafeProduct.value || !product) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: String(product.name || product.title || seoTitle.value).trim(),
    description: seoDescription.value,
    url: currentUrl.value,
    image: imageUrl.value || undefined,
    sku: product.id ? String(product.id) : undefined,
    offers: product.price != null ? { '@type': 'Offer', priceCurrency: 'IRR', price: Number(product.price), availability: 'https://schema.org/InStock', url: currentUrl.value } : undefined,
  }

  const rating = Number(product.ratings_avg_rating)
  if (Number.isFinite(rating) && rating > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1,
      ...(product.ratings_count ? { ratingCount: Number(product.ratings_count) } : {}),
    }
  }

  return schema
})

const breadcrumbSchema = computed(() => {
  let path = '/'
  try {
    path = new URL(currentUrl.value, siteUrl.value ? siteUrl.value + '/' : undefined).pathname
  } catch {
    path = currentUrl.value.split('?')[0].split('#')[0]
  }

  const segments = path.split('/').filter(Boolean)
  const labels = {
    'website-templates': 'قالب‌های آماده سایت', 'website-design': 'پلن طراحی سایت', 'blog': 'وبلاگ', 'project': 'پروژه‌ها',
    'cafe-net': 'خدمات آنلاین', 'form': 'فرم‌های آماده', 'accounting': 'حسابداری', 'accounting-plan': 'پلن‌های اشتراک حسابداری',
    'guest-profile': 'پروفایل کاربر', 'about': 'درباره ما', 'about-hesabdari': 'درباره حسابداری', 'faq': 'سوالات متداول',
    'privacy': 'حریم خصوصی', 'terms-conditions': 'قوانین و مقررات', 'terms-seller': 'قوانین فروشندگان',
  }
  const items = [{ '@type': 'ListItem', position: 1, name: 'فروشگاه مدیا', item: siteUrl.value || undefined }]

  if (segments.length && siteUrl.value) {
    segments.forEach((segment, index) => {
      items.push({ '@type': 'ListItem', position: index + 2, name: index === segments.length - 1 ? seoTitle.value : (labels[segment] || segment), item: siteUrl.value + '/' + segments.slice(0, index + 1).join('/') })
    })
  }

  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }
})

const structuredData = computed(() => {
  const custom = props.schema ? (Array.isArray(props.schema) ? props.schema : [props.schema]) : []
  return [...baseSchema.value, ...(pageSchema.value ? [pageSchema.value] : []), breadcrumbSchema.value, ...(cafeProductSchema.value ? [cafeProductSchema.value] : []), ...custom]
})

useHead({
  title: () => seoTitle.value,
  link: [{ rel: 'canonical', href: currentUrl }],
  meta: [
    { name: 'description', content: () => seoDescription.value },
    ...(effectiveKeywords.value ? [{ name: 'keywords', content: () => effectiveKeywords.value }] : []),
    { name: 'robots', content: () => props.noIndex ? 'noindex, nofollow' : 'index, follow' },
    { property: 'og:title', content: () => seoTitle.value },
    { property: 'og:description', content: () => seoDescription.value },
    { property: 'og:type', content: isCafeProduct.value ? 'product' : (props.type === 'article' ? 'article' : 'website') },
    { property: 'og:url', content: currentUrl },
    { property: 'og:site_name', content: 'فروشگاه مدیا' },
    { property: 'og:locale', content: 'fa_IR' },
    { property: 'og:image', content: imageUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => seoTitle.value },
    { name: 'twitter:description', content: () => seoDescription.value },
    { name: 'twitter:image', content: imageUrl },
  ],
  script: [{ type: 'application/ld+json', children: () => JSON.stringify(structuredData.value) }],
})
</script>

<template>
</template>
