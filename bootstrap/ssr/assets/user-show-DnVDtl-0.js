import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "sweetalert2";
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
  __name: "user-show",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    cartPrice: Number || String,
    cartCount: Number || String,
    cartDiscount: Number || String,
    cartCoupon: Number || String,
    cartTotal: Number || String,
    user: Object,
    roles: Object,
    alert: String,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const roles = ref(props.user.roles);
    const rol = ref([]);
    roles.value.forEach((element) => {
      rol.value = element;
    });
    const form = useForm({ user: props.user.id, status: props.user.status, role: rol.value.id });
    useForm({ user: props.user.id, role_id: null });
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
      _push(`</div></div><div class="card mx-auto card-login"><div class="card-body"><form><h4 class="card-title mb-4">ویرایش اطلاعات کاربری</h4><p>نام کاربر:${ssrInterpolate(props.user.user_name)}</p><div class="row mb-3"><!--[-->`);
      ssrRenderList(props.users.roles, (role, index) => {
        _push(`<!--[-->`);
        if (role.id == 4) {
          _push(`<div class="col-lg-6 mb-3"><label class="form-label">وضعیت حساب <span class="text-danger">*</span></label><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>مسدود</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>اخیرا</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>غیرفعال</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>آنلاین</option></select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><div class="col-lg-6 mb-3"><label class="form-label">نوع نقش<span class="text-danger">*</span></label><select class="form-select"><!--[-->`);
      ssrRenderList(props.roles, (role, index) => {
        _push(`<option${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, role.id) : ssrLooseEqual(unref(form).role, role.id)) ? " selected" : ""}>${ssrInterpolate(role.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-lg-12 mb-3 ms-1">`);
      if (props.user.roles) {
        _push(`<div class="card-body"><table class="table table-responsive"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">نام</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.user.roles, (role, index) => {
          _push(`<tr><td>${ssrInterpolate(role.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(role.name)}</td><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-sm btn-primary mt-1 mb-1"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
          if (unref(form).processing) {
            _push(`<span>پردازش...</span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).processing) {
            _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
          } else {
            _push(`<span>حذف</span>`);
          }
          _push(`</button></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form><div class="col-lg-3 mb-4"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary w-100"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ثبت</span>`);
      }
      _push(`</button></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Modir/User/user-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
