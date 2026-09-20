import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
const _sfc_main = {
  __name: "Link-create",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    time: Object,
    products: Object,
    flash: Object,
    link: Object,
    wallet: Number,
    id: Object,
    newfilename: Object,
    filename: Object,
    orders: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    request: Object,
    token: String
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({ id: null, link: null, order: null });
    const submit = (id, order_id) => {
      form.id = id;
      form.order = order_id;
      form.post(route("link.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cartPrice: props.cartPrice,
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div><h2 class="content-title card-title">جزئیات سفارش</h2><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p></div></div><form><div class="card"><header class="card-header"><div class="row align-items-center"><div class="col-lg-6 col-md-6 mb-lg-0 mb-15"><br><small class="text-muted">شناسه سفارش: ${ssrInterpolate(props.orders[0].order_id)}</small></div><div class="col-lg-6 col-md-6 ms-auto text-md-start">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "btn btn-primary",
        href: _ctx.route("factor.show", [props.orders[0].order_id])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`فاکتور`);
          } else {
            return [
              createTextVNode("فاکتور")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><div class="card-body"><div class="row"><div class="col-lg-12"><div class="table-responsive"><table class="table"><thead><tr><th scope="col"> محصول</th><th scope="col">دامنه</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(props.orders, (order, index) => {
        _push(`<tr><td><a class="itemside" href="#"><div class="info">${ssrInterpolate(order.orderable.name)}</div></a></td><td><input type="text"${ssrRenderAttr("value", unref(form).link)} style="${ssrRenderStyle({ "width": "100%" })}" placeholder="لطفا آدرس دامنه وب سایت خود را وارد نمایید.مثال : http://media.ir"></td><td>`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "btn btn-primary",
          onClick: ($event) => submit(order.orderable.id, order.order_id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ثبت`);
            } else {
              return [
                createTextVNode("ثبت")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></form></section></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Download/Link-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
