<script setup>

import Header from '@/Pages/Guest/Header2.vue';
import Footer from '@/Pages/Guest/Footer2.vue';
import {watch ,computed} from 'vue';
import {Link, useForm,usePage} from '@inertiajs/vue3';
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    auth: Object,wallet:Number,alert: Object,random_coupon: Object,companies:Object,
    path:String,token:String,menus: Object,socials: Object,menu: Object,cart:Object,
    namads:Object,time:String
});

const form = useForm({
    id: null, count: null, coupon: null, cartPrice: null, cartCount: null, cartDiscount: null, cartTotal: null,
    cartWallet: props.auth.user && props.auth.user.wallet, dargah: null, text: null, date: null, type: null,model:null,
});

const validate = (text)=>{
    swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
    }}).fire({
        title: text,
        icon:'error',
    })
}

watch(() => props.alert, (val) => {
  if (val) {
    if (val.title) {
      swal.fire(val.title, val.text, val.icon);
    } else {
      swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', swal.stopTimer);
          toast.addEventListener('mouseleave', swal.resumeTimer);
        }
      }).fire({
        title: val.text,
        icon: val.icon,
      });
    }
  }
});

watch(() => errors.value, (val) => {
  if (val && Object.keys(val).length > 0) {
    Object.values(val).forEach((errMsg) => {
      swal
        .mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        })
        .fire({
          title: errMsg,
          icon: "error",
        });
    });
  }
});

const submitCoupon = () => {
    if (form.coupon !== null) {
        props.codes.forEach(code => {
            form.post(route('coupon.store'),
            // {
            //     onFinish: ()=> submitTime()
            // }
            )
        });
    }
    else
    {
        let text = 'کد تخفیف را وارد نمایید.'
        validate(text)
    }
};

const submit = () => {
    form.cartPrice = props.cartPrice,
    form.cartCount = props.cartCount,
    form.cartDiscount = props.cartDiscount,
    form.cartTotal = props.cartTotal

    if (form.dargah == 'wallet')
    {
        form.post(route('order.store')
                // ,{
                //     onFinish: ()=> submitTime()
                // }
            )
    }
    else if (form.dargah == 'sepehr' || form.dargah == 'behpardakht' || form.dargah == 'saman')
    {
        form.post(route('order.store'))
    }
    else
    {
        let text = 'لطفا یکی از گزینه های پرداخت را انتخاب نمایید. '
        validate(text)
    }

};
</script>
<template>

