import { computed, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "sweetalert2";
import { _ as _sfc_main$2 } from "./AsideAdmin-CK4HDbOd.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "social-index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    canResetPassword: Boolean,
    status: String,
    users: Object,
    ostans: Object,
    wallet: Number,
    shahrs: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    socials: Object,
    menus: Object,
    path: String,
    alert: Object,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.users.id,
      user_name: props.users.user_name,
      name: props.users.name,
      lasst_name: props.users.lasst_name,
      name_show: props.users.name_show,
      tel: props.users.tel,
      birth: props.users.profile ? props.users.profile.birth : null,
      gender: props.users.profile ? props.users.profile.gender : null,
      email: props.users.email,
      image: props.users.image ? props.users.image.url : null,
      biography: props.users.profile ? props.users.profile.biography : null,
      password: null,
      password_confirmation: null,
      socials: []
    });
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "socials") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    menus.value.forEach((element) => {
      if (element.children.length > 0) {
        element.children.forEach((child) => {
          if (child.routes.length > 0) {
            child.routes.forEach((route) => {
              if (route.name == props.path) {
                if (child.sections.length > 0) {
                  child.sections.forEach((section) => {
                    if (section.name == "socials") {
                      menu.value.push(child);
                    }
                  });
                }
              }
            });
          }
        });
      }
    });
    menu.value.forEach((social) => {
      props.socials.data.forEach((element) => {
        if (social.id == element.title) {
          if (element.link) {
            form.socials.push({
              link: element.link.user_id == props.users.id ? element.link.link : null,
              id: element.link.linkable_id ? element.link.id : null,
              social_id: element.link.linkable_id,
              name: social.name,
              status: element.link.status
            });
          } else {
            form.socials.push({ link: null, id: null, social_id: element.id, name: social.name });
          }
        }
      });
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        roles: props.roles,
        alert: props.alert,
        users: props.users,
        wallet: props.wallet,
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
      _push(`<td class="me-auto">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("socialAdmin.create"),
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
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "col-lg-3 border-end" }, null, _parent));
      _push(`<div class="col-lg-9"><section class="content-body p-xl-4">`);
      if (props.socials.total > 0) {
        _push(`<div class="table-responsive">`);
        if (props.socials.total > 0) {
          _push(`<div class="table table-hover"><thead><tr class="col"><th scope="col"> شناسه</th><th scope="col">نام</th><th scope="col">تاریخ</th><th scope="col">بروزرسانی</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.socials.data, (social, index) => {
            _push(`<tr><td>${ssrInterpolate(social.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(social.menu.name)}</td><td>${ssrInterpolate(unref(moment)(social.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>${ssrInterpolate(unref(moment)(social.updated_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
            if (social.status == 0) {
              _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
            } else {
              _push(`<!---->`);
            }
            if (social.status == 1) {
              _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
            } else {
              _push(`<!---->`);
            }
            if (social.status == 2) {
              _push(`<span class="badge badge-pill badge-soft-secondary"> بررسی</span>`);
            } else {
              _push(`<!---->`);
            }
            if (social.status == 3) {
              _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
            } else {
              _push(`<!---->`);
            }
            if (social.status == 4) {
              _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td><td class="text-end"><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "dropdown-item",
              href: _ctx.route("socialAdmin.edit", [social.id])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`ویرایش اطلاعات`);
                } else {
                  return [
                    createTextVNode("ویرایش اطلاعات")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(unref(link_default), {
              class: "dropdown-item text-danger",
              href: _ctx.route("socialAdmin.destroy", [social.id]),
              method: "delete",
              as: "button",
              "on-finish": _ctx.submitTime
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`حذف`);
                } else {
                  return [
                    createTextVNode("حذف")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></td></tr>`);
          });
          _push(`<!--]--></tbody></div>`);
        } else {
          _push(`<!---->`);
        }
        if (props.socials && props.socials.total > 9) {
          _push(`<div class="pagination-area mb-20 mt-20"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><li class="${ssrRenderClass([{ disabled: !props.socials.prev_page_url || props.socials.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.socials.prev_page_url && props.socials.current_page > 1 ? props.socials.prev_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.socials.current_page === 1
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
          _push(`</li><li class="${ssrRenderClass([{ active: props.socials.current_page === 1 }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: getPageUrl(props.socials.first_page_url, 1),
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
          if (props.socials.current_page > 4) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<!--[-->`);
            if (props.socials.current_page - 3 + i > 1 && props.socials.current_page - 3 + i < props.socials.last_page) {
              _push(`<li class="${ssrRenderClass([{ active: props.socials.current_page === props.socials.current_page - 3 + i }, "page-item"])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: getPageUrl(props.socials.path, props.socials.current_page - 3 + i),
                "preserve-scroll": "",
                "preserve-state": ""
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(props.socials.current_page - 3 + i)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(props.socials.current_page - 3 + i), 1)
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
          if (props.socials.current_page < props.socials.last_page - 3) {
            _push(`<li class="page-item"><span class="page-link dot">...</span></li>`);
          } else {
            _push(`<!---->`);
          }
          if (props.socials.last_page !== 1) {
            _push(`<li class="${ssrRenderClass([{ active: props.socials.current_page === props.socials.last_page }, "page-item"])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: getPageUrl(props.socials.path, props.socials.last_page),
              "preserve-scroll": "",
              "preserve-state": ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(props.socials.last_page)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.socials.last_page), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<li class="${ssrRenderClass([{ disabled: !props.socials.next_page_url || props.socials.current_page === props.socials.last_page }, "page-item"])}">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "page-link",
            href: props.socials.next_page_url && props.socials.current_page < props.socials.last_page ? props.socials.next_page_url : "",
            "preserve-scroll": "",
            "preserve-state": "",
            "aria-disabled": props.socials.current_page === props.socials.last_page
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
        _push(`</div>`);
      } else {
        _push(`<p>گزینه ای یافت نشد.</p>`);
      }
      _push(`</section></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/social-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
