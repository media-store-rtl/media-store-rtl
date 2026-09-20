import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import "@inertiajs/inertia";
import { a as usePage, u as useForm } from "../ssr.js";
import swal from "sweetalert2";
import DatePicker from "vue3-persian-datetime-picker";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "discount-create",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    wallet: Number,
    notifications: Object,
    results: Object,
    companies: Object,
    descriptions: Object,
    menus: Object,
    subjects: Object | String,
    path: String,
    alert: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      code: null,
      percent: null,
      number: null,
      expired: null,
      percent_min: null,
      percent_max: null,
      results: [],
      status: null,
      subject: props.subjects ? props.subjects : null
    });
    const alert = ref(props.alert);
    if (alert.value) {
      if (alert.value.title) {
        swal.fire(props.alert.title, props.alert.text, props.alert.icon);
      } else {
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
          title: props.alert.text,
          icon: props.alert.icon
        });
      }
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
          errors.value.number ? errors.value.number + "<br>" : "",
          errors.value.expired ? errors.value.expired + "<br>" : "",
          errors.value.percent_min ? errors.value.percent_min + "<br>" : "",
          errors.value.percent_max ? errors.value.percent_max + "<br>" : "",
          errors.value.results ? errors.value.results + "<br>" : ""
        ],
        icon: "error"
      });
    }
    const menus = ref([]);
    if (props.menus) {
      props.menus.forEach((menu) => {
        menu.children.forEach((element) => {
          menus.value.push(element);
        });
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary btn-sm font-sm rounded"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ایجاد</span>`);
      }
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-6"><div class="mt-4 bg-white"><div class="card-header d-flex"><h4>تخفیف</h4><div class="me-auto"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "All") : ssrLooseEqual(unref(form).subject, "All")) ? " selected" : ""}>همه محصولات</option><!--[-->`);
      ssrRenderList(menus.value, (menu, index) => {
        _push(`<option${ssrRenderAttr("value", menu.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, menu.id) : ssrLooseEqual(unref(form).subject, menu.id)) ? " selected" : ""}>${ssrInterpolate(menu.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="card-body">`);
      if (props.results.total > 0) {
        _push(`<div class="table-responsive"><article class="itemlist"><table class="table-hover table"><thead><tr><th class="text-center">انتخاب</th><th>شناسه</th><th>نام</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.results.data, (result) => {
          _push(`<tr><td class="text-center"><div class="form-check"><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).results[result.id]) ? ssrLooseContain(unref(form).results[result.id], result.id) : unref(form).results[result.id]) ? " checked" : ""}${ssrRenderAttr("value", result.id)}></div></td><td>${ssrInterpolate(result.id)}</td><td><b>${ssrInterpolate(result.name)}</b></td></tr>`);
        });
        _push(`<!--]--></tbody></table></article></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="col-lg-6"><div class="mt-4 bg-white"><div class="card-header"><h4>تخفیف رندومی</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">کمترین درصد<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).percent_min)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">بیشترین درصد<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).percent_max)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">تاریخ انقضا<span class="text-danger">*</span></label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: unref(form).expired,
        "onUpdate:modelValue": ($event) => unref(form).expired = $event,
        format: "YYYY-MM-DD HH:mm:ss",
        "display-format": "dddd jDD jMMMM jYYYY",
        color: "#1ABC9C",
        type: "datetime"
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Discount/discount-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
