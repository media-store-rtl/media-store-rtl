import { computed, ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import { _ as _sfc_main$2 } from "./Aside-B3hnHcJa.js";
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
  __name: "social-index",
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
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: props.users.id,
      user_name: props.users.user_name,
      name: props.users.name,
      lasst_name: props.users.lasst_name,
      name_show: props.users.name_show,
      tel: props.users.tel,
      // shahr:props.users.profile?props.users.profile.shahr:null,
      // address:props.users.profile?props.users.profile.address:null,
      birth: props.users.profile ? props.users.profile.birth : null,
      gender: props.users.profile ? props.users.profile.gender : null,
      email: props.users.email,
      image: props.users.image ? props.users.image.url : null,
      biography: props.users.profile ? props.users.profile.biography : null,
      password: null,
      password_confirmation: null,
      socials: []
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
    const socials = ref([]);
    menu.value.forEach((social) => {
      props.socials.data.forEach((element) => {
        if (social.id == element.title) {
          if (element.link) {
            socials.value.push({
              link: element.link.user_id == props.users.id ? element.link.link : null,
              id: element.link.linkable_id ? element.link.id : null,
              social_id: element.link.linkable_id,
              name: social.name,
              status: element.link.user_id == props.users.id ? element.link.status : null
            });
          } else {
            socials.value.push({ link: null, id: null, social_id: element.id, name: social.name });
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
      if (unref(form).socials.length > 0) {
        _push(`<td class="me-auto"></td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="col-lg-9"><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-12"><div class="row gx-3"><!--[-->`);
      ssrRenderList(socials.value, (socia, index) => {
        _push(`<div class="class row">`);
        if (socia.id) {
          _push(`<div class="class col mb-3"><label class="form-label">${ssrInterpolate(socia.name)}</label><input${ssrRenderAttr("value", socia.link)} class="form-control" type="text" placeholder="لینک آدرس را وارد نمایید"></div>`);
        } else {
          _push(`<div class="class col-4 mb-3"><label class="form-label">${ssrInterpolate(socia.name)}</label><input${ssrRenderAttr("value", socia.link)} class="form-control" type="text" placeholder="لینک آدرس را وارد نمایید"></div>`);
        }
        if (socia.id && socia.link && socia.user_id == props.auth.user.id) {
          _push(`<div class="class col mb-3"><label class="form-label">عملیات <span class="text-danger">*</span></label><p>`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "btn btn-md rounded font-sm hover-up",
            href: _ctx.route("link.destroy", [socia.id]),
            method: "delete",
            as: "button"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`حذف`);
              } else {
                return [
                  createTextVNode("حذف")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</p></div>`);
        } else {
          _push(`<div class="class col mb-3"><label class="form-label">عملیات <span class="text-danger">*</span></label><p><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
          _push(`</button></p></div>`);
        }
        if (socia.id && socia.link && socia.status) {
          _push(`<div class="class col mb-3"><h6 class="text-danger">وضعیت</h6>`);
          if (socia.status == 0) {
            _push(`<p>ثبت شده</p>`);
          } else if (socia.status == 1) {
            _push(`<p> درانتظار</p>`);
          } else if (socia.status == 2) {
            _push(`<p>مسدود شده</p>`);
          } else if (socia.status == 3) {
            _push(`<p>رد شده</p>`);
          } else if (socia.status == 4) {
            _push(`<p>تایید شده</p>`);
          } else {
            _push(`<p>نامشخص</p>`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="class col mb-3"></div>`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Profile/social-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
