import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import DatePicker from "vue3-persian-datetime-picker";
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
  __name: "Payment-create",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    wallet: Number,
    cartTotal: Number,
    notifications: Object,
    banknames: Object,
    karbars: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    time: String,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      transaction: null,
      price: null,
      date: null,
      user: null,
      cart_number: null,
      code_p: null,
      code_e: null
    });
    var now = props.time;
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
          errors.value.transaction ? errors.value.transaction + "<br>" : "",
          errors.value.price ? errors.value.price + "<br>" : "",
          errors.value.date ? errors.value.date + "<br>" : "",
          errors.value.cart_number ? errors.value.cart_number + "<br>" : "",
          errors.value.code_p ? errors.value.code_p + "<br>" : "",
          errors.value.code_e ? errors.value.code_e + "<br>" : "",
          errors.value.user ? errors.value.user + "<br>" : "",
          errors.value.status ? errors.value.status + "<br>" : ""
        ],
        icon: "error"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
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
      _push(`</div></div><form><div class="row"><div class="col-lg-6"><div class="mt-4 bg-white"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نوع تراکنش<span class="text-danger">*</span></label><select class="form-select" name="transaction" id="transaction" autocomplete="transaction"><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).transaction) ? ssrLooseContain(unref(form).transaction, null) : ssrLooseEqual(unref(form).transaction, null)) ? " selected" : ""}>واریز</option></select></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">تاریخ<span class="text-danger">*</span></label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: unref(form).date,
        "onUpdate:modelValue": ($event) => unref(form).date = $event,
        format: "YYYY-MM-DD HH:mm:ss",
        "display-format": "dddd jDD jMMMM jYYYY HH:mm:ss",
        color: "#1ABC9C",
        max: unref(now),
        type: "datetime"
      }, null, _parent));
      _push(`</div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">شماره کارت مبدا<span class="text-danger">*</span></label><input type="text"${ssrRenderAttr("value", unref(form).cart_number)} placeholder="اینجا تایپ کنید" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">مبلغ<span class="text-danger">*</span></label><input type="text"${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">کد پیگیری<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).code_p)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">شماره ارجاع<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).code_e)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">کاربر<span class="text-danger">*</span></label><select class="form-select" name="transaction" id="transaction" autocomplete="transaction">`);
      if (props.karbars.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(props.karbars, (karbar, index) => {
          _push(`<option${ssrRenderAttr("value", karbar.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).user) ? ssrLooseContain(unref(form).user, karbar.id) : ssrLooseEqual(unref(form).user, karbar.id)) ? " selected" : ""}>${ssrInterpolate(karbar.user_name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option${ssrIncludeBooleanAttr(Array.isArray(unref(form).user) ? ssrLooseContain(unref(form).user, null) : ssrLooseEqual(unref(form).user, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div></div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Payment/Payment-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
