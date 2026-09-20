import { computed, watch, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import swal from "sweetalert2";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
import VueMultiselect from "vue-multiselect";
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
  __name: "Product-edit",
  __ssrInlineRender: true,
  props: {
    product: Object,
    users: Object,
    children: Object,
    wallet: Number,
    alert: Object,
    companies: Object,
    menus: Object,
    descriptions: Object,
    path: String,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.product.id,
      name: props.product.name,
      name_en: props.product.name_en,
      group: null,
      type: null,
      category: null,
      text: props.product.text,
      status: props.product.status,
      sings: props.product.sings,
      design_type: props.product.design_type,
      prerequisites: [],
      prerequisite_version: {},
      additional_facilities: [],
      user_id: props.product.user_id,
      browser_compatibility: [],
      demo_link: props.product.demo_link,
      price: props.product.price,
      version: props.product.version,
      file: props.product.file.url,
      image: props.product.image.url,
      test: [],
      sub_test: [],
      tag: props.product.tag,
      slug: props.product.slug
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
    ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((ruote) => {
            if (ruote.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "products" && props.product.group.id == element.id || section.name == "forms" && props.product.group.id == element.id) {
                  menus.value.push(element), form.group = element;
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    if (menus.value.length > 0) {
      menus.value.forEach((element) => {
        if (form.group == element) {
          element.children.forEach((child) => {
            if (child.routes.length > 0) {
              child.routes.forEach((route) => {
                if (route.name == props.path) {
                  if (child.sections.length > 0) {
                    child.sections.forEach((section) => {
                      if (section.name == "products" && props.product.type.id == child.id || section.name == "forms" && props.product.type.id == child.id) {
                        menu.value.push(child);
                        form.type = child;
                      } else {
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
    }
    const sections = ref([]);
    if (menu.value.length > 0) {
      menu.value.forEach((element) => {
        if (form.type == element && element.children.length > 0) {
          element.children.forEach((child) => {
            if (child.routes.length > 0) {
              child.routes.forEach((route) => {
                if (route.name == props.path) {
                  if (child.sections.length > 0) {
                    child.sections.forEach((section) => {
                      if (section.name == "products" && props.product.category.id == child.id || section.name == "forms" && props.product.category.id == child.id) {
                        sections.value.push(child);
                        form.category = child;
                      } else {
                        sections.value.push(child);
                      }
                    });
                  }
                }
              });
            }
          });
        }
      });
    }
    const step = ref("step");
    const prerequisites = ref([]);
    if (props.product.menus) {
      props.product.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "prerequisites" && element.parent_id == null) {
                    form.prerequisites.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "prerequisites" && element.parent_id == null) {
                    prerequisites.value.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    const prerequisite_version = ref([]);
    if (props.product.menus) {
      props.product.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "prerequisites" && element.parent_id) {
                    prerequisite_version.value.push(element);
                    if (!form.prerequisite_version[element.parent_id]) {
                      form.prerequisite_version[element.parent_id] = [];
                    }
                    form.prerequisite_version[element.parent_id].push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    if (props.menus) {
      props.menus.forEach((element) => {
        form.prerequisites.forEach((child1) => {
          if (element.id == child1.id && element.routes.length > 0) {
            element.routes.forEach((route) => {
              if (route.name == props.path) {
                if (element.sections.length > 0) {
                  element.sections.forEach((section) => {
                    if (section.name == "prerequisites") {
                      element.children.forEach((child) => {
                        prerequisite_version.value.push(child);
                      });
                    }
                  });
                }
              }
            });
          }
        });
      });
    }
    const sub_prerequisites = () => {
      if (prerequisite_version.value.length > 0) {
        prerequisite_version.value.splice(0);
      }
      props.menus.forEach((element) => {
        form.prerequisites.forEach((child1) => {
          if (element == child1) {
            element.children.forEach((child) => {
              if (child.routes.length > 0) {
                child.routes.forEach((route) => {
                  if (route.name == props.path) {
                    if (child.sections.length > 0) {
                      child.sections.forEach((section) => {
                        if (section.name == "prerequisites") {
                          if (child.parent_id == element.id) {
                            prerequisite_version.value.push(child);
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        });
      });
    };
    const additional_facilities = ref([]);
    if (props.product && props.product.menus) {
      props.product.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "additional_facilities") {
                    form.additional_facilities.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "additional_facilities" && form.additional_facilities && form.additional_facilities.id == element.id) {
                    additional_facilities.value.push(element);
                    form.additional_facilities = element;
                  } else if (section.name == "additional_facilities") {
                    additional_facilities.value.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    const browsers = ref([]);
    if (props.product.menus) {
      props.product.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "browsers") {
                  form.browser_compatibility.push(element);
                }
              });
            }
          });
        }
      });
    }
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "browsers") {
                  browsers.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const tests = ref([]);
    if (props.product.menus) {
      props.product.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "tests" && element.parent_id == null) {
                  form.test.push(element);
                }
              });
            }
          });
        }
      });
    }
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "tests") {
                    tests.value.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    const test_version = ref([]);
    if (props.product.menus) {
      props.product.menus.forEach((element) => {
        if (element) {
          if (element.routes.length > 0) {
            element.routes.forEach((route) => {
              if (route.name == props.path) {
                if (element.sections.length > 0) {
                  element.sections.forEach((section) => {
                    if (section.name == "tests" && element.parent_id) {
                      form.sub_test.push(element);
                    }
                  });
                }
              }
            });
          }
        }
      });
    }
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.children.length > 0) {
          element.children.forEach((child) => {
            if (child.routes.length > 0) {
              child.routes.forEach((route) => {
                if (route.name == props.path) {
                  if (child.sections.length > 0) {
                    child.sections.forEach((section) => {
                      if (section.name == "tests") {
                        test_version.value.push(child);
                      }
                    });
                  }
                }
              });
            }
          });
        }
      });
    }
    const sub_test = () => {
      if (test_version.value.length > 0) {
        test_version.value.splice(0);
      }
      props.menus.forEach((element) => {
        form.test.forEach((child1) => {
          if (element == child1) {
            element.children.forEach((child) => {
              if (child.routes.length > 0) {
                child.routes.forEach((route) => {
                  if (route.name == props.path) {
                    if (child.sections.length > 0) {
                      child.sections.forEach((section) => {
                        if (section.name == "tests") {
                          if (child.parent_id == element.id) {
                            test_version.value.push(child);
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        });
      });
    };
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
      _push(`<table><thead><tr class="d-flex me-auto">`);
      if (step.value !== "step") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up ms-1"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>قبلی</button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>مسدود</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "5") : ssrLooseEqual(unref(form).status, "5")) ? " selected" : ""}>متوقف</option></select>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up me-auto"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value !== "step3") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up me-auto"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>بعدی</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr></thead></table></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row"><form class="row"><div class="col-lg-12">`);
      if (step.value == "step") {
        _push(`<div class="card"><div class="card-header"><h4>اطلاعات پایه</h4></div><div class="card-body"><div class="row"><div class="mt-1 col-sm-6"><label for="product_name" class="form-label">نام محصول <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name"></div><div class="mt-1 col-sm-6"><label for="product_name" class="form-label">نام انگلیسی محصول <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).name_en)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name"></div><div class="mt-1 col-sm-12"><label for="product_name" class="form-label">تگ اسلاگ <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).slug)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name"></div></div><div class="mt-4"><label class="form-label">توضیحات کامل درباره محصول <span class="text-danger">*</span></label>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step2") {
        _push(`<div class="card mt-4"><div class="card-header"><h4>اطلاعات تکمیلی</h4></div><div class="card-body"><div class="row"><div class="col-sm-6"><label class="form-label">قیمت پیشنهادی محصول <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div><div class="col-sm-6"><label class="form-label"> گروه محصول <span class="text-danger">*</span></label><select class="form-select">`);
        if (menus.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(menus.value, (menu2, index) => {
            _push(`<option${ssrRenderAttr("value", menu2)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, menu2) : ssrLooseEqual(unref(form).group, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, null) : ssrLooseEqual(unref(form).group, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div><div class="row"><div class="col-sm-6 mt-4"><label class="form-label">نوع محصول <span class="text-danger">*</span></label><select class="form-select">`);
        if (menu.value.length > 0 && unref(form).group) {
          _push(`<!--[-->`);
          ssrRenderList(menu.value, (type, index) => {
            _push(`<option${ssrRenderAttr("value", type)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, type) : ssrLooseEqual(unref(form).type, type)) ? " selected" : ""}>${ssrInterpolate(type.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, null) : ssrLooseEqual(unref(form).type, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div><div class="col-sm-6 mt-4"><label class="form-label"> دسته بندی محصول <span class="text-danger">*</span></label><select class="form-select">`);
        if (sections.value.length > 0 && unref(form).type) {
          _push(`<!--[-->`);
          ssrRenderList(sections.value, (category, index) => {
            _push(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, category) : ssrLooseEqual(unref(form).category, category)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, null) : ssrLooseEqual(unref(form).category, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div><div class="row"><div class="mt-4 col-sm-6"><label class="form-label">لینک دمو <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).demo_link)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div><div class="mt-4 col-sm-6"><label class="form-label">نسخه محصول <span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).version)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="row"><div class="card-body col-sm-6"><label class="form-label">فایل <span class="text-danger">*</span></label><div class="input-upload"><div class="mt-2"><a${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + unref(form).file)}>دانلود</a></div><input class="form-control mt-5" type="file" id="file" accept="zip/rar/*">`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="card-body col-sm-6"><label class="form-label">تصویر کاور <span class="text-danger">*</span></label><div class="input-upload"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + unref(form).image)}${ssrRenderAttr("alt", unref(form).name)}><input class="form-control" type="file" id="image" accept="image/*">`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<div class="card"><div class="row gx-2"><div class="card-header"><h4>اطلاعات اضافی</h4></div></div><div class="mt-4"><div class="card-body"><div class="row gx-2"><div class="col-lg-6"><label class="form-label">پیش نیازها</label>`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).prerequisites,
          "onUpdate:modelValue": ($event) => unref(form).prerequisites = $event,
          multiple: true,
          options: prerequisites.value,
          label: "name",
          "close-on-select": true,
          "track-by": "name",
          placeholder: "انتخاب نمایید",
          onSelect: sub_prerequisites
        }, null, _parent));
        _push(`</div>`);
        if (unref(form).prerequisites) {
          _push(`<!--[-->`);
          ssrRenderList(unref(form).prerequisites, (prerequisite, index) => {
            _push(`<div class="col-lg-6"><label class="form-label">نسخه پیش نیازها محصول (${ssrInterpolate(prerequisite.name)})</label>`);
            _push(ssrRenderComponent(unref(VueMultiselect), {
              modelValue: unref(form).prerequisite_version[prerequisite.id],
              "onUpdate:modelValue": ($event) => unref(form).prerequisite_version[prerequisite.id] = $event,
              multiple: true,
              options: prerequisite_version.value.filter(
                (item) => item.parent_id == prerequisite.id
              ),
              label: "name",
              "track-by": "id",
              "close-on-select": false,
              placeholder: "انتخاب نمایید"
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="row gx-2"><div class="col-lg-6"><label class="form-label">امکانات اضافی</label>`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).additional_facilities,
          "onUpdate:modelValue": ($event) => unref(form).additional_facilities = $event,
          options: additional_facilities.value,
          multiple: true,
          "close-on-select": true,
          label: "name",
          placeholder: "انتخاب نمایید",
          "track-by": "name"
        }, null, _parent));
        _push(`</div><div class="col-lg-6"><label class="form-label">سازگار با مرورگر </label><div class="row gx-2">`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).browser_compatibility,
          "onUpdate:modelValue": ($event) => unref(form).browser_compatibility = $event,
          multiple: true,
          options: browsers.value,
          label: "name",
          "close-on-select": true,
          "track-by": "name",
          placeholder: "انتخاب نمایید"
        }, null, _parent));
        _push(`</div></div></div><div class="row gx-2"><div class="col-lg-6"><label class="form-label">تست</label>`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).test,
          "onUpdate:modelValue": ($event) => unref(form).test = $event,
          multiple: true,
          options: tests.value,
          label: "name",
          "close-on-select": true,
          "track-by": "name",
          placeholder: "انتخاب نمایید",
          onSelect: sub_test
        }, null, _parent));
        _push(`</div>`);
        if (unref(form).test) {
          _push(`<!--[-->`);
          ssrRenderList(unref(form).test, (tes, index) => {
            _push(`<div class="col-lg-6"><label class="form-label">نسخه پیش نیازها محصول (${ssrInterpolate(tes.name)})</label><select class="form-select"><!--[-->`);
            ssrRenderList(test_version.value, (child, index2) => {
              _push(`<!--[-->`);
              if (tes.id == child.parent_id) {
                _push(`<option${ssrRenderAttr("value", child)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).sub_test[tes.id]) ? ssrLooseContain(unref(form).sub_test[tes.id], child) : ssrLooseEqual(unref(form).sub_test[tes.id], child)) ? " selected" : ""}>${ssrInterpolate(child.name)}</option>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></select></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="row gx-2"><label class="form-label">تگ سئو: طول کارکتر بین ۱۲۰ تا ۱۶۰ کاراکتر و شامل کلمه کلیدی اصلی</label><textarea class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="اینجا تایپ کنید">${ssrInterpolate(unref(form).tag)}</textarea></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Product/Product-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