<body >
    <Head title="shop-checkout" />
    <Header  :companies="props.companies" :results="props.results" :menus="props.menus" :cart="props.cart" :menu="props.menu" />
    <main class="main">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <Link :href="route('index')" rel='nofollow'>صفحه اصلی<i class="fi-rs-home mr-5"></i></Link>
                    <span></span> خرید
                    <span></span> تسویه حساب
                </div>
            </div>
        </div>
        <div class="container mb-80 mt-50">
            <div class="row">
                <div class="col-lg-8 mb-40">
                    <h1 class="heading-2 mb-10">تسویه حساب</h1>
                    <div class="d-flex justify-content-between">
                        <h6 class="text-body">تعداد <span class="text-brand">{{props.cart.count}}</span> محصول در سفارش شما وجود دارد</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <div class="row mb-50">
                        <div class="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3" >
                            <div class="alert alert-info d-flex align-items-center" role="alert" v-if="props.random_coupon">
                                <svg class="bi flex-shrink-0 ms-2" width="24" height="24" role="img"
                                        aria-label="Success:">
                                    <use xlink:href="#check-circle-fill"/>
                                </svg>
                                    بن تخفیف شما:<p>{{ props.random_coupon.code }}</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <form method="post" class="apply-coupon">
                                <input type="text" placeholder="کد را اینجا وارد نمایید">
                                <button class="btn  btn-md" name="login" @click.prevent="submitCoupon">تخفیف</button>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <h4 class="mb-30">جزئیات صورتحساب</h4>
                        <form method="post" v-if="props.auth == null">
                            <div class="row">
                                <div class="form-group col-lg-6">
                                    <input type="text" required="" name="fname" placeholder="First name *">
                                </div>
                                <div class="form-group col-lg-6">
                                    <input type="text" required="" name="lname" placeholder="Last name *">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-lg-6">
                                    <input type="text" name="billing_address" required="" placeholder="Address *">
                                </div>
                                <div class="form-group col-lg-6">
                                    <input type="text" name="billing_address2" required="" placeholder="Address line2">
                                </div>
                            </div>
                            <div class="row shipping_calculator">
                                <div class="form-group col-lg-6">
                                    <div class="custom_select">
                                        <!-- <select class="form-control select-active">
                                            <option value="">Select an option...</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="PW">Belau</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BV">Bouvet Island</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="VG">British Virgin Islands</option>
                                            <option value="BN">Brunei</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (Keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CG">Congo (Brazzaville)</option>
                                            <option value="CD">Congo (Kinshasa)</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">CuraÇao</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands</option>
                                            <option value="FO">Faroe Islands</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="GF">French Guiana</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="TF">French Southern Territories</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GP">Guadeloupe</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="GY">Guyana</option>
                                            <option value="HT">Haiti</option>
                                            <option value="HM">Heard Island and McDonald Islands</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="CI">Ivory Coast</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Laos</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao S.A.R., China</option>
                                            <option value="MK">Macedonia</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="YT">Mayotte</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia</option>
                                            <option value="MD">Moldova</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="AN">Netherlands Antilles</option>
                                            <option value="NC">New Caledonia</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="KP">North Korea</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PS">Palestinian Territory</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PN">Pitcairn</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="QA">Qatar</option>
                                            <option value="IE">Republic of Ireland</option>
                                            <option value="RE">Reunion</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russia</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="ST">São Tomé and Príncipe</option>
                                            <option value="BL">Saint Barthélemy</option>
                                            <option value="SH">Saint Helena</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="SX">Saint Martin (Dutch part)</option>
                                            <option value="MF">Saint Martin (French part)</option>
                                            <option value="PM">Saint Pierre and Miquelon</option>
                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                            <option value="SM">San Marino</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="GS">South Georgia/Sandwich Islands</option>
                                            <option value="KR">South Korea</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syria</option>
                                            <option value="TW">Taiwan</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TL">Timor-Leste</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom (UK)</option>
                                            <option value="US">USA (US)</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VA">Vatican</option>
                                            <option value="VE">Venezuela</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="WF">Wallis and Futuna</option>
                                            <option value="EH">Western Sahara</option>
                                            <option value="WS">Western Samoa</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select> -->
                                    </div>
                                </div>
                                <div class="form-group col-lg-6">
                                    <input required="" type="text" name="city" placeholder="City / Town *">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-lg-6">
                                    <input required="" type="text" name="zipcode" placeholder="Postcode / ZIP *">
                                </div>
                                <div class="form-group col-lg-6">
                                    <input required="" type="text" name="phone" placeholder="Phone *">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-lg-6">
                                    <input required="" type="text" name="cname" placeholder="Company Name">
                                </div>
                                <div class="form-group col-lg-6">
                                    <input required="" type="text" name="email" placeholder="Email address *">
                                </div>
                            </div>
                            <div class="form-group mb-30">
                                <textarea rows="5" placeholder="Additional information"></textarea>
                            </div>
                            <div class="form-group">
                                <div class="checkbox">
                                    <div class="custome-checkbox">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="createaccount">
                                        <label class="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" for="createaccount"><span>Create an account?</span></label>
                                    </div>
                                </div>
                            </div>
                            <div id="collapsePassword" class="form-group create-account collapse in">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input required="" type="password" placeholder="Password" name="password">
                                    </div>
                                </div>
                            </div>
                            <div class="ship_detail">
                                <div class="form-group">
                                    <div class="chek-form">
                                        <div class="custome-checkbox">
                                            <input class="form-check-input" type="checkbox" name="checkbox" id="differentaddress">
                                            <label class="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" for="differentaddress"><span>Ship to a different address?</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapseAddress" class="different_address collapse in">
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <input type="text" required="" name="fname" placeholder="First name *">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="text" required="" name="lname" placeholder="Last name *">
                                        </div>
                                    </div>
                                    <div class="row shipping_calculator">
                                        <div class="form-group col-lg-6">
                                            <input required="" type="text" name="cname" placeholder="Company Name">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <div class="custom_select w-100">
                                                <!-- <select class="form-control select-active">
                                                    <option value="">Select an option...</option>
                                                    <option value="AX">Aland Islands</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="PW">Belau</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia</option>
                                                    <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BV">Bouvet Island</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="VG">British Virgin Islands</option>
                                                    <option value="BN">Brunei</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CG">Congo (Brazzaville)</option>
                                                    <option value="CD">Congo (Kinshasa)</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CU">Cuba</option>
                                                    <option value="CW">CuraÇao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czech Republic</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="FR">France</option>
                                                    <option value="GF">French Guiana</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="TF">French Southern Territories</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HM">Heard Island and McDonald Islands</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IM">Isle of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="CI">Ivory Coast</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Laos</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao S.A.R., China</option>
                                                    <option value="MK">Macedonia</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MH">Marshall Islands</option>
                                                    <option value="MQ">Martinique</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="FM">Micronesia</option>
                                                    <option value="MD">Moldova</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="AN">Netherlands Antilles</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="NF">Norfolk Island</option>
                                                    <option value="KP">North Korea</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PS">Palestinian Territory</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="IE">Republic of Ireland</option>
                                                    <option value="RE">Reunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RU">Russia</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="ST">São Tomé and Príncipe</option>
                                                    <option value="BL">Saint Barthélemy</option>
                                                    <option value="SH">Saint Helena</option>
                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="SX">Saint Martin (Dutch part)</option>
                                                    <option value="MF">Saint Martin (French part)</option>
                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="GS">South Georgia/Sandwich Islands</option>
                                                    <option value="KR">South Korea</option>
                                                    <option value="SS">South Sudan</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                    <option value="SZ">Swaziland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="SY">Syria</option>
                                                    <option value="TW">Taiwan</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TL">Timor-Leste</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad and Tobago</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks and Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="GB">United Kingdom (UK)</option>
                                                    <option value="US">USA (US)</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VA">Vatican</option>
                                                    <option value="VE">Venezuela</option>
                                                    <option value="VN">Vietnam</option>
                                                    <option value="WF">Wallis and Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="WS">Western Samoa</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="billing_address" required="" placeholder="Address *">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input type="text" name="billing_address2" required="" placeholder="Address line2">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <input required="" type="text" name="state" placeholder="State / County *">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <input required="" type="text" name="city" placeholder="City / Town *">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <input required="" type="text" name="zipcode" placeholder="Postcode / ZIP *">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="table-responsive shopping-summery" velse>
                            <table class="table table-wishlist">
                                <thead>
                                    <tr class="main-heading">

                                        <th scope="col" colspan="2">محصول</th>
                                        <th scope="col">قیمت واحد</th>
                                        <th scope="col">تعداد</th>
                                        <th scope="col">تخفیف</th>
                                        <th scope="col">مالیات</th>
                                        <th scope="col">پرداختی</th>
                                    </tr>
                                </thead>
                                <tbody v-if="props.cart.count > 0">
                                    <tr class="pt-30" v-for="(product,index ) in props.cart.products" :key="index">

                                        <td class="image product-thumbnail pt-40">
                                            <img v-if=" product['product'].image" :src="$page.props.ziggy.url+'/storage/'+product['product'].image.url" alt="#">
                                            <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="#">
                                        </td>
                                        <td class="product-des product-name">
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\Product'" href="">{{  product['product'].name  }}</Link>
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\WebDesign'" href="">{{ product['product'].name }}</Link>
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\Tarahi'" href="">{{ 'پروژه ' + product['product'].title }}</Link>
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\ReqDesigner'" href="">{{  'ضمانت پروژه ' + product['product'].tarahi_register.title }}</Link>
                                        </td>
                                        <td class="price" data-title="قیمت واحد">
                                            <h5 class="text-body" v-if="product['product'].price">{{ Number(product['product'].price).toLocaleString("fa-IR") }}  </h5>
                                            <h5 class="text-body" v-else>{{ (product['total']/product['count']).toLocaleString("fa-IR") }}  </h5>
                                        </td>
                                        <td class="price" data-title="تعداد">
                                            <h5 class="text-body">{{ (product['count']).toLocaleString("fa-IR") }}  </h5>
                                        </td>
                                        <td class="price" data-title="تخفیف">
                                            <h5 class="text-body">{{ (product['discount']).toLocaleString("fa-IR") }}   </h5>
                                        </td>
                                        <td class="price" data-title="مالیات">
                                            <h5 class="text-body">{{ (product['tax']).toLocaleString("fa-IR") }}   </h5>
                                        </td>
                                        <td class="price" data-title="پرداختی">
                                            <h4 class="text-brand">{{ (product['col']).toLocaleString("fa-IR") }}   </h4>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="border p-40 cart-totals ml-30 mb-50" >
                        <div class="table-responsive">
                            <table class="table no-border">
                                <tbody>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">تعداد</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.count).toLocaleString("fa-IR") }}  </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">جمع</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.total).toLocaleString("fa-IR") }} ریال </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" colspan="2">
                                            <div class="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">مالیات</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.tax).toLocaleString("fa-IR") }} ریال  </h5></td> </tr>
                                        <tr>

                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">جمع کل</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.col).toLocaleString("fa-IR") }} ریال </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">قابل پرداخت</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-brand text-end">{{ (props.cart.payment).toLocaleString("fa-IR") }} ریال  </h5></td> </tr>
                                        <tr>

                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">مانده</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.balance).toLocaleString("fa-IR") }} ریال  </h5></td> </tr>
                                        <tr>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="payment ml-30">
                        <h4 class="mb-30">انتخاب روش پرداخت</h4>
                        <div class="payment_option">
                            <div class="custome-radio">
                                <input class="form-check-input" v-model="form.dargah"  type="radio" name="payment_option" id="exampleRadios3"  value="wallet">
                                <label class="form-check-label" for="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">کیف پول</label>
                            </div>
                            <div class="custome-radio">
                                <input class="form-check-input" v-model="form.dargah"  type="radio" name="payment_option" id="exampleRadios4"  value="behpardakht">
                                <label class="form-check-label" for="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">درگاه به پرداخت ملت</label>
                            </div>
                            <div class="custome-radio">
                                <input class="form-check-input" v-model="form.dargah" type="radio" name="payment_option" id="exampleRadios5"  value="sepehr">
                                <label class="form-check-label" for="exampleRadios5" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">درگاه سپهر صادرات</label>
                            </div>
                            <div class="custome-radio">
                                <input class="form-check-input" v-model="form.dargah" type="radio" name="payment_option" id="exampleRadios6"  value="saman">
                                <label class="form-check-label" for="exampleRadios6" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">درگاه سپ سامان</label>
                            </div>
                        </div>
                        <button @click.prevent="submit" v-if="form.dargah == 'wallet' || form.dargah == null"
                        class="btn btn-fill-out btn-block mt-30">
                                <span v-if="form.processing">پردازش...</span>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                <span v-else >پرداخت</span>
                        </button>
                        <form v-else-if="form.dargah == 'behpardakht'" :action="route('order.store')" method="POST" >
                            <input type="hidden" name="_token" :value="token" />
                            <input type="hidden" name="wallet" value="behpardakht" />
                            <input type="hidden" name="cartCount" :value="props.cart.count" />
                            <input type="hidden" name="cartPrice" :value="props.cart.price" />
                            <input type="hidden" name="cartTotal" :value="props.cart.total" />
                            <button type="submit" class="btn btn-fill-out btn-block mt-30">پرداخت</button>
                        </form>
                        <form v-else-if="form.dargah == 'sepehr'" :action="route('order.store')" method="POST" >
                            <input type="hidden" name="_token" :value="token" />
                            <input type="hidden" name="wallet" value="sepehr" />
                            <input type="hidden" name="cartCount" :value="props.cart.count" />
                            <input type="hidden" name="cartPrice" :value="props.cart.price" />
                            <input type="hidden" name="cartTotal" :value="props.cart.total" />
                            <button type="submit" class="btn btn-fill-out btn-block mt-30">پرداخت</button>
                        </form>
                        <form v-else-if="form.dargah == 'saman'" :action="route('order.store')" method="POST" >
                            <input type="hidden" name="_token" :value="token" />
                            <input type="hidden" name="wallet" value="saman" />
                            <input type="hidden" name="cartCount" :value="props.cart.count" />
                            <input type="hidden" name="cartPrice" :value="props.cart.price" />
                            <input type="hidden" name="cartTotal" :value="props.cart.total" />
                            <button type="submit" class="btn btn-fill-out btn-block mt-30">پرداخت</button>
                        </form>
                        <!-- <a v-if="props.auth && props.auth.id == 10" href="#" class="btn btn-fill-out btn-block mt-30">Place an Order<i class="fi-rs-sign-out ml-15"></i></a> -->
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer :companies="props.companies"  :namads="props.namads" :socials="props.socials" :time="props.time" :menus="props.menus" :path="props.path" />
</body>
</template>
