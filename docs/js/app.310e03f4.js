(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);b&&b(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6b03876c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"d2a924b2"}[t]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],b.parentNode.removeChild(b),n(i)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(b);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/BobaID/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var b=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},"14b6":function(t,e,n){},2:function(t,e){},"2b99":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile-shadow embed-responsive embed-responsive-1by1",attrs:{title:t.disabled?t.name+" coming soon":"Connect to BobaID with "+t.name}},[n("b-card",{class:(t.disabled?"tile-disabled ":"tile ")+"embed-responsive-item"},[n("div",{class:t.disabled?"text-muted":"text-white",staticStyle:{width:"100%",height:"100%"}},[n("b-avatar",{staticClass:"h-100 w-100",attrs:{variant:"transparent",icon:t.icon}})],1)])],1)},o=[],a=n("0759"),i=n("7386"),c={props:["icon","name","disabled"],components:{BIcon:a["a"],BIconDiscord:i["n"],BIconGithub:i["o"],BIconGoogle:i["p"],BIconTriangleFill:i["x"],BIconTwitter:i["y"]}},s=c,u=(n("bce6"),n("2877")),l=Object(u["a"])(s,r,o,!1,null,"ef2b10fa",null);e["a"]=l.exports},3:function(t,e){},4:function(t,e){},"49c0":function(t,e,n){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),o=n("5f5b");r["default"].use(o["a"]);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-100 w-100",attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"sm",type:"light"}},["/"!=t.$router.currentRoute.path?n("b-navbar-brand",{attrs:{role:"button",title:"Home",to:"/"}},[n("b-icon",{staticClass:"text-white",attrs:{icon:"house"}})],1):t._e(),n("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[n("b-navbar-nav")],1),n("b-navbar-nav",[void 0!=t.$store.state["network"]?n("connect"):t._e()],1),n("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}})],1),n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},i=[],c=n("f38b"),s=n("0759"),u=n("7386"),l={components:{Connect:c["a"],BIcon:s["a"],BIconHouse:u["q"]}},d=l,b=(n("5c0b"),n("2877")),f=Object(b["a"])(d,a,i,!1,null,null,null),p=f.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container text-white text-left mt-2"},[n("b-row",[n("b-col",{staticClass:"justify-content-center align-self-center mr-2"},[n("b-badge",{attrs:{variant:"dark"}},[t._v("Version 1.0.0-Alpha")]),n("h1",{staticClass:"display-1",staticStyle:{"text-shadow":"2px 2px 5px rgb(31 38 135 / 40%)","font-weight":"bolder"}},[t._v("BobaID "),n("b-icon-person-badge")],1),n("i",[t._v("Now available on Boba Rinkeby")]),n("br"),n("p",{staticClass:"lead"},[t._v("The social authentication layer on Boba Network. Connect to oAuth providers such as Github, Discord and others to access Sybil protected Dapps")]),n("b-button",{staticClass:"mr-2",attrs:{variant:"light",href:"https://github.com/Fluffy9/BobaID"}},[t._v("Docs")])],1),n("b-col",[n("div",{staticClass:"container"},t._l(Math.ceil(t.providers.length/3),(function(e){return n("b-row",{key:e,staticClass:"mt-4"},t._l(t.providers.slice(3*(e-1),3*e),(function(e){return n("b-col",{key:e.name,attrs:{cols:"4"}},[e["disabled"]?n("tile",{attrs:{icon:e.icon,name:e.name,disabled:e["disabled"]||!1}}):n("a",{staticClass:"text-reset text-decoration-none",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.authorizationURL(e)}},[n("tile",{staticClass:"pulse",attrs:{role:"button",icon:e.icon,name:e.name,disabled:e["disabled"]||!1}})],1)],1)})),1)})),1)])],1)],1)},m=[],g=(n("99af"),n("2b99")),w={components:{Tile:g["a"],BIcon:s["a"],BIconPersonBadge:u["r"],BIconBinoculars:u["a"]},computed:{providers:function(){return this.$store.state.oAuth}},methods:{authorizationURL:function(t){var e=localStorage.getItem("state"),n=t.authorize_url+"?response_type=code&client_id=".concat(t.client_id,"&scope=").concat(t.scope,"&state=").concat(e,"&redirect_uri=").concat(t.redirect_uri);return n}},mounted:function(){this.$store.dispatch("init")}},y=w,_=(n("d0f1"),Object(b["a"])(y,v,m,!1,null,"0b028ee4",null)),k=_.exports;r["default"].use(h["a"]);var x=[{path:"/",name:"Home",component:k},{path:"/provider/:name",component:function(){return n.e("about").then(n.bind(null,"b5d1"))}}],C=new h["a"]({routes:x}),B=C,I=n("1da1"),O=(n("ac1f"),n("5319"),n("313d"),n("0eb6"),n("b7ef"),n("8bd4"),n("7db0"),n("07ac"),n("b64b"),n("96cf"),n("2f62")),S=n("5aac"),j=n.n(S),R=n("2eaf");r["default"].use(O["a"]);var P=n("c030"),N=P.providers,$=(P.Wallet,P.ethers,P.BigNumber,"http://pupcakes.me:8080/"),A=new O["a"].Store({state:{web3Modal:null,provider:null,network:null,signer:null,user:null,supportedNetworks:[{"Boba Rinkeby":28}],send:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.send("eth_sendTransaction",[{from:e.from,to:e.to,data:e["data"],value:e["value"]}]);case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),server:$,oAuthState:null,oAuth:[{name:"Github",icon:"github",authorize_url:"https://github.com/login/oauth/authorize",token_url:"https://github.com/login/oauth/access_token",scope:"profile",redirect_uri:$+"redirect/github",client_id:"Iv1.db4815f4c80dbcd4"},{name:"Discord",icon:"discord",disabled:"true",baseURL:"",scope:"bobaid",redirect_uri:$+"redirect/discord",client_id:""},{name:"Google",icon:"google",disabled:"true",baseURL:"",scope:"bobaid",redirect_uri:$+"redirect/google",client_id:""},{name:"Twitter",icon:"twitter",disabled:"true",baseURL:"",scope:"bobaid",redirect_uri:$+"redirect/twitter",client_id:""}]},mutations:{setoAuthState:function(t,e){t.oAuthState=e},setWeb3Modal:function(t,e){t.web3Modal=e},setSigner:function(t,e){t.signer=e},setProvider:function(t,e){t.provider=e},setNetwork:function(t,e){t.network=e},setUser:function(t,e){t.user=e}},actions:{init:function(){var t=localStorage.getItem("state");t||(t=btoa(Math.random()).replace(/\W/g,"")),localStorage.setItem("state",t)},Connect:function(t){return Object(I["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a,i,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,o={walletconnect:{package:R["a"],options:{infuraId:"INFURA_ID"}}},a=new j.a({cacheProvider:!0,providerOptions:o}),e.t0=N.Web3Provider,e.next=6,a.connect();case 6:return e.t1=e.sent,i=new e.t0(e.t1),c=i.getSigner(),e.next=11,i.getNetwork();case 11:return s=e.sent.chainId,s=n.supportedNetworks.find((function(t){return Object.values(t)[0]===s})),s=void 0==s?void 0:Object.keys(s)[0],console.log(s),r("setSigner",c),e.t2=r,e.next=19,c.getAddress();case 19:e.t3=e.sent,(0,e.t2)("setUser",e.t3),r("setProvider",i),r("setNetwork",s),r("setWeb3Modal",a);case 24:case"end":return e.stop()}}),e)})))()},Disconnect:function(t){return Object(I["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,e.next=3,n.web3Modal.clearCachedProvider();case 3:r("setSigner",null),r("setProvider",null),r("setNetwork",null),window.location.reload();case 7:case"end":return e.stop()}}),e)})))()}},modules:{}});r["default"].config.productionTip=!1,new r["default"]({router:B,store:A,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},"9c0c":function(t,e,n){},bce6:function(t,e,n){"use strict";n("49c0")},d0f1:function(t,e,n){"use strict";n("14b6")},f38b:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.user?void 0!=t.$store.state.network?n("div",[n("b-avatar",{staticStyle:{border:"solid 2px white"},attrs:{alt:"Ethereum blockies avatar",src:t.blocky,title:t.$store.state.user},on:{click:function(e){return t.toggle()}}})],1):n("div",[n("b-badge",{attrs:{variant:"danger"}},[t._v("Unsupported Network")])],1):n("b-button",{attrs:{title:"Connect your wallet",size:"lg",variant:"light"},on:{click:function(e){return t.Connect()}}},[n("b-icon-wallet-2")],1)],1)},o=[],a=n("1da1"),i=(n("96cf"),n("103a")),c=n.n(i),s=n("7386"),u={name:"Connect",components:{BIconWallet2:s["z"]},data:function(){return{dialog:!1}},methods:{Connect:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("Connect");case 1:case"end":return e.stop()}}),e)})))()},Disconnect:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("Connect");case 1:case"end":return e.stop()}}),e)})))()},toggle:function(){var t=document.getElementById("dialog-default");this.dialog=!this.dialog,this.dialog?t.showModal():t.close()}},computed:{signer:function(){return this.$store.state.signer},blocky:function(){var t=this.$store.state.user;return t?c()(t):""}}},l=u,d=n("2877"),b=Object(d["a"])(l,r,o,!1,null,null,null);e["a"]=b.exports}});
//# sourceMappingURL=app.310e03f4.js.map