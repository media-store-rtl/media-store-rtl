import { computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
const _sfc_main = {
  __name: "Tarahi-index",
  __ssrInlineRender: true,
  props: {
    tarahis: Object,
    users: Object,
    cart: Object,
    wallet: Number,
    notifications: Object,
    names: Object,
    ids: Object,
    statuses: Object,
    companies: Object,
    descriptions: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    useForm({
      name: null,
      status: null,
      id: null
    });
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
      if (props.tarahis.total > 0) {
        _push(`<div class="card mb-4">`);
        if (props.tarahis) {
          _push(`<div class="card-body"><div class="row gx-5"><div class="col-lg-9"><section class="content-body p-xl-4">`);
          if (props.tarahis.total > 0) {
            _push(`<div class="table-responsive"><div class="table table-hover"><thead><tr class="col"><th scope="col">شناسه سفارش</th><th scope="col">مجری</th><th scope="col">عنوان</th><th scope="col">کارفرما</th><th scope="col">تاریخ</th><th scope="col">بروزرسانی</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.tarahis.data, (tarahi, index) => {
              _push(`<tr><td>${ssrInterpolate(tarahi.id.toLocaleString("fa-IR"))}</td>`);
              if (tarahi.company) {
                _push(`<td>${ssrInterpolate(props.companies.name_show)}</td>`);
              } else {
                _push(`<td>فریلنسر</td>`);
              }
              _push(`<td>${ssrInterpolate(tarahi.title)}</td>`);
              if (tarahi.user) {
                _push(`<td>`);
                _push(ssrRenderComponent(unref(link_default), {
                  href: _ctx.route("profile.show", [tarahi.user.user_name])
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(tarahi.user.user_name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tarahi.user.user_name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</td>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<td>${ssrInterpolate(unref(moment)(tarahi.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>${ssrInterpolate(unref(moment)(tarahi.updated_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
              if (tarahi.status == 0) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
              } else {
                _push(`<!---->`);
              }
              if (tarahi.status == 1) {
                _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
              } else {
                _push(`<!---->`);
              }
              if (tarahi.status == 2) {
                _push(`<span class="badge badge-pill badge-soft-secondary">در حال واگذاری</span>`);
              } else {
                _push(`<!---->`);
              }
              if (tarahi.status == 3) {
                _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (tarahi.status == 4) {
                _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
              } else {
                _push(`<!---->`);
              }
              if (tarahi.status == 5) {
                _push(`<span class="badge badge-pill badge-soft-pink">واگذار شده</span>`);
              } else {
                _push(`<!---->`);
              }
              if (tarahi.status == 6) {
                _push(`<span class="badge badge-pill badge-soft-dark">تمام شده</span>`);
              } else {
                _push(`<!---->`);
              }
              if (tarahi.status == 7) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت نظر</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td><td class="text-end">`);
              if (tarahi.status !== 3) {
                _push(`<div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
                _push(ssrRenderComponent(unref(link_default), {
                  class: "dropdown-item",
                  href: _ctx.route("tarahiAdmin.show", [tarahi.id])
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
                _push(ssrRenderComponent(unref(link_default), {
                  class: "dropdown-item",
                  href: _ctx.route("project.show", [tarahi.slug])
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`نمایش جزئیات`);
                    } else {
                      return [
                        createTextVNode("نمایش جزئیات")
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td></tr>`);
            });
            _push(`<!--]--></tbody></div>`);
            if (props.tarahis.total > 9) {
              _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
              ssrRenderList(props.tarahis.links, (link) => {
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
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</section></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Tarahi/Tarahi-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
