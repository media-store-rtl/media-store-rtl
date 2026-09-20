import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import { _ as _sfc_main$2 } from "./AsideAdmin-CK4HDbOd.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "Bankname-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    banknames: Object,
    ids: Object,
    statuses: Object,
    subjects: Object,
    cartNumber: Number,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    useForm({
      subject: null,
      status: null,
      id: null
    });
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
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div>`);
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
      _push(`</div>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("bankname.create"),
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
      _push(`</div>`);
      if (props.banknames.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><div class="row gx-5">`);
        _push(ssrRenderComponent(_sfc_main$2, { class: "col-lg-3 border-end" }, null, _parent));
        _push(`<div class="col-lg-9"><section class="content-body p-xl-4"><div class="table-responsive">`);
        if (props.banknames.total > 0) {
          _push(`<table class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">ایجاد کننده</th><th scope="col">نام</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.banknames.data, (bankname) => {
            _push(`<tr><td>${ssrInterpolate(bankname.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(bankname.user.user_name)}</td><td>${ssrInterpolate(bankname.name)}</td><td>${ssrInterpolate(unref(moment)(bankname.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
            if (bankname.status == 0) {
              _push(`<span class="badge badge-pill badge-soft-info"> ثبت</span>`);
            } else {
              _push(`<!---->`);
            }
            if (bankname.status == 1) {
              _push(`<span class="badge badge-pill badge-soft-warning">ایجاد</span>`);
            } else {
              _push(`<!---->`);
            }
            if (bankname.status == 2) {
              _push(`<span class="badge badge-pill badge-soft-secondary"> بررسی</span>`);
            } else {
              _push(`<!---->`);
            }
            if (bankname.status == 3) {
              _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
            } else {
              _push(`<!---->`);
            }
            if (bankname.status == 4) {
              _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td><td class="text-end"><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("bankname.edit", [bankname.id]),
              class: "dropdown-item"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`ویرایش`);
                } else {
                  return [
                    createTextVNode("ویرایش")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></td></tr>`);
          });
          _push(`<!--]-->`);
          if (props.banknames.total > 9) {
            _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
            ssrRenderList(props.banknames.links, (link) => {
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
          _push(`</tbody></table>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section></div></div></div></div>`);
      } else {
        _push(`<div><p>گزینه ای یافت نشد.</p></div>`);
      }
      _push(`</section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/Bankname-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
