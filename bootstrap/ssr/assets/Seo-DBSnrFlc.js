import { useSSRContext } from "vue";
import { useHead } from "@unhead/vue";
const _sfc_main = {
  __name: "Seo",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "فروشگاه مدیا | قالب سایت، محصولات دیجیتال، طراحی سایت ،حسابداری،استخدام، فریلنسر حرفه‌ای"
    },
    description: {
      type: String,
      default: "فروشگاه مدیایک پلتفرم تخصصی در حوزه محصولات دیجیتال است که با هدف ساده‌سازی مسیر طراحی سایت، حسابداری ،فروش قالب‌های آماده و اجرای پروژه‌های سفارشی راه‌اندازی شده است."
    },
    keywords: {
      type: String,
      default: "قالب سایت, محصولات دیجیتال, طراحی سایت اختصاصی, فریلنسری, فروشگاه مدیا, پروژه آنلاین, ابزار دیجیتال,استخدام,حسابداری"
    },
    noIndex: {
      type: Boolean,
      default: true
      // یعنی به‌صورت پیش‌فرض ایندکس نمبشه
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: props.title,
      meta: [
        { name: "description", content: props.description },
        { name: "keywords", content: props.keywords },
        {
          name: "robots",
          content: props.noIndex ? "noindex, nofollow" : "index, follow"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Seo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
