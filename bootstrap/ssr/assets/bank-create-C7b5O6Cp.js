import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
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
  __name: "bank-create",
  __ssrInlineRender: true,
  props: {
    menus: Object,
    users: Object,
    companies: Object,
    descriptions: Object,
    path: String,
    alert: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      bankname: null,
      accountname: null,
      accountnumber: null,
      cartnumber: null,
      shabanumber: null,
      image: null
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
          errors.value.bankname ? errors.value.bankname + "<br>" : "",
          errors.value.accountname ? errors.value.accountname + "<br>" : "",
          errors.value.accountnumber ? errors.value.accountnumber + "<br>" : "",
          errors.value.cartnumber ? errors.value.cartnumber + "<br>" : "",
          errors.value.shabanumber ? errors.value.shabanumber + "<br>" : "",
          errors.value.image ? errors.value.image + "<br>" : ""
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
                if (section.name == "banks") {
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
      _push(`<td class="me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</div></div><div class="card mb-4"><div class="row" id="row"><div class="col-lg-12"><div class="card mb-4"><div class="card-header"><h4>اطلاعات حساب</h4></div><div class="card-body"><div class="mb-4"><form><div class="d-flex"><div class="col-sm-4"><label class="form-label">انتخاب بانک<span class="text-danger">*</span></label><select class="form-select">`);
      if (menus.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu, index) => {
          _push(`<option${ssrRenderAttr("value", menu)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).bankname) ? ssrLooseContain(unref(form).bankname, menu) : ssrLooseEqual(unref(form).bankname, menu)) ? " selected" : ""}>${ssrInterpolate(menu.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).bankname) ? ssrLooseContain(unref(form).bankname, null) : ssrLooseEqual(unref(form).bankname, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div><div class="col-sm-4 me-1"><label class="form-label">نام و نام خانوادگی صاحب حساب <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).accountname)} type="text" class="form-control" placeholder="اینجا تایپ کنید."></div><div class="col-sm-4 me-1"><label class="form-label">شماره حساب <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).accountnumber)} type="text" class="form-control" placeholder="اینجا تایپ کنید."></div></div><div class="d-flex"><div class="col-sm-4 me-1"><label class="form-label">شماره کارت <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).cartnumber)} type="text" class="form-control" placeholder="اینجا تایپ کنید."></div><div class="col-sm-4 me-1"><label class="form-label">شماره شبا (بدون IR ) <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).shabanumber)} type="text" class="form-control" placeholder="اینجا تایپ کنید."></div><div class="col-sm-4 me-1"><label class="form-label"> آپلود عکس<span class="text-danger">*</span></label><input class="form-control" type="file" id="image" accept="image/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form></div></div></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Bank/bank-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
