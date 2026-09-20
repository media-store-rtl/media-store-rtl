import { computed, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
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
  __name: "reqDesignerTarahi-index",
  __ssrInlineRender: true,
  props: {
    tarahi: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    notifications: Object,
    names: Object,
    ids: Object,
    statuses: Object,
    companies: Object,
    descriptions: Object,
    reqDesigners: Object,
    alert: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    useForm({
      name: null,
      status: null,
      id: null,
      reqDesigner_id: null,
      dargah: null
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
      _push(`</div></div>`);
      if (props.reqDesigners.total > 0) {
        _push(`<div class="bg-white mb-4"><div class="card-body"><div class="row gx-5"><div class="col-lg-9"><section class="content-body p-xl-4"><article class="itemlist"><div class="table-responsive"><div class="table table-hover"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">پروژه</th><th scope="col">تاریخ</th><th scope="col">تحویل پروژه</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.reqDesigners.data, (reqDesigner, index) => {
          _push(`<tr><td>${ssrInterpolate(reqDesigner.id.toLocaleString("fa-IR"))}</td>`);
          if (reqDesigner.req_designer && reqDesigner.req_designer.status == 4 || reqDesigner.req_designer && reqDesigner.req_designer.status == 6) {
            _push(`<td>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website_design.show", [reqDesigner.req_designer.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="left"${_scopeId}>`);
                  if (reqDesigner.req_designer.image) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.req_designer.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.req_designer.title)}${_scopeId}>`);
                  } else if (props.companies) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.req_designer.title)}${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="info"${_scopeId}><h6 class="mb-0 text-nofull"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>${ssrInterpolate(reqDesigner.req_designer.title)}</span></span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "left" }, [
                      reqDesigner.req_designer.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.req_designer.image.url,
                        class: "img-sm img-thumbnail",
                        alt: reqDesigner.req_designer.title
                      }, null, 8, ["src", "alt"])) : props.companies ? (openBlock(), createBlock("img", {
                        key: 1,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                        class: "img-sm img-thumbnail",
                        alt: reqDesigner.req_designer.title
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "info" }, [
                      createVNode("h6", { class: "mb-0 text-nofull" }, [
                        createVNode("span", { style: { "vertical-align": "inherit" } }, [
                          createVNode("span", { style: { "vertical-align": "inherit" } }, toDisplayString(reqDesigner.req_designer.title), 1)
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td>`);
          } else {
            _push(`<td>`);
            _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="left"${_scopeId}>`);
                  if (reqDesigner.req_designer.image) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.req_designer.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.req_designer.title)}${_scopeId}>`);
                  } else if (props.companies) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.req_designer.title)}${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="info"${_scopeId}><h6 class="mb-0 text-nofull"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>${ssrInterpolate(reqDesigner.req_designer.title)}</span></span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "left" }, [
                      reqDesigner.req_designer.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.req_designer.image.url,
                        class: "img-sm img-thumbnail",
                        alt: reqDesigner.req_designer.title
                      }, null, 8, ["src", "alt"])) : props.companies ? (openBlock(), createBlock("img", {
                        key: 1,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                        class: "img-sm img-thumbnail",
                        alt: reqDesigner.req_designer.title
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "info" }, [
                      createVNode("h6", { class: "mb-0 text-nofull" }, [
                        createVNode("span", { style: { "vertical-align": "inherit" } }, [
                          createVNode("span", { style: { "vertical-align": "inherit" } }, toDisplayString(reqDesigner.req_designer.title), 1)
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td>`);
          }
          _push(`<td>${ssrInterpolate(unref(moment)(reqDesigner.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td> در ${ssrInterpolate(reqDesigner.expired)} روز </td><td>`);
          if (reqDesigner.status == 0) {
            _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
          } else {
            _push(`<!---->`);
          }
          if (reqDesigner.status == 1) {
            _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
          } else {
            _push(`<!---->`);
          }
          if (reqDesigner.status == 2) {
            _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
          } else {
            _push(`<!---->`);
          }
          if (reqDesigner.status == 3) {
            _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
          } else {
            _push(`<!---->`);
          }
          if (reqDesigner.status == 4) {
            _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
          } else {
            _push(`<!---->`);
          }
          if (reqDesigner.status == 5) {
            _push(`<span class="badge badge-pill badge-soft-pink">انتخاب شده</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td>`);
          if (reqDesigner.status !== 3 && reqDesigner.status !== 5 && reqDesigner.id !== reqDesigner.req_designer.reqdesigner_id) {
            _push(`<td class="text-end"><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
            if (reqDesigner.status !== 3 && reqDesigner.status !== 5) {
              _push(ssrRenderComponent(unref(link_default), {
                class: "dropdown-item",
                href: _ctx.route("reqDesigner.edit", [reqDesigner.id]),
                method: "GET"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`ویرایش جزئیات`);
                  } else {
                    return [
                      createTextVNode("ویرایش جزئیات")
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            if (reqDesigner.status !== 3 && reqDesigner.status !== 5) {
              _push(ssrRenderComponent(unref(link_default), {
                class: "dropdown-item text-danger",
                href: _ctx.route("reqDesigner.destroy", [reqDesigner.id]),
                onFinish: ($event) => _ctx.submitTimer(),
                method: "delete"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`لغو`);
                  } else {
                    return [
                      createTextVNode("لغو")
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></td>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tr>`);
        });
        _push(`<!--]--></tbody></div>`);
        if (props.reqDesigners.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
          ssrRenderList(props.reqDesigners.links, (link) => {
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
        _push(`</div></article></section></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Designer/Tarahi/reqDesignerTarahi-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
