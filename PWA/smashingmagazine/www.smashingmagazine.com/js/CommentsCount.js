(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{11:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},12:function(t,n,e){var r=e(62),a=e(70);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?a(t):n}},13:function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},14:function(t,n,e){var r=e(223);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},15:function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},223:function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},258:function(t,n,e){"use strict";e.r(n);var r=e(11),a=e.n(r),o=e(15),c=e.n(o),u=e(12),i=e.n(u),s=e(13),f=e.n(s),p=e(70),d=e.n(p),l=e(14),S=e.n(l),_=e(6),E=e.n(_),y=e(0),C=e.n(y),h=e(148),T=e(655),m=function(t){function n(){var t,e;a()(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=i()(this,(t=f()(n)).call.apply(t,[this].concat(o))),E()(d()(e),"render",function(){var t=e.props.amount;return t?C.a.createElement("span",null,C.a.createElement("span",{className:"small-caps"},t)," comment",1<t?"s":""):C.a.createElement("span",null,"Leave a comment")}),e}return S()(n,t),c()(n,[{key:"componentDidMount",value:function(){var t=this.props,n=t.thread;(0,t.fetchCommentsCount)(n)}}]),n}(y.Component);n.default=Object(h.b)(function(t,n){return{amount:t.comments.amounts[n.thread]||0}},function(t){return{fetchCommentsCount:function(n){return t(Object(T.b)(n))}}})(m)},584:function(t,n,e){"use strict";var r=e(598),a=new(e.n(r).a)({APIUrl:"/.netlify/commerce"});n.a=a},585:function(t,n,e){"use strict";(function(t){e.d(n,"f",function(){return T}),e.d(n,"C",function(){return m}),e.d(n,"B",function(){return R}),e.d(n,"h",function(){return A}),e.d(n,"k",function(){return U}),e.d(n,"l",function(){return b}),e.d(n,"j",function(){return I}),e.d(n,"q",function(){return D}),e.d(n,"a",function(){return j}),e.d(n,"i",function(){return w}),e.d(n,"d",function(){return g}),e.d(n,"E",function(){return v}),e.d(n,"z",function(){return F}),e.d(n,"g",function(){return L}),e.d(n,"c",function(){return N}),e.d(n,"m",function(){return P}),e.d(n,"u",function(){return M}),e.d(n,"e",function(){return k}),e.d(n,"v",function(){return G}),e.d(n,"o",function(){return Q}),e.d(n,"F",function(){return x}),e.d(n,"H",function(){return V}),e.d(n,"G",function(){return H}),e.d(n,"s",function(){return z}),e.d(n,"p",function(){return q}),e.d(n,"n",function(){return W}),e.d(n,"D",function(){return B}),e.d(n,"A",function(){return Y}),e.d(n,"y",function(){return J}),e.d(n,"r",function(){return X}),e.d(n,"t",function(){return K}),e.d(n,"b",function(){return Z}),e.d(n,"w",function(){return $}),e.d(n,"x",function(){return tt});var r=e(16),a=e.n(r),o=e(3),c=e.n(o),u=e(150),i=e.n(u),s=e(593),f=e.n(s),p=e(588),d=e(36),l=e(2),S=e(586),_=e(584),E=e(587),y=e(589),C=e(35),h=function(t){return t.getUserData().then(function(t){return t.jwt()}).then(function(n){t._claims=JSON.parse(atob(n.split(".")[1])),t.claims=function(){return t._claims};var e=t.app_metadata||{};return t.plan=e.subscription&&e.subscription.plan,t})},T=function(t){return function(n){return n({type:l.a.CHECK_ROUTE,route:t})}},m=function(t){return function(n){return n({type:l.a.SETTINGS_SET,settings:t})}},R=function(){return function(t){var n,e=window.Cookiebot;t({type:l.a.PRIVACY_SET,payload:(n=e,{responded:c()(n,"hasResponse"),accepted:c()(n,"consented"),declined:c()(n,"declined"),necessary:c()(n,"consent.necessary")})})}},O=function(t,n){n({type:l.a.HISTORY_GO,path:t}),window.history.replaceState({},"","/".concat(t,"/"))},A=function(){return function(n){return n({type:l.a.REQUEST_ADS_START}),t("".concat(d.a.PROXY_URL,"friskies")).then(function(t){return t.json()}).then(function(n){return t("".concat(d.a.PROXY_URL,"friskies")).then(function(t){return t.json()}).then(function(t){return(c()(n,"ads")||[]).concat(c()(t,"ads")||[])})}).then(function(t){return n({type:l.a.REQUEST_ADS_SUCCESS,ads:t})}).catch(function(t){return n({type:l.a.REQUEST_ADS_FAIL,error:Object(C.n)(t)})})}},U=function(t){return function(n){_.a.setUser(E.a.currentUser()),n({type:l.a.REQUEST_ORDER_START}),_.a.orderDetails(t).then(function(t){return n({type:l.a.REQUEST_ORDER_SUCCESS,order:t})}).catch(function(t){return n({type:l.a.REQUEST_ORDER_FAIL,error:Object(C.n)(t)})})}},b=function(){return function(t){_.a.setUser(E.a.currentUser()),t({type:l.a.REQUEST_ORDERS_START}),_.a.orderHistory().then(function(n){return t({type:l.a.REQUEST_ORDERS_SUCCESS,orders:n.orders})}).catch(function(n){return t({type:l.a.REQUEST_ORDERS_FAIL,error:Object(C.n)(n)})})}},I=function(){return function(t){_.a.setUser(E.a.currentUser()),t({type:l.a.REQUEST_DOWNLOADS_START}),_.a.downloads().then(function(n){return t({type:l.a.REQUEST_DOWNLOADS_SUCCESS,downloads:n.downloads})}).catch(function(n){return t({type:l.a.REQUEST_DOWNLOADS_FAIL,error:Object(C.n)(n)})})}},D=function(t){return function(){_.a.downloadURL(t).then(function(t){var n=document.createElement("a");n.download=!0,n.href=t,document.body.appendChild(n),n.click(),n.remove()}).catch(function(){})}},j=function(t){return function(n){return n({type:l.a.ADD_COUPON_START}),_.a.setCoupon(t).then(function(e){n({type:l.a.ADD_COUPON_SUCCESS,code:t,coupon:e}),n({type:l.a.REQUEST_CART_SUCCESS,cart:_.a.getCart()})}).catch(function(t){return n({type:l.a.ADD_COUPON_FAIL,error:Object(C.n)(t)})})}},w=function(){return function(t,n){var e=n(),r=e.cart,a=E.a.currentUser();if(t({type:l.a.REQUEST_CART_START}),!r||!r.isFetching){if(c()(e.order,"details.billingAddress.country")){var o=c()(e.order,"details.billingAddress.country");o.includes("Czech")&&(o="Czech"),_.a.setCountry(o),_.a.setCurrency(Object(C.f)(o)||"USD")}r=_.a.getCart(),c()(e.order,"coupon.code")&&r&&0<Object.keys(r.items).length&&t(j(c()(e.order,"coupon.code"))),a?h(a).then(function(n){t({type:l.a.GET_USER_SUCCESS,user:n}),_.a.setUser(n);var e=n.user_metadata||{};e.shippingAddress&&e.shippingAddress.country&&_.a.setCountry(e.shippingAddress.country),e.shippingAddress&&e.shippingAddress.country&&_.a.setCurrency(Object(C.f)(e.shippingAddress.country)||"USD"),t({type:l.a.REQUEST_CART_SUCCESS,cart:_.a.getCart()})}).catch(function(n){return t({type:l.a.REQUEST_CART_FAIL,error:Object(C.n)(n)})}):(t({type:l.a.GET_USER_SUCCESS,user:null}),t({type:l.a.REQUEST_CART_SUCCESS,cart:_.a.getCart()}))}}},g=function(t,n){return function(e){return _.a.loadSettings().then(function(){return e({type:l.a.CALCULATE_MEMBER_PRICE_SUCCESS,price:_.a.calculatePrice(t,n?{app_metadata:{subscription:{plan:n}}}:null),item:t})})}},v=function(t,n){return function(e){_.a.updateCart(t,n),e({type:l.a.UPDATE_CART_SUCCESS,cart:_.a.getCart(),item:{sku:t,quantity:n}})}},F=function(t,n){return function(e,r){var a=r().auth;t.email||(t.email=c()(a,"user.email"));var o,u=c()(t,"billingAddress.country");e((o=u,function(t){if(!o)return null;o.includes("Czech")&&(o="Czech"),_.a.setCountry(o),_.a.setCurrency(Object(C.f)(o)||"USD"),t({type:l.a.REQUEST_CART_SUCCESS,cart:_.a.getCart()})})),e({type:l.a.ORDER_SET_DETAILS_SUCCESS,details:t}),n||O("checkout/payment",e)}},L=function(){return function(t){_.a.clearCart(),t({type:l.a.EMPTY_CART_SUCCESS,cart:_.a.getCart()}),t({type:l.a.ORDER_CLEAR})}},N=function(t){return function(n,e){var r=e().cart;(!i()(r.items,t.sku)||Object(C.b)(r.items[t.sku].type))&&(n({type:l.a.ADD_TO_CART_START}),_.a.addToCart(t).then(function(e){n({type:l.a.ADD_TO_CART_SUCCESS,cart:e,item:t})}).catch(function(e){return n({type:l.a.ADD_TO_CART_FAIL,error:Object(C.n)(e),item:t})}))}},P=function(){return function(t){var n=E.a.currentUser();if(n)return t({type:l.a.GET_USER_START}),h(n).then(function(n){return t({type:l.a.GET_USER_SUCCESS,user:n})}).catch(function(n){return t({type:l.a.GET_USER_FAIL,error:Object(C.n)(n)})});t({type:l.a.GET_USER_SUCCESS,user:null})}},M=function(t){return function(n){var e=E.a.currentUser(),r={data:{}};return n({type:l.a.UPDATE_USER_START}),e.email!==t.email&&(r.email=t.email),r.data.twitter=t.twitter,r.data.firstname=t.firstname,r.data.lastname=t.lastname,e.update(r).then(function(t){return n({type:l.a.UPDATE_USER_SUCCESS,user:t,emailChanged:!!r.email})}).catch(function(t){return n({type:l.a.UPDATE_USER_FAIL,error:Object(C.n)(t)})})}},k=function(t){return function(n){var e=E.a.currentUser();return n({type:l.a.UPDATE_PASSWORD_START}),e.update(t).then(function(t){return n({type:l.a.UPDATE_PASSWORD_SUCCESS,user:t})}).catch(function(t){return n({type:l.a.UPDATE_PASSWORD_FAIL,error:Object(C.n)(t)})})}},G=function(t){return function(n){var e=E.a.currentUser();return n({type:l.a.UPDATE_USER_METADATA_START}),e.update({data:a()({},f()(t,["email","confirmed"]),{updatedAt:(new Date).toISOString()})}).then(function(t){return n({type:l.a.UPDATE_USER_METADATA_SUCCESS,user:t})}).catch(function(t){return n({type:l.a.UPDATE_USER_METADATA_FAIL,error:Object(C.n)(t)})})}},Q=function(t){return function(n){n({type:l.a.LOGIN_START}),E.a.login(t.email,t.password,!0).then(function(t){n({type:l.a.LOGIN_SUCCESS,user:t}),Object(p.a)(t)}).catch(function(t){return n({type:l.a.LOGIN_FAIL,error:Object(C.n)(t)})})}},x=function(t){return function(n){n({type:l.a.VERIFICATION_START}),E.a.confirm(t).then(function(t){Object(p.a)(t),n({type:l.a.VERIFICATION_SUCCESS,user:t})}).catch(function(t){return n({type:l.a.VERIFICATION_FAIL,error:t})})}},V=function(t){return function(n){n({type:l.a.VERIFICATION_START}),localStorage.setItem("auth.return_to","/membership/recover-password"),E.a.recover(t,!0).then(function(t){Object(p.a)(t),n({type:l.a.VERIFICATION_SUCCESS,user:t})}).catch(function(t){return n({type:l.a.VERIFICATION_FAIL,error:Object(C.n)(t)})})}},H=function(t){return function(n){var e=E.a.currentUser();n({type:l.a.VERIFICATION_START}),e?e.update({email_change_token:t}).then(function(t){Object(p.a)(t),n({type:l.a.VERIFICATION_SUCCESS,user:t})}).catch(function(t){return n({type:l.a.VERIFICATION_FAIL,error:Object(C.n)(t)})}):(localStorage.setItem("auth.return_to",document.location.pathname),window.location.replace("/auth/"))}},z=function(t){return function(n){n({type:l.a.RECOVER_START}),E.a.requestPasswordRecovery(t.email).then(function(){window.location.replace("/auth/confirmation/?email=".concat(t.email)),n({type:l.a.RECOVER_SUCCESS})}).catch(function(t){return n({type:l.a.RECOVER_FAIL,error:Object(C.n)(t)})})}},q=function(){return function(t){var n=E.a.currentUser();t({type:l.a.LOGOUT_START}),n.logout().then(function(){return t({type:l.a.LOGOUT_SUCCESS,user:null})}).catch(function(n){return t({type:l.a.LOGOUT_FAIL,error:Object(C.n)(n)})})}},W=function(){return function(t,n){var e=n(),r=e.cart,a=e.order,o=c()(a.details,"billingAddress.country")||c()(a.details,"shippingAddress.country"),u=Object.keys(r.items).map(function(t){var n=r.items[t];return{label:"".concat(n.title),amount:n.price.cents}});c()(r,"memberDiscount.cents")&&u.push({label:"Membership discount 🦁",amount:-c()(r,"memberDiscount.cents")}),c()(r,"couponDiscount.cents")&&u.push({label:"Coupon discount",amount:-c()(r,"couponDiscount.cents")});try{var i=S.c.paymentRequest({country:Object(C.d)(o)||"US",currency:c()(r,"total.currency").toLowerCase(),total:{label:"Total",amount:c()(r,"total.cents")},displayItems:u});return i.on("paymentmethod",function(n){var e=n.paymentMethod;return e&&e.id?(t({type:l.a.ORDER_SET_CC_SUCCESS,key:e.id}),O("checkout/confirmation",t),n.complete("success")):n.complete("fail")}),i.canMakePayment().then(function(t){if(t){var n=document.querySelector(".stripe-button");n&&(n.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),i.show()}),n.classList.remove("hidden"))}return t})}catch(n){}}},B=function(t,n,e,r){return function(a){a({type:l.a.SIGNUP_START}),E.a.signup(t,n,e||{}).then(function(){return E.a.login(t,n,!0).then(function(t){Object(p.a)(t,!r),a({type:l.a.SIGNUP_SUCCESS,user:t}),r&&window.location.replace("/membership")})}).catch(function(t){return a({type:l.a.SIGNUP_FAIL,error:Object(C.n)(t)})})}},Y=function(t){return function(n){n({type:l.a.ORDER_SET_PAYPAL_SUCCESS,paypal:t}),O("checkout/confirmation",n)}},J=function(t){return function(n,e){var r=e().order;return n({type:l.a.ORDER_SET_CC_START,cc:t}),Object(S.b)(S.a,r.details).then(function(t){n({type:l.a.ORDER_SET_CC_SUCCESS,key:t.id}),O("checkout/confirmation",n)}).catch(function(t){return n({type:l.a.ORDER_SET_CC_FAIL,error:Object(C.n)(t)})})}},X=function(){return function(t,n){var e=n(),r=e.order,a=e.cart;t({type:l.a.ORDER_CONFIRM_START}),_.a.order({email:r.details.email,shipping_address:Object(C.h)(r.details.shippingAddress),billing_address:Object(C.h)(r.details.billingAddress)}).then(function(n){return _.a.payment({order_id:n.order.id,amount:n.cart.total.cents,provider:r.paypal?"paypal":"stripe",stripe_payment_method_id:r.key,paypal_payment_id:r.paypal&&r.paypal.paymentID,paypal_user_id:r.paypal&&r.paypal.payerID}).then(function(t){var n=c()(t,"provider_metadata.payment_intent_secret");return"pending"===t.status&&n?S.c.handleCardAction(n).then(function(n){return n.error?Promise.reject(n.error):_.a.paymentConfirm(t.id)}):t}).then(function(t){return _.a.orderDetails(t.order_id)}).then(function(n){var e=c()(n,"transactions.[0]");t({type:l.a.ORDER_CONFIRM_SUCCESS,transaction:Object.assign({},e,{order:n}),cart:a}),O("checkout/confirmation/".concat(n.id),t),t(L()),t(function(t){return t({type:l.a.ORDER_CLEAR})})})}).catch(function(n){t({type:l.a.ORDER_CONFIRM_FAIL,error:Object(C.n)(n)}),O("checkout/payment",t)})}},K=function(t,n){return function(e){e({type:l.a.ORDER_RESEND_CONFIRMATION_START}),_.a.resendConfirmation(t,n).then(function(t){return e({type:l.a.ORDER_RESEND_CONFIRMATION_SUCCESS,result:t})}).catch(function(t){return e({type:l.a.ORDER_RESEND_CONFIRMATION_FAIL,error:Object(C.n)(t)})})}},Z=function(t){return function(n){var e=[];t.featured_addon&&e.push("featured"),t.tweet_addon&&e.push("tweet"),t.facebook_addon&&e.push("facebook");var r="full-time"===t.commitment?"job-posting-fulltime":"job-posting-freelance",o=a()({},t);delete o.errors;var c={path:t.path,sku:r,quantity:1,meta:o,addons:e};return n({type:l.a.ADD_TO_CART_START}),_.a.addToCart(c).then(function(){window.location.replace("/checkout")}).catch(function(t){return n({type:l.a.ADD_TO_CART_FAIL,item:c,error:Object(C.n)(t)})})}},$=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return function(e){e({type:l.a.SEARCH_START,query:t}),y.a.search(t,{hitsPerPage:15*(n+1),page:0},function(t,r){if(t)return e({type:l.a.SEARCH_FAIL,error:Object(C.n)(t)});e({type:l.a.SEARCH_SUCCESS,results:r,page:n})})}},tt=function(){return function(t){return t({type:l.a.AD_BLOCKED})}}}).call(this,e(104))},586:function(t,n,e){"use strict";e.d(n,"c",function(){return a}),e.d(n,"a",function(){return c}),e.d(n,"b",function(){return u});var r=e(35),a=window.Stripe?window.Stripe("pk_live_4a6o5tXVqFE97apgZblp0VXX"):null,o=window.Stripe?a.elements({fonts:[{family:"Elena",src:'local("Elena"), local("elena"), url(https://d33wubrfki0l68.cloudfront.net/a978f759fa0230c1e590d1bdb5a1c03ceb538cec/fed6b/fonts/elenawebregular/elenawebregular.woff2)'},{family:"Mija",src:'local("Mija"), local("Mija"), url(https://d33wubrfki0l68.cloudfront.net/b324ee03d5048d2d1831100e323b0b6336ffce68/0445e/fonts/mijaregular/mija_regular-webfont.woff2)'}]}):null,c=window.Stripe?o.create("card",{hidePostalCode:!0,style:{base:{fontFamily:"Mija",fontSize:"18px","::placeholder":{color:"#aaa",fontFamily:"Elena",fontWeight:300,letterSpacing:"-0.25px",fontSize:"16px"}},complete:{fontWeight:"bold",color:"#20a12c"},invalid:{color:"#CC3428"}},classes:{base:"form__field__input stripe-element",complete:"success",focus:"focused",invalid:"error",empty:"empty"}}):null,u=function(t,n){return new Promise(function(e,o){a.createPaymentMethod("card",t,{billing_details:Object(r.m)(n)}).then(function(t){t.error?o(t.error):e(t.paymentMethod)})})}},587:function(t,n,e){"use strict";var r=e(599),a=e.n(r),o=e(36),c=new a.a({APIUrl:o.a.API_NETLIFY_AUTH,setCookie:!0});n.a=c},588:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var r=e(584),a=function(t,n){r.a.setUser(t);var e=localStorage.getItem("auth.return_to")||"/membership/";localStorage.removeItem("auth.return_to"),r.a.claimOrders().then(function(){return!n&&window.location.replace(e)}).catch(function(){return!n&&window.location.replace(e)})}},589:function(t,n,e){"use strict";var r=e(600),a=e.n(r)()("5RAJI8U6UH","c996d58ec6bf7789719889b76dc89aa1").initIndex("smashingmagazine");n.a=a},655:function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return i}),e.d(n,"c",function(){return s}),e.d(n,"b",function(){return f});var r=e(2),a=e(35),o=e(587),c=e(585),u=function(n,e){var r=Object(a.c)(n);return e&&(r=r.replace(/\.json$/,".count.json")),t(r).then(function(t){return t.ok?t.json():404===t.status?[]:Promise.reject(t)})},i=function(t){return function(n){n({type:r.a.COMMENTS_FETCH_START}),u(t).then(function(e){return n({type:r.a.COMMENTS_FETCH_SUCCESS,comments:e,thread:t})}).catch(function(t){return n({type:r.a.COMMENTS_FETCH_FAIL,error:Object(a.n)(t)})})}},s=function(n){return function(e){e({type:r.a.COMMENTS_SUBMIT_START});var i=o.a.currentUser(),s=i?i.jwt().catch(null):Promise.resolve(null);return e(Object(c.C)({name:n.name,twitter:n.twitter})),s.then(function(o){var c={"Content-Type":"application/json"};o&&(c.Authorization="Bearer ".concat(o)),t("/gotell"+n.thread,{method:"POST",headers:c,body:JSON.stringify({author:n.name,body:n.message,twitter:n.twitter,email:i&&i.email,parent:n.parent})}).then(function(t){return t.ok?t.json():Promise.reject(t)}).then(function(){return u(n.thread)}).then(function(t){return e({type:r.a.COMMENTS_SUBMIT_SUCCESS,comments:t,thread:n.thread})}).catch(function(t){return e({type:r.a.COMMENTS_SUBMIT_FAIL,error:Object(a.n)(t)})})})}},f=function(t){return function(n){n({type:r.a.COMMENTS_COUNT_START}),u(t,1).then(function(e){return n({type:r.a.COMMENTS_COUNT_SUCCESS,count:e.count,thread:t})}).catch(function(t){return n({type:r.a.COMMENTS_COUNT_FAIL,error:Object(a.n)(t)})})}}}).call(this,e(104))},70:function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}}}]);