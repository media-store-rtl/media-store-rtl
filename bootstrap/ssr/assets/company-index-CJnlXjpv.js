import { computed, watch, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import { _ as _sfc_main$2 } from "./AsideAdmin-CK4HDbOd.js";
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
  __name: "company-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    ids: Object,
    statuses: Object,
    subjects: Object,
    cartNumber: Number,
    shahrs: Object,
    wallet: Number,
    ostans: Object,
    alert: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.companies ? props.companies.id : null,
      user_id: props.companies ? props.companies.user_id : null,
      tax: props.companies ? props.companies.tax : null,
      complications: props.companies ? props.companies.complications : null,
      comison: props.companies ? props.companies.comison : null,
      comison_designer: props.companies ? props.companies.comison_designer : null,
      design_damage: props.companies ? props.companies.design_damage : null,
      job: props.companies ? props.companies.job : null,
      status: props.companies ? props.companies.status : null
    });
    watch(() => props.alert, (val) => {
      if (val) {
        if (val.title) {
          swal.fire(val.title, val.text, val.icon);
        } else {
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
            title: val.text,
            icon: val.icon
          });
        }
      }
    });
    watch(() => errors.value, (val) => {
      if (val && Object.keys(val).length > 0) {
        Object.values(val).forEach((errMsg) => {
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
            title: errMsg,
            icon: "error"
          });
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<body${ssrRenderAttrs(_attrs)}><div class="screen-overlay"></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        roles: props.roles,
        alert: props.alert,
        users: props.users,
        wallet: props.wallet,
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
      _push(`<td class="me-auto">`);
      if (props.companies == null) {
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("company.create"),
          class: "btn btn-primary btn-sm rounded font-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ایجاد`);
            } else {
              return [
                createTextVNode("ایجاد")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card"><div class="card-body"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "col-lg-3 border-end" }, null, _parent));
      _push(`<div class="col-lg-9">`);
      if (props.companies) {
        _push(`<section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-12"><div class="row gx-3"><div class="col-6 mb-3"><label class="form-label"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">مالیات</span></span></label><input${ssrRenderAttr("value", unref(form).tax)} class="form-control" type="text" placeholder="مالیات به عدد وارد نمایید.مثال:0.1 معادل 10 درصد"></div><div class="col-6 mb-3"><label class="form-label"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">عوارض</span></span></label><input${ssrRenderAttr("value", unref(form).complications)} class="form-control" type="text" placeholder="عوارض به عدد وارد نمایید.مثال:0.1 معادل 10 درصد"></div><div class="col-6 mb-3"><label class="form-label"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">کمیسیون</span></span></label><input${ssrRenderAttr("value", unref(form).comison)} class="form-control" type="text" placeholder="کمیسیون به عدد وارد نمایید.مثال:0.1 معادل 10 درصد"></div><div class="col-lg-6 mb-3"><label class="form-label"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">کمیسیون طراح</span></span></label><input${ssrRenderAttr("value", unref(form).comison_designer)} class="form-control" type="text" placeholder="کمیسیون به عدد وارد نمایید.مثال:0.1 معادل 10 درصد"></div><div class="col-lg-6 mb-3"><label class="form-label"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">زمان جاب</span></span></label><input${ssrRenderAttr("value", unref(form).job)} class="form-control" type="tel" placeholder="زمان جاب به دقیقه وارد نمایید. مثال:1"></div></div></div></div><br><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
        _push(`</button></form><hr class="my-5"></section>`);
      } else {
        _push(`<p> گزینه ای یافت نشد.</p>`);
      }
      _push(`</div></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies
      }, null, _parent));
      _push(`</main></body>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Company/company-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
