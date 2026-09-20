import { computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "Products-edit",
  __ssrInlineRender: true,
  props: {
    product: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    flash: String
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({ id: props.product.id, file: props.product.file, version: null });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cartPrice: props.cartPrice,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
        cartCoupon: props.cartCoupon,
        cartTotal: props.cartTotal,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<main class="main-wrap rtl"><section class="content-main"><form><div class="row"><div class="col-12"><div class="content-header"><div><h2 class="content-title">بروزرسانی محصول</h2><p>اطلاعات کامل درباره کسب و کار شما در اینجا</p></div><div><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>ذخیره</button></div></div></div><div class="col-lg-6"><div class="card"><div class="card-header"><h4>نسخه محصول <span class="text-danger">*</span></h4></div><div class="card-body"><div class="input-upload"><input${ssrRenderAttr("value", unref(form).version)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-6"><div class="card"><div class="card-header"><h4>فایل <span class="text-danger">*</span></h4></div><div class="card-body"><div class="input-upload"><input class="form-control" type="file" id="file" accept="zip/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></form></section>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Products/Products-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
