import { computed, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import swal from "sweetalert2";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "dataBase-index",
  __ssrInlineRender: true,
  props: {
    results: Object,
    users: Object,
    tables: Object,
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
      time: props.times !== "All" ? props.times : null,
      table: null
    });
    const submit = () => {
      if (form.subject == null && form.status == null && form.time == null) {
        let text;
        text = "موارد ستاره دار الزامی است.";
        validate(text);
      } else {
        form.get(route("dataBase.index"));
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
    const tables = props.tables ? props.tables.rows : null;
    const pagination = ref(tables);
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
      _push(`<main class="main-wrap rtl" data-v-a09290f4><section class="content-main" data-v-a09290f4><div class="row content-header" data-v-a09290f4><div class="d-flex col-sm-12" data-v-a09290f4>`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title" data-v-a09290f4>${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table class="me-auto" data-v-a09290f4><thead data-v-a09290f4><tr data-v-a09290f4></tr></thead></table></div><div class="col-sm-12" data-v-a09290f4>`);
      if (props.descriptions) {
        _push(`<div data-v-a09290f4>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.results) {
        _push(`<div class="mb-4 bg-white" data-v-a09290f4><header class="card-header" data-v-a09290f4><div class="row align-items-center" data-v-a09290f4><div class="col col-check flex-grow-0" data-v-a09290f4><div class="form-check ms-2" data-v-a09290f4><input class="form-check-input" type="checkbox" value="" data-v-a09290f4></div></div><div class="col-md-3 col-12 ms-auto mb-md-0 mb-3" data-v-a09290f4><select class="form-select" data-v-a09290f4><option value="All" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "All") : ssrLooseEqual(unref(form).subject, "All")) ? " selected" : ""}> همه دسته بندی ها</option><!--[-->`);
        ssrRenderList(props.results, (result, index) => {
          _push(`<option${ssrRenderAttr("value", result)} data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, result) : ssrLooseEqual(unref(form).subject, result)) ? " selected" : ""}>${ssrInterpolate(result)}</option>`);
        });
        _push(`<!--]--></select></div><div class="col-md-2 col-6" data-v-a09290f4>`);
        _push(ssrRenderComponent(_component_date_picker, {
          modelValue: unref(form).time,
          "onUpdate:modelValue": ($event) => unref(form).time = $event,
          format: "YYYY-MM-DD",
          "display-format": "dddd jDD jMMMM jYYYY",
          color: "#1ABC9C",
          type: "date",
          onChange: submit
        }, null, _parent));
        _push(`</div><div class="col-md-2 col-6" data-v-a09290f4><select class="form-select" data-v-a09290f4><option value="All" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "All") : ssrLooseEqual(unref(form).status, "All")) ? " selected" : ""}>همه وضعیت ها</option><option value="0" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>بررسی</option><option value="3" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option><option value="5" data-v-a09290f4${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "5") : ssrLooseEqual(unref(form).status, "5")) ? " selected" : ""}>متوقف</option></select></div></div></header><div class="card-body" data-v-a09290f4><div class="table-responsive" data-v-a09290f4>`);
        if (props.tables) {
          _push(`<article class="itemlist" data-v-a09290f4><div class="table table-hover" data-v-a09290f4><thead data-v-a09290f4><tr class="col" data-v-a09290f4><!--[-->`);
          ssrRenderList(props.tables.columns, (value, index) => {
            _push(`<th scope="col" data-v-a09290f4>${ssrInterpolate(value)}</th>`);
          });
          _push(`<!--]--><th scope="col" data-v-a09290f4>عملیات</th></tr></thead>`);
          if (props.tables && props.tables.rows) {
            _push(`<tbody data-v-a09290f4><!--[-->`);
            ssrRenderList(props.tables.rows.data, (product, index) => {
              _push(`<tr data-v-a09290f4><!--[-->`);
              ssrRenderList(product, (value) => {
                _push(`<td class="" data-v-a09290f4>${ssrInterpolate(value)}</td>`);
              });
              _push(`<!--]--><td data-v-a09290f4>`);
              if (product) {
                _push(`<div class="dropdown" data-v-a09290f4><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm" data-v-a09290f4><i class="material-icons md-more_horiz" data-v-a09290f4></i></a><div class="dropdown-menu" data-v-a09290f4><button class="dropdown-item" data-v-a09290f4> ویرایش</button><button class="dropdown-item" data-v-a09290f4> حذف</button></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td></tr>`);
            });
            _push(`<!--]--></tbody>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></article>`);
        } else {
          _push(`<!---->`);
        }
        if (pagination.value && pagination.value.total > 9) {
          _push(`<div class="pagination-area mb-20 mt-20" data-v-a09290f4><nav aria-label="Page navigation example" data-v-a09290f4><ul class="pagination justify-content-start" data-v-a09290f4><li class="${ssrRenderClass([{ disabled: !pagination.value.prev_page_url || pagination.value.current_page === 1 }, "page-item"])}" data-v-a09290f4>`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: pagination.value.prev_page_url && pagination.value.current_page > 1 ? pagination.value.prev_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": pagination.value.current_page === 1
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="material-icons md-chevron_right" data-v-a09290f4${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "material-icons md-chevron_right" })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li class="${ssrRenderClass([{ active: pagination.value.current_page === 1 }, "page-item"])}" data-v-a09290f4>`);
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
            _push(`<li class="page-item" data-v-a09290f4><span class="page-link dot" data-v-a09290f4>...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<!--[-->`);
            if (pagination.value.current_page - 3 + i > 1 && pagination.value.current_page - 3 + i < pagination.value.last_page) {
              _push(`<li class="${ssrRenderClass([{ active: pagination.value.current_page === pagination.value.current_page - 3 + i }, "page-item"])}" data-v-a09290f4>`);
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
            _push(`<li class="page-item" data-v-a09290f4><span class="page-link dot" data-v-a09290f4>...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          if (pagination.value.last_page !== 1) {
            _push(`<li class="${ssrRenderClass([{ active: pagination.value.current_page === pagination.value.last_page }, "page-item"])}" data-v-a09290f4>`);
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
          _push(`<li class="${ssrRenderClass([{ disabled: !pagination.value.next_page_url || pagination.value.current_page === pagination.value.last_page }, "page-item"])}" data-v-a09290f4>`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: pagination.value.next_page_url && pagination.value.current_page < pagination.value.last_page ? pagination.value.next_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": pagination.value.current_page === pagination.value.last_page
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="material-icons md-chevron_left" data-v-a09290f4${_scopeId}></i>`);
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
        _push(`<p data-v-a09290f4>گزینه ای یافت نشد.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Modir/Public/dataBase-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataBaseIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a09290f4"]]);
export {
  dataBaseIndex as default
};
