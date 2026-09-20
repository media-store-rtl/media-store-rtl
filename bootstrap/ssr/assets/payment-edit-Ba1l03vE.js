import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm } from "../ssr.js";
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
  __name: "payment-edit",
  __ssrInlineRender: true,
  props: {
    menus: Object,
    path: String,
    banks: Object,
    alert: Object,
    users: Object,
    payment: Object,
    now: String,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: props.payment.id,
      transaction: null,
      price: props.payment.price,
      bank: null,
      accountName: null,
      date: null,
      user: props.users.id,
      wallet: props.users.profile.wallet
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
          errors.value.transaction ? errors.value.transaction + "<br>" : "",
          errors.value.price ? errors.value.price + "<br>" : "",
          errors.value.bank ? errors.value.bank + "<br>" : "",
          errors.value.accountName ? errors.value.accountName + "<br>" : "",
          errors.value.date ? errors.value.date + "<br>" : "",
          errors.value.dargah ? errors.value.dargah + "<br>" : ""
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
                if (section.name == "transactions") {
                  element.children.forEach((child) => {
                    menus.value.push(child);
                  });
                }
              });
            }
          });
        }
      });
    }
    const banks = ref([]);
    if (props.banks && props.banks.length > 0) {
      props.banks.forEach((bank) => {
        banks.value.push(bank);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5"><aside class="col-lg-3 border-end"><nav class="nav nav-pills flex-lg-column mb-4"><a class="nav-link active" aria-current="page" href="#">درخواست برداشت</a></nav></aside><div class="col-lg-9"><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-12"><div class="row gx-3"><div class="col-3 mb-3"><label class="form-label">نوع تراکنش</label><select class="form-select" name="transaction" id="transaction" autocomplete="transaction">`);
      if (menus.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu, index) => {
          _push(`<option${ssrRenderAttr("value", menu)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).transaction) ? ssrLooseContain(unref(form).transaction, menu) : ssrLooseEqual(unref(form).transaction, menu)) ? " selected" : ""}>${ssrInterpolate(menu.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).transaction) ? ssrLooseContain(unref(form).transaction, null) : ssrLooseEqual(unref(form).transaction, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div><div class="col-3 mb-3"><label class="form-label">حساب بانک</label><select class="form-select" name="bank" id="" autocomplete="bank">`);
      if (banks.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(banks.value, (bank, index) => {
          _push(`<option${ssrRenderAttr("value", bank)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).bank) ? ssrLooseContain(unref(form).bank, bank) : ssrLooseEqual(unref(form).bank, bank)) ? " selected" : ""}>${ssrInterpolate(bank.bank_name)}-${ssrInterpolate(bank.shaba_number)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).bank) ? ssrLooseContain(unref(form).bank, null) : ssrLooseEqual(unref(form).bank, null)) ? " selected" : ""}> گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div><div class="col-lg-3 mb-3"><label class="form-label">تاریخ</label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: unref(form).date,
        "onUpdate:modelValue": ($event) => unref(form).date = $event,
        disable: "Friday",
        format: "YYYY-MM-DD HH:mm:ss",
        "display-format": "dddd jDD jMMMM jYYYY",
        color: "#1ABC9C",
        min: props.now,
        type: "date"
      }, null, _parent));
      _push(`</div><div class="col-lg-3 mb-3"><label class="form-label">مبلغ</label><input type="text"${ssrRenderAttr("value", unref(form).price)} class="form-control"></div></div></div></div><br></form></section></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Mali/payment-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
