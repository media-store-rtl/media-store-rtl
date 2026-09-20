import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import { _ as _sfc_main$2 } from "./AsideAdmin2-Cn98USeV.js";
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
  __name: "sikll-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    canResetPassword: Boolean,
    status: String,
    users: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    user: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: props.user.id,
      subject: null,
      number: null,
      siklls: []
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
          errors.value.id ? errors.value.id + "<br>" : "",
          errors.value.subject ? errors.value.subject + "<br>" : "",
          errors.value.number ? errors.value.number + "<br>" : ""
        ],
        icon: "error"
      });
    }
    const siklls = ref(props.user.siklls);
    if (siklls.value) {
      siklls.value.forEach((element) => {
        form.siklls.push(element);
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
      _push(`<td class="me-auto"></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: unref(form).id
      }, null, _parent));
      _push(`<div class="col-lg-9"><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-12"><div class="row gx-3"><!--[-->`);
      ssrRenderList(unref(form).siklls, (sikll, index) => {
        _push(`<div class="row"><div class="col mb-3"><label class="form-label">عنوان<span class="text-danger">*</span></label><input${ssrRenderAttr("value", sikll.subject)} class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="class col mb-3"><label class="form-label">درصد <span class="text-danger">*</span></label><input${ssrRenderAttr("value", sikll.number)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name_show" autocomplete="name_show"></div><div class="class col mb-3"><label class="form-label">عملیات</label>`);
        if (sikll.subject) {
          _push(`<p class="d-flex"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(sikll.status) ? ssrLooseContain(sikll.status, "0") : ssrLooseEqual(sikll.status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(sikll.status) ? ssrLooseContain(sikll.status, "1") : ssrLooseEqual(sikll.status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(sikll.status) ? ssrLooseContain(sikll.status, "2") : ssrLooseEqual(sikll.status, "2")) ? " selected" : ""}>بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(sikll.status) ? ssrLooseContain(sikll.status, "3") : ssrLooseEqual(sikll.status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(sikll.status) ? ssrLooseContain(sikll.status, "4") : ssrLooseEqual(sikll.status, "4")) ? " selected" : ""}>منتشر</option></select><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
          if (unref(form).processing) {
            _push(`<span>پردازش...</span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).processing) {
            _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
          } else {
            _push(`<span>ارسال</span>`);
          }
          _push(`</button></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div><br></form><hr></section></div></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Profile/sikll-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
