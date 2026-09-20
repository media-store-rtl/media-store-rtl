import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
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
  __name: "support-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    tickets: Object,
    ids: Object,
    statuses: Object,
    subjects: Object,
    cartNumber: Number,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      subject: null,
      status: null,
      id: null
    });
    const submit = () => {
      form.get(route("support.search"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cartPrice: props.cartPrice,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
        cartCoupon: props.cartCoupon,
        cartTotal: props.cartTotal,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div>`);
      if (props.descriptions) {
        _push(`<h2 class="content-title card-title">${ssrInterpolate(props.descriptions.subject)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (props.descriptions) {
        _push(`<p>${ssrInterpolate(props.descriptions.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.tickets.total > 0) {
        _push(`<div class="card mb-4"><header class="card-header"><form><div class="row gx-3"><div class="col-lg-2 col-md-6"><input${ssrRenderAttr("value", unref(form).id)} name="id" id="id" type="text" placeholder="شناسه تیکت" class="form-control"></div><div class="col-lg-2 col-md-6"><input${ssrRenderAttr("value", unref(form).subject)} name="subject" id="subject" type="text" placeholder="عنوان" class="form-control"></div><div class="col-lg-2 col-6 col-md-3 ms-auto"><select name="status" id="status" class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت شده</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}> در انتظار پاسخ</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>در حال بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>بسته شده</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>پاسخ داده شده</option></select></div><div class="col-lg-2 col-md-6">`);
        _push(ssrRenderComponent(unref(link_default), {
          onClick: submit,
          class: [{ "opacity-25": unref(form).processing }, "btn btn-primary btn-sm rounded font-sm"],
          disabled: unref(form).processing
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`فیلتر`);
            } else {
              return [
                createTextVNode("فیلتر")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></form></header>`);
        if (props.ids) {
          _push(`<div class="card-body"><div class="table-responsive">`);
          if (props.id.total > 0) {
            _push(`<table class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">عنوان</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">جزییات</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.ids.data, (ticket) => {
              _push(`<tr><td>${ssrInterpolate(ticket.id)}</td><td>${ssrInterpolate(ticket.subject)}</td><td>${ssrInterpolate(ticket.created_at)}</td><td>`);
              if (ticket.status == 0) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 1) {
                _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 2) {
                _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 3) {
                _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 4) {
                _push(`<span class="badge badge-pill badge-soft-success">پاسخ</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td><td class="text-end">`);
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("support.show", [ticket.id, props.auth.user.role]),
                class: "btn btn-primary btn-sm rounded font-sm"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`جزییات`);
                  } else {
                    return [
                      createTextVNode("جزییات")
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</td></tr>`);
            });
            _push(`<!--]-->`);
            if (props.ids.total > 9) {
              _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
              ssrRenderList(props.ids.links, (link) => {
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
            _push(`</tbody></table>`);
          } else {
            _push(`<table class="table table-hover"><tbody><tr><td>گزینه ای یافت نشد</td></tr></tbody></table>`);
          }
          _push(`</div></div>`);
        } else if (props.statuses) {
          _push(`<div class="card-body"><div class="table-responsive">`);
          if (props.statuses.total > 0) {
            _push(`<table class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">عنوان</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">جزییات</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.statuses.data, (ticket) => {
              _push(`<tr><td>${ssrInterpolate(ticket.id)}</td><td>${ssrInterpolate(ticket.subject)}</td><td>${ssrInterpolate(ticket.created_at)}</td><td>`);
              if (ticket.status == 0) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 1) {
                _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 2) {
                _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 3) {
                _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 4) {
                _push(`<span class="badge badge-pill badge-soft-success">پاسخ</span>`);
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
                    _push2(`جزییات`);
                  } else {
                    return [
                      createTextVNode("جزییات")
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</td></tr>`);
            });
            _push(`<!--]-->`);
            if (props.statuses.total > 9) {
              _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
              ssrRenderList(props.statuses.links, (link) => {
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
            _push(`</tbody></table>`);
          } else {
            _push(`<table class="table table-hover"><tbody><tr><td>گزینه ای یافت نشد</td></tr></tbody></table>`);
          }
          _push(`</div></div>`);
        } else if (props.subjects) {
          _push(`<div class="card-body"><div class="table-responsive">`);
          if (props.subjects.total > 0) {
            _push(`<table class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">عنوان</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">جزییات</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.subjects.data, (ticket) => {
              _push(`<tr><td>${ssrInterpolate(ticket.id)}</td><td>${ssrInterpolate(ticket.subject)}</td><td>${ssrInterpolate(ticket.created_at)}</td><td>`);
              if (ticket.status == 0) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 1) {
                _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 2) {
                _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 3) {
                _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (ticket.status == 4) {
                _push(`<span class="badge badge-pill badge-soft-success">پاسخ</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td><td class="text-end">`);
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("support.show", [ticket.id, props.auth.user.role]),
                class: "btn btn-primary btn-sm rounded font-sm"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`جزییات`);
                  } else {
                    return [
                      createTextVNode("جزییات")
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</td></tr>`);
            });
            _push(`<!--]-->`);
            if (props.subjects.total > 9) {
              _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
              ssrRenderList(props.subject.links, (link) => {
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
            _push(`</tbody></table>`);
          } else {
            _push(`<table class="table table-hover"><tbody><tr><td>گزینه ای یافت نشد</td></tr></tbody></table>`);
          }
          _push(`</div></div>`);
        } else if (props.tickets) {
          _push(`<div class="card-body"><div class="table-responsive">`);
          if (props.tickets.total > 0) {
            _push(`<table class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">عنوان</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.tickets.data, (ticket) => {
              _push(`<tr><td>${ssrInterpolate(ticket.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(ticket.subject)}</td><td>${ssrInterpolate(unref(moment)(ticket.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
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
                _push(`<span class="badge badge-pill badge-soft-secondary">در حال بررسی</span>`);
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
                href: _ctx.route("supportSeller.show", [ticket.id]),
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
            _push(`</tbody></table>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Support/support-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
