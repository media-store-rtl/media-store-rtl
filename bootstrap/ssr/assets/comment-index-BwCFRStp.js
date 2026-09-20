import { computed, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
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
    dark: String,
    wallet: Number,
    users: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    cartTotal: Number,
    cartCount: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    useForm({
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
    const pagination = ref(props.tickets);
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
      _push(`<table><tbody><tr><td class="me-auto"></td></tr></tbody></table></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.tickets.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><div class="row gx-5"><div class="col-lg-9"><section class="content-body p-xl-4"><div class="table-responsive">`);
        if (props.tickets.total > 0) {
          _push(`<div class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><!--[-->`);
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
            if (comment.status == 4 && comment.commentable_type == "App\\Models\\Tarahi") {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("website_design.show", [comment.commentable.slug]),
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
            } else {
              _push(`<!---->`);
            }
            if (comment.status == 4 && comment.commentable_type == "App\\Models\\Product") {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("website_templates.show", [comment.commentable.slug]),
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
            } else {
              _push(`<!---->`);
            }
            if (comment.status == 4 && comment.commentable_type == "App\\Models\\Blog") {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("blog.show", [comment.commentable.slug]),
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
            } else {
              _push(`<!---->`);
            }
            _push(`</td></tr></tbody>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (pagination.value && pagination.value.total > 9) {
          _push(`<div class="pagination-area mb-20 mt-20"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><li class="${ssrRenderClass([{ disabled: !pagination.value.prev_page_url || pagination.value.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: pagination.value.prev_page_url && pagination.value.current_page > 1 ? pagination.value.prev_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": pagination.value.current_page === 1
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
          _push(`</li><li class="${ssrRenderClass([{ active: pagination.value.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: getPageUrl(pagination.value.first_page_url, 1),
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
          if (pagination.value.current_page > 4) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<!--[-->`);
            if (pagination.value.current_page - 3 + i > 1 && pagination.value.current_page - 3 + i < pagination.value.last_page) {
              _push(`<li class="${ssrRenderClass([{ active: pagination.value.current_page === pagination.value.current_page - 3 + i }, "page-item"])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: getPageUrl(pagination.value.path, pagination.value.current_page - 3 + i),
                "preserve-scroll": "",
                "preserve-state": ""
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(pagination.value.current_page - 3 + i)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(pagination.value.current_page - 3 + i), 1)
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
          if (pagination.value.current_page < pagination.value.last_page - 3) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          if (pagination.value.last_page !== 1) {
            _push(`<li class="${ssrRenderClass([{ active: pagination.value.current_page === pagination.value.last_page }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: getPageUrl(pagination.value.path, pagination.value.last_page),
              "preserve-scroll": "",
              "preserve-state": ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(pagination.value.last_page)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(pagination.value.last_page), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<li class="${ssrRenderClass([{ disabled: !pagination.value.next_page_url || pagination.value.current_page === pagination.value.last_page }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: pagination.value.next_page_url && pagination.value.current_page < pagination.value.last_page ? pagination.value.next_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": pagination.value.current_page === pagination.value.last_page
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Comment/comment-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
