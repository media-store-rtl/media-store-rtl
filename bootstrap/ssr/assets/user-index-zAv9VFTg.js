import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "sweetalert2";
import "@inertiajs/inertia";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "user-index",
  __ssrInlineRender: true,
  props: {
    user: Object,
    orders: Object,
    users: Object,
    cartPrice: Number || String,
    cartCount: Number || String,
    cartDiscount: Number || String,
    wallet: Number,
    cartCoupon: Number || String,
    cartTotal: Number || String,
    notifications: Object,
    statuses: Object | String,
    subjects: Object | String,
    alert: Object,
    companies: Object,
    descriptions: Object,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      subject: props.subjects ? props.subjects : null,
      status: props.statuses ? props.statuses : null
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
      _push(`</div></div><div class="card mb-4"><header class="card-header"><div class="row gx-3"><div class="col-lg-4 col-md-6 me-auto"><input${ssrRenderAttr("value", unref(form).subject)} type="text" placeholder="جستجو کردن..." class="form-control"></div><div class="col-lg-2 col-md-3 col-6"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "All") : ssrLooseEqual(unref(form).status, "All")) ? " selected" : ""}>همه وضعیت ها</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option><option value="6"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "6") : ssrLooseEqual(unref(form).status, "6")) ? " selected" : ""}>تمام شده</option></select></div></div></header><div class="card-body"><div class="table-responsive"><div class="table table-hover"><thead><tr><th><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">کاربر</span></span></th><th><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">نقش</span></span></th><th><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">افتتاح حساب</span></span></th><th><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">آخرین ورود</span></span></th><th><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">وضعیت</span></span></th><th class="text-end"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">عملیات</span></span></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(props.user.data, (use, index) => {
        _push(`<tr><td width="40%"><a href="#" class="itemside"><div class="left">`);
        if (use.image && use.image.url) {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + use.image.url)} class="img-sm img-avatar"${ssrRenderAttr("alt", use.show_name)}>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")} class="img-sm img-avatar"${ssrRenderAttr("alt", use.show_name)}>`);
        }
        _push(`</div><div class="info pl-3"><h6 class="mb-0 title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(use.user_name)}</span></span></h6><small class="text-muted"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">شناسه کاربری: ${ssrInterpolate(use.id)}</span></span></small></div></a></td><td><!--[-->`);
        ssrRenderList(use.roles, (role, index2) => {
          _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(role.name + " ")}</span></span>`);
        });
        _push(`<!--]--></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(unref(moment)(use.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span></span></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(unref(moment)(use.updated_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span></span></td><td>`);
        if (use.status == 0) {
          _push(`<span class="badge badge-pill badge-soft-info">ثبت </span>`);
        } else {
          _push(`<!---->`);
        }
        if (use.status == 1) {
          _push(`<span class="badge badge-pill badge-soft-warning">مسدود</span>`);
        } else {
          _push(`<!---->`);
        }
        if (use.status == 2) {
          _push(`<span class="badge badge-pill badge-soft-secondary">اخیرا</span>`);
        } else {
          _push(`<!---->`);
        }
        if (use.status == 3) {
          _push(`<span class="badge badge-pill badge-soft-danger"> غیرفعال</span>`);
        } else {
          _push(`<!---->`);
        }
        if (use.status == 4) {
          _push(`<span class="badge badge-pill badge-soft-success">آنلاین</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="text-end"><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "dropdown-item",
          href: _ctx.route("userModir.show", [use.id])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ویرایش اطلاعات`);
            } else {
              return [
                createTextVNode("ویرایش اطلاعات")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></div></div></div></div>`);
      if (props.user.total > 9) {
        _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
        ssrRenderList(props.user.links, (link) => {
          _push(`<li class="${ssrRenderClass(["page-item", link.url == null ? "disable" : "", link.active ? "active" : ""])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: link.url == null ? "#" : link.url
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Modir/User/user-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
