import { computed, ref, resolveComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import swal from "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "product-index",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    products: Object,
    wallet: Number,
    alert: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    menus: Object,
    times: { type: [Object, String], default: () => ({}) },
    statuses: { type: [Object, String], default: () => ({}) },
    subjects: { type: [Object, String], default: () => ({}) },
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
        form.get(route("product.index"));
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
    const pagination = ref(props.products);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_date_picker = resolveComponent("date-picker");
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
      _push(`<table class="me-auto"><thead><tr>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("product.create"),
        class: "btn btn-primary btn-sm rounded font-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ایجاد`);
          } else {
            return [
              createTextVNode("ایجاد")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</tr></thead></table></div><div class="col-sm-12">`);
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
        _push(ssrRenderComponent(_component_date_picker, {
          modelValue: unref(form).time,
          "onUpdate:modelValue": ($event) => unref(form).time = $event,
          format: "YYYY-MM-DD",
          "display-format": "dddd jDD jMMMM jYYYY",
          color: "#1ABC9C",
          type: "date",
          onChange: submit
        }, null, _parent));
        _push(`</div><div class="col-md-2 col-6"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "All") : ssrLooseEqual(unref(form).status, "All")) ? " selected" : ""}>همه وضعیت ها</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "5") : ssrLooseEqual(unref(form).status, "5")) ? " selected" : ""}>متوقف</option></select></div></div></header><div class="card-body"><div class="row gx-5"><div class="col-lg-9"><section class="content-body p-xl-4"><div class="table-responsive"><article class="itemlist"><div class="table table-hover"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">نام</th><th scope="col">دسته بندی</th><th scope="col">تاریخ</th><th scope="col">بروزرسانی</th><th scope="col">بازدید</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.products.data, (product, index) => {
          _push(`<tr><td>${ssrInterpolate(product.id.toLocaleString("fa-IR"))}</td><td><div class="left">`);
          if (product.image) {
            _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", product.name)}>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="info"><h6 class="mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(product.name)}</span></span></h6></div></td><td>${ssrInterpolate(product.type.name)}</td><td>${ssrInterpolate(unref(moment)(product.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>${ssrInterpolate(unref(moment)(product.updated_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td>`);
          if (product.views_count) {
            _push(`<td>${ssrInterpolate(product.views_count.toLocaleString("fa-IR"))}</td>`);
          } else {
            _push(`<td>${ssrInterpolate(0 .toLocaleString("fa-IR"))}</td>`);
          }
          _push(`<td>`);
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
            _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
          } else {
            _push(`<!---->`);
          }
          if (product.status == 3) {
            _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
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
          if (product.status == 0 || product.status == 3 || product.status == 4) {
            _push(ssrRenderComponent(unref(link_default), {
              class: "dropdown-item",
              href: _ctx.route("product.edit", [product.id])
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
          } else {
            _push(`<!---->`);
          }
          if (product.status == 4) {
            _push(ssrRenderComponent(unref(link_default), {
              class: "dropdown-item",
              method: "PUT",
              as: "button",
              href: _ctx.route("product.update", [product.id])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`بروزرسانی`);
                } else {
                  return [
                    createTextVNode("بروزرسانی")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (product.status == 4) {
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
          _push(ssrRenderComponent(unref(link_default), {
            class: "dropdown-item",
            href: _ctx.route("product.show", [product.id])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`فروش`);
              } else {
                return [
                  createTextVNode("فروش")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></td></tr>`);
        });
        _push(`<!--]--></tbody></div></article>`);
        if (pagination.value && pagination.value.total > 9) {
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
        _push(`</div></section></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Product/product-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
