import { onMounted, onBeforeUnmount, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { u as useForm, l as link_default } from "../ssr.js";
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
  __name: "Header2",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    menu: Object,
    auth: Object,
    menus: Object,
    alert: Object,
    flash: String,
    results: Object,
    cartTarahis: Object,
    companies: Object,
    users: Object,
    random_coupon: Object,
    Quickview: Object,
    cart: Object,
    path: String
  },
  emits: ["EventSubmitQuickview", "EventSubmitCart", "EventSubmitTarahiFilter", "EventSubmitBlogFilter"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = useForm({
      id: null,
      model: null,
      type: null,
      name: null,
      lasst_name: null,
      email: null,
      tel: null,
      price: null,
      text: null,
      group: null,
      type: null,
      title: null,
      file: null,
      q: null,
      category: null,
      entekhab: null
    });
    onMounted(() => {
      const loader = document.getElementById("initial-loader");
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.remove();
        }, 5e3);
      }
      const scriptClass = "dynamic-script";
      function addJs(address) {
        const exists = document.querySelector(`script[src="${address}"]`);
        if (exists) return;
        const script = document.createElement("script");
        script.src = address;
        script.async = false;
        script.defer = true;
        script.classList.add(scriptClass);
        document.body.appendChild(script);
      }
      const items = [
        "/assets/js/vendor/jquery-3.6.0.min.js",
        "/assets/js/vendor/bootstrap.bundle.min.js",
        "/assets/js/plugins/slick.js",
        "/assets/js/plugins/jquery.syotimer.min.js",
        "/assets/js/plugins/wow.js",
        "/assets/js/plugins/jquery-ui.js",
        "/assets/js/plugins/perfect-scrollbar.js",
        "/assets/js/plugins/magnific-popup.js",
        "/assets/js/plugins/select2.min.js",
        "/assets/js/plugins/waypoints.js",
        "/assets/js/plugins/counterup.js",
        "/assets/js/plugins/jquery.countdown.min.js",
        "/assets/js/plugins/images-loaded.js",
        "/assets/js/plugins/isotope.js",
        "/assets/js/plugins/scrollup.js",
        "/assets/js/plugins/jquery.vticker-min.js",
        "/assets/js/plugins/jquery.theia.sticky.js",
        "/assets/js/plugins/jquery.elevatezoom.js",
        "/assets/js/main.js",
        "/assets/js/shop.js",
        "/assets/js/invoice/jspdf.min.js",
        "/assets/js/invoice/invoice.js"
      ];
      const uniqueItems = [...new Set(items)];
      uniqueItems.forEach(addJs);
    });
    onBeforeUnmount(() => {
      document.querySelectorAll("script.dynamic-script").forEach((script) => {
        script.remove();
      });
      const scrollUp = document.getElementById("scrollUp");
      if (scrollUp) scrollUp.remove();
      document.querySelectorAll(".zoomContainer, .zoomWindow").forEach((el) => el.remove());
      const mainImage = document.getElementById("mainImage");
      if (mainImage && typeof $(mainImage).removeData === "function") {
        $(mainImage).removeData("elevateZoom");
      }
      const overlay = document.querySelectorAll("body-overlay-1");
      if (overlay && typeof $(overlay).removeData === "function") {
        $(overlay).removeData("elevateZoom");
      }
    });
    const menus = ref([]);
    if (props.menu) {
      props.menu.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "products") {
              menus.value.push(element);
            }
          });
        }
      });
    }
    const menusTarahi = ref([]);
    if (props.menu) {
      props.menu.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "web_designs") {
              menusTarahi.value.push(element);
            }
          });
        }
      });
    }
    const menusProject = ref([]);
    if (props.menu) {
      props.menu.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "projects") {
              menusProject.value.push(element);
            }
          });
        }
      });
    }
    const menusBlog = ref([]);
    if (props.menu) {
      props.menu.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "blogs") {
              menusBlog.value.push(element);
            }
          });
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><link${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/assets/css/plugins/animate.min.css")} rel="stylesheet" type="text/css"><link${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/assets/css/main.css")} rel="stylesheet" type="text/css"><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/assets/css/mohi.css")}><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;icon_names=check"></head>`);
      if (props.results) {
        _push(`<div class="modal fade custom-modal" id="quickViewModal" tabindex="-1" aria-labelledby="quickViewModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button><div class="modal-body"><div class="row"><div class="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5"><div class="detail-gallery"><span class="zoom-icon"><i class="fi-rs-search"></i></span><div class="product-image-slider"><!--[-->`);
        ssrRenderList(props.results.data, (result, index) => {
          _push(`<figure class="border-radius-10">`);
          if (props.Quickview) {
            _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.Quickview.image.url)} alt="product image">`);
          } else if (result.image && result.image.status == 4 || result.image && result.image.status == 5) {
            _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt="product image">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</figure>`);
        });
        _push(`<!--]--></div><div class="slider-nav-thumbnails"><!--[-->`);
        ssrRenderList(props.results.data, (result, index) => {
          _push(`<div><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt="product image"></div>`);
        });
        _push(`<!--]--></div></div></div>`);
        if (props.Quickview) {
          _push(`<div class="col-md-6 col-sm-12 col-xs-12"><div class="detail-info pr-30 pl-30">`);
          if (props.Quickview.discount) {
            _push(`<span class="stock-status out-stock"> تخفیف </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h3 class="title-detail"><a class="text-heading" href="">${ssrInterpolate(props.Quickview.name)}</a></h3><div class="product-detail-rating"><div class="product-rate-cover text-end"><div class="product-rate d-inline-block">`);
          if (props.Quickview.ratings_avg_rating) {
            _push(`<div class="product-rating" style="${ssrRenderStyle("width:" + props.Quickview.ratings_avg_rating * 20 + "%")}"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (props.Quickview.ratings_avg_rating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(props.Quickview.ratings_avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.0)</span>`);
          }
          _push(`</div></div><div class="clearfix product-price-cover"><div class="product-price primary-color float-left">`);
          if (props.Quickview.discount) {
            _push(`<span class="current-price text-brand">${ssrInterpolate((props.Quickview.price - props.Quickview.price * props.Quickview.discount.percent / 100).toLocaleString("fa-IR"))}</span>`);
          } else {
            _push(`<span class="current-price text-brand">${ssrInterpolate(props.Quickview.price.toLocaleString("fa-IR"))}</span>`);
          }
          _push(`<span>`);
          if (props.Quickview.discount) {
            _push(`<span class="save-price font-md color3 ml-15">${ssrInterpolate(props.Quickview.discount.percent)}% تخفیف </span>`);
          } else {
            _push(`<!---->`);
          }
          if (props.Quickview.discount) {
            _push(`<span class="old-price font-md ml-15">${ssrInterpolate(props.Quickview.price.toLocaleString("fa-IR"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span></div></div><div class="detail-extralink mb-30"><div class="product-extra-link2"><button type="submit" class="button button-add-to-cart"><i class="fi-rs-shopping-cart"></i>خرید</button></div></div><div class="font-xs"><ul><li class="mb-5">فروشنده: <span class="text-brand">${ssrInterpolate(props.Quickview.user.name_show)}</span></li><li class="mb-5">MFG:<span class="text-brand">${ssrInterpolate(unref(moment)(props.Quickview.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD"))}</span></li></ul></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<header class="header-area header-style-1 header-height-2"><div class="mobile-promotion"><span>تا حالا از <strong>تخفیفات روزانه</strong> استفاده کردی؟<strong>بهتره تا تموم نشدن</strong> ازشون استفاده کنی</span></div><div class="header-top header-top-ptb-1 d-none d-lg-block"><div class="container"><div class="row align-items-center"><div class="col-xl-3 col-lg-4"><div class="header-info"><ul>`);
      if (_ctx.$page.props.auth.user == null) {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ورود`);
            } else {
              return [
                createTextVNode("ورود")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("privacy.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`حریم خصوصی`);
          } else {
            return [
              createTextVNode("حریم خصوصی")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("faq.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`سوالات متداول`);
          } else {
            return [
              createTextVNode("سوالات متداول")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("terms-conditions.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`قوانین و مقررات`);
          } else {
            return [
              createTextVNode("قوانین و مقررات")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("about.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`درباره ما`);
          } else {
            return [
              createTextVNode("درباره ما")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="col-xl-6 col-lg-4"><div class="text-center"><div id="news-flash" class="d-inline-block"><ul><li>تا حالا از بن تخفیف روزانه استفاده کردی!؟ </li><li>بهتره تا تموم نشدن</li><li>ازشون استفاده کنی</li></ul></div></div></div><div class="col-xl-3 col-lg-4"><div class="header-info header-info-right"><ul>`);
      if (props.companies && props.companies.phone) {
        _push(`<li>کمک میخوایی ؟ شماره تماس : <strong class="text-brand">${ssrInterpolate("0" + props.companies.phone)} `);
        if (props.companies && props.companies.tel !== null) {
          _push(`<!--[--> -${ssrInterpolate("0" + props.companies.tel)}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</strong></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><a class="language-dropdown-active" href="#"><i class="fi-rs-angle-small-down"></i> فارسی</a></li><li><a class="language-dropdown-active" href="#"><i class="fi-rs-angle-small-down"></i> ریال</a></li></ul></div></div></div></div></div><div class="header-middle header-middle-ptb-1 d-none d-lg-block"><div class="container"><div class="header-wrap"><div class="logo logo-width-1">`);
      if (props.companies && props.companies.image && props.companies.image.status == 4) {
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="" height="40" width="60"${ssrRenderAttr("alt", props.companies.name_show)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                  class: "",
                  height: "40",
                  width: "60",
                  alt: props.companies.name_show
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="header-right"><div class="search-style-2">`);
      if (_ctx.$page.props.ziggy.location == "http://localhost:8000/website-templates") {
        _push(`<form><select class="select-active"><option>کل</option></select>`);
        if (_ctx.$page.props.ziggy.location == "http://localhost:8000/website-templates") {
          _push(`<input type="search"${ssrRenderAttr("value", unref(form).q)} placeholder="اسم قالب مورد نظر خود را جستجو نمایید.">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.ziggy.location == "http://localhost:8000/website-design") {
        _push(`<form><select class="select-active"><option>کل</option></select>`);
        if (_ctx.$page.props.ziggy.location == "http://localhost:8000/website-design") {
          _push(`<input type="search"${ssrRenderAttr("value", unref(form).q)} placeholder="عنوان پروژه مورد نظر خود را جستجو نمایید.">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.ziggy.location == "http://localhost:8000/blog") {
        _push(`<form><select class="select-active"><option>کل</option></select>`);
        if (_ctx.$page.props.ziggy.location == "http://localhost:8000/blog") {
          _push(`<input type="search"${ssrRenderAttr("value", unref(form).q)} placeholder="عنوان بلاگ مورد نظر خود را جستجو نمایید.">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="header-action-right"><div class="header-action-2"><div class="search-location"></div><div class="header-action-icon-2"><a class="mini-cart-icon" href="#"><img alt=""${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-cart.svg")}>`);
      if (props.cart && props.cart.count > 0) {
        _push(`<span class="pro-count blue">${ssrInterpolate(props.cart.count.toLocaleString("fa-IR"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><a href="#"><span class="lable">سبد خرید</span></a><div class="cart-dropdown-wrap cart-dropdown-hm2">`);
      if (props.cart) {
        _push(`<ul><!--[-->`);
        ssrRenderList(props.cart.products, (product, index) => {
          _push(`<li><div class="shopping-cart-img"><a href="#">`);
          if (product.product && product.product.image && product.product.image.status == 4 || product.product && product.product.image && product.product.image.status == 5) {
            _push(`<img${ssrRenderAttr("alt", product.product.nam)}${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.product.image.url)}>`);
          } else {
            _push(`<img${ssrRenderAttr("alt", product.product.nam)}${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)}>`);
          }
          _push(`</a></div><div class="shopping-cart-title">`);
          if (product["model"] == "App\\Models\\Product") {
            _push(`<h4>`);
            _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product.product.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product.product.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (product["model"] == "App\\Models\\WebDesign") {
            _push(`<h4>`);
            _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product.product.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product.product.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (product["model"] == "App\\Models\\Tarahi") {
            _push(`<h4>`);
            _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product.product.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product.product.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</h4>`);
          } else {
            _push(`<!---->`);
          }
          if (product["model"] == "App\\Models\\ReqDesigner") {
            _push(`<h4>`);
            _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate("ضمانت پروژه " + product.product.tarahi_register.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString("ضمانت پروژه " + product.product.tarahi_register.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</h4>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h4><span>${ssrInterpolate(1 .toLocaleString("fa-IR"))} × </span>${ssrInterpolate(Number(product.product.price).toLocaleString("fa-IR"))}</h4></div><div class="shopping-cart-delete"><a href="#"><i class="fi-rs-cross-small"></i></a></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (props.cart && props.cart.total > 0) {
        _push(`<div class="shopping-cart-footer">`);
        if (props.cart) {
          _push(`<div class="shopping-cart-total"><h4 class="d-flex">تعداد <span class="ms-auto">${ssrInterpolate(props.cart.count.toLocaleString("fa-IR"))}</span></h4></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="shopping-cart-button">`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("cart.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`سبد`);
            } else {
              return [
                createTextVNode("سبد")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("shop-checkout.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`تسویه`);
            } else {
              return [
                createTextVNode("تسویه")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="shopping-cart-footer"><div class="shopping-cart-button"> سبد خرید شما خالی است. </div></div>`);
      }
      _push(`</div></div>`);
      if (_ctx.$page.props.auth.user !== null) {
        _push(`<div class="header-action-icon-2"><a href="#"><img class="svgInject" alt=""${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-user.svg")}></a><a href="#"><span class="lable ml-0">حساب</span></a><div class="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">`);
        if (_ctx.$page.props.auth.user !== null) {
          _push(`<ul><li>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("dashboard.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fi fi-rs-user mr-10"${_scopeId}></i>داشبورت`);
              } else {
                return [
                  createVNode("i", { class: "fi fi-rs-user mr-10" }),
                  createTextVNode("داشبورت")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("order.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fi fi-rs-location-alt mr-10"${_scopeId}></i>شفارشات من`);
              } else {
                return [
                  createVNode("i", { class: "fi fi-rs-location-alt mr-10" }),
                  createTextVNode("شفارشات من")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("favorite.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fi fi-rs-heart mr-10"${_scopeId}></i>لیست اتخاب من`);
              } else {
                return [
                  createVNode("i", { class: "fi fi-rs-heart mr-10" }),
                  createTextVNode("لیست اتخاب من")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li><a><i class="fi fi-rs-sign-out mr-10"></i>خروج</a></li></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div><div class="header-bottom header-bottom-bg-color sticky-bar"><div class="container"><div class="header-wrap header-space-between position-relative"><div class="logo logo-width-1 d-block d-lg-none">`);
      if (props.companies && props.companies.image && props.companies.image.status == 4) {
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class=""${ssrRenderAttr("alt", props.companies.name_show)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                  class: "",
                  alt: props.companies.name_show
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="header-nav d-none d-lg-flex"><div class="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading"><nav><ul><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`صفحه اصلی`);
          } else {
            return [
              createTextVNode("صفحه اصلی")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("website-templates.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`محصولات<i class="fi-rs-angle-down"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("محصولات"),
              createVNode("i", { class: "fi-rs-angle-down" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menus.value) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu, index) => {
          _push(`<ul class="sub-menu"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("website-design.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`طراحی وبسایت<i class="fi-rs-angle-down"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("طراحی وبسایت"),
              createVNode("i", { class: "fi-rs-angle-down" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusTarahi.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusTarahi.value, (menu, index) => {
          _push(`<ul class="sub-menu"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-design.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("project.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`پروژه<i class="fi-rs-angle-down"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("پروژه"),
              createVNode("i", { class: "fi-rs-angle-down" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusProject.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusProject.value, (menu, index) => {
          _push(`<ul class="sub-menu"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("project.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("blog.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`بلاگ<i class="fi-rs-angle-down"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("بلاگ"),
              createVNode("i", { class: "fi-rs-angle-down" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusBlog.value) {
        _push(`<ul class="sub-menu"><!--[-->`);
        ssrRenderList(menusBlog.value, (menu, index) => {
          _push(`<li>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("blog.index", "type") + menu.id + "#result"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(menu.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(menu.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="position-static"><a href="#">مگا منو <i class="fi-rs-angle-down"></i></a><ul class="mega-menu"><li class="sub-mega-menu sub-mega-menu-width-22">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "menu-title",
        href: _ctx.route("website-templates.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`محصولات`);
          } else {
            return [
              createTextVNode("محصولات")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menus.value) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu, index) => {
          _push(`<ul><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="sub-mega-menu sub-mega-menu-width-22">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "menu-title",
        href: _ctx.route("website-design.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`طراحی وسایت`);
          } else {
            return [
              createTextVNode("طراحی وسایت")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusTarahi.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusTarahi.value, (menu, index) => {
          _push(`<ul><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-design.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="sub-mega-menu sub-mega-menu-width-22">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "menu-title",
        href: _ctx.route("project.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`پروژه`);
          } else {
            return [
              createTextVNode("پروژه")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusProject.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusProject.value, (menu, index) => {
          _push(`<ul><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("project.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="sub-mega-menu sub-mega-menu-width-22">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "menu-title",
        href: _ctx.route("blog.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`بلاگ`);
          } else {
            return [
              createTextVNode("بلاگ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusBlog.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusBlog.value, (menu, index) => {
          _push(`<ul><li>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("blog.index", "type") + menu.id + "#result"
          }, {
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
          _push(`</li></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="sub-mega-menu sub-mega-menu-width-34"><div class="menu-banner-wrap"><a href="#"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/banner/banner-menu.png")} alt="Nest"></a><div class="menu-banner-content"><h4>محصولات</h4><h3> شگفت انگیز رو <br> از دست نده </h3><div class="menu-banner-price"></div><div class="menu-banner-btn">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("website-templates.index", "sort") + "Discount"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`هم حالا خرید کن `);
          } else {
            return [
              createTextVNode("هم حالا خرید کن ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="menu-banner-discount"><h3><span></span> تخفیفات </h3></div></div></li></ul></li></ul></nav></div></div>`);
      if (props.companies) {
        _push(`<div class="hotline d-none d-lg-flex"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-headphone.svg")} alt="hotline"><p>${ssrInterpolate("0" + props.companies.phone)} `);
        if (props.companies && props.companies.tel !== null) {
          _push(`<!--[--> -${ssrInterpolate("0" + props.companies.tel)}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>مرکز پشتیبانی 17/7</span></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header-action-icon-2 d-block d-lg-none"><div class="burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div></div><div class="header-action-right d-block d-lg-none"><div class="header-action-2"><div class="header-action-icon-2"><a class="mini-cart-icon" href="#"><img alt=""${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-cart.svg")}>`);
      if (props.cart && props.cart.count > 0) {
        _push(`<span class="pro-count white">${ssrInterpolate(props.cart.count.toLocaleString("fa-IR"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><div class="cart-dropdown-wrap cart-dropdown-hm2">`);
      if (props.cart) {
        _push(`<ul><!--[-->`);
        ssrRenderList(props.cart.products, (product, index) => {
          _push(`<li><div class="shopping-cart-img"><a href="#">`);
          if (product.product && product.product.image && product.product.image.status == 4 || product.product && product.product.image && product.product.image.status == 5) {
            _push(`<img${ssrRenderAttr("alt", product.product.nam)}${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.product.image.url)}>`);
          } else {
            _push(`<img${ssrRenderAttr("alt", product.product.nam)}${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)}>`);
          }
          _push(`</a></div><div class="shopping-cart-title">`);
          if (product && product.product && product.product.tarahi_register) {
            _push(`<h4>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.show", [product.product.tarahi_register.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product.product.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product.product.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</h4>`);
          } else {
            _push(`<h4>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.show", [product.product.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product.product.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product.product.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</h4>`);
          }
          _push(`<h3><span>${ssrInterpolate(1 .toLocaleString("fa-IR"))} × </span>${ssrInterpolate(product.product.price.toLocaleString("fa-IR"))}</h3></div><div class="shopping-cart-delete"></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (props.cart && props.cart.total > 0) {
        _push(`<div class="shopping-cart-footer">`);
        if (props.cart) {
          _push(`<div class="shopping-cart-total"><h4>کل <span>${ssrInterpolate(props.cart.count.toLocaleString("fa-IR"))}</span></h4></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="shopping-cart-button">`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("cart.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`سبد`);
            } else {
              return [
                createTextVNode("سبد")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("shop-checkout.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`تسویه`);
            } else {
              return [
                createTextVNode("تسویه")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="shopping-cart-footer"><div class="shopping-cart-button"> سبد خرید شما خالی است. </div></div>`);
      }
      _push(`</div></div></div></div></div></div></div></header><div class="mobile-header-active mobile-header-wrapper-style"><div class="mobile-header-wrapper-inner"><div class="mobile-header-top"><div class="mobile-header-logo">`);
      if (props.companies && props.companies.image && props.companies.image.status == 4) {
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class=""${ssrRenderAttr("alt", props.companies.name_show)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                  class: "",
                  alt: props.companies.name_show
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mobile-menu-close close-style-wrap close-style-position-inherit"><button class="close-style search-close"><i class="icon-top"></i><i class="icon-bottom"></i></button></div></div><div class="mobile-header-content-area"><div class="mobile-search search-style-3 mobile-header-border">`);
      if (_ctx.$page.props.ziggy.location == "http://localhost:8000/website-templates") {
        _push(`<form>`);
        if (_ctx.$page.props.ziggy.location == "http://localhost:8000/website-templates") {
          _push(`<input type="search"${ssrRenderAttr("value", unref(form).q)} placeholder="اسم قالب مورد نظر خود را جستجو نمایید.">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit"><i class="fi-rs-search"></i></button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mobile-menu-wrap mobile-header-border"><nav><ul class="mobile-menu font-heading"><li class="menu-item-has-children">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`صفحه اصلی`);
          } else {
            return [
              createTextVNode("صفحه اصلی")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="menu-item-has-children">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("website-templates.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`محصولات`);
          } else {
            return [
              createTextVNode("محصولات")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menus.value) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu, index) => {
          _push(`<ul class="dropdown"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="menu-item-has-children">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("website-design.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`طراحی وب سایت`);
          } else {
            return [
              createTextVNode("طراحی وب سایت")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusTarahi.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusTarahi.value, (menu, index) => {
          _push(`<ul class="dropdown"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="menu-item-has-children">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("project.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`پروژه`);
          } else {
            return [
              createTextVNode("پروژه")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusProject.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusProject.value, (menu, index) => {
          _push(`<ul class="dropdown"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("project.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="menu-item-has-children">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("blog.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`بلاگ`);
          } else {
            return [
              createTextVNode("بلاگ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (menusBlog.value) {
        _push(`<ul class="dropdown"><!--[-->`);
        ssrRenderList(menusBlog.value, (menu, index) => {
          _push(`<li>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("blog.index", "type") + menu.name + "#result"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(menu.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(menu.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="menu-item-has-children"><a href="#">مگا منو </a><ul class="dropdown"><li class="menu-item-has-children"><a href="">محصولات</a>`);
      if (menus.value) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu, index) => {
          _push(`<ul class="dropdown"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-templates.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="menu-item-has-children"><a href="#">طراحی وسایت</a>`);
      if (menusTarahi.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusTarahi.value, (menu, index) => {
          _push(`<ul class="dropdown"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("website-design.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="menu-item-has-children"><a href="#">پروژه</a>`);
      if (menusProject.value) {
        _push(`<!--[-->`);
        ssrRenderList(menusProject.value, (menu, index) => {
          _push(`<ul class="dropdown"><!--[-->`);
          ssrRenderList(menu.children, (men, index2) => {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("project.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="menu-item-has-children"><a href="#">بلاگ</a>`);
      if (menusBlog.value) {
        _push(`<ul class="dropdown"><li><!--[-->`);
        ssrRenderList(menusBlog.value, (menu, index) => {
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("blog.index", "type") + menu.id + "#result"
          }, {
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
        });
        _push(`<!--]--></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></li></ul></nav></div><div class="mobile-header-info-wrap">`);
      if (_ctx.$page.props.auth.user == null) {
        _push(`<div class="single-mobile-header-info">`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fi-rs-user"${_scopeId}></i>ورود `);
            } else {
              return [
                createVNode("i", { class: "fi-rs-user" }),
                createTextVNode("ورود ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="single-mobile-header-info">`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("dashboard.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fi-rs-user"${_scopeId}></i>داشبورت `);
            } else {
              return [
                createVNode("i", { class: "fi-rs-user" }),
                createTextVNode("داشبورت ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      if (props.companies && props.companies.phone) {
        _push(`<div class="single-mobile-header-info">`);
        _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fi-rs-headphones"${_scopeId}></i>0${ssrInterpolate(props.companies.phone)} `);
              if (props.companies && props.companies.tel !== null) {
                _push2(`<!--[--> -${ssrInterpolate("0" + props.companies.tel)}<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("i", { class: "fi-rs-headphones" }),
                createTextVNode("0" + toDisplayString(props.companies.phone) + " ", 1),
                props.companies && props.companies.tel !== null ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" -" + toDisplayString("0" + props.companies.tel), 1)
                ], 64)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mobile-social-icon mb-50">`);
      if (props.socials) {
        _push(`<h6 class="mb-15">ما را دنبال کنید</h6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(props.socials, (social) => {
        _push(`<!--[-->`);
        if (social.link) {
          _push(`<a${ssrRenderAttr("href", social.link)}${ssrRenderAttr("title", social.name)}>${social.tag ?? ""}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (props.companies) {
        _push(`<div class="site-copyright">©کلیه حقوق مادی و معنوی ${ssrInterpolate(props.companies.name_show)} محفوظ است.</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Header2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
