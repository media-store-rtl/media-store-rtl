import { computed, watch, ref, unref, withCtx, createBlock, openBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
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
  __name: "favorite-index",
  __ssrInlineRender: true,
  props: {
    products: Object,
    users: Object,
    notifications: Object,
    statuses: Object,
    alert: Object,
    names: Object,
    companies: Object,
    descriptions: Object,
    userPrice: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: null,
      type: null
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
    const getPageUrl = (baseUrl, page) => {
      if (typeof window !== "undefined") {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, "");
        let newUrl = `${baseUrl}?page=${page}${queryString ? "&" + queryString.substring(1) : ""}`;
        return newUrl;
      }
      return `${baseUrl}?page=${page}`;
    };
    const pagination = ref(props.products);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        cartPrice: props.cartPrice,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
        userPrice: props.userPrice,
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
      if (props.products.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><div class="row"><!--[-->`);
        ssrRenderList(props.products.data, (product, index) => {
          _push(`<div class="col-xl-3 col-lg-6 col-md-6"><div class="card card-product-grid">`);
          if (product.favoritable_type == "App\\Models\\Product" && product.favoritable.group.name == "فرم") {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("form.show", product.favoritable.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (product.favoritable.image && product.favoritable.image.status == 4 || product.favoritable.image.status == 5) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.favoritable.name)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.name)}${_scopeId}>`);
                  }
                } else {
                  return [
                    product.favoritable.image && product.favoritable.image.status == 4 || product.favoritable.image.status == 5 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url,
                      class: "card-img h-100",
                      alt: product.favoritable.name
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: product.name
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (product.favoritable_type == "App\\Models\\Product") {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.show", product.favoritable.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (product.favoritable.image && product.favoritable.image.status == 4 || product.favoritable.image.status == 5) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.favoritable.name)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.name)}${_scopeId}>`);
                  }
                } else {
                  return [
                    product.favoritable.image && product.favoritable.image.status == 4 || product.favoritable.image.status == 5 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url,
                      class: "card-img h-100",
                      alt: product.favoritable.name
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: product.name
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (product.favoritable_type == "App\\Models\\WebDesign" && product.favoritable.group.name == "کافی نت") {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("cafe-net.show", product.favoritable.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (product.favoritable.image && product.favoritable.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.favoritable.name)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.name)}${_scopeId}>`);
                  }
                } else {
                  return [
                    product.favoritable.image && product.favoritable.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url,
                      class: "card-img h-100",
                      alt: product.favoritable.name
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: product.name
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (product.favoritable_type == "App\\Models\\WebDesign") {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-design.show", product.favoritable.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (product.favoritable.image && product.favoritable.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.favoritable.name)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.name)}${_scopeId}>`);
                  }
                } else {
                  return [
                    product.favoritable.image && product.favoritable.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url,
                      class: "card-img h-100",
                      alt: product.favoritable.name
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: product.name
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (product.favoritable_type == "App\\Models\\Tarahi") {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("project.show", product.favoritable.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (product.favoritable.image && product.favoritable.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.favoritable.title)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", product.title)}${_scopeId}>`);
                  }
                } else {
                  return [
                    product.favoritable.image && product.favoritable.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + product.favoritable.image.url,
                      class: "card-img h-100",
                      alt: product.favoritable.title
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: product.title
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="info-wrap">`);
          if (product.favoritable_type == "App\\Models\\Product") {
            _push(`<a href="" class="title">نام محصول:</a>`);
          } else if (product.favoritable_type == "App\\Models\\WebDesign") {
            _push(`<a href="" class="title">نام پلن:</a>`);
          } else if (product.favoritable_type == "App\\Models\\Tarahi") {
            _push(`<a href="" class="title">نام پروژه:</a>`);
          } else {
            _push(`<!---->`);
          }
          if (product.favoritable_type == "App\\Models\\Product") {
            _push(`<div class="price mt-1 text-start text-nofull">${ssrInterpolate(product.favoritable.name)}</div>`);
          } else if (product.favoritable_type == "App\\Models\\WebDesign") {
            _push(`<div class="price mt-1 text-start text-nofull">${ssrInterpolate(product.favoritable.name)}</div>`);
          } else if (product.favoritable_type == "App\\Models\\Tarahi") {
            _push(`<div class="price mt-1 text-start text-nofull">${ssrInterpolate(product.favoritable.title)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="price mt-1 text-start mb-1 ms-1"><button href="#" class="btn btn-sm font-sm btn-light rounded"><i class="material-icons md-delete_forever"></i>`);
          if (unref(form).processing && unref(form).id == product.favoritable_id && unref(form).type == product.favoritable_type) {
            _push(`<span>پردازش...</span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).processing && unref(form).id == product.favoritable_id && unref(form).type == product.favoritable_type) {
            _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
          } else {
            _push(`<span>حذف</span>`);
          }
          _push(`</button></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (pagination.value && pagination.value.total > 8) {
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
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Favorite/favorite-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
