import { computed, watch, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$3 from "./Footer2-vTePDDgz.js";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
import { a as usePage, u as useForm, h as head_default, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@unhead/vue";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    discounts: Object,
    menus: Object,
    socials: Object,
    path: String,
    results: Object,
    cafes: Object,
    time: String,
    coupon_count: Number,
    companies: Object,
    querystring: String,
    menu: Object,
    forms: Object,
    alert: Object,
    orders: Object,
    usersOrders: Object,
    cart: Object,
    webDesigns: Object,
    blogs: Object,
    namads: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const submitCart = (id) => {
      form.id = id;
      form.model = "App\\Models\\Product";
      form.post(route("cart.store"));
    };
    const submitWeb = (id) => {
      form.id = id;
      form.model = "App\\Models\\WebDesign";
      form.post(route("cart.store"));
    };
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
    watch(errors, (newErrors) => {
      const errorMessages = Object.values(newErrors).flat().map((msg) => `${msg}<br>`).join("");
      if (errorMessages) {
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
          title: errorMessages,
          icon: "error"
        });
      }
    }, { immediate: true });
    const form = useForm({
      menu: null,
      recepiant: null,
      subject: null,
      text: null,
      email: null,
      name: null,
      lasst_name: null,
      id: null,
      type: null,
      model: null
    });
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route2) => {
            if (route2.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "supports") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const Quickview = ref(null);
    const submitQuickview = (result) => {
      Quickview.value = result;
    };
    const discounts = ref([]);
    if (props.discounts.data) {
      props.discounts.data.forEach((discount) => {
        discounts.value.push(discount);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { noIndex: false }, null, _parent));
      _push(ssrRenderComponent(unref(head_default), { title: "صفحه اصلی" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        results: props.results,
        Quickview: Quickview.value,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu,
        onEventSubmitQuickview: submitQuickview,
        onEventSubmitCart: submitCart
      }, null, _parent));
      _push(`<main class="main"><section class="home-slider position-relative mb-30"><div class="container"><div class="home-slide-cover mt-30"><div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-1.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> محصولات شگفت <br> انگیز را از دست ندهید </h1></div></div><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-2.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> طرح تخفیف<br> روزانه را از دست ندهید </h1></div></div></div><div class="slider-arrow hero-slider-1-arrow"></div></div></div></section>`);
      if (props.results.length > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="container"><div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>محصول </h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item" role="presentation">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "show-all",
          href: _ctx.route("website-templates.index", "q") + "all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` نمایش <i class="fi-rs-angle-left"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode(" نمایش "),
                createVNode("i", { class: "fi-rs-angle-left" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">`);
        if (props.results) {
          _push(`<div class="row product-grid-4"><!--[-->`);
          ssrRenderList(props.results, (result, index) => {
            _push(`<div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
            if (result.image && result.image.status == 4 || 5) {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("website-templates.show", [result.slug])
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
                if (section.name == "products") {
                  _push(ssrRenderComponent(unref(link_default), { href: "" }, {
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
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.show", [result.slug])
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
              _push(`<span class="font-small ml-5 text-muted"> (0.000)</span>`);
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
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            } else {
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            }
            _push(`<div class="add-cart">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "add",
              href: "",
              onClick: ($event) => submitCart(result.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<i class="fi-rs-shopping-cart mr-5"${_scopeId}></i>خرید `);
                } else {
                  return [
                    createVNode("i", { class: "fi-rs-shopping-cart mr-5" }),
                    createTextVNode("خرید ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.webDesigns.length > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="container"><div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>پلن </h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item" role="presentation">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "show-all",
          href: _ctx.route("website-design.index", "q") + "all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` نمایش <i class="fi-rs-angle-left"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode(" نمایش "),
                createVNode("i", { class: "fi-rs-angle-left" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">`);
        if (props.webDesigns) {
          _push(`<div class="row product-grid-4"><!--[-->`);
          ssrRenderList(props.webDesigns, (result, index) => {
            _push(`<div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
            if (result.image && result.image.status == 4 || 5) {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("website-design.show", [result.slug])
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
                if (section.name == "web_designs") {
                  _push(ssrRenderComponent(unref(link_default), { href: "" }, {
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
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-design.show", [result.slug])
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
            _push(`</h2><div><span class="font-small text-muted">${ssrInterpolate(result.tag)}</span></div><div><span class="font-small text-muted">حداقل ${ssrInterpolate(result.rouzekari)} روز کاری</span></div><div class="product-rate-cover"><div class="product-rate d-inline-block">`);
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
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            } else {
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            }
            _push(`<div class="add-cart">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "add",
              href: "",
              onClick: ($event) => submitWeb(result.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<i class="fi-rs-shopping-cart mr-5"${_scopeId}></i>خرید `);
                } else {
                  return [
                    createVNode("i", { class: "fi-rs-shopping-cart mr-5" }),
                    createTextVNode("خرید ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.cafes.length > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="container"><div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>خدمات </h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item" role="presentation">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "show-all",
          href: _ctx.route("cafe-net.index", "q") + "all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` نمایش <i class="fi-rs-angle-left"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode(" نمایش "),
                createVNode("i", { class: "fi-rs-angle-left" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">`);
        if (props.cafes) {
          _push(`<div class="row product-grid-4"><!--[-->`);
          ssrRenderList(props.cafes, (result, index) => {
            _push(`<div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
            if (result.image && result.image.status == 4 || 5) {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("cafe-net.show", [result.slug])
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
                if (section.name == "cafes") {
                  _push(ssrRenderComponent(unref(link_default), { href: "" }, {
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
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("cafe-net.show", [result.slug])
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
            _push(`</h2><div><span class="font-small text-muted">${ssrInterpolate(result.tag)}</span></div><div><span class="font-small text-muted">حداقل ${ssrInterpolate(result.rouzekari)} روز کاری</span></div><div class="product-rate-cover"><div class="product-rate d-inline-block">`);
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
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            } else {
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            }
            _push(`<div class="add-cart">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "add",
              href: "",
              onClick: ($event) => submitWeb(result.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<i class="fi-rs-shopping-cart mr-5"${_scopeId}></i>خرید `);
                } else {
                  return [
                    createVNode("i", { class: "fi-rs-shopping-cart mr-5" }),
                    createTextVNode("خرید ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.forms && props.forms.length > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="container"><div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>فرم </h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item" role="presentation">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "show-all",
          href: _ctx.route("form.index", "q") + "all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` نمایش <i class="fi-rs-angle-left"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode(" نمایش "),
                createVNode("i", { class: "fi-rs-angle-left" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">`);
        if (props.forms) {
          _push(`<div class="row product-grid-4"><!--[-->`);
          ssrRenderList(props.forms, (result, index) => {
            _push(`<div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
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
                  _push(ssrRenderComponent(unref(link_default), { href: "" }, {
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
              _push(`<span class="font-small ml-5 text-muted"> (0.000)</span>`);
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
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            } else {
              _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
            }
            _push(`<div class="add-cart">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "add",
              href: "",
              onClick: ($event) => submitCart(result.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<i class="fi-rs-shopping-cart mr-5"${_scopeId}></i>خرید `);
                } else {
                  return [
                    createVNode("i", { class: "fi-rs-shopping-cart mr-5" }),
                    createTextVNode("خرید ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.blogs.length > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="container"><div class="section-title style-2 wow animate__animated animate__fadeIn"><h3>بلاگ</h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item" role="presentation">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "show-all",
          href: _ctx.route("blog.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` نمایش <i class="fi-rs-angle-left"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode(" نمایش "),
                createVNode("i", { class: "fi-rs-angle-left" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one"><div class="row product-grid-4"><!--[-->`);
        ssrRenderList(props.blogs, (result, index) => {
          _push(`<div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
          if (result.image && result.image.status == 4 || 5) {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("blog.show", [result.slug])
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
          _push(`</div><div class="product-badges product-badges-position product-badges-mrg"></div></div><div class="product-content-wrap"><div class="product-category"><!--[-->`);
          ssrRenderList(result.menus, (menu, index2) => {
            _push(`<!--[--><!--[-->`);
            ssrRenderList(menu.sections, (section, index3) => {
              _push(`<!--[-->`);
              if (section.name == "blogs") {
                _push(ssrRenderComponent(unref(link_default), { href: "" }, {
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
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("blog.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(result.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(result.title), 1)
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
            _push(`<span class="font-small ml-5 text-muted"> (0.000)</span>`);
          }
          _push(`</div><div><span class="font-small text-muted">نویسنده `);
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
            _push(`<div class="product-price"><span>${ssrInterpolate((result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(result.price.toLocaleString("fa-IR"))}</span></div>`);
          } else {
            _push(`<div class="product-price"></div>`);
          }
          _push(`<div class="add-cart">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "add",
            href: _ctx.route("blog.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="mr-5"${_scopeId}></i>جزئیات `);
              } else {
                return [
                  createVNode("i", { class: "mr-5" }),
                  createTextVNode("جزئیات ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div></div></div>`);
        });
        _push(`<!--]--></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
