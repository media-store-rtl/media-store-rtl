import { computed, ref, onMounted, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
import { a as usePage, l as link_default } from "../ssr.js";
import "sweetalert2";
/* empty css                  */
import _sfc_main$3 from "./Footer2-vTePDDgz.js";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import "@unhead/vue";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue/polyfill";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const titleSeo = " فرم های آماده اداری";
const descriptionSeo = "فرم‌های اداری شرکت‌ها , سهولت در جمع‌آوری اطلاعات, ایجاد نظم در دسته‌بندی و تفکیک اطلاعات ";
const _sfc_main = {
  __name: "form-index",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    menu: Object,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    auth: Object,
    results: Object,
    time: String,
    discounts: Object,
    coupon_count: Number,
    companies: Object,
    menus: Object,
    users_count: Number,
    querystring: String,
    products_count: Number,
    comments_count: Number,
    tarahis_count: Number,
    alert: Object,
    orders: Object,
    resultsNew: Object,
    usersOrders: Object,
    favorites: Object,
    topRated: Object,
    cart: Object,
    namads: Object,
    socials: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const discounts = ref([]);
    if (props.discounts) {
      props.discounts.forEach((discount) => {
        discounts.value.push(discount);
      });
    }
    ref(null);
    const getPageUrl = (baseUrl, page) => {
      if (typeof window !== "undefined") {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, "");
        let newUrl = `${baseUrl}?page=${page}${queryString ? "&" + queryString.substring(1) : ""}#result`;
        return newUrl;
      }
      return `${baseUrl}?page=${page}#result`;
    };
    const showMore = ref(false);
    onMounted(() => {
      const url = new URL(window.location.href);
      showMore.value = url.searchParams.has("category");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: titleSeo,
        description: descriptionSeo,
        noIndex: false
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main"><div class="mb-30 container"><div class="row flex-row-reverse"><div class="col-lg-12"><section class="home-slider position-relative mb-30"><div class="home-slide-cover mt-30"><div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-3.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> تخفیفات شگفت انگیز <br> را از دست ندهید </h1></div></div><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-4.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> از بن های تخفیف <br> روزانه استفاده نمایید </h1></div></div></div><div class="slider-arrow hero-slider-1-arrow"></div></div></section><body id="tinymce" class="mce-content-body" data-id="tiny-vue_23772426321754249352926" aria-label="Rich Text Area" contenteditable="true" spellcheck="false"></body>`);
      if (props.results && props.results.total > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="section-title style-2"><h3>فرم ها</h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == 0 ? "active" : " "],
          href: _ctx.route("form.index", "q") + "all#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` کل `);
            } else {
              return [
                createTextVNode(" کل ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=DESC" ? "active" : " "],
          href: _ctx.route("form.index", "sort") + "DESC#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` جدیدترین `);
            } else {
              return [
                createTextVNode(" جدیدترین ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=Bestselling" ? "active" : " "],
          href: _ctx.route("form.index", "sort") + "Bestselling#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` پرفرش ترین `);
            } else {
              return [
                createTextVNode(" پرفرش ترین ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=Discount" ? "active" : " "],
          href: _ctx.route("form.index", "sort") + "Discount#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` شگفت انگیز `);
            } else {
              return [
                createTextVNode(" شگفت انگیز ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=expensive" ? "active" : " "],
          href: _ctx.route("form.index", "sort") + "expensive#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` گران ترین `);
            } else {
              return [
                createTextVNode(" گران ترین ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=cheapest" ? "active" : " "],
          href: _ctx.route("form.index", "sort") + "cheapest#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ارزان ترین `);
            } else {
              return [
                createTextVNode(" ارزان ترین ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "updated=updateDate" ? "active" : " "],
          href: _ctx.route("form.index", "updated") + "updateDate#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` بروزترین `);
            } else {
              return [
                createTextVNode(" بروزترین ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div>`);
        if (props.results && props.results.total > 0) {
          _push(`<div class="tab-content" id="myTabContent"><div class="tab-pane fade show active"><div class="row product-grid-4"><!--[-->`);
          ssrRenderList(props.results.data, (result, index) => {
            _push(`<div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
            if (result.image && result.image.status == 4 || 5) {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("form.show", [result.slug])
              }, {
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
                if (section.name == "forms") {
                  _push(`<a href="">${ssrInterpolate(menu.name + " ")}</a>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              });
              _push(`<!--]--><!--]-->`);
            });
            _push(`<!--]--></div><h2>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("form.show", [result.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(result.group.name + " " + result.type.name + " " + result.category.name + " " + result.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(result.group.name + " " + result.type.name + " " + result.category.name + " " + result.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</h2><div><span class="font-small text-muted">${ssrInterpolate(result.tag)}</span></div><div class="product-rate-cover"><div class="product-rate d-inline-block">`);
            if (result.ratings_avg_rating) {
              _push(`<div class="product-rating" style="${ssrRenderStyle("width:" + result.ratings_avg_rating * 20 + "%")}"></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (result.ratings_avg_rating) {
              _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.ratings_avg_rating)})</span>`);
            } else {
              _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
            }
            _push(`</div><div><span class="font-small text-muted">فروشنده `);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("guest-profile.show", result.user.user_name)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`(${ssrInterpolate(result.user.name_show)})`);
                } else {
                  return [
                    createTextVNode("(" + toDisplayString(result.user.name_show) + ")", 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</span></div><div class="product-card-bottom">`);
            if (result.discount) {
              _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate(Number(result.price - result.price * result.discount.percent / 100).toLocaleString(
                "fa-IR"
              ))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></span></div>`);
            } else {
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            }
            _push(`<div class="add-cart">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "add",
              href: _ctx.route("form.show", [result.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<i class="mr-5"${_scopeId}></i>نمایش `);
                } else {
                  return [
                    createVNode("i", { class: "mr-5" }),
                    createTextVNode("نمایش ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></div></div></div>`);
          });
          _push(`<!--]-->`);
          if (props.results.total > 9) {
            _push(`<div class="pagination-area mb-20 mt-20"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><li class="${ssrRenderClass([{ disabled: !props.results.prev_page_url || props.results.current_page === 1 }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: props.results.prev_page_url && props.results.current_page > 1 ? props.results.prev_page_url : "#",
              "preserve-scroll": "",
              "preserve-state": "",
              "aria-disabled": "props.results.current_page === 1"
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
            _push(`</li><li class="${ssrRenderClass([{ active: props.results.current_page === 1 }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: getPageUrl(props.results.first_page_url, 1),
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
            if (props.results.current_page > 4) {
              _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--[-->`);
            ssrRenderList(5, (i) => {
              _push(`<!--[-->`);
              if (props.results.current_page - 3 + i > 1 && props.results.current_page - 3 + i < props.results.last_page) {
                _push(`<li class="${ssrRenderClass([{ active: props.results.current_page === props.results.current_page - 3 + i }, "page-item"])}">`);
                _push(ssrRenderComponent(unref(link_default), {
                  class: "page-link",
                  href: getPageUrl(props.results.path, props.results.current_page - 3 + i),
                  "preserve-scroll": "",
                  "preserve-state": ""
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(props.results.current_page - 3 + i)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(props.results.current_page - 3 + i), 1)
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
            if (props.results.current_page < props.results.last_page - 3) {
              _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
            } else {
              _push(`<!---->`);
            }
            if (props.results.last_page !== 1) {
              _push(`<li class="${ssrRenderClass([{ active: props.results.current_page === props.results.last_page }, "page-item"])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: getPageUrl(props.results.path, props.results.last_page),
                "preserve-scroll": "",
                "preserve-state": ""
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(props.results.last_page)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.results.last_page), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent));
              _push(`</li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<li class="${ssrRenderClass([{
              disabled: !props.results.next_page_url || props.results.current_page === props.results.last_page
            }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: props.results.next_page_url && props.results.current_page < props.results.last_page ? props.results.next_page_url : "#",
              "preserve-scroll": "",
              "preserve-state": "",
              "aria-disabled": "props.results.current_page === props.results.last_page"
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
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (discounts.value.length > 4) {
        _push(`<section class="section-padding pb-5"><div class="section-title"><h3 class="">محصولات شگفت انگیز</h3></div><div class="container"><div class="row"><div class="col-lg-12 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s"><div class="tab-content" id="myTabContent-1"><div class="tab-pane fade show active" id="tab-one-1" role="tabpanel" aria-labelledby="tab-one-1"><div class="carausel-4-columns-cover arrow-center position-relative"><div class="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-arrows"></div><div class="carausel-4-columns carausel-arrow-center" id="carausel-4-columns"><!--[-->`);
        ssrRenderList(discounts.value, (result) => {
          _push(`<div class="product-cart-wrap"><div class="product-img-action-wrap"><div class="product-img">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.discountable.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (result.discountable.image && result.discountable.image.status == 4 || result.discountable.image.status == 5) {
                  _push2(`<img class="h-250"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.discountable.image.url)}${ssrRenderAttr("alt", result.discountable.name)}${_scopeId}>`);
                } else {
                  _push2(`<img src="/storage/images/logo.jpg"${ssrRenderAttr("alt", props.companies.name_show)}${_scopeId}>`);
                }
              } else {
                return [
                  result.discountable.image && result.discountable.image.status == 4 || result.discountable.image.status == 5 ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "h-250",
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.discountable.image.url,
                    alt: result.discountable.name
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: "/storage/images/logo.jpg",
                    alt: props.companies.name_show
                  }, null, 8, ["alt"]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div><div class="product-content-wrap"><div class="deals-countdown-wrap"><div class="deals-countdown"${ssrRenderAttr("data-countdown", result.expired)}></div></div><div class="deals-content"><h2>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.discountable.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(result.discountable.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(result.discountable.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h2><div class="product-rate-cover"><div class="product-rate d-inline-block">`);
          if (result.discountable.ratings_avg_rating) {
            _push(`<div class="product-rating" style="${ssrRenderStyle("width:" + result.discountable.ratings_avg_rating * 20 + "%")}"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (result.discountable.ratings_avg_rating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.discountable.ratings_avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
          }
          _push(`</div><div><span class="font-small text-muted">فروشنده `);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("guest-profile.show", result.discountable.user.user_name)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`(${ssrInterpolate(result.discountable.user.name_show)})`);
              } else {
                return [
                  createTextVNode("(" + toDisplayString(result.discountable.user.name_show) + ")", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</span></div><div class="product-card-bottom"><div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.discountable.price - result.discountable.price * result.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(result.discountable.price.toLocaleString("fa-IR"))}</span></span></div><div class="add-cart">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "add",
            href: _ctx.route("form.show", [result.discountable.slug])
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
          _push(`</div></div></div></div></div>`);
        });
        _push(`<!--]--></div></div></div></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><section class="section-padding mb-30"><div class="container"><div class="row">`);
      if (props.orders.length > 0) {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0"><h4 class="section-title style-1 mb-30 animated animated">پرفروش ترین</h4><div class="product-list-small animated animated"><!--[-->`);
        ssrRenderList(props.orders, (result, index) => {
          _push(`<article class="row align-items-center hover-up"><figure class="col-md-4 mb-0">`);
          if (result.image && result.image.status == 4 || 5) {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("form.show", [result.product.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.product.image.url)} alt=""${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _ctx.$page.props.ziggy.url + "/storage/" + result.product.image.url,
                      alt: ""
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</figure><div class="col-md-8 mb-0"><h6>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.product.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(result.product.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(result.product.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h6><div class="product-rate-cover"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle("width:" + result.product.ratings_avg_rating * 20 + "%")}"></div></div>`);
          if (result.product.ratings_avg_rating) {
            _push(`<span class="font-small ml-5 text-muted">(${ssrInterpolate(result.product.ratings_avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted">(0.0000)</span>`);
          }
          _push(`</div>`);
          if (result.product.discount) {
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.product.price - result.product.price * result.product.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.product.price).toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.product.price).toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.favorites.length > 0) {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6 mb-md-0"><h4 class="section-title style-1 mb-30 animated animated">پرطرفدارترین</h4><div class="product-list-small animated animated"><!--[-->`);
        ssrRenderList(props.favorites, (result, index) => {
          _push(`<article class="row align-items-center hover-up"><figure class="col-md-4 mb-0">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.favoritable.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.favoritable.image.url)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.favoritable.image.url,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</figure><div class="col-md-8 mb-0"><h6>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.favoritable.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(result.favoritable.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(result.favoritable.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h6><div class="product-rate-cover"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle("width:" + result.favoritable.ratings_avg_rating * 20 + "%")}"></div></div>`);
          if (result.favoritable.ratings_avg_rating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.favoritable.ratings_avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
          }
          _push(`</div>`);
          if (result.favoritable.discount) {
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.favoritable.price - result.favoritable.price * result.favoritable.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.favoritable.price).toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.favoritable.price).toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.resultsNew.length) {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block"><h4 class="section-title style-1 mb-30 animated animated">جدیدترین</h4><div class="product-list-small animated animated"><!--[-->`);
        ssrRenderList(props.resultsNew, (result, index) => {
          _push(`<article class="row align-items-center hover-up"><figure class="col-md-4 mb-0">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</figure><div class="col-md-8 mb-0"><h6>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.slug])
          }, {
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
          _push(`</h6><div class="product-rate-cover"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle("width:" + result.ratings_avg_rating * 20 + "%")}"></div></div>`);
          if (result.ratings_avg_rating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.ratings_avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
          }
          _push(`</div>`);
          if (result.discount) {
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.topRated.length > 0) {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block"><h4 class="section-title style-1 mb-30 animated animated">رتبه برتر</h4><div class="product-list-small animated animated"><!--[-->`);
        ssrRenderList(props.topRated, (result, index) => {
          _push(`<article class="row align-items-center hover-up"><figure class="col-md-4 mb-0">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</figure><div class="col-md-8 mb-0"><h6>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("form.show", [result.slug])
          }, {
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
          _push(`</h6><div class="product-rate-cover"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle("width:" + result.avg_rating * 20 + "%")}"></div></div>`);
          if (result.avg_rating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
          }
          _push(`</div>`);
          if (result.discount) {
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/form-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
