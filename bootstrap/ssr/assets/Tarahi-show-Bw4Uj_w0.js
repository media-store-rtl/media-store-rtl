import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import swal from "sweetalert2";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import Editor from "@tinymce/tinymce-vue";
import "@inertiajs/inertia";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "Tarahi-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    users: Object,
    tarahis: Object,
    notifications: Object,
    menus: Object,
    wallet: Number,
    companies: Object,
    descriptions: Object,
    reqDesigner: Object,
    alert: Object,
    path: String,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      text: props.tarahis.text,
      price: props.tarahis.price,
      id: props.tarahis.id,
      group: null,
      type: null,
      category: null,
      title: props.tarahis.title,
      file: props.tarahis.file ? props.tarahis.file.url : null
    });
    const alert = ref(props.alert);
    if (alert.value) {
      swal.fire(
        alert.value.title,
        alert.value.text,
        alert.value.icon
      );
      alert.value = null;
    }
    if (hasErrors.value == true) {
      swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", swal.stopTimer);
          toast.addEventListener("mouseleave", swal.resumeTimer);
        }
      }).fire({
        title: [
          errors.value.price ? errors.value.price + "<br>" : "",
          errors.value.text ? errors.value.text + "<br>" : "",
          errors.value.group ? errors.value.group + "<br>" : "",
          errors.value.type ? errors.value.type + "<br>" : "",
          errors.value.category ? errors.value.category + "<br>" : "",
          errors.value.title ? errors.value.title + "<br>" : ""
        ],
        icon: "error"
      });
    }
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "tarahis") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    const sections = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        cartPrice: props.cartPrice,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
        wallet: props.wallet,
        cartCoupon: props.cartCoupon,
        cartTotal: props.cartTotal,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="row"><div class="col-12"><div class="content-header"><div>`);
      if (props.descriptions) {
        _push(`<h2 class="content-title card-title">${ssrInterpolate(props.descriptions.subject)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (props.descriptions) {
        _push(`<p>${ssrInterpolate(props.descriptions.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ویرایش</span>`);
      }
      _push(`</button></div></div><form><div class="col-lg-12"><div class="bg-white"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="mt-4"><div class="row gx-2"><div class="col-sm-6 col-6"><div class="form-group"><label class="form-label"> گروه خدمات<span class="text-danger">*</span></label><select class="form-select ltr">`);
      if (menus.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu2, index) => {
          _push(`<option${ssrRenderAttr("value", menu2)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, menu2) : ssrLooseEqual(unref(form).group, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, null) : ssrLooseEqual(unref(form).group, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div><div class="col-sm-6 col-6"><div class="form-group"><label class="form-label"> نوع خدمات <span class="text-danger">*</span></label><select class="form-select ltr">`);
      if (menu.value.length > 0 && unref(form).group) {
        _push(`<!--[-->`);
        ssrRenderList(menu.value, (type, index) => {
          _push(`<option${ssrRenderAttr("value", type)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, type) : ssrLooseEqual(unref(form).type, type)) ? " selected" : ""}>${ssrInterpolate(type.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, null) : ssrLooseEqual(unref(form).type, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div></div></div><div class="row gx-2"><div class="col-sm-6 mt-4"><label class="form-label"> دسته بندی محصول <span class="text-danger">*</span></label><select class="form-select">`);
      if (sections.value.length > 0 && unref(form).type) {
        _push(`<!--[-->`);
        ssrRenderList(sections.value, (category, index) => {
          _push(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, category) : ssrLooseEqual(unref(form).category, category)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, null) : ssrLooseEqual(unref(form).category, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div><div class="col-sm-6 col-6"><div class="mt-4"><label class="form-label">عنوان<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).title)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="row gx-2"><div class="col-sm-6 col-6"><div class="mt-4"><label class="form-label">مبلغ<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-sm-6 col-6"><div class="mt-4"><label class="form-label">فایل</label><input class="form-control" type="file" id="file" accept="zip/rar/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}%</progress>`);
      } else {
        _push(`<!---->`);
      }
      if (props.tarahis.file) {
        _push(`<a${ssrRenderAttr("href", _ctx.route("download.edit", props.tarahis.file.id))} method="put">نمایش فایل پیوست</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mt-4"><label class="form-label">توضیحات کامل درباره محصول <span class="text-danger">*</span></label>`);
      _push(ssrRenderComponent(unref(Editor), {
        "api-key": "0jyg8kag8oi7nb67i513jba26ynnauhhfpwlqckgygf32ly5",
        init: { menubar: false },
        modelValue: unref(form).text,
        "onUpdate:modelValue": ($event) => unref(form).text = $event
      }, null, _parent));
      _push(`</div></div></div></div></form></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Tarahi/Tarahi-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
