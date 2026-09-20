import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import _sfc_main$3 from "./Footer2-vTePDDgz.js";
import { u as useForm, h as head_default, l as link_default } from "../ssr.js";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "guest-Profile-show",
  __ssrInlineRender: true,
  props: {
    user: Object,
    results: Object,
    orders_count: Number,
    companies: Object,
    role: Object,
    auth: Object,
    discounts: Object,
    menus: Object,
    socials: Object,
    path: String,
    time: String,
    coupon_count: Number,
    querystring: String,
    menu: Object,
    users: Object,
    alert: Object,
    orders: Object,
    cart: Object,
    namads: Object,
    userResults: Object
  },
  setup(__props) {
    const props = __props;
    useForm({
      q: null
    });
    const siklls = ref([]);
    if (props.user && props.user.siklls) {
      props.user.siklls.forEach((element) => {
        if (element.status == 4) {
          siklls.value.push(element);
        }
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
    const titleSeo = props.user.user_name;
    const descriptionSeo = props.user.name + " " + props.user.lasst_name + "-" + props.user.profile.biography;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: unref(titleSeo),
        description: descriptionSeo,
        noIndex: false
      }, null, _parent));
      _push(ssrRenderComponent(unref(head_default), { title: "index" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        results: props.results,
        Quickview: _ctx.Quickview,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main"><div class="container mb-30"><div class="archive-header-2 text-center pt-80 pb-50"></div><div class="row flex-row-reverse"><div class="col-lg-4-5"><div class="shop-product-fillter"><div class="totall-product"><p>ما <strong class="text-brand">${ssrInterpolate(props.userResults.total)}</strong> مورد پیدا کردیم!</p></div><div class="sort-by-product-area"></div></div><div class="row product-grid"><!--[-->`);
      ssrRenderList(props.userResults.data, (result, index) => {
        _push(`<div class="col-lg-4 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
        if (result.image && result.image.status == 4 || result.image.status == 5) {
          _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="default-img"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt=""${_scopeId}><img class="hover-img"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "default-img",
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("img", {
                    class: "hover-img",
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else if (props.companies) {
          _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="default-img"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} alt=""${_scopeId}><img class="hover-img"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "default-img",
                    src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("img", {
                    class: "hover-img",
                    src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (result.discount) {
          _push(`<div class="product-badges product-badges-position product-badges-mrg"><span class="hot">${ssrInterpolate(result.discount.percent)}% تخفیف </span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="product-content-wrap"><div class="product-category"><!--[-->`);
        ssrRenderList(result.menus, (menu, index2) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(menu.sections, (section, index3) => {
            _push(`<!--[-->`);
            if (section.name == "products" || section.name == "web_designs" || section.name == "blogs") {
              _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(menu.name + " ")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(menu.name + " "), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></div><h2>`);
        if (result.group && result.type && result.category && result.name) {
          _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(result.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(result.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else if (result.group && result.type && result.title) {
          _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(result.group.name + " " + result.type.name + "  " + result.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(result.group.name + " " + result.type.name + "  " + result.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</h2><div>`);
        if (result.tag) {
          _push(`<span class="font-small text-muted">${ssrInterpolate(result.tag)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="product-rate-cover"><div class="product-rate d-inline-block">`);
        if (result.ratings_avg_rating) {
          _push(`<div class="product-rating" style="${ssrRenderStyle("width:" + result.ratings_avg_rating * 20 + "%")}"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (result.ratings_avg_rating) {
          _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.ratings_avg_rating)})</span>`);
        } else {
          _push(`<span class="font-small ml-5 text-muted"> (0.000)</span>`);
        }
        _push(`</div><div></div><div class="product-card-bottom"><div class="product-price"></div>`);
        if (result.image.imageable_type == "App\\Models\\Product") {
          _push(`<div class="add-cart">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "add",
            href: _ctx.route("website-templates.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fi-rs-shopping-cart mr-5"${_scopeId}></i>نمایش `);
              } else {
                return [
                  createVNode("i", { class: "fi-rs-shopping-cart mr-5" }),
                  createTextVNode("نمایش ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (result.image.imageable_type == "App\\Models\\Blog") {
          _push(`<div class="add-cart">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "add",
            href: _ctx.route("blog.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fi-rs-shopping-cart mr-5"${_scopeId}></i>نمایش `);
              } else {
                return [
                  createVNode("i", { class: "fi-rs-shopping-cart mr-5" }),
                  createTextVNode("نمایش ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (result.image.imageable_type == "App\\Models\\WebDesign") {
          _push(`<div class="add-cart">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "add",
            href: _ctx.route("website-design.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fi-rs-shopping-cart mr-5"${_scopeId}></i>نمایش `);
              } else {
                return [
                  createVNode("i", { class: "fi-rs-shopping-cart mr-5" }),
                  createTextVNode("نمایش ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
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
              _push2(`<i class="fi-rs-arrow-small-right"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fi-rs-arrow-small-right" })
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
              _push2(`<i class="fi-rs-arrow-small-left"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fi-rs-arrow-small-left" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-1-5 primary-sidebar sticky-sidebar"><div class="sidebar-widget widget-store-info mb-30 bg-3 border-0"><div class="vendor-logo mb-30">`);
      if (props.user.image && props.user.image.status == 4) {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.user.image.url)}${ssrRenderAttr("alt", props.user.user_name)}>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", props.user.user_name)}>`);
      }
      _push(`</div><div class="vendor-info"><div class="product-category">`);
      if (props.role && props.role.id == 1) {
        _push(`<span class="text-muted">${ssrInterpolate(props.role.name)}</span>`);
      } else if (props.role && props.role.id == 2) {
        _push(`<span class="text-muted">${ssrInterpolate(props.role.name)}</span>`);
      } else if (props.role && props.role.id == 3) {
        _push(`<span class="text-muted">${ssrInterpolate(props.role.name)}</span>`);
      } else if (props.role && props.role.id == 4) {
        _push(`<span class="text-muted">${ssrInterpolate(props.role.name)}</span>`);
      } else {
        _push(`<span class="text-muted">خریدار/کارفرما </span>`);
      }
      _push(`</div><h4 class="mb-5"><a href="#" class="text-heading">${ssrInterpolate(props.user.name_show)}</a></h4><div class="product-rate-cover mb-15"></div><div class="vendor-des mb-30">`);
      if (props.user && props.user.profile) {
        _push(`<p class="font-sm text-heading">${ssrInterpolate(props.user.profile.biography)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (props.role && props.role.id > 3 && props.user && props.user.socials) {
        _push(`<div class="follow-social mb-20"><h6 class="mb-15">دنبال کن</h6><ul class="social-network"><!--[-->`);
        ssrRenderList(props.user.socials, (social, index) => {
          _push(`<li class="hover-up mobile-social-icon">`);
          if (social.links && social.menu) {
            _push(`<a${ssrRenderAttr("href", social.links.link)}${ssrRenderAttr("title", social.menu.name)}>${social.tag ?? ""}</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="vendor-info"><ul class="font-sm mb-20">`);
      if (props.user && props.user.email && props.role && props.role.id > 3) {
        _push(`<li><img class="mr-5" src="/assets/imgs/theme/icons/icon-location.svg" alt=""><strong>ایمیل: </strong> <span>${ssrInterpolate(props.user.email)}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (props.user && props.user.tel && props.user.tel > 0 && props.role && props.role.id > 3) {
        _push(`<li><img class="mr-5" src="/assets/imgs/theme/icons/icon-contact.svg" alt=""><strong>تماس:</strong><span>${ssrInterpolate("0" + props.user.tel)}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path,
        namads: props.namads
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/guest-Profile-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
