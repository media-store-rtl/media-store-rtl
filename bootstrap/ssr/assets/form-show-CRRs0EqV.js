import { ref, computed, watch, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import _sfc_main$4 from "./Footer2-vTePDDgz.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
import swal from "sweetalert2";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
/* empty css                  */
import { _ as _sfc_main$3 } from "./CommentReply-C-v71Qaw.js";
import Editor from "@tinymce/tinymce-vue";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "@inertiajs/inertia";
const _sfc_main = {
  __name: "form-show",
  __ssrInlineRender: true,
  props: {
    product: Object,
    auth: Object,
    cart: Object,
    time: String,
    count: Number,
    alert: Object,
    flash: String,
    product_count: Number,
    product_order: Number,
    coupon_count: Number,
    companies: Object,
    product_averageRating: String,
    product_usersRated: Number,
    carousels: Object,
    users: Object,
    namads: Object,
    menus: Object,
    menu: Object,
    socials: Object
  },
  setup(__props) {
    const ApiKey = ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
    const props = __props;
    const page = usePage();
    const errors = computed(() => {
      var _a;
      return ((_a = page.props) == null ? void 0 : _a.errors) || {};
    });
    const rawFavorite = computed(() => page.props.product.favorite);
    const favorite = ref(null);
    watch(rawFavorite, (val) => {
      favorite.value = null;
      val.forEach((element) => {
        if (element.favoritable_id == page.props.product.id && props.auth.user && props.auth.user.id == element.user_id) {
          favorite.value = element;
        } else {
          favorite.value = null;
        }
      });
    });
    const form = useForm({
      id: null,
      type: null,
      model: null,
      text: null,
      parent_id: null,
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
    props.product.favorite.forEach((element) => {
      if (props.auth.user && element.user_id == props.auth.user.id) {
        favorite.value = element;
      }
    });
    const menus = ref([]);
    if (props.product.menus.length > 0) {
      props.product.menus.forEach((element) => {
        if (element.sections.length > 0) {
          element.sections.forEach((section) => {
            if (section.name == "forms") {
              menus.value.push(element);
            }
          });
        }
      });
    }
    const prerequisites = ref([]);
    if (props.product.menus.length > 0) {
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
    if (props.product.menus.length > 0) {
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
    if (props.product.menus.length > 0) {
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
    if (props.product.menus.length > 0) {
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
        title: props.product.name,
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
      _push(`<main class="main"><div class="container mb-30"><div class="row"><div class="col-xl-8 col-lg-8 m-auto"><div class="product-detail accordion-detail"><div class="row mb-50 mt-30"><div class="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5"><div class="detail-gallery"><span class="zoom-icon"><i class="fi-rs-search"></i></span><div class="product-image-slider"><figure class="border-radius-10"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.product.image.url)} alt="product image"></figure></div></div></div><div class="col-md-6 col-sm-12 col-xs-12"><div class="detail-info pr-30 pl-30">`);
      if (props.product.discount) {
        _push(`<span class="stock-status out-stock"> تخفیف </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="title-detail">${ssrInterpolate(props.product.name)}</h2><div class="product-detail-rating"><div class="product-rate-cover text-end"><div class="product-rate d-inline-block">`);
      if (props.product.ratings_avg_rating) {
        _push(`<div class="product-rating" style="${ssrRenderStyle("width:" + props.product.ratings_avg_rating * 20 + "%")}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (props.product.ratings_avg_rating) {
        _push(`<span class="font-small ml-5 text-muted"> (${ssrInterpolate(props.product.ratings_avg_rating)})</span>`);
      } else {
        _push(`<span class="font-small ml-5 text-muted"> (0.0000)</span>`);
      }
      _push(`</div></div><div class="clearfix product-price-cover">`);
      if (props.product.discount) {
        _push(`<div class="product-price primary-color float-left"><span class="current-price text-brand">${ssrInterpolate((props.product.price - props.product.price * props.product.discount.percent / 100).toLocaleString(
          "fa-IR"
        ))}</span><span>`);
        if (props.product.discount) {
          _push(`<span class="save-price font-md color3 ml-15">${ssrInterpolate(props.product.discount.percent)}% تخفیف</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="old-price font-md ml-15">${ssrInterpolate(Number(props.product.price).toLocaleString("fa-IR"))}</span></span></div>`);
      } else {
        _push(`<div class="product-price primary-color float-left"><span class="current-price text-brand">${ssrInterpolate(Number(props.product.price).toLocaleString(
          "fa-IR"
        ))}</span></div>`);
      }
      _push(`</div><div class="short-desc mb-30"><p class="font-lg"><!--[-->`);
      ssrRenderList(props.product.menus, (menu, index) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(menu.sections, (section, index2) => {
          _push(`<!--[-->`);
          if (section.name == "forms") {
            _push(`<span href="">${ssrInterpolate(menu.name + " ")}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></p></div><div class="attr-detail attr-size mb-30"></div><div class="detail-extralink mb-50"><div class="detail-qty border radius"><span class="qty-val">1</span></div><div class="product-extra-link2"><button style="${ssrRenderStyle({ "margin": "0 5px" })}" type="submit" class="button button-add-to-cart"><i class="fi-rs-shopping-cart"></i>خرید</button><a aria-label="Add To Wishlist" class="${ssrRenderClass([favorite.value && favorite.value.favoritable_id == props.product.id ? "text-brand" : "", "action-btn hover-up"])}" href=""><i class="fi-rs-heart"></i></a></div></div><div class="font-xs"><ul class="mr-50 float-start"><li class="mb-5">ورژن: `);
      if (props.tarahis && props.tarahis.version) {
        _push(`<span class="text-brand">${ssrInterpolate(props.tarahis.version)}</span>`);
      } else {
        _push(`<span class="text-brand">-</span>`);
      }
      _push(`</li><li class="mb-5">انتشار:<span class="text-brand">${ssrInterpolate(unref(moment)(__props.product.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD"))}</span></li></ul><ul class="float-start"><li class="mb-5">بروز رسانی: <a href="">${ssrInterpolate(unref(moment)(__props.product.updated_at).locale("fa", unref(fa)).format("jYYYY/jM/jD"))}</a></li></ul></div></div></div></div><div class="product-info"><div class="tab-style3"><ul class="nav nav-tabs text-uppercase"><li class="nav-item"><a class="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">توضیحات</a></li><li class="nav-item"><a class="nav-link" id="live-tab" data-bs-toggle="tab" href="#live">پیشنمایش</a></li><li class="nav-item"><a class="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">فروشنده</a></li><li class="nav-item"><a class="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">بازخورد </a></li></ul><div class="tab-content shop_info_tab entry-main-content"><div class="tab-pane fade show active" id="Description"><div>${props.product.text ?? ""}</div></div><div class="tab-pane fade" id="live">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("form.create", ["product"]) + props.product.slug
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` پیش نمایش `);
          } else {
            return [
              createTextVNode(" پیش نمایش ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tab-pane fade" id="Vendor-info"><div class="vendor-logo d-flex mb-30">`);
      if (props.product.user && props.product.user.image) {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.product.user.image.url)} alt="">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")} alt="">`);
      }
      _push(`<div class="vendor-name ml-15"><h6>`);
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
      _push(`</h6>`);
      if (props.product.ratings_avg_rating > 0) {
        _push(`<div class="product-rate-cover text-end"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle("width:" + props.product.ratings_avg_rating * 20 + "%")}"></div></div><span class="font-small ml-5 text-muted"> (${ssrInterpolate(props.product.ratings_avg_rating)})</span></div>`);
      } else {
        _push(`<div class="product-rate-cover text-end"><div class="product-rate d-inline-block"><div class="product-rating" style="${ssrRenderStyle({ "width": "0%" })}"></div></div><span class="font-small ml-5 text-muted"> (0.000)</span></div>`);
      }
      _push(`</div></div><div class="d-flex mb-55"></div>`);
      if (props.product.user && props.product.user.profile) {
        _push(`<p>${ssrInterpolate(props.product.user.profile.biography)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tab-pane fade" id="Reviews"><div class="comments-area"><div class="row"><div class="col-lg-8"><h4 class="mb-30">پرسش و پاسخ</h4><div class="comment-list" style="${ssrRenderStyle({ "position": "relative" })}"><!--[-->`);
      ssrRenderList(props.product.comments, (comment, index) => {
        _push(`<!--[--><div class="single-comment justify-content-between d-flex mb-30"><div class="user justify-content-between d-flex"><div class="thumb text-center">`);
        if (comment.user.image && comment.user.image.url && comment.user.image.status == 4) {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + comment.user.image.url)}${ssrRenderAttr("alt", comment.user.name_show)}>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", comment.user.name_show)}>`);
        }
        _push(`<a href="" class="font-heading text-brand">${ssrInterpolate(comment.user.name_show)}</a></div><div class="desc"><div class="d-flex justify-content-between mb-10"><div class="d-flex align-items-center"><span class="font-xs text-muted">${ssrInterpolate(unref(moment)(comment.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span></div></div><p class="mb-10"><span>${comment.text ?? ""}</span>`);
        if (props.auth.user) {
          _push(`<a data-bs-toggle="collapse"${ssrRenderAttr("href", "#multiCollapseExample" + comment.id)} aria-expanded="false"${ssrRenderAttr("aria-controls", "multiCollapseExample" + comment.id)} class="reply">پاسخ</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></div></div></div><div class="comment-form collapse"${ssrRenderAttr("id", "multiCollapseExample" + comment.id)}><h4 class="mb-15">ارسال پاسخ</h4><div class="product-rate d-inline-block mb-30"></div><div class="row"><div class="col-lg-8 col-md-12"><form class="form-contact comment_form" id="commentForm"><div class="row"><div class="col-12"><div class="form-group">`);
        _push(ssrRenderComponent(unref(Editor), {
          "api-key": ApiKey.value,
          init: { menubar: false },
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event
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
          _push(`<span>ارسال</span>`);
        }
        _push(`</button></div></form></div></div></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          comments: comment.replies,
          comment_id: comment.id,
          product: props.product
        }, null, _parent));
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div></div><div class="comment-form"><h4 class="mb-15">ارسال نظر</h4><div class="product-rate d-inline-block mb-30"></div><div class="row">`);
      if (props.auth.user) {
        _push(`<div class="col-lg-8 col-md-12"><form class="form-contact comment_form" id="commentForm"><div class="row"><div class="col-12"><div class="form-group">`);
        _push(ssrRenderComponent(unref(Editor), {
          "api-key": ApiKey.value,
          init: { menubar: false },
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event
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
          _push(`<span>ارسال</span>`);
        }
        _push(`</button></div></form></div>`);
      } else {
        _push(`<div class="comment-respond mt-5"><p class="comment-notes">برای ارسال نظر وارد حساب کاربری خود شوید.</p></div>`);
      }
      _push(`</div></div></div></div></div></div></div></div><div class="col-sm-4">`);
      if (menus.value && menus.value[0].name == "قالب") {
        _push(`<div class="card mb-50 mt-30"><div class="card-header text-bg-success"> سایر اطلاعات </div><div class="card-body"><div class="row"><div class="col-sm-2 d-flex justify-content-start"><label class="form-label">نوع مجوز:</label></div><div class="col-sm-4 d-flex justify-content-end"><select class="form-select"><option><span> عادی</span></option></select></div></div><ul class="list-group list-group-flush"><div class="list-group-item"><p>مجوز عادی : استفاده توسط یک شخص در یک پروژه </p></div><div class="list-group-item">`);
        if (props.companies) {
          _push(`<p><span class="material-symbols-outlined">check</span> کیفیت توسط ${ssrInterpolate(props.companies.name_show)} بررسی شده است </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p><span class="material-symbols-outlined">check</span> بروز رسانی های آینده </p>`);
        if (props.companies) {
          _push(`<p><span class="material-symbols-outlined">check</span> در دسترس بودن فروشنده(${ssrInterpolate(props.product.user.name_show)}) برای پاسخ به سوالات </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p><span class="material-symbols-outlined">check</span> رفع اشکالات گزارش شده </p><p><span class="material-symbols-outlined">check</span> دسترسی دائم به فایل </p></div></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-50 mb-50 mt-30"><div class="card mt-3 mb-3"><div class="card-header text-bg-success"> مشخصات محصول: </div><div class="card-body">`);
      if (additional_facilities.value.length) {
        _push(`<div class="d-flex bd-highlight"><div class="bd-highlight"><h5 class="card-title">امکانات اضافی</h5></div><div class="ms-auto bd-highlight d-flex"><!--[-->`);
        ssrRenderList(additional_facilities.value, (menu, index) => {
          _push(`<!--[-->`);
          if (index < 1) {
            _push(`<p class="card-text">${ssrInterpolate(menu.name)},</p>`);
          } else {
            _push(`<p class="card-text">${ssrInterpolate(menu.name)}</p>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (browsers.value.length) {
        _push(`<div class="d-flex bd-highlight"><div class="bd-highlight"><h5 class="card-title">پشتیبانی مرورگر</h5></div><div class="ms-auto bd-highlight d-flex"><!--[-->`);
        ssrRenderList(browsers.value, (menu, index) => {
          _push(`<!--[-->`);
          if (index < 1) {
            _push(`<p class="card-text">${ssrInterpolate(menu.name)},</p>`);
          } else {
            _push(`<p class="card-text">${ssrInterpolate(menu.name)}</p>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div> مشخصات ندارد.</div>`);
      }
      _push(`</div></div></div></div></div></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/form-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
