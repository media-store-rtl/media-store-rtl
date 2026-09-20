import { computed, watch, ref, resolveComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
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
  __name: "support-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    tickets: Object,
    times: Object | String,
    statuses: Object | String,
    subjects: Object | String,
    cartNumber: Number,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    menus: Object,
    path: String,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
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
    watch(() => errors.value, (val) => {
      if (val && Object.keys(val).length > 0) {
        Object.values(val).forEach((errMsg) => {
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
            title: errMsg,
            icon: "error"
          });
        });
      }
    });
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
        form.get(route("support.index"));
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
    const pagination = ref(props.tickets);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_date_picker = resolveComponent("date-picker");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
        wallet: props.wallet,
        cartCoupon: props.cartCoupon,
        cartTotal: props.cartTotal,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<h2 class="content-title card-title">${props.descriptions.subject ?? ""}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("support.create"),
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
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<p>${props.descriptions.text ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.tickets && props.tickets.total > 0) {
        _push(`<div class="mb-4 bg-white"><header class="card-header"><div class="row align-items-center"><div class="col col-check flex-grow-0"><div class="form-check ms-2"><input class="form-check-input" type="checkbox" value=""></div></div><div class="col-md-3 col-12 ms-auto mb-md-0 mb-3"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "All") : ssrLooseEqual(unref(form).subject, "All")) ? " selected" : ""}> همه عنوان ها</option><!--[-->`);
        ssrRenderList(props.menus, (menu, index) => {
          _push(`<option${ssrRenderAttr("value", menu.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, menu.id) : ssrLooseEqual(unref(form).subject, menu.id)) ? " selected" : ""}>${ssrInterpolate(menu.name)}</option>`);
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
        _push(`</div><div class="col-md-2 col-6"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "All") : ssrLooseEqual(unref(form).status, "All")) ? " selected" : ""}>همه وضعیت ها</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت شده</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>در انتظار پاسخ</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}> مشاهده شده</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>بسته شده</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>پاسخ داده شده</option></select></div></div></header><div class="card-body"><div class="row gx-5"><div class="col-lg-9"><section class="content-body p-xl-4"><div class="table-responsive">`);
        if (props.tickets.total > 0) {
          _push(`<div class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">بخش</th><th scope="col">عنوان</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.tickets.data, (ticket) => {
            _push(`<tr><td>${ssrInterpolate(ticket.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(ticket.recepiant.name)}</td><td>${ssrInterpolate(ticket.subject.name)}</td><td>${ssrInterpolate(unref(moment)(ticket.created_at).utc().locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
            if (ticket.status == 0) {
              _push(`<span class="badge badge-pill badge-soft-info">ثبت شده</span>`);
            } else {
              _push(`<!---->`);
            }
            if (ticket.status == 1) {
              _push(`<span class="badge badge-pill badge-soft-warning"> در انتظار پاسخ</span>`);
            } else {
              _push(`<!---->`);
            }
            if (ticket.status == 2) {
              _push(`<span class="badge badge-pill badge-soft-secondary">مشاهده شده</span>`);
            } else {
              _push(`<!---->`);
            }
            if (ticket.status == 3) {
              _push(`<span class="badge badge-pill badge-soft-danger">بسته شده</span>`);
            } else {
              _push(`<!---->`);
            }
            if (ticket.status == 4) {
              _push(`<span class="badge badge-pill badge-soft-success">پاسخ داده شده</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td><td class="text-end">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("support.show", [ticket.id]),
              class: "btn btn-primary btn-sm rounded font-sm"
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
            _push(`</td></tr>`);
          });
          _push(`<!--]-->`);
          if (props.tickets.total > 9) {
            _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
            ssrRenderList(props.tickets.links, (link) => {
              _push(`<li class="${ssrRenderClass(["page-item", link.url == null ? "disable" : "", link.active ? "active" : ""])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: link.url == null ? "#" : link.url
              }, null, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ul></nav></div>`);
          } else {
            _push(`<!---->`);
          }
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
          _push(`</tbody></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section></div></div></div></div>`);
      } else {
        _push(`<div><p>گزینه ای یافت نشد.</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Support/support-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
