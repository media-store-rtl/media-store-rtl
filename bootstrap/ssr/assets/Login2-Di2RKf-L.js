import { computed, ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Checkbox-COCNy1T4.js";
import { a as usePage, u as useForm, h as head_default, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./Header2-F5OjGsRQ.js";
import _sfc_main$3 from "./Footer2-vTePDDgz.js";
import swal from "sweetalert2";
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
  __name: "Login2",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String,
    cartCount: Number,
    companies: Object,
    alert: Object,
    menus: Object,
    socials: Object,
    path: String,
    time: String,
    menu: Object,
    cart: Object,
    namads: Object
  },
  setup(__props) {
    const props = __props;
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const alert = ref(props.alert);
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const showToast = (icon, title) => {
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
        icon,
        title
      });
    };
    if (alert.value) {
      showToast(alert.value.icon, alert.value.title + " " + alert.value.text);
      alert.value = null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        companies: props.companies,
        results: props.results,
        Quickview: _ctx.Quickview,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(ssrRenderComponent(unref(head_default), { title: "Log in" }, null, _parent));
      _push(`<main class="main pages"><div class="page-content pt-150 pb-150"><div class="container"><div class="row"><div class="col-xl-8 col-lg-10 col-md-12 m-auto"><div class="row">`);
      if (__props.status) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-lg-6 col-md-8"><div class="login_wrap widget-taber-content background-white"><div class="padding_eight_all bg-white"><div class="heading_s1"><h1 class="mb-5">ورود</h1><p class="mb-30">حساب کاربری نداری? `);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ایجاد کن`);
          } else {
            return [
              createTextVNode("ایجاد کن")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><form method="post"><div class="form-group"><input type="text" required="" name="email" placeholder="ایمیل یا تلفن همراه یا نام کاربری"${ssrRenderAttr("value", unref(form).email)} autocomplete="username"></div><div class="form-group"><input required="" type="password" name="password" placeholder="Your password *"${ssrRenderAttr("value", unref(form).password)} autocomplete="current-password"></div><div class="login_footer form-group mb-50"><div class="chek-form"><div class="custome-checkbox">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "form-check-input",
        name: "remember",
        checked: unref(form).remember,
        "onUpdate:checked": ($event) => unref(form).remember = $event
      }, null, _parent));
      _push(`<label class="form-check-label" for="exampleCheckbox1"><span>مرا بخاطر بسپار</span></label></div></div>`);
      if (__props.canResetPassword) {
        _push(ssrRenderComponent(unref(link_default), {
          class: "text-muted",
          href: _ctx.route("password.request")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`رمز خود را فراموش کرده اید؟`);
            } else {
              return [
                createTextVNode("رمز خود را فراموش کرده اید؟")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group"><button type="submit" name="login" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-heading btn-block hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
      } else {
        _push(`<span>ورود</span>`);
      }
      _push(`</button></div></form></div></div></div></div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies,
        namads: props.namads,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
