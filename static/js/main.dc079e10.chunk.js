(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports={header:"Header_header__3ffnc"}},111:function(e,t,a){},118:function(e,t,a){e.exports=a(243)},17:function(e,t,a){e.exports={nav:"Navbar_nav__3qit4",item:"Navbar_item__1e2Qu",active:"Navbar_active__315Us"}},200:function(e,t,a){},201:function(e,t,a){},21:function(e,t,a){e.exports={element:"Element_element__1xQya",imgElement:"Element_imgElement__2gILG",name:"Element_name__3z6-D",description:"Element_description__31_lK",price:"Element_price__3LEoG",addToCart:"Element_addToCart__3KJQD",wrapElement:"Element_wrapElement__1MbKO",wrapPriceButton:"Element_wrapPriceButton__1TYwv",wrapPrice:"Element_wrapPrice__38LdC"}},243:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(8),r=a(51),l=a(22),c={pizzaItems:[]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MENU":return Object(l.a)({},e,{pizzaItems:Object(r.a)(t.pizzaItems)});default:return e}},o=a(26),m=function(e,t,a,n,r,l,c,i,m){return o.post("https://rest-api-pizza.herokuapp.com/create-order",{name:e,sureName:t,address:a,tel:n,email:r,cartItem:i,totalPriceE:l,totalPriceD:c,numOrder:m})},u=function(e){return o.get("https://rest-api-pizza.herokuapp.com/login?phonenumber=".concat(e,"&channel=sms"))},s=function(e,t){return o.get("https://rest-api-pizza.herokuapp.com/verify?phonenumber=".concat(e,"&code=").concat(t))},d=function(){return o.get("https://rest-api-pizza.herokuapp.com/auth",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},p=function(){return o.get("https://rest-api-pizza.herokuapp.com/profile",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},E=0,f=0,_=Math.floor(Math.random()*Math.floor(100)),v=null,h={cartItems:[],quantityInCart:null,numOrder:null,totalPricesDE:{totalPriceE:null,totalPriceD:null},totalDeliveryDE:{deliveryPriceE:2,deliveryPriceD:2.5},showPriceVal:!1,orderResponse:{numOrder:null,name:null}},b=function(e){return{type:"SHOW_PRICE",showPriceVal:e}},O=function(e,t){return{type:"SET_NULL",data:{numOrder:e,name:t}}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PIZZA":0===e.cartItems.length?(e.cartItems.push({item:t.cartItems,count:1}),e.quantityInCart++):e.cartItems.find(function(e){return e.item.id===t.cartItems.id})?(e.cartItems.find(function(e){return e.item.id===t.cartItems.id}).count++,e.quantityInCart++):(e.cartItems.push({item:t.cartItems,count:1}),e.quantityInCart++);case"TOTAL_PRICE":if(0!==e.cartItems.length)for(var a=0;a<e.cartItems.length;a++)e.cartItems.length,E=Number(e.cartItems[a].item.priceDollar*e.cartItems[a].count),f=Number(e.cartItems[a].item.priceEuro*e.cartItems[a].count);0===E&&0===f?(E=e.totalDeliveryDE.deliveryPriceD,f=e.totalDeliveryDE.deliveryPriceE):(e.totalPricesDE.totalPriceE=f.toFixed(2),e.totalPricesDE.totalPriceD=E.toFixed(2),e.numOrder=_);case"SHOW_PRICE":"SHOW_PRICE"===t.type&&(e.showPriceVal?e.showPriceVal=!1:e.showPriceVal=!0);case"SET_NULL":200===v&&(e.cartItems=[],e.quantityInCart=null,e.numOrder=null,e.totalPricesDE.totalPriceE=null,e.totalPricesDE.totalPriceD=null,e.totalDeliveryDE.deliveryPriceE=null,e.totalDeliveryDE.deliveryPriceD=null,e.showPriceVal=!1,e.orderResponse.numOrder=t.data.numOrder,e.orderResponse.name=t.data.name,v=null);default:return e}},P={tel:null,name:null,isAuth:!1,verifyDisplay:"none",loginHide:"flex"},y=function(e,t,a){return{type:"SET_USER_DATA",data:{tel:e,name:t,isAuth:a}}},N=function(){return function(e){d().then(function(t){console.log(t.data),e(y(t.data.user.tel,t.data.user.name,!0)),localStorage.setItem("token",t.data.token)})}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(l.a)({},e,{tel:t.data.tel,name:t.data.name,isAuth:!0});case"LOGOUT":return localStorage.removeItem("token"),Object(l.a)({},e,{tel:null,name:null,isAuth:!1});case"SET_VERIFY_DISPLAY":return Object(l.a)({},e,{verifyDisplay:t.verifyDisplay});case"SET_LOGIN_HIDE":return Object(l.a)({},e,{loginHide:t.loginHide});default:return e}},I=a(246),D=a(107),j={orderItems:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ORDERS_HISTORY":return Object(l.a)({},e,{orderItems:Object(r.a)(t.orderItems)});default:return e}},z=Object(n.c)({menuPage:i,cartMenu:g,loginPage:w,profilePage:C,form:I.a}),S=Object(n.d)(z,Object(n.a)(D.a));window.store=S;var T=S,M=a(0),k=a.n(M),L=a(49),A=a.n(L),R=(a(200),a(201),a(20)),V=a(7),F=(a(110),a(17)),B=a.n(F),x=a(3),H=function(){var e=Object(x.d)(function(e){return e.cartMenu.quantityInCart}),t=Object(x.d)(function(e){return e.loginPage.isAuth}),a=Object(x.d)(function(e){return e.loginPage.tel}),n=Object(x.d)(function(e){return e.loginPage.name}),r=Object(x.c)();return k.a.createElement("nav",{className:B.a.nav},k.a.createElement("h2",null,"Navigation"),k.a.createElement("ul",null,k.a.createElement("li",{className:B.a.item},k.a.createElement(R.b,{to:"/Menu",activeClassName:B.a.active},"Menu")),k.a.createElement("li",{className:B.a.item},k.a.createElement(R.b,{to:"/Cart",activeClassName:B.a.active},"Cart ",e)),k.a.createElement("li",{className:B.a.item},t?k.a.createElement(R.b,{to:"/Profile",activeClassName:B.a.active},"Your profile, ",n?n+"!":"+ "+a):k.a.createElement(R.b,{to:"/Login",activeClassName:B.a.active},"Login")),k.a.createElement("li",{className:B.a.item},t&&k.a.createElement(R.b,{to:"/Login",onClick:function(){return r({type:"LOGOUT"})},activeClassName:B.a.active},"Logout"))))},G=a(9),U=a.n(G),Y=a(245),q=a(244),W=function(e){if(!e)return"Field is required!"},Z=a(117),$=a(52),J=a.n($),K=function(e){var t=e.input,a=e.meta,n=Object(Z.a)(e,["input","meta"]),r=a.touched&&a.error;return k.a.createElement("div",{className:J.a.formControl+" "+(r?J.a.error:"")},k.a.createElement("div",null,k.a.createElement("input",Object.assign({className:J.a.input},t,n))),r&&k.a.createElement("span",null,a.error))},Q=function(e){var t=Object(x.d)(function(e){return e.cartMenu.cartItems});return k.a.createElement("form",{onSubmit:e.handleSubmit,style:{display:0===t.length?"none":"block"}},k.a.createElement("div",{className:U.a.wrapInput},k.a.createElement(Y.a,{component:K,placeholder:"Name",name:"name",validate:W}),k.a.createElement(Y.a,{component:K,placeholder:"Surname name",name:"sureName"})),k.a.createElement("div",{className:U.a.wrapInput},k.a.createElement(Y.a,{component:K,placeholder:"Address",name:"address",validate:W}),k.a.createElement(Y.a,{component:K,placeholder:"Phone number",name:"tel",validate:W})),k.a.createElement("div",{className:U.a.wrapInput},k.a.createElement(Y.a,{component:K,placeholder:"E-mail",name:"email",validate:W}),k.a.createElement("button",{className:U.a.buttonForm},"Submit Order")))},X=Object(q.a)({form:"formOrder"})(Q),ee=function(){var e=Object(x.d)(function(e){return e.cartMenu.totalPricesDE}),t=Object(x.d)(function(e){return e.cartMenu.totalDeliveryDE}),a=Object(x.d)(function(e){return e.cartMenu.showPriceVal}),n=Object(x.d)(function(e){return e.cartMenu.orderResponse}),r=Object(x.d)(function(e){return e.cartMenu.cartItems}),l=Object(x.c)();return k.a.createElement("div",{className:U.a.switcherCartWrap},k.a.createElement("div",null,k.a.createElement("h4",null,k.a.createElement("span",null,null===e.totalPriceD&&null===e.totalPriceE?"Cart is empty.":a?"The total cost of your order: "+e.totalPriceD+"$, also delivery costs: "+t.deliveryPriceD+"$; ":"The total cost of your order: "+e.totalPriceE+"\u20ac, also delivery costs: "+t.deliveryPriceE+"\u20ac"),k.a.createElement("span",null,null===n.numOrder&&null===n.name?"":"Dear "+n.name+". Your order is accepted, your order number: \u2116"+n.numOrder),k.a.createElement("span",null,null!==n.numOrder||null===n.name?"":"Your order is accepted, your order number: \u2116"+n.numOrder))),k.a.createElement("div",{className:U.a.showVal,style:{display:0===r.length?"none":"block"},onClick:function(){return l(b(a))}},a?"Show price in \u20ac":"Show price in $"))},te=function(){var e=Object(x.d)(function(e){return e.cartMenu.cartItems}),t=Object(x.d)(function(e){return e.cartMenu.totalPricesDE}),a=Object(x.d)(function(e){return e.cartMenu.numOrder}),n=Object(x.d)(function(e){return e.cartMenu.showPriceVal}),r=Object(x.c)();return k.a.createElement("div",null,k.a.createElement("h3",null,"Cart"),k.a.createElement(ee,null),k.a.createElement("div",{className:U.a.wrapElement},e.map(function(e){return k.a.createElement("div",{className:U.a.element,key:e.item.id},k.a.createElement("img",{className:U.a.imgElement,src:e.item.img,alt:e.item.name}),k.a.createElement("div",{className:U.a.name},k.a.createElement("span",null,"Pizza:")," ",e.item.name),k.a.createElement("div",{className:U.a.description},k.a.createElement("span",null,"Description:")," ",e.item.description),k.a.createElement("div",{className:U.a.wrapPrice},k.a.createElement("div",{className:U.a.price},k.a.createElement("span",null,"Price: "),n?e.item.priceDollar+"$":e.item.priceEuro+"\u20ac"),k.a.createElement("div",{className:U.a.price},k.a.createElement("span",null,"Count:")," ",e.count)))})),k.a.createElement(X,{onSubmit:function(n){r(function(e,t,a,n,r,l,c,i,o,u,s){return function(d){m(e,t,a,n,r,l,c,i,o,u,s).then(function(e){v=e.data.status,e.data.orderResp,d(O(e.data.orderResp.numOrder,e.data.orderResp.name))})}}(n.name,n.sureName,n.address,n.tel,n.email,Number(t.totalPriceD).toFixed(2),Number(t.totalPriceE).toFixed(2),e,a)),console.log(n)}}))},ae=a(111),ne=a.n(ae),re=a(27),le=a.n(re),ce=function(e){var t=Object(x.c)(),a=Object(x.d)(function(e){return e.profilePage.orderItems});return Object(M.useEffect)(function(){t(function(e){p().then(function(t){e({type:"SET_ORDERS_HISTORY",orderItems:t.data})})})},[]),console.log(a),k.a.createElement("div",{className:le.a.wrapElement},a.map(function(e){return k.a.createElement("div",{className:le.a.element,key:e.id},k.a.createElement("div",{className:le.a.name},k.a.createElement("span",null,"Order \u2116: "),e.num_order),k.a.createElement("div",{className:le.a.name},k.a.createElement("span",null,"Pizza: "),e.name),k.a.createElement("div",{className:le.a.name},k.a.createElement("span",null,"Quantity: "),e.count),k.a.createElement("div",{className:"wrapPrice"},k.a.createElement("div",{className:le.a.price},k.a.createElement("span",null,"Order price: "),e.tpd," $"),k.a.createElement("div",{className:le.a.price},k.a.createElement("span",null,"Order price: "),e.tpe," \u20ac")))}))},ie=function(){return!1===Object(x.d)(function(e){return e.loginPage.isAuth})?k.a.createElement(V.a,{to:"/login"}):k.a.createElement("div",{className:ne.a.profile},k.a.createElement("h3",null,"Profile order history"),k.a.createElement(ce,null))},oe=a(112),me=a(113),ue=a(115),se=a(114),de=a(116),pe=a(54),Ee=a.n(pe),fe=a(21),_e=a.n(fe),ve=function(e){var t=Object(x.c)(),a=Object(x.d)(function(e){return e.cartMenu.showPriceVal});return k.a.createElement("div",{className:_e.a.wrapElement},e.pizzaItems.map(function(e){return k.a.createElement("div",{className:_e.a.element,key:e.id},k.a.createElement("img",{className:_e.a.imgElement,src:e.img,alt:e.name}),k.a.createElement("div",{className:_e.a.name},k.a.createElement("span",null,"Pizza:")," ",e.name),k.a.createElement("div",{className:_e.a.description},k.a.createElement("span",null,"Description:")," ",e.description),k.a.createElement("div",{className:_e.a.wrapPriceButton},k.a.createElement("div",{className:_e.a.wrapPrice},k.a.createElement("div",{className:_e.a.price},k.a.createElement("span",null,"Price: "),a?e.priceDollar+"$":e.priceEuro+"\u20ac")),k.a.createElement("button",{className:_e.a.addToCart,onClick:function(){return function(e){t({type:"ADD_PIZZA",cartItems:e})}(e)}},"Add to cart")))}))},he=function(e){var t=Object(x.c)(),a=Object(x.d)(function(e){return e.cartMenu.showPriceVal});return k.a.createElement("div",{className:Ee.a.menu},k.a.createElement("div",{className:Ee.a.headerWrap},k.a.createElement("h3",null,"Pizza's menu"),k.a.createElement("div",{className:Ee.a.showVal,onClick:function(){return t(b(a))}},a?"Show price in \u20ac":"Show price in $")),k.a.createElement(ve,{pizzaItems:e.pizzaItems}))},be=function(e){function t(){return Object(oe.a)(this,t),Object(ue.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(de.a)(t,e),Object(me.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.get("https://rest-api-pizza.herokuapp.com/menu").then(function(t){e.props.setMenu(t.data.items),console.log(t.data.items)})}},{key:"render",value:function(){return k.a.createElement("div",null,k.a.createElement(he,Object.assign({},this.props,{pizzaItems:this.props.pizzaItems})))}}]),t}(k.a.Component),Oe=Object(x.b)(function(e){return{pizzaItems:e.menuPage.pizzaItems}},{setMenu:function(e){return{type:"SET_MENU",pizzaItems:e}}})(be),ge=a(34),Pe=a.n(ge),ye=Object(q.a)({form:"formVerify"})(function(e){return k.a.createElement("form",{className:Pe.a.wrapForm,onSubmit:e.handleSubmit},k.a.createElement("div",null,k.a.createElement(Y.a,{component:K,name:"code",placeholder:"Enter code",validate:W})),k.a.createElement("div",null,k.a.createElement("button",{className:Pe.a.logButton},"Verify")))}),Ne=Object(x.b)(null,{verify:function(e,t){return function(a){s(e,t).then(function(e){console.log(e.data),a(y(e.data.user.tel,e.data.user.name,!0)),localStorage.setItem("token",e.data.token)})}}})(function(e){var t=Object(x.d)(function(e){return e.form.formLogin}),a=Object(x.d)(function(e){return e.loginPage.verifyDisplay}),n=Object(V.f)();return k.a.createElement("div",{style:{display:a}},k.a.createElement(ye,{onSubmit:function(a){e.verify(t.values.tel,a.code),n.push("/Profile")}}))}),we=Object(q.a)({form:"formLogin"})(function(e){var t=Object(x.d)(function(e){return e.loginPage.loginHide});return k.a.createElement("form",{className:Pe.a.wrapForm,onSubmit:e.handleSubmit,style:{display:t}},k.a.createElement("div",null,k.a.createElement(Y.a,{component:K,name:"tel",placeholder:"Enter phone number",validate:W})),k.a.createElement("div",null,k.a.createElement("button",{className:Pe.a.logButton},"Login")))}),Ie=Object(x.b)(null,{login:function(e){return function(){u(e)}},verifyDisplay:function(e){return{type:"SET_VERIFY_DISPLAY",verifyDisplay:e}},loginHide:function(e){return{type:"SET_LOGIN_HIDE",loginHide:e}}})(function(e){return k.a.createElement("div",null,k.a.createElement("h3",null,"Login"),k.a.createElement(we,{onSubmit:function(t){e.login(t.tel),e.verifyDisplay("block"),e.loginHide("none")}}),k.a.createElement(Ne,null))});var De=function(e){var t=Object(x.d)(function(e){return e.loginPage.isAuth}),a=Object(x.c)();return Object(M.useEffect)(function(){a(N())},[]),k.a.createElement(R.a,{basename:"/pizza-app"},k.a.createElement("main",{className:"app-wrapper"},k.a.createElement(H,null),k.a.createElement("div",{className:"app-content-wrapper"},k.a.createElement(V.b,{path:"/cart",render:function(){return k.a.createElement(te,null)}}),k.a.createElement(V.b,{path:"/menu",render:function(){return k.a.createElement(Oe,null)}}),t?k.a.createElement(V.b,{path:"/Profile",render:function(){return k.a.createElement(ie,null)}}):k.a.createElement(V.b,{path:"/login",render:function(){return k.a.createElement(Ie,null)}}))))};A.a.render(k.a.createElement(x.a,{store:T},k.a.createElement(De,null)),document.getElementById("root"))},27:function(e,t,a){e.exports={element:"ElementOrder_element__18JgB",name:"ElementOrder_name__1VGh_",description:"ElementOrder_description__2RnE3",price:"ElementOrder_price__v2TUI",wrapElement:"ElementOrder_wrapElement__1ZCdj"}},34:function(e,t,a){e.exports={wrapForm:"Login_wrapForm__nNSEV",logButton:"Login_logButton__19KfT"}},52:function(e,t,a){e.exports={formControl:"FormControls_formControl__DKO4z",error:"FormControls_error__1NvAu",input:"FormControls_input__GRneO"}},54:function(e,t,a){e.exports={headerWrap:"Menu_headerWrap__3CjmV",showVal:"Menu_showVal__2Dhuc"}},9:function(e,t,a){e.exports={wrapInput:"Cart_wrapInput__35z6Z",buttonForm:"Cart_buttonForm__1huzt",switcherCartWrap:"Cart_switcherCartWrap__JJpaG",showVal:"Cart_showVal__3z958",element:"Cart_element__1LfZe",imgElement:"Cart_imgElement__331pB",name:"Cart_name__1azZ3",description:"Cart_description__uMGMs",price:"Cart_price__1BGN6",addToCart:"Cart_addToCart__1f2h6",wrapElement:"Cart_wrapElement__2LO4q",wrapPriceButton:"Cart_wrapPriceButton__ZlpNg",wrapPrice:"Cart_wrapPrice__29iP0"}}},[[118,1,2]]]);
//# sourceMappingURL=main.dc079e10.chunk.js.map