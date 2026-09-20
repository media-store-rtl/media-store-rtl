import { computed, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
const _sfc_main = {
  __name: "web-index",
  __ssrInlineRender: true,
  props: {
    webDesigns: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    wallet: Number,
    cartTotal: Object,
    notifications: Object,
    names: Object,
    ids: Object,
    statuses: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    useForm({
      name: null,
      status: null,
      id: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font = resolveComponent("font");
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
      _push(`<td class="me-auto">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("webdesign.create"),
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
      _push(`</div></div>`);
      if (props.webDesigns.total > 0) {
        _push(`<div class="card mb-4">`);
        if (props.webDesigns) {
          _push(`<div class="card-body">`);
          if (props.webDesigns.total > 0) {
            _push(`<table class="table table-responsive"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">نام</th><th scope="col">دسته بندی</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.webDesigns.data, (product, index) => {
              _push(`<tr><td>${ssrInterpolate(product.id.toLocaleString("fa-IR"))}</td><td><div class="left">`);
              if (product.image) {
                _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", product.name)}>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div><div class="info"><h6 class="mb-0">`);
              _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(product.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(product.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_font, { style: { "vertical-align": "inherit" } }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(product.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</h6></div></td><td>${ssrInterpolate(product.type.name)}</td><td>${ssrInterpolate(unref(moment)(product.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
              if (product.status == 0) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
              } else {
                _push(`<!---->`);
              }
              if (product.status == 1) {
                _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
              } else {
                _push(`<!---->`);
              }
              if (product.status == 2) {
                _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (product.status == 3) {
                _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (product.status == 4) {
                _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
              } else {
                _push(`<!---->`);
              }
              if (product.status == 5) {
                _push(`<span class="badge badge-pill badge-soft-warning">متوقف</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td><td><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "dropdown-item",
                href: _ctx.route("webdesign.show", [product.id])
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(` ویرایش`);
                  } else {
                    return [
                      createTextVNode(" ویرایش")
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(ssrRenderComponent(unref(link_default), {
                class: "dropdown-item",
                href: _ctx.route("website-design.index", ["q"]) + "all"
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
              _push(`</div></div></td></tr>`);
            });
            _push(`<!--]--></tbody></table>`);
          } else {
            _push(`<!---->`);
          }
          if (props.webDesigns.total > 9) {
            _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
            ssrRenderList(props.webDesigns.links, (link) => {
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
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<p>گزینه ای یافت نشد.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Web/web-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
