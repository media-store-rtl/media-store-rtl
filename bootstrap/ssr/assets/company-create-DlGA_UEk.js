import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import swal from "sweetalert2";
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
  __name: "company-create",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    ostans: Object,
    shahrs: Object,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      name: null,
      economical_number: null,
      national_number: null,
      postal_code: null,
      phone: null,
      mobile: null,
      ostan: null,
      shahr: null,
      address: null,
      image: null,
      tax: null,
      complications: null,
      comison: null,
      telegram: null,
      instagram: null,
      email: null,
      link: null,
      comison_designer: null,
      design_damage: null,
      job: null
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
          errors.value.name ? errors.value.name + "<br>" : "",
          errors.value.name_en ? errors.value.name_en + "<br>" : "",
          errors.value.group ? errors.value.group + "<br>" : "",
          errors.value.type ? errors.value.type + "<br>" : "",
          errors.value.category ? errors.value.category + "<br>" : "",
          errors.value.text ? errors.value.text + "<br>" : "",
          errors.value.demo_link ? errors.value.demo_link + "<br>" : "",
          errors.value.version ? errors.value.version + "<br>" : "",
          errors.value.file ? errors.value.file + "<br>" : "",
          errors.value.image ? errors.value.image + "<br>" : ""
        ],
        icon: "error"
      });
    }
    ref(props.ostans);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        roles: props.roles,
        alert: props.alert,
        users: props.users,
        wallet: props.wallet,
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
      _push(`<td class="me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</div></div><form><div class="row"><div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">مالیات<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).tax)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">عوارض<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).complications)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">کمیسیون<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).comison)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">کمیسیون طراح<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).comison_designer)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">ضمانت پروژه<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).design_damage)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">زمان جاب(دقیقه)<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).job)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Company/company-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
