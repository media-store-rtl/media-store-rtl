import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "bank-index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    users: Object,
    banks: Object,
    notifications: Object,
    wallet: Number,
    companies: Object,
    descriptions: Object,
    dark: String,
    cart: Object
  },
  setup(__props) {
    const props = __props;
    useForm({
      text: props.auth.user.id
    });
    const getPageUrl = (baseUrl, page) => {
      if (typeof window !== "undefined") {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, "");
        let newUrl = `${baseUrl}?page=${page}${queryString ? "&" + queryString.substring(1) : ""}`;
        return newUrl;
      }
      return `${baseUrl}?page=${page}`;
    };
    const pagination = ref(props.banks);
    return (_ctx, _push, _parent, _attrs) => {
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
      _push(`</div></div><div class=""><div class="card-body d-flex"><div class="col-sm-4 me-1"><div class="card card-user"><div class="card-header"></div><div class="card-body"><div class="card-text text-muted">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("bank.create"),
        class: "btn btn-sm btn-brand rounded font-sm mt-15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`کارت جدید`);
          } else {
            return [
              createTextVNode("کارت جدید")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><!--[-->`);
      ssrRenderList(props.banks.data, (bank, index) => {
        _push(`<div class="col-lg-4 me-1"><div class="card card-user"><div class="card">`);
        if (bank.status == 0) {
          _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "15px" })}" class="category position-absolute badge badge-pill bg-primary">ثبت</span>`);
        } else {
          _push(`<!---->`);
        }
        if (bank.status == 1) {
          _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "25px" })}" class="category position-absolute badge badge-pill bg-warning"> انتظار</span>`);
        } else {
          _push(`<!---->`);
        }
        if (bank.status == 3) {
          _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "25px" })}" class="category position-absolute badge badge-pill bg-danger"> غیرفعال</span>`);
        } else {
          _push(`<!---->`);
        }
        if (bank.status == 4) {
          _push(`<span style="${ssrRenderStyle({ "transform": "rotate(40deg)", "margin-top": "25px" })}" class="category position-absolute badge badge-pill bg-success">فعال</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img class="img-wrap"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + bank.image.url)} alt=""></div><div class="card-body"><h5 class="card-title">حساب</h5><div class="card-text text-muted"><p class="m-0">${ssrInterpolate(bank.bank_name)}</p><p>شماره حساب:<a href="" class="__cf_email__" data-cfemail="ff929e8d86c6cfbf9a879e928f939ad19c9092">${ssrInterpolate(bank.account_number)}</a></p><p>شماره کارت:<a href="" class="__cf_email__" data-cfemail="ff929e8d86c6cfbf9a879e928f939ad19c9092">${ssrInterpolate(bank.cart_number)}</a></p><p>شماره شبا: IR <a href="" class="__cf_email__" data-cfemail="ff929e8d86c6cfbf9a879e928f939ad19c9092">${ssrInterpolate(bank.shaba_number)}</a></p></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (props.banks.total > 2) {
        _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
        ssrRenderList(__props.banks.links, (link) => {
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
      _push(`</div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Bank/bank-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
