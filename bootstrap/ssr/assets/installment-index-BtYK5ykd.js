import { computed, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
  __name: "installment-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    installments: Object,
    ids: Object,
    statuses: Object,
    subjects: Object,
    wallet: Number,
    cartNumber: Number,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    useForm({
      subject: null,
      status: null,
      id: null
    });
    const getPageUrl = (baseUrl, page) => {
      if (typeof window !== "undefined") {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, "");
        let newUrl = `${baseUrl}?page=${page}${queryString ? "&" + queryString.substring(1) : ""}`;
        return newUrl;
      }
      return `${baseUrl}?page=${page}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
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
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("installment.create"),
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
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card mb-4"><div class="card-body"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "col-lg-3 border-end" }, null, _parent));
      _push(`<div class="col-lg-9"><section class="content-body p-xl-4">`);
      if (props.installments.total > 0) {
        _push(`<div class="table-responsive">`);
        if (props.installments.total > 0) {
          _push(`<div class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">ایجاد کننده</th><th scope="col">تعداد</th><th scope="col">تاریخ</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.installments.data, (section) => {
            _push(`<tr><td>${ssrInterpolate(section.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(section.user.user_name)}</td><td>${ssrInterpolate(section.count)}</td><td>${ssrInterpolate(unref(moment)(section.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td class="text-end"><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("installment.show", [section.id]),
              class: "dropdown-item"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`نمایش جزئیات`);
                } else {
                  return [
                    createTextVNode("نمایش جزئیات")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(unref(link_default), {
              class: "dropdown-item text-danger",
              href: _ctx.route("installment.destroy", [section.id]),
              method: "delete",
              as: "button",
              "on-finish": _ctx.submitTime
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
            _push(`</div></div></td></tr>`);
          });
          _push(`<!--]--></tbody></div>`);
        } else {
          _push(`<!---->`);
        }
        if (props.installments && props.installments.total > 9) {
          _push(`<div class="pagination-area mb-20 mt-20"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><li class="${ssrRenderClass([{ disabled: !props.installments.prev_page_url || props.installments.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.installments.prev_page_url && props.installments.current_page > 1 ? props.installments.prev_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.installments.current_page === 1
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="material-icons md-chevron_right"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "material-icons md-chevron_right" })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li class="${ssrRenderClass([{ active: props.installments.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: getPageUrl(props.installments.first_page_url, 1),
            "preserve-scroll": "",
            "preserve-state": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`1`);
              } else {
                return [
                  createTextVNode("1")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
          if (props.installments.current_page > 4) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<!--[-->`);
            if (props.installments.current_page - 3 + i > 1 && props.installments.current_page - 3 + i < props.installments.last_page) {
              _push(`<li class="${ssrRenderClass([{ active: props.installments.current_page === props.installments.current_page - 3 + i }, "page-item"])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: getPageUrl(props.installments.path, props.installments.current_page - 3 + i),
                "preserve-scroll": "",
                "preserve-state": ""
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(props.installments.current_page - 3 + i)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.installments.current_page - 3 + i), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]-->`);
          if (props.installments.current_page < props.installments.last_page - 3) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          if (props.installments.last_page !== 1) {
            _push(`<li class="${ssrRenderClass([{ active: props.installments.current_page === props.installments.last_page }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: getPageUrl(props.installments.path, props.installments.last_page),
              "preserve-scroll": "",
              "preserve-state": ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(props.installments.last_page)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.installments.last_page), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<li class="${ssrRenderClass([{ disabled: !props.installments.next_page_url || props.installments.current_page === props.installments.last_page }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.installments.next_page_url && props.installments.current_page < props.installments.last_page ? props.installments.next_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.installments.current_page === props.installments.last_page
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="material-icons md-chevron_left"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "material-icons md-chevron_left" })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li></ul></nav></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div><p>گزینه ای یافت نشد.</p></div>`);
      }
      _push(`</section></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/installment-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
