import { computed, ref, watch, onMounted, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import _sfc_main$4 from "./Footer2-vTePDDgz.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
/* empty css                  */
import { _ as _sfc_main$3 } from "./Editor-CocwfA7J.js";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const titleSeo = " تعریف پروژه – سریع، آسان و قابل اعتماد";
const descriptionSeo = "هر پروژه‌ای که دارید، می‌توانید آن را به راحتی تعریف کنید. کافیست جزئیات پروژه، نیازمندی‌ها و زمان تحویل مورد نظر را وارد کنید. بعد از تعریف پروژه، فریلنسرهای متخصص می‌توانند برای آن پیشنهاد دهند و شما از میان آنها بهترین فرد را انتخاب می‌کنید.";
const _sfc_main = {
  __name: "project-index",
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
    const ApiKey = ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
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
                if (section.name == "projects") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    const sections = ref([]);
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
      _push(`<main class="main"><div class="mb-30 container"><div class="row flex-row-reverse"><div class="col-lg-4-5"><section class="home-slider position-relative mb-30"><div class="home-slide-cover mt-30"><div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-3.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> تخفیفات شگفت انگیز <br> را از دست ندهید </h1></div></div><div class="single-hero-slider single-animation-wrap" style="${ssrRenderStyle({ "background-image": "url(assets/imgs/slider/slider-4.png)" })}"><div class="slider-content"><h1 class="display-2 mb-40"> از بن های تخفیف <br> روزانه استفاده نمایید </h1></div></div></div><div class="slider-arrow hero-slider-1-arrow"></div></div></section><body id="project-intro" class="mce-content-body" contenteditable="true" spellcheck="false"><p><strong>تعریف پروژه – سریع، آسان و قابل اعتماد</strong></p><p>هر پروژه‌ای که دارید، می‌توانید آن را به راحتی تعریف کنید. کافیست جزئیات پروژه، نیازمندی‌ها و زمان تحویل مورد نظر را وارد کنید. بعد از تعریف پروژه، فریلنسرهای متخصص می‌توانند برای آن پیشنهاد دهند و شما از میان آنها بهترین فرد را انتخاب می‌کنید.</p><p>📌 فرآیند پروژه:</p><ul><li><p>تعریف پروژه توسط کارفرما با جزئیات و الزامات مورد نظر</p></li><li><p>دریافت پیشنهادات فریلنسرها برای انجام پروژه</p></li><li><p>انتخاب فریلنسر مناسب برای انجام پروژه</p></li><li><p>پیاده‌سازی و تحویل پروژه توسط فریلنسر</p></li><li><p>تایید نهایی توسط کارفرما و آزاد شدن وجه فریلنسر</p></li></ul><p><strong>هدف ما این است که هر پروژه‌ای با شفافیت، راحتی و امنیت کامل انجام شود و کارفرما و فریلنسر هر دو تجربه‌ای حرفه‌ای و مطمئن داشته باشند.</strong></p></body>`);
      if (props.results && props.results.total > 0) {
        _push(`<section class="product-tabs section-padding position-relative"><div class="section-title style-2"><h3>پروژها</h3><ul class="nav nav-tabs links" id="myTab" role="tablist"><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == 0 ? "active" : " "],
          href: _ctx.route("project.index", "q") + "all#result"
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
          href: _ctx.route("project.index", "sort") + "DESC#result"
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
          href: _ctx.route("project.index", "sort") + "Bestselling#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` بیشترین پیشنهاد `);
            } else {
              return [
                createTextVNode(" بیشترین پیشنهاد ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=open" ? "active" : " "],
          href: _ctx.route("project.index", "sort") + "open#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` پروژه باز `);
            } else {
              return [
                createTextVNode(" پروژه باز ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=expensive" ? "active" : " "],
          href: _ctx.route("project.index", "sort") + "expensive#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` بالا ترین مبلغ `);
            } else {
              return [
                createTextVNode(" بالا ترین مبلغ ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "sort=cheapest" ? "active" : " "],
          href: _ctx.route("project.index", "sort") + "cheapest#result"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` پایین ترین مبلغ `);
            } else {
              return [
                createTextVNode(" پایین ترین مبلغ ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: ["nav-link", props.querystring == "updated=updateDate" ? "active" : " "],
          href: _ctx.route("project.index", "updated") + "updateDate#result"
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
        _push(`</li></ul></div><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active"><div class="row"><!--[-->`);
        ssrRenderList(props.results.data, (result, index) => {
          _push(`<div class="col-xl-3 col-lg-4 col-md-6"><div class="product-cart-wrap style-2"><div class="product-img-action-wrap"><div class="product-img">`);
          if (props.companies.image && props.companies.image.status == 4 || props.companies.image && props.companies.image.status == 5) {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("project.show", [result.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img class="h-300"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} alt=""${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "h-300",
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
          _push(`</div></div><div class="product-content-wrap"><div class="deals-countdown-wrap">`);
          if (result && result.status == 4) {
            _push(`<div class="deals-countdown"${ssrRenderAttr("data-countdown", result.expired_at)}></div>`);
          } else {
            _push(`<div class="deals-countdown" data-countdown="2023-07-14 18:38:38.000000"></div>`);
          }
          _push(`</div><div class="deals-content">`);
          if (result.menus) {
            _push(`<div class="product-category"><!--[-->`);
            ssrRenderList(result.menus, (menu2, index2) => {
              _push(`<!--[--><!--[-->`);
              ssrRenderList(menu2.sections, (section, index3) => {
                _push(`<!--[-->`);
                if (section.name == "projects") {
                  _push(`<a href="">${ssrInterpolate(menu2.name + " ")}</a>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              });
              _push(`<!--]--><!--]-->`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h2>`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("project.show", [result.slug])
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
          _push(`</h2><div class="product-rate-cover"><div class="product-rate d-inline-block">`);
          if (result.RatingsAvgRating) {
            _push(`<div class="product-rating" style="${ssrRenderStyle("width:" + result.RatingsAvgRating * 20 + "%")}"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (result.RatingsAvgRating) {
            _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(result.RatingsAvgRating)})</span>`);
          } else {
            _push(`<span class="font-small ml-5 text-muted"> (0.000)</span>`);
          }
          _push(`</div><div>`);
          if (result.user) {
            _push(`<span class="font-small text-muted">کارفرما `);
            _push(ssrRenderComponent(unref(link_default), { href: "" }, {
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
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="product-card-bottom">`);
          if (result.discount) {
            _push(`<div class="product-price"><span>${ssrInterpolate((result.price - result.price * result.discount.percent / 100).toLocaleString("fa-IR"))}</span><span class="old-price">${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
          } else {
            _push(`<div class="product-price"><span>${ssrInterpolate(Number(result.price).toLocaleString("fa-IR"))}</span></div>`);
          }
          _push(`<div class="add-cart">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "add",
            href: _ctx.route("project.show", [result.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="mr-5"${_scopeId}></i>جزییات `);
              } else {
                return [
                  createVNode("i", { class: "mr-5" }),
                  createTextVNode("جزییات ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
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
      _push(`<section class="product-tabs section-padding position-relative"><section id="contact" class="contact-us ptb-100"><div class="container"><div class="row"><div class="col-12 pb-3 message-box d-none"><div class="alert alert-danger"></div></div><div class="col-md-7" id="web"><form><h5>ثبت پروژه</h5><div class="row">`);
      if (_ctx.$page.props.auth.user == null) {
        _push(`<div class="col-sm-6 col-12"><div class="form-group"><input${ssrRenderAttr("value", unref(form).name)} type="text" class="form-control" placeholder="نام" required="required"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user == null) {
        _push(`<div class="col-sm-6 col-12"><div class="form-group"><input${ssrRenderAttr("value", unref(form).lasst_name)} type="text" class="form-control" placeholder="نام و نام خانوادگی" required="required"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user == null) {
        _push(`<div class="col-sm-6 col-12"><div class="form-group"><input${ssrRenderAttr("value", unref(form).email)} type="email" class="form-control" placeholder="ایمیل" required="required"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user == null) {
        _push(`<div class="col-sm-6 col-12"><div class="form-group"><input${ssrRenderAttr("value", unref(form).tel)} type="text" name="phone" class="form-control" placeholder="تلفن"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="row"><div class="col-sm-6 col-6"><div class="form-group"><label for="file"></label><select class="form-control ltr">`);
      if (menus.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu2, index) => {
          _push(`<option${ssrRenderAttr("value", menu2)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, menu2) : ssrLooseEqual(unref(form).group, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, null) : ssrLooseEqual(unref(form).group, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div></div><div class="row"><div class="col-sm-6 col-6"><div class="form-group"><select class="form-control ltr">`);
      if (menu.value.length > 0 && unref(form).group) {
        _push(`<!--[-->`);
        ssrRenderList(menu.value, (type, index) => {
          _push(`<option${ssrRenderAttr("value", type)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, type) : ssrLooseEqual(unref(form).type, type)) ? " selected" : ""}>${ssrInterpolate(type.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, null) : ssrLooseEqual(unref(form).type, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div><div class="col-sm-6 col-6"><div class="form-group"><select class="form-control ltr">`);
      if (sections.value.length > 0 && unref(form).type) {
        _push(`<!--[-->`);
        ssrRenderList(sections.value, (category, index) => {
          _push(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, category) : ssrLooseEqual(unref(form).category, category)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, null) : ssrLooseEqual(unref(form).category, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div></div><div class="row"><div class="col-sm-12 col-12"><div class="form-group"><input${ssrRenderAttr("value", unref(form).title)} type="text" class="form-control" placeholder=" یک عنوان در ارتباط با پروژه بنویسید.عنوان پروژه برای جذب فریلنسر مهم است." required="required"></div><div class="form-group"><input${ssrRenderAttr("value", unref(form).price)} type="text" class="form-control" placeholder=" مبلغ(ریال) بودجه شما چقدر است؟" required="required"></div></div></div><div class="row"><div class="col-sm-12 col-12"><div class="form-group"><label for="file">در صورت نیاز میتوانید فایل با پسوند zip و rar بارگزاری نمایید.</label><input class="form-control" type="file" id="file" accept="zip/rar/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="row"><div class="col-12"><div class="form-group">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        "api-key": ApiKey.value,
        init: { menubar: false },
        modelValue: unref(form).text,
        "onUpdate:modelValue": ($event) => unref(form).text = $event,
        placeholder: "توضیحات راجع به پروژه خود بصورت جامع توضیح دهید."
      }, null, _parent));
      _push(`</div></div></div><div class="row"><div class="col-12 mt-3">`);
      if (_ctx.$page.props.auth.user == null) {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} id="btnContactUs">`);
        if (unref(form).processing) {
          _push(`<span>پردازش...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).processing) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
        } else {
          _push(`<span>ثبت</span>`);
        }
        _push(`</button>`);
      } else {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} id="btnContactUs">`);
        if (unref(form).processing) {
          _push(`<span>پردازش...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).processing) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
        } else {
          _push(`<span>ثبت</span>`);
        }
        _push(`</button>`);
      }
      _push(`</div></div></form></div></div></div></section></section></div><div class="col-lg-1-5 primary-sidebar sticky-sidebar pt-30"><div class="sidebar-widget widget-category-2 mb-30"><h5 class="section-title style-1 mb-30">دسته بندی پروژها</h5><!--[-->`);
      ssrRenderList(props.menus, (menu2, index) => {
        _push(`<ul><!--[-->`);
        ssrRenderList(menu2.children, (men, index2) => {
          _push(`<!--[-->`);
          if (men.tarahis_count > 0) {
            _push(`<li>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("project.index", "type") + men.id + "#result"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(menu2.name + " " + men.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(menu2.name + " " + men.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<span class="count">${ssrInterpolate(men.tarahis_count)}</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]-->`);
        if (showMore.value) {
          _push(`<a href="javascript:void(0);" class="text-primary text-decoration-none d-inline-flex align-items-center mb-2"><i class="${ssrRenderClass(showMore.value ? "fas fa-times me-1" : "fas fa-folder-open me-1")}"></i>`);
          if (!showMore.value) {
            _push(`<span>بیشتر...</span>`);
          } else {
            _push(`<span>کمتر</span>`);
          }
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(menu2.children, (men, index2) => {
          _push(`<div style="${ssrRenderStyle(showMore.value ? null : { display: "none" })}" class="list-unstyled"><!--[-->`);
          ssrRenderList(men.children, (me, index3) => {
            _push(`<!--[-->`);
            if (me.tarahis_count > 0) {
              _push(`<li>`);
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("project.index", "category") + me.id + "#result"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(men.name + " " + me.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(men.name + " " + me.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<span class="count">${ssrInterpolate(me.tarahis_count)}</span></li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></ul>`);
      });
      _push(`<!--]--></div></div></div></div><section class="section-padding mb-30"><div class="container"><div class="row">`);
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
      _push(ssrRenderComponent(_sfc_main$4, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/project-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
