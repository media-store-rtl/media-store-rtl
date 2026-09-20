import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
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
  __name: "user-edit",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    user: Object,
    roles: Object,
    flash: String,
    notifications: Object,
    companies: Object,
    descriptions: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div>`);
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
      _push(`</div></div><div class="card mx-auto card-login"><div class="card-body"><h4 class="card-title mb-4">ویرایش اطلاعات کاربری</h4><p>نام کاربری:${ssrInterpolate(props.user.user_name)}</p><form><!--[-->`);
      ssrRenderList(props.users.roles, (role, index) => {
        _push(`<!--[-->`);
        if (role.id == 4) {
          _push(`<div class="col-lg-6 mb-3 ms-1"><label class="form-label">وضعیت حساب <span class="text-danger">*</span></label><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>اخیرا</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>مسدود</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>غیرفعال</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>آنلاین</option></select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><div class="col-lg-6 mb-3 ms-1"><label class="form-label">نوع نقش<span class="text-danger">*</span></label><select class="form-select"><!--[-->`);
      ssrRenderList(props.roles, (role, index) => {
        _push(`<option${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, role.id) : ssrLooseEqual(unref(form).role, role.id)) ? " selected" : ""}>${ssrInterpolate(role.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-lg-6 mb-3 ms-1">`);
      if (props.user.roles) {
        _push(`<div class="card-body"><table class="table table-responsive"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">نام</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.user.roles, (role, index) => {
          _push(`<tr><td>${ssrInterpolate(role.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(role.name)}</td><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-sm btn-primary mt-1 mb-1"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>حذف</button></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form><div class="col-lg-3 mb-4"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary w-100"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>ثبت</button></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Profile/user-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
