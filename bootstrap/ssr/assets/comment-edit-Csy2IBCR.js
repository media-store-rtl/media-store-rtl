import { ref, computed, watch, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import swal from "sweetalert2";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "comment-edit",
  __ssrInlineRender: true,
  props: {
    users: Object,
    comments: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const ApiKey = ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
    const page = usePage();
    const errors = computed(() => {
      var _a;
      return ((_a = page.props) == null ? void 0 : _a.errors) || {};
    });
    const props = __props;
    const form = useForm({
      id: null,
      parent_id: null,
      text: null,
      user_id: null,
      status: props.comments.status,
      product_id: props.comments.commentable_id
    });
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
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex me-auto"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>مسدود</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option></select><button class="btn btn-primary me-auto ms-1">`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ویرایش</span>`);
      }
      _push(`</button></div></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="card mb-4"><div class="card-body"><div class="card mb-4"><div class="col-sm-12 mt-3"><div class="d-flex me-2"><div class="col-sm-10 mt-3">`);
      if (props.comments.user.image && props.comments.user.image.status == 4) {
        _push(`<img class="img-sm img-thumbnail"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.comments.user.image.url)}${ssrRenderAttr("alt", props.comments.user.name_show)}>`);
      } else {
        _push(`<img class="img-sm img-thumbnail"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", props.comments.user.name_show)}>`);
      }
      _push(`<span class="font-xs text-muted me-1">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("profile.show", [props.comments.user.user_name])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.comments.user.name_show)} | ${ssrInterpolate(unref(moment)(props.comments.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.comments.user.name_show) + " | " + toDisplayString(unref(moment)(props.comments.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><div class="mb-4 me-5"><div class="d-flex"><div>${props.comments.text ?? ""}</div><a${ssrRenderAttr("href", "#CollapseExample" + props.comments.id)} class="reply" data-bs-toggle="collapse" aria-expanded="false"${ssrRenderAttr("aria-controls", "CollapseExample" + props.comments.id)}>پاسخ</a></div></div><div class="submenu text-a-r collapse"${ssrRenderAttr("id", "CollapseExample" + props.comments.id)}><div class="card-body"><div class="mb-4"><label class="form-label">پاسخ:<span class="text-danger me-1">*</span></label>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        "api-key": ApiKey.value,
        init: { menubar: false },
        modelValue: unref(form).text,
        "onUpdate:modelValue": ($event) => unref(form).text = $event,
        placeholder: "اینجا تایپ کنید"
      }, null, _parent));
      _push(`</div></div><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary me-4"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</button></div></div></div><hr></div></div></div></div></form></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Comment/comment-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
