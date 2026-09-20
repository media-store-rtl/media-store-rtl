import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "bank-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    users: Object,
    banks: Object,
    notifications: Object,
    wallet: Number,
    companies: Object,
    descriptions: Object,
    alert: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: props.banks.id,
      userid: props.banks.user_id,
      bankid: props.banks.bank_id,
      accountname: props.banks.account_name,
      accountnumber: props.banks.account_number,
      cartnumber: props.banks.cart_number,
      shabanumber: props.banks.shaba_number,
      status: props.banks.status
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
      _push(`<td class="d-flex me-auto"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>مسدود</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option></select><button class="btn btn-primary me-auto ms-1">`);
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
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class=""><div class="card-body d-flex"><div class="col-lg-4 me-1"><div class="card card-user"><div class="card">`);
      if (props.banks.status == 0) {
        _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "15px" })}" class="category position-absolute badge badge-pill bg-primary">ثبت</span>`);
      } else {
        _push(`<!---->`);
      }
      if (props.banks.status == 1) {
        _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "25px" })}" class="category position-absolute badge badge-pill bg-warning"> انتظار</span>`);
      } else {
        _push(`<!---->`);
      }
      if (props.banks.status == 3) {
        _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "25px" })}" class="category position-absolute badge badge-pill bg-danger"> غیرفعال</span>`);
      } else {
        _push(`<!---->`);
      }
      if (props.banks.status == 4) {
        _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "25px" })}" class="category position-absolute badge badge-pill bg-success">فعال</span>`);
      } else {
        _push(`<!---->`);
      }
      if (props.banks.image) {
        _push(`<img class="img-wrap"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.banks.image.url)} alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="card-body"><h5 class="card-title">حساب</h5><div class="card-text text-muted"><p class="m-0">${ssrInterpolate(props.banks.menu.name)}</p><p>شماره حساب:<a href="" class="__cf_email__" data-cfemail="ff929e8d86c6cfbf9a879e928f939ad19c9092">${ssrInterpolate(unref(form).account_number)}</a></p><p>شماره کارت:<a href="" class="__cf_email__" data-cfemail="ff929e8d86c6cfbf9a879e928f939ad19c9092">${ssrInterpolate(unref(form).cart_number)}</a></p><p>شماره شبا: IR <a href="" class="__cf_email__" data-cfemail="ff929e8d86c6cfbf9a879e928f939ad19c9092">${ssrInterpolate(unref(form).shaba_number)}</a></p></div></div></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Payment/bank-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
