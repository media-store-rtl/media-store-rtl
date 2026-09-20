<script setup>
import { onMounted, onBeforeUnmount, watch, ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: String
})
const emit = defineEmits(['update:modelValue'])

// آی‌دی یونیک برای هر ادیتور
const editorId = `tiny-${Math.random().toString(36).slice(2)}`

// مرجع tinymce و instance ادیتور
let tinymce // خود آبجکت tinymce
const editorRef = ref(null) // instance همین ادیتور

onMounted(async () => {
  // نکته: در بعضی پروژه‌ها بهتره از 'tinymce/tinymce' ایمپورت کنی
  // اگر با 'tinymce' مشکل داشتی، اینو عوض کن:
  // const tinymceModule = await import('tinymce/tinymce')
  const tinymceModule = await import('tinymce')
  tinymce = tinymceModule.default

  // تم و آیکون‌ها
  await import('tinymce/icons/default')
  await import('tinymce/themes/silver')
  await import('tinymce/models/dom')
  await import('tinymce/skins/ui/oxide/skin.css')

  // پلاگین‌ها
  await import('tinymce/plugins/link')
  await import('tinymce/plugins/table')
  await import('tinymce/plugins/code')

  // ساخت ادیتور
  tinymce.init({
    selector: `#${editorId}`,
    plugins: 'link table code',
    toolbar: 'undo redo | styles | bold italic | link table | code | ltr rtl',
    skin: false,
    content_css: false,
    branding: false,
    promotion: false,
    menubar: false,
    // استایل محتوا
    content_style: `
      body { direction: rtl; text-align: right; font-family: 'Vazir', sans-serif; }
    `,
    setup(editor) {
      // نگه داشتن ارجاع instance
      editorRef.value = editor

      // مقدار اولیه
      editor.on('init', () => {
        editor.setContent(props.modelValue || '')
      })

      // بروزرسانی به والد (رویدادهای مطمئن‌تر)
      const updateParent = () => {
        const html = editor.getContent()
        emit('update:modelValue', html)
      }
      editor.on('input', updateParent)   // تغییرات لحظه‌ای
      editor.on('change', updateParent)  // برای اطمینان
      editor.on('keyup', updateParent)   // بک‌آپ
    }
  })
})

// همگام‌سازی وقتی modelValue بیرون تغییر می‌کند
watch(
  () => props.modelValue,
  (val) => {
    const ed = editorRef.value
    if (ed) {
      const current = ed.getContent()
      if ((val || '') !== current) {
        ed.setContent(val || '')
      }
    }
  }
)

onBeforeUnmount(() => {
  // فقط همین ادیتور رو ببند
  if (tinymce && editorRef.value) {
    tinymce.remove(editorRef.value)
    editorRef.value = null
  }
})
</script>

<template>
  <textarea :id="editorId" :placeholder="placeholder"></textarea>
</template>
