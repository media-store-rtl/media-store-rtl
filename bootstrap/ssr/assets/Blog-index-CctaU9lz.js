import { computed, ref, unref, withCtx, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import _sfc_main$3 from "./Footer2-vTePDDgz.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "@inertiajs/inertia";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "Blog-index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    blogs: Object,
    alert: Object,
    tarahis: Object,
    cart: Object,
    companies: Object,
    results: Object,
    q: String,
    path: String,
    menu: Object,
    menus: Object,
    namads: Object,
    socials: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      q: props.q
    });
    const validate = (text) => {
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
        title: text,
        icon: "error"
      });
    };
    const alert = ref(props.alert);
    if (alert.value) {
      swal.fire(
        alert.value.title,
        alert.value.text,
        alert.value.icon
      );
      alert.value = null;
    }
    if (hasErrors.value == true) {
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
        title: [
          errors.value.q ? errors.value.q + "<br>" : ""
        ],
        icon: "error"
      });
    }
    const submit = (data) => {
      console.log(form.q);
      form.q = data;
      if (form.q) {
        form.get(route("blog.index"));
      } else {
        let text = "موارد ستاره دار الزامی است.";
        validate(text);
      }
    };
    const getPageUrl = (baseUrl, page) => {
      if (typeof window !== "undefined") {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, "");
        let newUrl = `${baseUrl}?page=${page}${queryString ? "&" + queryString.substring(1) : ""}#result`;
        return newUrl;
      }
      return `${baseUrl}?page=${page}#result`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { noIndex: false }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu,
        onEventSubmitBlogFilter: submit
      }, null, _parent));
      _push(`<main class="main"><div class="page-header mt-30 mb-75"><div class="container"><div class="archive-header"><div class="row align-items-center"><div class="col-xl-3"><h1 class="mb-15">بلاگ </h1><div class="breadcrumb"></div></div></div></div></div></div><div class="page-content mb-50"><div class="container"><div class="row"><div class="col-lg-12"><div class="shop-product-fillter mb-50"><div class="totall-product"><h2> بلاگ ${ssrInterpolate(props.companies.name_show)}</h2></div></div><div class="loop-grid">`);
      if (props.blogs.total > 0) {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(props.blogs.data, (blog, index) => {
          _push(`<article class="col-xl-3 col-lg-4 col-md-6 text-center hover-up mb-30 animated"><div class="post-thumb">`);
          if (blog.type) {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("blog.show", [blog.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (blog.image && blog.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + blog.image.url)} class="border-radius-15"${ssrRenderAttr("alt", blog.name)}${_scopeId}>`);
                  } else if (props.companies) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="border-radius-15"${ssrRenderAttr("alt", props.companies.name)}${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    blog.image && blog.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + blog.image.url,
                      class: "border-radius-15",
                      alt: blog.name
                    }, null, 8, ["src", "alt"])) : props.companies ? (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "border-radius-15",
                      alt: props.companies.name
                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="entry-meta"></div></div><div class="entry-content-2"><h6 class="mb-10 font-sm">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "entry-meta text-muted",
            href: _ctx.route("blog.index", "type") + blog.group.name + "#"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(blog.group.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(blog.group.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h6><h4 class="post-title mb-15">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("blog.show", [blog.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(blog.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(blog.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h4><div><span class="font-small text-muted">${ssrInterpolate(blog.tag)}</span></div><div class="entry-meta font-xs color-grey mt-10 pb-10"><div><span class="post-on mr-10">${ssrInterpolate(unref(moment)(blog.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span><span class="hit-count has-dot mr-10">${ssrInterpolate(blog.views_count)} بازدید</span><span class="hit-count has-dot">${ssrInterpolate(blog.comments_count)}نظرات</span></div></div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.results.total > 0) {
        _push(`<div class="row"><!--[-->`);
        ssrRenderList(props.results.data, (blog, index) => {
          _push(`<article class="col-xl-3 col-lg-4 col-md-6 text-center hover-up mb-30 animated"><div class="post-thumb">`);
          if (blog.type) {
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("blog.show", [blog.slug])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (blog.image && blog.image.status == 4) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + blog.image.url)} class="border-radius-15"${ssrRenderAttr("alt", blog.name)}${_scopeId}>`);
                  } else if (props.companies) {
                    _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="border-radius-15"${ssrRenderAttr("alt", props.companies.name)}${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    blog.image && blog.image.status == 4 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + blog.image.url,
                      class: "border-radius-15",
                      alt: blog.name
                    }, null, 8, ["src", "alt"])) : props.companies ? (openBlock(), createBlock("img", {
                      key: 1,
                      src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                      class: "border-radius-15",
                      alt: props.companies.name
                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="entry-meta"></div></div><div class="entry-content-2"><h6 class="mb-10 font-sm">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "entry-meta text-muted",
            href: _ctx.route("blog.index", "type") + blog.group.name + "#"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(blog.group.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(blog.group.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h6><h4 class="post-title mb-15">`);
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("blog.show", [blog.slug])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(blog.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(blog.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h4><div class="entry-meta font-xs color-grey mt-10 pb-10"><div><span class="post-on mr-10">${ssrInterpolate(unref(moment)(blog.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span><span class="hit-count has-dot mr-10">${ssrInterpolate(blog.views_count)} بازدید</span><span class="hit-count has-dot">${ssrInterpolate(blog.comments_count)}نظرات</span></div></div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (props.blogs && props.blogs.total > 9) {
        _push(`<div class="pagination-area mb-20 mt-20"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><li class="${ssrRenderClass([{ disabled: !props.blogs.prev_page_url || props.blogs.current_page === 1 }, "page-item"])}">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "page-link",
          href: props.blogs.prev_page_url && props.blogs.current_page > 1 ? props.blogs.prev_page_url : "#",
          "preserve-scroll": "",
          "preserve-state": "",
          "aria-disabled": "props.blogs.current_page === 1"
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
        _push(`</li><li class="${ssrRenderClass([{ active: props.blogs.current_page === 1 }, "page-item"])}">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "page-link",
          href: getPageUrl(props.blogs.first_page_url, 1),
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
        if (props.blogs.current_page > 4) {
          _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<!--[-->`);
          if (props.blogs.current_page - 3 + i > 1 && props.blogs.current_page - 3 + i < props.blogs.last_page) {
            _push(`<li class="${ssrRenderClass([{ active: props.blogs.current_page === props.blogs.current_page - 3 + i }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: getPageUrl(props.blogs.path, props.blogs.current_page - 3 + i),
              "preserve-scroll": "",
              "preserve-state": ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(props.blogs.current_page - 3 + i)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.blogs.current_page - 3 + i), 1)
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
        if (props.blogs.current_page < props.blogs.last_page - 3) {
          _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
        } else {
          _push(`<!---->`);
        }
        if (props.blogs.last_page !== 1) {
          _push(`<li class="${ssrRenderClass([{ active: props.blogs.current_page === props.blogs.last_page }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: getPageUrl(props.blogs.path, props.blogs.last_page),
            "preserve-scroll": "",
            "preserve-state": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(props.blogs.last_page)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(props.blogs.last_page), 1)
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
          disabled: !props.blogs.next_page_url || props.blogs.current_page === props.blogs.last_page
        }, "page-item"])}">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "page-link",
          href: props.blogs.next_page_url && props.blogs.current_page < props.blogs.last_page ? props.blogs.next_page_url : "#",
          "preserve-scroll": "",
          "preserve-state": "",
          "aria-disabled": "props.blogs.current_page === props.blogs.last_page"
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
      _push(`</div></div></div></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Blog-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
