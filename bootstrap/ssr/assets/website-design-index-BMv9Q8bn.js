import { computed, ref, watch, onMounted, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import _sfc_main$3 from "./Footer2-vTePDDgz.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
/* empty css                  */
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const titleSeo = "طراحی سایت و پلن‌های آماده – سریع، اقتصادی و قابل اعتماد";
const descriptionSeo = "اگر دنبال راهی سریع‌تر و مقرون‌به‌صرفه برای راه‌اندازی سایت هستید، استفاده از پلن‌های طراحی سایت یک گزینه عالی هستن.ما مجموعه‌ای از پلن‌های حرفه‌ای آماده کردیم که می‌توانید و در کوتاه‌ترین زمان ممکن سایتتون رو راه بندازید";
const _sfc_main = {
  __name: "website-design-index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    menus: Object,
    alert: Object,
    flash: String,
    results: Object,
    cart: Object,
    companies: Object,
    users: Object,
    path: String,
    orders: Object,
    querystring: String,
    usersRating: Object,
    menu: Object,
    time: String,
    namads: Object,
    socials: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: null,
      model: null,
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
    ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
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
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route2) => {
            if (route2.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "tarahis") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    ref([]);
    ref([]);
    ref([]);
    const submitFilter = (data) => {
      form.q = data;
      form.get(route("website-design.index"));
    };
    ref([]);
    const role = ref();
    if (props.users) {
      props.users.roles.forEach((element) => {
        if (element.id == 3) {
          role.value = element;
        }
      });
    }
    ref([null]);
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
        cart: props.cart,
        alert: props.alert,
        users: props.users,
        companies: props.companies,
        onEventSubmitTarahiFilter: submitFilter,
        menus: props.menus,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main"><div class="mb-30 container"><div class="row flex-row-reverse"><div class="col-lg-12"><section class="home-slider position-relative mb-30"><div class="home-slide-cover mt-30"><div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-3.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> تخفیفات شگفت انگیز <br> را از دست ندهید </h1></div></div><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-4.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> از بن های تخفیف <br> روزانه استفاده نمایید </h1></div></div></div><div class="slider-arrow hero-slider-1-arrow"></div></div></section><body id="tinymce" class="mce-content-body" contenteditable="true" spellcheck="false"><p><strong>طراحی سایت و پلن‌های آماده – سریع، اقتصادی و قابل اعتماد</strong></p><p>اگر دنبال راهی سریع‌تر و مقرون‌به‌صرفه برای راه‌اندازی سایت هستید، استفاده از پلن‌های طراحی سایت یک گزینه عالی هستن.<br> ما مجموعه‌ای از پلن‌های حرفه‌ای آماده کردیم که می‌توانید و در کوتاه‌ترین زمان ممکن سایتتون رو راه بندازید.</p><p>📦 پلن‌ها مناسب برای:</p><ul><li><p>فروشگاه‌ها</p></li><li><p>وب‌سایت‌های شرکتی</p></li><li><p>نمونه‌کار و پورتفولیو</p></li><li><p>بلاگ و مجله</p></li><li><p>سایت‌های خدماتی و شخصی</p></li><li><p>و سایر کسب‌وکارها</p></li></ul><p><strong>هدف ما اینه که شما سریع‌تر و راحت‌تر به یک سایت حرفه‌ای و آماده برای کسب‌وکار خود برسید.</strong></p></body>`);
      if (props.results && props.results.total > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="section-title style-2"><h3>پلن ها</h3><ul class="nav nav-tabs links" id="myTab" role="tablist"></ul></div>`);
        if (props.results && props.results.total > 0) {
          _push(`<div class="tab-content" id="myTabContent"><div class="tab-pane fade show active"><div class="row product-grid-4"><!--[-->`);
          ssrRenderList(props.results.data, (result, index) => {
            _push(`<div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="product-cart-wrap mb-30"><div class="product-img-action-wrap"><div class="product-img product-img-zoom">`);
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
              href: _ctx.route("website-design.show", [result.slug])
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
        if (props.results && props.results.total > 9) {
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
        _push(`</section>`);
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
              href: _ctx.route("website-design.show", [result.product.slug])
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
            href: _ctx.route("website-design.show", [result.product.slug])
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
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.product.price - result.product.price * result.product.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(result.product.price.toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(result.product.price.toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.favorites && props.favorites.length > 0) {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6 mb-md-0"><h4 class="section-title style-1 mb-30 animated animated">پرطرفدارترین</h4><div class="product-list-small animated animated"><!--[-->`);
        ssrRenderList(props.favorites, (result, index) => {
          _push(`<article class="row align-items-center hover-up"><figure class="col-md-4 mb-0">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("website-design.show", [result.favoritable.slug])
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
            href: _ctx.route("website-design.show", [result.favoritable.slug])
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
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.favoritable.price - result.favoritable.price * result.favoritable.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(result.favoritable.price.toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(result.favoritable.price.toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.resultsNew && props.resultsNew.length) {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block"><h4 class="section-title style-1 mb-30 animated animated">جدیدترین</h4><div class="product-list-small animated animated"><!--[-->`);
        ssrRenderList(props.resultsNew, (result, index) => {
          _push(`<article class="row align-items-center hover-up"><figure class="col-md-4 mb-0">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("website-design.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (result.image) {
                  _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  result.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                    alt: ""
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</figure><div class="col-md-8 mb-0"><h6>`);
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
          _push(`</h6><div class="product-rate-cover"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle("width:" + result.ratings_avg_rating * 20 + "%")}"></div></div>`);
          if (result.ratings_avg_rating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.ratings_avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
          }
          _push(`</div>`);
          if (result.discount) {
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(result.price.toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(result.price.toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.topRated && props.topRated.length > 0) {
        _push(`<div class="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block"><h4 class="section-title style-1 mb-30 animated animated">رتبه برتر</h4><div class="product-list-small animated animated"><!--[-->`);
        ssrRenderList(props.topRated, (result, index) => {
          _push(`<article class="row align-items-center hover-up"><figure class="col-md-4 mb-0">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("website-design.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (result.image) {
                  _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  result.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _ctx.$page.props.ziggy.url + "/storage/" + result.image.url,
                    alt: ""
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</figure><div class="col-md-8 mb-0"><h6>`);
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
          _push(`</h6><div class="product-rate-cover"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle("width:" + result.avg_rating * 20 + "%")}"></div></div>`);
          if (result.avg_rating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.avg_rating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
          }
          _push(`</div>`);
          if (result.discount) {
            _push(`<div class="product-price"><span class="d-flex flex-column"><span>${ssrInterpolate((result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(result.price.toLocaleString("fa-IR"))}</span></span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(result.price.toLocaleString("fa-IR"))}</span><span class="old-price"></span></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/website-design-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
