import { computed, ref, watch, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import _sfc_main$4 from "./Footer2-vTePDDgz.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
/* empty css                  */
import { _ as _sfc_main$3 } from "./CommentReply-C-v71Qaw.js";
import Editor from "@tinymce/tinymce-vue";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "@inertiajs/inertia";
const _sfc_main = {
  __name: "Blog-show",
  __ssrInlineRender: true,
  props: {
    product: Object,
    auth: Object,
    cart: Object,
    time: String,
    count: Number,
    alert: Object,
    product_count: Number,
    product_order: Number,
    coupon_count: Number,
    menu: Object,
    menus: Object,
    namads: Object,
    socials: Object,
    companies: Object,
    product_averageRating: String,
    product_usersRated: Number,
    carousels: Object,
    users: Object,
    cartCount: Number,
    comments: Object,
    replies: Object,
    latestBlogs: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const ApiKey = ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
    const form = useForm({
      id: null,
      parent_id: null,
      text: null,
      user_id: null,
      product_id: null
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
    const favorite = ref();
    if (props.product && props.product.favorite) {
      props.product.favorite.forEach((element) => {
        if (props.auth.user && element.user_id == props.auth.user.id) {
          favorite.value = element;
        }
      });
    }
    const menus = ref([]);
    if (props.product && props.product.menus && props.product.menus.length > 0) {
      props.product.menus.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "products") {
              menus.value.push(element);
            }
          });
        }
      });
    }
    const prerequisites = ref([]);
    if (props.product && props.product.menus && props.product.menus.length > 0) {
      props.product.menus.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "prerequisites") {
              prerequisites.value.push(element);
            }
          });
        }
      });
    }
    const additional_facilities = ref([]);
    if (props.product && props.product.menus && props.product.menus.length > 0) {
      props.product.menus.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "additional_facilities") {
              additional_facilities.value.push(element);
            }
          });
        }
      });
    }
    const browsers = ref([]);
    if (props.product && props.product.menus && props.product.menus.length > 0) {
      props.product.menus.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "browsers") {
              browsers.value.push(element);
            }
          });
        }
      });
    }
    const tests = ref([]);
    if (props.product && props.product.menus && props.product.menus.length > 0) {
      props.product.menus.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "tests") {
              tests.value.push(element);
            }
          });
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: props.product.title,
        description: props.product.tag,
        noIndex: false
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main"><div class="page-content mb-50"><div class="container"><div class="row"><div class="col-lg-9 m-auto"><div class="single-page pt-50 pr-30"><div class="single-header style-2"><div class="row"><div class="col-xl-10 col-lg-12 m-auto"><h6 class="mb-10">`);
      if (props.product && props.product.group) {
        _push(`<a href="#">${ssrInterpolate(props.product.group.name)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h6><h2 class="mb-10">${ssrInterpolate(props.product.title)}</h2><div class="single-header-meta"><div class="entry-meta meta-1 font-xs mt-15 mb-15"><a class="author-avatar" href="#">`);
      if (props.product.user && props.product.user.image) {
        _push(`<img class="img-circle"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.product.user.image.url)}${ssrRenderAttr("alt", props.product.user.name_show)}>`);
      } else {
        _push(`<img class="img-circle" style="${ssrRenderStyle({ "width": "64px", "height": "64px" })}"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", props.product.user.name_show)}>`);
      }
      _push(`</a><span class="post-by">نویسنده `);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("profile.show", [props.product.user.user_name])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.product.user.name_show)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.product.user.name_show), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="post-on has-dot">${ssrInterpolate(unref(moment)(props.product.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span></div></div></div></div></div><figure class="single-thumbnail">`);
      if (props.product && props.product.image && props.product.image.status == 4) {
        _push(`<img style="${ssrRenderStyle({ "margin": "auto" })}"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.product.image.url)} alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure><div class="single-content"><div class="row"><div class="col-xl-10 col-lg-12 m-auto"><div>${props.product.text ?? ""}</div><div class="comment-form"><h3 class="mb-15 text-center mb-30">نظر خود را با ما به اشتراک بگذرید.</h3><div class="row"><div class="col-lg-9 col-md-12 m-auto">`);
      if (props.auth.user) {
        _push(`<form class="form-contact comment_form mb-50" action="#" id="commentForm"><div class="row"><div class="col-12"><div class="form-group">`);
        _push(ssrRenderComponent(unref(Editor), {
          "api-key": ApiKey.value,
          init: { menubar: false },
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event,
          placeholder: "نظر خود را اینجا تایپ کنید."
        }, null, _parent));
        _push(`</div></div></div><div class="form-group"><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "button button-contactForm"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
        if (unref(form).processing) {
          _push(`<span>پردازش...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).processing) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
        } else {
          _push(`<span>ارسال نظر</span>`);
        }
        _push(`</button></div></form>`);
      } else {
        _push(`<div class="form-contact comment_form mb-50"><p class="comments-area">برای ارسال نظر وارد حساب کاربری خود شوید.</p></div>`);
      }
      _push(`<div class="comments-area"><h3 class="mb-30">نظرات</h3><div class="comment-list m-auto"><!--[-->`);
      ssrRenderList(props.product.comments, (comment, index) => {
        _push(`<!--[--><div class="single-comment justify-content-between d-flex mb-30"><div class="user justify-content-between d-flex"><div class="thumb text-center">`);
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
          "api-key": ApiKey.value,
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
        _push(ssrRenderComponent(_sfc_main$3, {
          comments: comment.replies,
          comment_id: comment.id,
          product: props.product
        }, null, _parent));
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div></div></div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        companies: props.companies,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path,
        namads: props.namads
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Blog-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
