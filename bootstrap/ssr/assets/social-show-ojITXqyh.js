import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import "sweetalert2";
import { _ as _sfc_main$2 } from "./AsideAdmin2-Cn98USeV.js";
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
  __name: "social-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    canResetPassword: Boolean,
    status: String,
    users: Object,
    ostans: Object,
    wallet: Number,
    shahrs: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    socials: Object,
    menus: Object,
    path: String,
    alert: Object,
    user: Object,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.user.id,
      user_name: props.users.user_name,
      name: props.users.name,
      lasst_name: props.users.lasst_name,
      name_show: props.users.name_show,
      tel: props.users.tel,
      birth: props.users.profile ? props.users.profile.birth : null,
      gender: props.users.profile ? props.users.profile.gender : null,
      email: props.users.email,
      image: props.users.image ? props.users.image.url : null,
      biography: props.users.profile ? props.users.profile.biography : null,
      password: null,
      password_confirmation: null,
      social: []
    });
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "socials") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    menus.value.forEach((element) => {
      if (element.children.length > 0) {
        element.children.forEach((child) => {
          if (child.routes.length > 0) {
            child.routes.forEach((route) => {
              if (route.name == props.path) {
                if (child.sections.length > 0) {
                  child.sections.forEach((section) => {
                    if (section.name == "socials") {
                      menu.value.push(child);
                    }
                  });
                }
              }
            });
          }
        });
      }
    });
    menu.value.forEach((social) => {
      props.socials.data.forEach((element) => {
        if (social.id == element.title) {
          if (element.link) {
            form.social.push({
              link: element.link.user_id == props.user.id ? element.link.link : null,
              id: element.link.linkable_id && element.link.user_id == props.user.id ? element.link.id : null,
              social_id: element.link.linkable_id,
              name: social.name,
              status: element.link.status
            });
          } else {
            form.social.push({ link: null, id: null, social_id: element.id, name: social.name });
          }
        }
      });
    });
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
      _push(`<div class="col-lg-9"><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-12"><div class="row gx-3"><div class="col-12"><!--[-->`);
      ssrRenderList(unref(form).social, (forms) => {
        _push(`<div class="row"><div class="col mb-3"><label class="form-label">${ssrInterpolate(forms.name)}<span class="text-danger">*</span></label><input${ssrRenderAttr("value", forms.link)} class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="class col mb-3">`);
        if (forms.link) {
          _push(`<label class="form-label">عملیات <span class="text-danger">*</span></label>`);
        } else {
          _push(`<!---->`);
        }
        if (forms.link) {
          _push(`<p class="d-flex"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(forms.status) ? ssrLooseContain(forms.status, "0") : ssrLooseEqual(forms.status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(forms.status) ? ssrLooseContain(forms.status, "1") : ssrLooseEqual(forms.status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(forms.status) ? ssrLooseContain(forms.status, "2") : ssrLooseEqual(forms.status, "2")) ? " selected" : ""}>بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(forms.status) ? ssrLooseContain(forms.status, "3") : ssrLooseEqual(forms.status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(forms.status) ? ssrLooseContain(forms.status, "4") : ssrLooseEqual(forms.status, "4")) ? " selected" : ""}>منتشر</option></select><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`<!--]--></div></div></div></div><br></form><hr></section></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/social-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
