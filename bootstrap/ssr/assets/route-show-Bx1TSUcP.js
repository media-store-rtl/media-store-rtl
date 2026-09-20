import { computed, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "route-show",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Object,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    menus: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    subs: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.menus.id,
      parent_id: props.menus.parent_id,
      name: props.menus.name,
      status: props.menus.status,
      items: [
        {
          routeable_type: "",
          routeable_id: ""
        }
      ],
      subs: [],
      type: null,
      del: null
    });
    if (props.subs) {
      props.subs.data.forEach((element) => {
        form.subs.push(element);
      });
    }
    const getPageUrl = (baseUrl, page) => {
      if (typeof window !== "undefined") {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, "");
        let newUrl = `${baseUrl}?page=${page}${queryString ? "&" + queryString.substring(1) : ""}`;
        return newUrl;
      }
      return `${baseUrl}?page=${page}`;
    };
    const pagination = ref(props.subs);
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table class="d-flex me-auto"><tbody><tr><td><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md font-sm hover-up rounded"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</button></td></tr></tbody></table></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).name)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><!--[-->`);
      ssrRenderList(unref(form).items, (item, index) => {
        _push(`<div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام مدل</label><input${ssrRenderAttr("value", item.routeable_type)} type="text" class="form-control" placeholder="App\\\\Models\\\\Product"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">آیدی</label><div class="d-flex"><input${ssrRenderAttr("value", item.routeable_id)} type="number" class="form-control" placeholder="آیدی">`);
        if (index === unref(form).items.length - 1) {
          _push(`<button type="button" class="btn btn-success ms-2"> + </button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).items.length > 1) {
          _push(`<button type="button" class="btn btn-danger ms-2"> - </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--><div class="mt-4"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ایجاد</span>`);
      }
      _push(`</button></div></div></div></div></div>`);
      if (props.subs.total > 0) {
        _push(`<div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>زیر مجموع</h4></div><div class="card-body"><div class="col-lg-12"><!--[-->`);
        ssrRenderList(props.subs.data, (menu, index) => {
          _push(`<div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام مدل</label><input${ssrRenderAttr("value", menu.routeable_type)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">آیدی</label><div class="d-flex"><input${ssrRenderAttr("value", menu.routeable_id)} placeholder="اینجا تایپ کنید" type="text" class="form-control"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md font-sm hover-up rounded"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
          if (unref(form).processing) {
            _push(`<span>پردازش...</span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).processing) {
            _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
          } else {
            _push(`<span>حذف</span>`);
          }
          _push(`</button></div></div></div></div>`);
        });
        _push(`<!--]-->`);
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
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/route-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
