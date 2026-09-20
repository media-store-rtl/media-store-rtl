import { computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "section-show",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    notifications: Object,
    menus: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    subs: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.menus.id,
      parent_id: props.menus.parent_id,
      name: props.menus.name,
      status: props.menus.status,
      items: [
        {
          sectionable_type: "",
          sectionable_id: ""
        }
      ],
      subs: [],
      type: null,
      del: null
    });
    if (props.subs) {
      props.subs.data.forEach((element) => {
        form.subs.push(element);
      });
    }
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
      _push(`<td class="d-flex me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ارسال</span>`);
      }
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام</label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).name)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><!--[-->`);
      ssrRenderList(unref(form).items, (item, index) => {
        _push(`<div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام مدل</label><input${ssrRenderAttr("value", item.sectionable_type)} type="text" class="form-control" placeholder="App\\\\Models\\\\Product"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">آیدی</label><div class="d-flex"><input${ssrRenderAttr("value", item.sectionable_id)} type="number" class="form-control" placeholder="آیدی">`);
        if (index === unref(form).items.length - 1) {
          _push(`<button type="button" class="btn btn-success ms-2"> + </button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).items.length > 1) {
          _push(`<button type="button" class="btn btn-danger ms-2"> - </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--><div class="mt-4"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ایجاد</span>`);
      }
      _push(`</button></div></div></div></div></div>`);
      if (props.subs.total > 0) {
        _push(`<div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>زیر مجموع</h4></div><div class="card-body"><div class="col-lg-12"><!--[-->`);
        ssrRenderList(props.subs.data, (menu, index) => {
          _push(`<div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام مدل</label><input${ssrRenderAttr("value", menu.sectionable_type)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">آیدی</label><div class="d-flex"><input${ssrRenderAttr("value", menu.sectionable_id)} placeholder="اینجا تایپ کنید" type="text" class="form-control"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
          if (unref(form).processing) {
            _push(`<span>پردازش...</span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).processing) {
            _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
          } else {
            _push(`<span>حذف</span>`);
          }
          _push(`</button></div></div></div></div>`);
        });
        _push(`<!--]-->`);
        if (props.subs.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
          ssrRenderList(props.subs.links, (link) => {
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
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/section-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
