import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import { l as link_default } from "../ssr.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "comment-index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    tickets: Object,
    ids: Object,
    statuses: Object,
    wallet: Number,
    users: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    cart: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        wallet: props.wallet,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
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
      _push(`</div></div>`);
      if (props.tickets.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><div class="row gx-5"><div class="col-lg-9"><section class="content-body p-xl-4"><div class="table-responsive"><div class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><!--[-->`);
        ssrRenderList(props.tickets.data, (comment) => {
          _push(`<tbody><tr><td>${ssrInterpolate(comment.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(unref(moment)(comment.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
          if (comment.status == 0) {
            _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
          } else {
            _push(`<!---->`);
          }
          if (comment.status == 1) {
            _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
          } else {
            _push(`<!---->`);
          }
          if (comment.status == 2) {
            _push(`<span class="badge badge-pill badge-soft-secondary">برسی</span>`);
          } else {
            _push(`<!---->`);
          }
          if (comment.status == 3) {
            _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
          } else {
            _push(`<!---->`);
          }
          if (comment.status == 4) {
            _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="text-end">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("commentAdmin.edit", [comment.id]),
            class: "btn btn-primary btn-sm rounded font-sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`نمایش`);
              } else {
                return [
                  createTextVNode("نمایش")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr></tbody>`);
        });
        _push(`<!--]--></div>`);
        if (props.tickets.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
          ssrRenderList(props.tickets.links, (link) => {
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
        _push(`</div></section></div></div></div></div>`);
      } else {
        _push(`<div><p>گزینه ای یافت نشد.</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Comment/comment-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
