import { computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import DatePicker from "vue3-persian-datetime-picker";
import swal from "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "Product-index",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    products: Object,
    wallet: Number,
    menus: Object,
    times: { type: [Object, String], default: () => ({}) },
    statuses: { type: [Object, String], default: () => ({}) },
    alert: Object,
    subjects: { type: [Object, String], default: () => ({}) },
    notifications: Object,
    companies: Object,
    descriptions: Object,
    path: String,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
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
    const form = useForm({
      subject: props.subjects ? props.subjects : null,
      status: props.statuses ? props.statuses : null,
      time: props.times !== "All" ? props.times : null
    });
    const submit = () => {
      if (form.subject == null && form.status == null && form.time == null) {
        let text;
        text = "موارد ستاره دار الزامی است.";
        validate(text);
      } else {
        form.get(route("productAdmin.index"));
      }
    };
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
        wallet: props.wallet,
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
        _push(`<div class="mb-4 bg-white"><header class="card-header"><div class="row align-items-center"><div class="col col-check flex-grow-0"><div class="form-check ms-2"><input class="form-check-input" type="checkbox" value=""></div></div><div class="col-md-3 col-12 ms-auto mb-md-0 mb-3"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "All") : ssrLooseEqual(unref(form).subject, "All")) ? " selected" : ""}> همه دسته بندی ها</option><!--[-->`);
        ssrRenderList(props.menus, (menu, index) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(menu.children, (child, index2) => {
            _push(`<option${ssrRenderAttr("value", child.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, child.id) : ssrLooseEqual(unref(form).subject, child.id)) ? " selected" : ""}>${ssrInterpolate(child.name)}</option>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></select></div><div class="col-md-2 col-6">`);
        _push(ssrRenderComponent(unref(DatePicker), {
          modelValue: unref(form).time,
          "onUpdate:modelValue": ($event) => unref(form).time = $event,
          format: "YYYY-MM-DD",
          "display-format": "dddd jDD jMMMM jYYYY",
          color: "#1ABC9C",
          type: "date",
          onChange: submit
        }, null, _parent));
        _push(`</div><div class="col-md-2 col-6"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "All") : ssrLooseEqual(unref(form).status, "All")) ? " selected" : ""}>همه وضعیت ها</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "5") : ssrLooseEqual(unref(form).status, "5")) ? " selected" : ""}>متوقف</option></select></div></div></header><div class="card-body"><div class="table-responsive">`);
        if (props.products.total > 0) {
          _push(`<div class="table table-hover"><thead><tr class="col"><th scope="col"> شناسه</th><th scope="col">نام</th><th scope="col">دسته بندی</th><th scope="col">فروشنده</th><th scope="col">تاریخ</th><th scope="col">بروزرسانی</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.products.data, (product, index) => {
            _push(`<tr><td>${ssrInterpolate(product.id.toLocaleString("fa-IR"))}</td><td><div class="left">`);
            if (product.image) {
              _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", product.name)}>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="info"><h6 class="mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(product.name)}</span></span></h6></div></td><td>${ssrInterpolate(product.type.name)}</td><td>`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("profile.show", [product.user.user_name])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product.user.user_name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product.user.user_name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td><td>${ssrInterpolate(unref(moment)(product.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>${ssrInterpolate(unref(moment)(product.updated_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
            if (product.status == 0) {
              _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.status == 1) {
              _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.status == 2) {
              _push(`<span class="badge badge-pill badge-soft-secondary"> بررسی</span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.status == 3) {
              _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.status == 4) {
              _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.status == 5) {
              _push(`<span class="badge badge-pill badge-soft-warning">متوقف</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td><td><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "dropdown-item",
              href: _ctx.route("productAdmin.edit", [product.id])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` ویرایش`);
                } else {
                  return [
                    createTextVNode(" ویرایش")
                  ];
                }
              }),
              _: 2
            }, _parent));
            if (product.status == 4 && product.group.name == "قالب") {
              _push(ssrRenderComponent(unref(link_default), {
                class: "dropdown-item",
                href: _ctx.route("website-templates.show", [product.slug])
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`نمایش`);
                  } else {
                    return [
                      createTextVNode("نمایش")
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            if (product.status == 4 && product.group.name == "فرم") {
              _push(ssrRenderComponent(unref(link_default), {
                class: "dropdown-item",
                href: _ctx.route("form.show", [product.slug])
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`نمایش`);
                  } else {
                    return [
                      createTextVNode("نمایش")
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></td></tr>`);
          });
          _push(`<!--]--></tbody></div>`);
        } else {
          _push(`<!---->`);
        }
        if (props.products && props.products.total > 9) {
          _push(`<div class="pagination-area mb-20 mt-20"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><li class="${ssrRenderClass([{ disabled: !props.products.prev_page_url || props.products.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.products.prev_page_url && props.products.current_page > 1 ? props.products.prev_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.products.current_page === 1
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
          _push(`</li><li class="${ssrRenderClass([{ active: props.products.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: getPageUrl(props.products.first_page_url, 1),
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
          if (props.products.current_page > 4) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<!--[-->`);
            if (props.products.current_page - 3 + i > 1 && props.products.current_page - 3 + i < props.products.last_page) {
              _push(`<li class="${ssrRenderClass([{ active: props.products.current_page === props.products.current_page - 3 + i }, "page-item"])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: getPageUrl(props.products.path, props.products.current_page - 3 + i),
                "preserve-scroll": "",
                "preserve-state": ""
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(props.products.current_page - 3 + i)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.products.current_page - 3 + i), 1)
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
          if (props.products.current_page < props.products.last_page - 3) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          if (props.products.last_page !== 1) {
            _push(`<li class="${ssrRenderClass([{ active: props.products.current_page === props.products.last_page }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: getPageUrl(props.products.path, props.products.last_page),
              "preserve-scroll": "",
              "preserve-state": ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(props.products.last_page)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.products.last_page), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<li class="${ssrRenderClass([{ disabled: !props.products.next_page_url || props.products.current_page === props.products.last_page }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.products.next_page_url && props.products.current_page < props.products.last_page ? props.products.next_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.products.current_page === props.products.last_page
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
        _push(`</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Product/Product-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
