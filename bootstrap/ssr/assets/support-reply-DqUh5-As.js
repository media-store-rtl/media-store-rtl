import { computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "sweetalert2";
import { _ as _sfc_main$1 } from "./Editor-CocwfA7J.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "support-reply",
  __ssrInlineRender: true,
  props: { auth: Object, users: Object, tickets: Object, replies: Object },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      parent_id: props.tickets.id,
      menu: props.tickets.menu,
      recepiant: props.tickets.recepiant,
      subject: props.tickets.subject,
      text: null,
      destination: null,
      file: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(props.replies, (ticket, index) => {
        _push(`<div class="col-sm-12 mt-3"><form><div class="d-flex me-2">`);
        if (ticket.user && ticket.user.image && ticket.user.image.status == 4) {
          _push(`<img class="img-sm img-thumbnail"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + ticket.user.image.url)}${ssrRenderAttr("alt", ticket.user.name_show)}>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")} class="img-sm img-thumbnail"${ssrRenderAttr("alt", ticket.user.name_show)}>`);
        }
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("profile.show", [ticket.user.user_name])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-xs text-muted me-1"${_scopeId}>${ssrInterpolate(ticket.user.name_show)}| ${ssrInterpolate(unref(moment)(ticket.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span>`);
            } else {
              return [
                createVNode("span", { class: "font-xs text-muted me-1" }, toDisplayString(ticket.user.name_show) + "| " + toDisplayString(unref(moment)(ticket.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="mb-4 me-5"><div class="d-flex"><div>${ticket.text ?? ""}</div>`);
        if (ticket.user.id !== props.users.id && ticket.status !== 3) {
          _push(`<a${ssrRenderAttr("href", "#CollapseExample" + ticket.id)} class="reply me-1" data-bs-toggle="collapse" aria-expanded="false"${ssrRenderAttr("aria-controls", "CollapseExample" + ticket.id)}>پاسخ</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="submenu text-a-r collapse"${ssrRenderAttr("id", "CollapseExample" + ticket.id)}><div class="card-body"><div class="mb-4"><label class="form-label">پاسخ:<span class="text-danger me-1">*</span></label>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event,
          placeholder: "اینجا تایپ کنید"
        }, null, _parent));
        _push(`</div></div><div class="card-body"><label class="form-label"> آپلودفایل<span class="text-danger me-1"></span></label><div class="input-upload"><input name="file" class="form-control" type="file" id="file">`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
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
        _push(`</button></div>`);
        if (ticket.file) {
          _push(`<div class="mb-4 me-5"><p> جهت مشاهده فایل های ضمیه را دانلود نمایید.</p><a${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + ticket.file.url)} class="btn btn-sm btn-primary">دانلود</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form><hr>`);
        _push(ssrRenderComponent(_sfc_main, {
          tickets: props.tickets,
          replies: ticket.replies,
          users: props.users,
          auth: props.auth,
          alert: props.alert
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Support/support-reply.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
