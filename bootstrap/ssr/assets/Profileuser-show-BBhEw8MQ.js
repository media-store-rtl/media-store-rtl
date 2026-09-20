import { computed, ref, unref, withCtx, createBlock, openBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "Profileuser-show",
  __ssrInlineRender: true,
  props: {
    users: Object,
    user: Object,
    companies: Object,
    orders_count: Number,
    userPrice: Number,
    user_products: Object,
    descriptions: Object,
    user_tarahis: Object,
    user_designers: Object,
    cart: Object,
    userResults: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const orders = ref([]);
    props.user.orders.forEach((order) => {
      orders.value = +orders.value + (order.price * order.count - order.discount);
    });
    const orders_products = ref([]);
    if (props.user.orders_product) {
      props.user.orders_product.forEach((element) => {
        orders_products.value.push(element.price * element.count - element.comison - element.tax - element.complications);
      });
    }
    const orders_counts = ref([]);
    if (props.user.orders_product) {
      orders_counts.value = props.user.orders_product.length;
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div>`);
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
      _push(`</div></div><div class="card mb-4"><div class="card-header bg-brand-2" style="${ssrRenderStyle({ "height": "150px" })}"></div><div class="card-body"><div class="row"><div class="col-xl col-lg flex-grow-0" style="${ssrRenderStyle({ "flex-basis": "230px" })}"><div class="img-thumbnail shadow w-100 bg-white position-relative text-center" style="${ssrRenderStyle({ "height": "190px", "width": "200px", "margin-top": "-120px" })}">`);
      if (props.user.image && props.user.image.status == 4) {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.user.image.url)} class="center-xy img-fluid"${ssrRenderAttr("alt", props.user.user_name)}>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")} class="center-xy img-fluid"${ssrRenderAttr("alt", props.user.user_name)}>`);
      }
      _push(`</div></div><div class="col-xl col-lg">`);
      if (props.user) {
        _push(`<h3>${ssrInterpolate(props.user.name_show)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (props.user.profile && props.user.profile.status == 4) {
        _push(`<p>${ssrInterpolate(props.user.profile.biography)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><hr class="my-4"><div class="row g-4"><div class="col-md-12 col-lg-4 col-xl-2"><article class="box"><p class="mb-0 text-muted">تعداد فروش:</p><h5 class="text-success text-start">${ssrInterpolate(orders_counts.value.toLocaleString("fa-IR"))}</h5><p class="mb-0 text-muted">درآمد خالص:</p>`);
      if (orders_products.value > 0) {
        _push(`<h5 class="text-success mb-0 text-start">${ssrInterpolate(orders_products.value.toLocaleString("fa-IR"))}</h5>`);
      } else {
        _push(`<h5 class="text-success mb-0 text-start">${ssrInterpolate(0 .toLocaleString("fa-IR"))}</h5>`);
      }
      _push(`</article></div></div></div></div>`);
      if (props.userResults.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><h3 class="card-title">محصولات</h3><div class="row"><!--[-->`);
        ssrRenderList(props.userResults.data, (result, index) => {
          _push(`<div class="col-xl-2 col-lg-3 col-md-6">`);
          if (result.image.imageable_type == "App\\Models\\Product") {
            _push(`<div class="card card-product-grid">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.show", result.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (result.image && result.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} class="card-img h-100"${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  }
                } else {
                  return [
                    result.image && result.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                      class: "card-img h-100",
                      alt: result.name
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: result.name
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="info-wrap"><a href="" class="title">نام محصول:</a><div class="price mt-1 text-start">${ssrInterpolate(result.name)}</div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (result.image.imageable_type == "App\\Models\\WebDesign") {
            _push(`<div class="card card-product-grid">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-design.show", result.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (result.image && result.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} class="card-img h-100"${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  }
                } else {
                  return [
                    result.image && result.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                      class: "card-img h-100",
                      alt: result.name
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: result.name
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="info-wrap"><a href="" class="title">عنوان خدمت:</a><div class="price mt-1 text-start">${ssrInterpolate(result.name)}</div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (result.image.imageable_type == "App\\Models\\Blog") {
            _push(`<div class="card card-product-grid">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("blog.show", result.slug),
              class: "img-wrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (result.image && result.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} class="card-img h-100"${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="card-img h-100"${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  }
                } else {
                  return [
                    result.image && result.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                      class: "card-img h-100",
                      alt: result.name
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "card-img h-100",
                      alt: result.name
                    }, null, 8, ["src", "alt"]))
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="info-wrap"><a href="" class="title">عنوان مقاله :</a><div class="price mt-1 text-start">${ssrInterpolate(result.title)}</div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
        if (props.userResults && props.userResults.total > 9) {
          _push(`<div class="pagination-area mb-20 mt-20"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><li class="${ssrRenderClass([{ disabled: !props.userResults.prev_page_url || props.userResults.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.userResults.prev_page_url && props.userResults.current_page > 1 ? props.userResults.prev_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.userResults.current_page === 1
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
          _push(`</li><li class="${ssrRenderClass([{ active: props.userResults.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: getPageUrl(props.userResults.first_page_url, 1),
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
          if (props.userResults.current_page > 4) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<!--[-->`);
            if (props.userResults.current_page - 3 + i > 1 && props.userResults.current_page - 3 + i < props.userResults.last_page) {
              _push(`<li class="${ssrRenderClass([{ active: props.userResults.current_page === props.userResults.current_page - 3 + i }, "page-item"])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: getPageUrl(props.userResults.path, props.userResults.current_page - 3 + i),
                "preserve-scroll": "",
                "preserve-state": ""
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(props.userResults.current_page - 3 + i)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.userResults.current_page - 3 + i), 1)
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
          if (props.userResults.current_page < props.userResults.last_page - 3) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          if (props.userResults.last_page !== 1) {
            _push(`<li class="${ssrRenderClass([{ active: props.userResults.current_page === props.userResults.last_page }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: getPageUrl(props.userResults.path, props.userResults.last_page),
              "preserve-scroll": "",
              "preserve-state": ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(props.userResults.last_page)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.userResults.last_page), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<li class="${ssrRenderClass([{ disabled: !props.userResults.next_page_url || props.userResults.current_page === props.userResults.last_page }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.userResults.next_page_url && props.userResults.current_page < props.userResults.last_page ? props.userResults.next_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.userResults.current_page === props.userResults.last_page
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Profile/Profileuser-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
