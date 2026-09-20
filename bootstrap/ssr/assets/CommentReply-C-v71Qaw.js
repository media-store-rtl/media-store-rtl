import { computed, ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import Editor from "@tinymce/tinymce-vue";
import swal from "sweetalert2";
import "@inertiajs/inertia";
const _sfc_main = {
  __name: "CommentReply",
  __ssrInlineRender: true,
  props: { comments: Object, comment_id: Number, files: Object, product: Object },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      parent_id: null,
      text: null,
      user_id: null,
      product_id: null
    });
    const alert = ref(props.alert);
    if (alert.value) {
      swal.fire(
        alert.value.title,
        alert.value.text,
        alert.value.icon
      );
      alert.value = null;
    }
    if (hasErrors.value == true) {
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
        title: [errors.value.text ? errors.value.text + "<br>" : ""],
        icon: "error"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(props.comments, (comment, index) => {
        _push(`<!--[--><div class="single-comment justify-content-between d-flex mb-30 ml-30"><div class="user justify-content-between d-flex"><div class="thumb text-center">`);
        if (comment.user.image && comment.user.image.url && comment.user.image.status == 4) {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + comment.user.image.url)}${ssrRenderAttr("alt", comment.user.name_show)}>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", comment.user.name_show)}>`);
        }
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("profile.show", [comment.user.user_name]),
          class: "font-heading text-brand"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.user.name_show)}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.user.name_show), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="desc"><div class="d-flex justify-content-between mb-10"><div class="d-flex align-items-center"><span class="font-xs text-muted">${ssrInterpolate(unref(moment)(comment.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span></div></div><p class="mb-10"><span>${comment.text ?? ""}</span><a class="reply" data-bs-toggle="collapse"${ssrRenderAttr("href", "#multiCollapseExample" + comment.id)} aria-expanded="false"${ssrRenderAttr("aria-controls", "multiCollapseExample" + comment.id)}>پاسخ</a></p></div></div></div><div class="col-lg-9 col-md-12 m-auto collapse"${ssrRenderAttr("id", "multiCollapseExample" + comment.id)}><form class="form-contact comment_form mb-50" action="#"><div class="row"><div class="col-12"><div class="form-group">`);
        _push(ssrRenderComponent(unref(Editor), {
          "api-key": _ctx.ApiKey,
          init: { menubar: false },
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event,
          placeholder: "نظر خود را اینجا تایپ کنید."
        }, null, _parent));
        _push(`</div></div></div><div class="form-group"><button class="button button-contactForm" type="submit">`);
        if (unref(form).processing) {
          _push(`<span>پردازش...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).processing) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
        } else {
          _push(`<span> ارسال پاسخ</span>`);
        }
        _push(`</button></div></form></div>`);
        _push(ssrRenderComponent(_sfc_main, {
          comments: comment.replies,
          comment_id: comment.id,
          product: props.product
        }, null, _parent));
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CommentReply.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
