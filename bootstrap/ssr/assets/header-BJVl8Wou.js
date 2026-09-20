import { computed, ref, watch, onMounted, onBeforeUnmount, unref, withCtx, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { a as usePage, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "header",
  __ssrInlineRender: true,
  props: {
    products: Object,
    cart: Object,
    codes: Object,
    alert: Object,
    users: Object,
    orders: Object,
    notifications: Object,
    dark: String,
    companies: Object,
    asidemini: String,
    path: String,
    descriptions: Object,
    roles: Object,
    wallet: Number
  },
  emits: ["eventDarkmode", "eventMinimize", "eventOffcanvas_aside"],
  setup(__props, { emit: __emit }) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    ref([props.asidemini]);
    ref([props.dark]);
    ref([]);
    ref([]);
    const notif = ref([]);
    watch(() => props.notifications, (val) => {
      notif.value = val;
    }, { immediate: true });
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
    onMounted(() => {
      const scriptClass = "dynamic-script";
      function addJs(address) {
        const exists = document.querySelector(`script[src="${address}"]`);
        if (exists) return;
        const script = document.createElement("script");
        script.src = address;
        script.async = false;
        script.defer = true;
        script.classList.add(scriptClass);
        document.body.appendChild(script);
      }
      const items = [
        "/assets/backend/assets/js/vendors/jquery-3.6.0.min.js",
        "/assets/backend/assets/js/vendors/bootstrap.bundle.min.js",
        "/assets/backend/assets/js/vendors/select2.min.js",
        "/assets/backend/assets/js/vendors/perfect-scrollbar.js",
        "/assets/backend/assets/js/vendors/jquery.fullscreen.min.js",
        "/assets/backend/assets/js/vendors/chart.js",
        "/assets/backend/assets/js/main.js",
        "/assets/backend/assets/js/custom-chart.js"
      ];
      const uniqueItems = [...new Set(items)];
      uniqueItems.forEach(addJs);
    });
    onBeforeUnmount(() => {
      document.querySelectorAll("script.dynamic-script").forEach((script) => {
        script.remove();
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><link${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/assets/backend/assets/css/main.css")} rel="stylesheet" type="text/css"><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/assets/css/mohi.css")}></head><body><div class="screen-overlay"></div><aside class="navbar-aside rtl" id="offcanvas_aside"><div class="aside-top">`);
      if (props.companies && props.companies.image && props.companies.image.status == 4) {
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("index"),
          class: "brand-wrap"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="" height="40" width="60"${ssrRenderAttr("alt", props.companies.name_show)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                  class: "",
                  height: "40",
                  width: "60",
                  alt: props.companies.name_show
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><nav><ul class="menu-aside"><li class="${ssrRenderClass([[_ctx.$page.url == "/users/dashboard" ? "active" : ""], "menu-item"])}">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "menu-link",
        href: _ctx.route("dashboard.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="icon material-icons md-home"${_scopeId}></i><span class="text"${_scopeId}>پیشخوان</span>`);
          } else {
            return [
              createVNode("i", { class: "icon material-icons md-home" }),
              createVNode("span", { class: "text" }, "پیشخوان")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass([[
        _ctx.$page.url == "/users/order" ? "active" : "",
        _ctx.$page.url == "/users/favorite" ? "active" : "",
        _ctx.$page.url == "/users/tarahi" ? "active" : ""
      ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons md-shopping_cart"></i><span class="text">خرید</span></a><div class="submenu text-a-l collapse" id="multiCollapseExample1">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("website-templates.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`محصولات`);
          } else {
            return [
              createTextVNode("محصولات")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/order" ? "active" : ""],
        href: _ctx.route("order.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`محصولات خریداری شده `);
          } else {
            return [
              createTextVNode("محصولات خریداری شده ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/favorite" ? "active" : ""],
        href: _ctx.route("favorite.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` علاقه مندی ها `);
          } else {
            return [
              createTextVNode(" علاقه مندی ها ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("website-design.index", "q") + "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`طراحی وبسایت`);
          } else {
            return [
              createTextVNode("طراحی وبسایت")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/tarahi" ? "active" : ""],
        href: _ctx.route("tarahi.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`پروژه های من`);
          } else {
            return [
              createTextVNode("پروژه های من")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="${ssrRenderClass([[
        _ctx.$page.url == "/users/support" ? "active" : "",
        _ctx.$page.url == "/users/support/create" ? "active" : ""
      ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/headset.png")}></i><span class="text">پشتیبانی</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/support" ? "active" : ""],
        href: _ctx.route("support.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`تیکت من `);
          } else {
            return [
              createTextVNode("تیکت من ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="${ssrRenderClass([[
        _ctx.$page.url == "/users/bank" ? "active" : "",
        _ctx.$page.url == "/users/payment" ? "active" : "",
        _ctx.$page.url == "/users/payment/create" ? "active" : ""
      ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons md-monetization_on"></i><span class="text">مالی</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample5">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/bank" ? "active" : ""],
        href: _ctx.route("bank.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` اطلاعات حساب `);
          } else {
            return [
              createTextVNode(" اطلاعات حساب ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/payment/create" ? "active" : ""],
        href: _ctx.route("payment.create")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` برداشت حساب `);
          } else {
            return [
              createTextVNode(" برداشت حساب ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/payment" ? "active" : ""],
        href: _ctx.route("payment.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`گردش حساب `);
          } else {
            return [
              createTextVNode("گردش حساب ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="${ssrRenderClass([[
        _ctx.$page.url == "/users/profile" ? "active" : "",
        _ctx.$page.url == "/users/identity" ? "active" : "",
        _ctx.$page.url == "/users/sikll" ? "active" : "",
        _ctx.$page.url == "/users/network" ? "active" : "",
        _ctx.$page.url == "/users/social" ? "active" : ""
      ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons md-person"></i><span class="text">حساب کاربری</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample6">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: [
          _ctx.$page.url == "/users/profile" ? "active" : "",
          _ctx.$page.url == "/users/identity" ? "active" : "",
          _ctx.$page.url == "/users/sikll" ? "active" : "",
          _ctx.$page.url == "/users/network" ? "active" : "",
          _ctx.$page.url == "/users/social" ? "active" : ""
        ],
        href: _ctx.route("profile.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` اطلاعات کاربری `);
          } else {
            return [
              createTextVNode(" اطلاعات کاربری ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li class="${ssrRenderClass([[_ctx.$page.url == "/users/comment" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons md-comment"></i><span class="text">نظرات</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample19">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: [_ctx.$page.url == "/users/comment" ? "active" : ""],
        href: _ctx.route("comment.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` نظرات من `);
          } else {
            return [
              createTextVNode(" نظرات من ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li></ul><hr><!--[-->`);
      ssrRenderList(props.users.roles, (role, index) => {
        _push(`<ul class="menu-aside">`);
        if (role.id == 1) {
          _push(`<li class="${ssrRenderClass([[
            _ctx.$page.url == "/users/product" ? "active" : "",
            _ctx.$page.url == "/users/product/create" ? "active" : ""
          ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/add-shopping-cart.png")}></i><span class="text">فروش</span></a><div class="submenu text-a-l collapse" id="multiCollapseExample2">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/product" ? "active" : ""],
            href: _ctx.route("product.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` محصولات من `);
              } else {
                return [
                  createTextVNode(" محصولات من ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      });
      _push(`<!--]--><hr><!--[-->`);
      ssrRenderList(props.users.roles, (role, index) => {
        _push(`<ul class="menu-aside">`);
        if (role.id == 2) {
          _push(`<li class="${ssrRenderClass([[_ctx.$page.url == "/users/tarahiDesigner" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/laptop-settings.png")}></i><span class="text">پروژه</span></a><div class="submenu text-a-l collapse" id="multiCollapseExample3">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/tarahiDesigner" ? "active" : ""],
            href: _ctx.route("tarahiDesigner.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`لیست پروژه `);
              } else {
                return [
                  createTextVNode("لیست پروژه ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      });
      _push(`<!--]--><hr><!--[-->`);
      ssrRenderList(props.users.roles, (role, index) => {
        _push(`<ul class="menu-aside">`);
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[
            _ctx.$page.url == "/users/company" ? "active" : "",
            _ctx.$page.url == "/users/session" ? "active" : "",
            _ctx.$page.url == "/users/menu" ? "active" : "",
            _ctx.$page.url == "/users/page" ? "active" : "",
            _ctx.$page.url == "/users/description" ? "active" : "",
            _ctx.$page.url == "/users/newsletterAdmin" ? "active" : "",
            _ctx.$page.url == "/users/socialAdmin" ? "active" : "",
            _ctx.$page.url == "/users/route" ? "active" : "",
            _ctx.$page.url == "/users/section" ? "active" : "",
            _ctx.$page.url == "/users/section" ? "active" : "",
            _ctx.$page.url == "/users/section" ? "active" : ""
          ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons md-settings"></i><span class="text">عمومی</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample7">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [
              _ctx.$page.url == "/users/company" ? "active" : "",
              _ctx.$page.url == "/users/menu" ? "active" : "",
              _ctx.$page.url == "/users/description" ? "active" : "",
              _ctx.$page.url == "/users/page" ? "active" : "",
              _ctx.$page.url == "/users/newsletterAdmin" ? "active" : "",
              _ctx.$page.url == "/users/socialAdmin" ? "active" : "",
              _ctx.$page.url == "/users/route" ? "active" : "",
              _ctx.$page.url == "/users/section" ? "active" : ""
            ],
            href: _ctx.route("company.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`تعاریف پایه `);
              } else {
                return [
                  createTextVNode("تعاریف پایه ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/session" ? "active" : ""],
            href: _ctx.route("session.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`آماربازدید `);
              } else {
                return [
                  createTextVNode("آماربازدید ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[
            _ctx.$page.url == "/users/supportAdmin" ? "active" : "",
            _ctx.$page.url == "/users/supportAdmin/create" ? "active" : ""
          ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/headset.png")}></i><span class="text">پشتیبانی</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample17">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/supportAdmin" ? "active" : ""],
            href: _ctx.route("supportAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` تیکت ها `);
              } else {
                return [
                  createTextVNode(" تیکت ها ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[
            _ctx.$page.url == "/users/paymentAdmin" ? "active" : "",
            _ctx.$page.url == "/users/bankAdmin" ? "active" : "",
            _ctx.$page.url == "/users/depositAdmin" ? "active" : ""
          ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/external-financial-global-crisis-phatplus-lineal-phatplus.png")}></i><span class="text">مدیریت مالی</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample8">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/bankAdmin" ? "active" : ""],
            href: _ctx.route("bankAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` بانک ها `);
              } else {
                return [
                  createTextVNode(" بانک ها ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/paymentAdmin" ? "active" : ""],
            href: _ctx.route("paymentAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` برداشت `);
              } else {
                return [
                  createTextVNode(" برداشت ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/depositAdmin" ? "active" : ""],
            href: _ctx.route("depositAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` واریز `);
              } else {
                return [
                  createTextVNode(" واریز ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[
            _ctx.$page.url == "/users/commentAdmin" ? "active" : "",
            _ctx.$page.url == "/users/productAdmin" ? "active" : "",
            _ctx.$page.url == "/users/coupon" ? "active" : "",
            _ctx.$page.url == "/users/discountAdmin" ? "active" : ""
          ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/delivery-settings.png")}></i><span class="text">مدیریت محصولات</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample9">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/productAdmin" ? "active" : ""],
            href: _ctx.route("productAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`لیست محصولات `);
              } else {
                return [
                  createTextVNode("لیست محصولات ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/commentAdmin" ? "active" : ""],
            href: _ctx.route("commentAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` لیست نظرات `);
              } else {
                return [
                  createTextVNode(" لیست نظرات ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/coupon" ? "active" : ""],
            href: _ctx.route("coupon.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` بن تخفیف `);
              } else {
                return [
                  createTextVNode(" بن تخفیف ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/discountAdmin" ? "active" : ""],
            href: _ctx.route("discountAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` تخفیفات `);
              } else {
                return [
                  createTextVNode(" تخفیفات ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[_ctx.$page.url == "/users/webdesign" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/laptop-settings.png")}></i><span class="text">مدیریت وبسایت</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample18">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/webdesign" ? "active" : ""],
            href: _ctx.route("webdesign.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`لیست طراحي وبسایت`);
              } else {
                return [
                  createTextVNode("لیست طراحي وبسایت")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[_ctx.$page.url == "/users/cafe-net-admin" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/laptop-settings.png")}></i><span class="text">مدیریت کافی نت</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample20">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/cafe-net-admin" ? "active" : ""],
            href: _ctx.route("cafe-net-admin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`کافی نت`);
              } else {
                return [
                  createTextVNode("کافی نت")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[
            _ctx.$page.url == "/users/tarahiAdmin" ? "active" : "",
            _ctx.$page.url == "/users/contractAdmin" ? "active" : ""
          ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/product.png")}></i><span class="text">مدیریت پروژه و قرارداد</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample13">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/tarahiAdmin" ? "active" : ""],
            href: _ctx.route("tarahiAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`لیست پروژه`);
              } else {
                return [
                  createTextVNode("لیست پروژه")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/contractAdmin" ? "active" : ""],
            href: _ctx.route("contractAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`لیست قرارداد`);
              } else {
                return [
                  createTextVNode("لیست قرارداد")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[_ctx.$page.url == "/users/blogAdmin" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/test-passed--v1.png")}></i><span class="text">مدیریت وبلاگ</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample16">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/blogAdmin" ? "active" : ""],
            href: _ctx.route("blogAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`وبلاگ `);
              } else {
                return [
                  createTextVNode("وبلاگ ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 3) {
          _push(`<li class="${ssrRenderClass([[
            _ctx.$page.url == "/users/profileAdmin" ? "active" : "",
            _ctx.$page.url == "/users/profileAdmin/" ? "active" : ""
          ], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/conference-background-selected.png")}></i><span class="text">مدیریت کاربران</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample15">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/profileAdmin" ? "active" : ""],
            href: _ctx.route("profileAdmin.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` اطلاعات کاربران `);
              } else {
                return [
                  createTextVNode(" اطلاعات کاربران ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      });
      _push(`<!--]--><hr><!--[-->`);
      ssrRenderList(props.users.roles, (role, index) => {
        _push(`<ul class="menu-aside">`);
        if (role.id == 4) {
          _push(`<li class="${ssrRenderClass([[_ctx.$page.url == "/users/userModir" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/conference-background-selected.png")}></i><span class="text">مدیریت کاربران</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample10">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/userModir" ? "active" : ""],
            href: _ctx.route("userModir.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`لیست کاربران `);
              } else {
                return [
                  createTextVNode("لیست کاربران ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 4) {
          _push(`<li class="${ssrRenderClass([[_ctx.$page.url == "/users/orderModir" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/img/area-chart--v1.png")}></i><span class="text">مدیریت در آمد</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample14">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/orderModir" ? "active" : ""],
            href: _ctx.route("orderModir.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`در آمد `);
              } else {
                return [
                  createTextVNode("در آمد ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (role.id == 4) {
          _push(`<li class="${ssrRenderClass([[_ctx.$page.url == "/users/dataBase" ? "active" : ""], "menu-item has-submenu"])}"><a class="menu-link"><i class="icon material-icons md-settings"></i><span class="text">عمومی</span></a><div class="submenu text-a-l collapse multi-collapse" id="multiCollapseExample21">`);
          _push(ssrRenderComponent(unref(link_default), {
            class: [_ctx.$page.url == "/users/dataBase" ? "active" : ""],
            href: _ctx.route("dataBase.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` دیتابیس `);
              } else {
                return [
                  createTextVNode(" دیتابیس ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      });
      _push(`<!--]--></nav></aside><main class="main-wrap"><header class="main-header navbar rtl"><div class="col-search"><a href="javascript:history.back()"><i class="material-icons md-arrow_forward"></i> برگشت </a></div><div class="col-nav"><button class="btn btn-icon btn-mobile ms-auto" data-trigger="#offcanvas_aside"><i class="material-icons md-apps"></i></button><ul class="nav"><li class="nav-item">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "nav-link btn-icon",
        href: _ctx.route("dashboard.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="material-icons md-notifications animation-shake"${_scopeId}></i><!--[-->`);
            ssrRenderList(notif.value, (notification, index) => {
              _push2(`<!--[-->`);
              if (notification.read_at == null) {
                _push2(`<span class="badge rounded-pill bg-danger"${_scopeId}>${ssrInterpolate(notif.value.length)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("i", { class: "material-icons md-notifications animation-shake" }),
              (openBlock(true), createBlock(Fragment, null, renderList(notif.value, (notification, index) => {
                return openBlock(), createBlock(Fragment, { key: index }, [
                  notification.read_at == null ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "badge rounded-pill bg-danger"
                  }, toDisplayString(notif.value.length), 1)) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if ("cart" !== props.path) {
        _push(`<li class="nav-item">`);
        if (props.cart && props.cart.total > 0) {
          _push(ssrRenderComponent(unref(link_default), {
            class: "nav-link btn-icon",
            href: _ctx.route("cart.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fa-solid fa-basket-shopping-simple"${_scopeId}></i><i class="icon material-icons md-shopping_bag"${_scopeId}></i><span class="badge rounded-pill bg-danger"${_scopeId}>${ssrInterpolate(props.cart.count)}<span class="visually-hidden"${_scopeId}></span></span>`);
              } else {
                return [
                  createVNode("i", { class: "fa-solid fa-basket-shopping-simple" }),
                  createVNode("i", { class: "icon material-icons md-shopping_bag" }),
                  createVNode("span", { class: "badge rounded-pill bg-danger" }, [
                    createTextVNode(toDisplayString(props.cart.count), 1),
                    createVNode("span", { class: "visually-hidden" })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(unref(link_default), {
            class: "nav-link btn-icon",
            href: _ctx.route("cart.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fa-solid fa-basket-shopping-simple"${_scopeId}></i><i class="icon material-icons md-shopping_bag"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "fa-solid fa-basket-shopping-simple" }),
                  createVNode("i", { class: "icon material-icons md-shopping_bag" })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="dropdown nav-item"><a class="dropdown-toggle nav-link btn-icon" data-bs-toggle="dropdown" href="#" id="dropdownAccount" aria-expanded="false"><i class="material-icons md-account_balance_wallet"></i></a><div style="${ssrRenderStyle({ "left": "0px", "text-align": "right" })}" class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownAccount">`);
      if (props.users.profile && props.wallet) {
        _push(`<a class="dropdown-item" href="#"><i class="material-icons md-account_balance_wallet"></i> موجودی: ${ssrInterpolate(props.wallet.toLocaleString("fa-IR"))} ریال </a>`);
      } else {
        _push(`<a class="dropdown-item" href="#"><i class="material-icons md-account_balance_wallet"></i>موجودی: 0 ریال</a>`);
      }
      _push(`</div></li><li class="dropdown nav-item"><a class="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="dropdownAccount" aria-expanded="false">`);
      if (props.users.image && props.users.profile && props.users.image.status == 4 && props.users.profile.status == 4) {
        _push(`<img style="${ssrRenderStyle({ "height": "40px" })}" class="img-xs rounded-circle"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.users.image.url)}${ssrRenderAttr("alt", props.users.show_name)}>`);
      } else {
        _push(`<img style="${ssrRenderStyle({ "height": "40px" })}" class="img-xs rounded-circle"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", props.users.show_name)}>`);
      }
      _push(`</a><div style="${ssrRenderStyle({ "left": "0px", "text-align": "right" })}" class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownAccount">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "dropdown-item",
        href: _ctx.route("profile.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="material-icons md-perm_identity"${_scopeId}></i>ویرایش پروفایل `);
          } else {
            return [
              createVNode("i", { class: "material-icons md-perm_identity" }),
              createTextVNode("ویرایش پروفایل ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="dropdown-divider"></div><div class="mt-4 flex items-center justify-between">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "dropdown-item text-danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="material-icons md-exit_to_app"${_scopeId}></i>خروج `);
          } else {
            return [
              createVNode("i", { class: "material-icons md-exit_to_app" }),
              createTextVNode("خروج ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></li></ul></div></header></main></body><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
