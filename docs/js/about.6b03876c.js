(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),a=n("da84"),i=n("c65b"),o=n("e330"),u=n("1626"),s=n("861d"),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),f=a.Error,l=o(/./.test);r({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=this.exec;if(!u(e))return l(this,t);var n=i(e,this,t);if(null!==n&&!s(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},"057f":function(t,e,n){var r=n("c6b6"),a=n("fc6a"),i=n("241c").f,o=n("4dae"),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o(u)}};t.exports.f=function(t){return u&&"Window"==r(t)?s(t):i(a(t))}},1276:function(t,e,n){"use strict";var r=n("2ba4"),a=n("c65b"),i=n("e330"),o=n("d784"),u=n("44e7"),s=n("825a"),c=n("1d80"),f=n("4840"),l=n("8aa5"),d=n("50c4"),p=n("577e"),b=n("dc4a"),y=n("4dae"),g=n("14c3"),v=n("9263"),h=n("9f7f"),m=n("d039"),x=h.UNSUPPORTED_Y,w=4294967295,S=Math.min,T=[].push,E=i(/./.exec),k=i(T),R=i("".slice),O=!m((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=p(c(this)),o=void 0===n?w:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!u(t))return a(e,i,t,o);var s,f,l,d=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,b+"g");while(s=a(v,h,i)){if(f=h.lastIndex,f>g&&(k(d,R(i,g,s.index)),s.length>1&&s.index<i.length&&r(T,d,y(s,1)),l=s[0].length,g=f,d.length>=o))break;h.lastIndex===s.index&&h.lastIndex++}return g===i.length?!l&&E(h,"")||k(d,""):k(d,R(i,g)),d.length>o?y(d,0,o):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:a(e,this,t,n)}:e,[function(e,n){var r=c(this),o=void 0==e?void 0:b(e,t);return o?a(o,e,r,n):a(i,p(r),e,n)},function(t,r){var a=s(this),o=p(t),u=n(i,a,o,r,i!==e);if(u.done)return u.value;var c=f(a,RegExp),b=a.unicode,y=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(x?"g":"y"),v=new c(x?"^(?:"+a.source+")":a,y),h=void 0===r?w:r>>>0;if(0===h)return[];if(0===o.length)return null===g(v,o)?[o]:[];var m=0,T=0,E=[];while(T<o.length){v.lastIndex=x?0:T;var O,_=g(v,x?R(o,T):o);if(null===_||(O=S(d(v.lastIndex+(x?T:0)),o.length))===m)T=l(o,T,b);else{if(k(E,R(o,m,T)),E.length===h)return E;for(var A=1;A<=_.length-1;A++)if(k(E,_[A]),E.length===h)return E;T=m=O}}return k(E,R(o,m)),E}]}),!O,x)},"25f0":function(t,e,n){"use strict";var r=n("5e77").PROPER,a=n("cb2d"),i=n("825a"),o=n("577e"),u=n("d039"),s=n("90d8"),c="toString",f=RegExp.prototype,l=f[c],d=u((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=r&&l.name!=c;(d||p)&&a(RegExp.prototype,c,(function(){var t=i(this),e=o(t.source),n=o(s(t));return"/"+e+"/"+n}),{unsafe:!0})},"2c3e":function(t,e,n){var r=n("da84"),a=n("83ab"),i=n("9f7f").MISSED_STICKY,o=n("c6b6"),u=n("edd0"),s=n("69f3").get,c=RegExp.prototype,f=r.TypeError;a&&i&&u(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===o(this))return!!s(this).sticky;throw f("Incompatible receiver, RegExp required")}}})},"3c47":function(t,e,n){},"3d87":function(t,e,n){var r=n("4930");t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"4d63":function(t,e,n){var r=n("83ab"),a=n("da84"),i=n("e330"),o=n("94ca"),u=n("7156"),s=n("9112"),c=n("241c").f,f=n("3a9b"),l=n("44e7"),d=n("577e"),p=n("90d8"),b=n("9f7f"),y=n("aeb0"),g=n("cb2d"),v=n("d039"),h=n("1a2d"),m=n("69f3").enforce,x=n("2626"),w=n("b622"),S=n("fce3"),T=n("107c"),E=w("match"),k=a.RegExp,R=k.prototype,O=a.SyntaxError,_=i(R.exec),A=i("".charAt),I=i("".replace),j=i("".indexOf),$=i("".slice),C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,P=/a/g,U=new k(M)!==M,D=b.MISSED_STICKY,F=b.UNSUPPORTED_Y,N=r&&(!U||D||S||T||v((function(){return P[E]=!1,k(M)!=M||k(P)==P||"/a/i"!=k(M,"i")}))),H=function(t){for(var e,n=t.length,r=0,a="",i=!1;r<=n;r++)e=A(t,r),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),a+=e):a+="[\\s\\S]":a+=e+A(t,++r);return a},L=function(t){for(var e,n=t.length,r=0,a="",i=[],o={},u=!1,s=!1,c=0,f="";r<=n;r++){if(e=A(t,r),"\\"===e)e+=A(t,++r);else if("]"===e)u=!1;else if(!u)switch(!0){case"["===e:u=!0;break;case"("===e:_(C,$(t,r+1))&&(r+=2,s=!0),a+=e,c++;continue;case">"===e&&s:if(""===f||h(o,f))throw new O("Invalid capture group name");o[f]=!0,i[i.length]=[f,c],s=!1,f="";continue}s?f+=e:a+=e}return[a,i]};if(o("RegExp",N)){for(var J=function(t,e){var n,r,a,i,o,c,b=f(R,this),y=l(t),g=void 0===e,v=[],h=t;if(!b&&y&&g&&t.constructor===J)return t;if((y||f(R,t))&&(t=t.source,g&&(e=p(h))),t=void 0===t?"":d(t),e=void 0===e?"":d(e),h=t,S&&"dotAll"in M&&(r=!!e&&j(e,"s")>-1,r&&(e=I(e,/s/g,""))),n=e,D&&"sticky"in M&&(a=!!e&&j(e,"y")>-1,a&&F&&(e=I(e,/y/g,""))),T&&(i=L(t),t=i[0],v=i[1]),o=u(k(t,e),b?this:R,J),(r||a||v.length)&&(c=m(o),r&&(c.dotAll=!0,c.raw=J(H(t),n)),a&&(c.sticky=!0),v.length&&(c.groups=v)),t!==h)try{s(o,"source",""===h?"(?:)":h)}catch(x){}return o},q=c(k),Y=0;q.length>Y;)y(J,k,q[Y++]);R.constructor=J,J.prototype=R,g(a,"RegExp",J,{constructor:!0})}x("RegExp")},"4dae":function(t,e,n){var r=n("da84"),a=n("23cb"),i=n("07fa"),o=n("8418"),u=r.Array,s=Math.max;t.exports=function(t,e,n){for(var r=i(t),c=a(e,r),f=a(void 0===n?r:n,r),l=u(s(f-c,0)),d=0;c<f;c++,d++)o(l,d,t[c]);return l.length=d,l}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),o=i("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("da84"),a=n("0366"),i=n("c65b"),o=n("7b0b"),u=n("9bdd"),s=n("e95a"),c=n("68ee"),f=n("07fa"),l=n("8418"),d=n("9a1f"),p=n("35a1"),b=r.Array;t.exports=function(t){var e=o(t),n=c(this),r=arguments.length,y=r>1?arguments[1]:void 0,g=void 0!==y;g&&(y=a(y,r>2?arguments[2]:void 0));var v,h,m,x,w,S,T=p(e),E=0;if(!T||this==b&&s(T))for(v=f(e),h=n?new this(v):b(v);v>E;E++)S=g?y(e[E],E):e[E],l(h,E,S);else for(x=d(e,T),w=x.next,h=n?new this:[];!(m=i(w,x)).done;E++)S=g?u(x,y,[m.value,E],!0):m.value,l(h,E,S);return h.length=E,h}},"57b9":function(t,e,n){var r=n("c65b"),a=n("d066"),i=n("b622"),o=n("cb2d");t.exports=function(){var t=a("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,u=i("toPrimitive");e&&!e[u]&&o(e,u,(function(t){return r(n,this)}),{arity:1})}},"5a47":function(t,e,n){var r=n("23e7"),a=n("4930"),i=n("d039"),o=n("7418"),u=n("7b0b"),s=!a||i((function(){o.f(1)}));r({target:"Object",stat:!0,forced:s},{getOwnPropertySymbols:function(t){var e=o.f;return e?e(u(t)):[]}})},"746f":function(t,e,n){var r=n("428f"),a=n("1a2d"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||o(e,t,{value:i.f(t)})}},"90d8":function(t,e,n){var r=n("c65b"),a=n("1a2d"),i=n("3a9b"),o=n("ad6d"),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||a(t,"flags")||!i(u,t)?e:r(o,t)}},"9bdd":function(t,e,n){var r=n("825a"),a=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(o){a(t,"throw",o)}}},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("e330"),i=n("44ad"),o=n("fc6a"),u=n("a640"),s=a([].join),c=i!=Object,f=u("join",",");r({target:"Array",proto:!0,forced:c||!f},{join:function(t){return s(o(this),void 0===t?",":t)}})},a4b9:function(t,e,n){"use strict";n("3c47")},a4d3:function(t,e,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},aaf9:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_url","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"Proved","type":"event"},{"inputs":[{"internalType":"uint256","name":"_claim","type":"uint256"},{"internalType":"string","name":"_code","type":"string"}],"name":"proveUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_turingHelperAddress","type":"address"}],"name":"setTuringHelper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_code","type":"string"}],"name":"setUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_code","type":"string"}],"name":"unsetUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"authenticatedUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"turing","outputs":[{"internalType":"contract TuringHelper","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"turingHelperAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"url","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')},ab367:function(t,e,n){var r=n("861d"),a=n("9112");t.exports=function(t,e){r(e)&&"cause"in e&&a(t,"cause",e.cause)}},aeb0:function(t,e,n){var r=n("9bf2").f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},b0c0:function(t,e,n){var r=n("83ab"),a=n("5e77").EXISTS,i=n("e330"),o=n("9bf2").f,u=Function.prototype,s=i(u.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=i(c.exec),l="name";r&&!a&&o(u,l,{configurable:!0,get:function(){try{return f(c,s(this))[1]}catch(t){return""}}})},b4f8:function(t,e,n){var r=n("23e7"),a=n("d066"),i=n("1a2d"),o=n("577e"),u=n("5692"),s=n("3d87"),c=u("string-to-symbol-registry"),f=u("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=o(t);if(i(c,e))return c[e];var n=a("Symbol")(e);return c[e]=n,f[n]=e,n}})},b5d1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container text-white"},[n("b-jumbotron",{staticClass:"glass",attrs:{header:"Almost There!"},scopedSlots:t._u([{key:"lead",fn:function(){return[t._v(" Use your wallet to finish the connection. You will be asked to perform two transactions. These will store your "),n("span",{staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(t.$route.params["name"]))]),t._v(" account id (or another unique identifier) on-chain and attach it to your wallet address so that various dapps can access it. ")]},proxy:!0}])},[n("br"),t.$store.state["network"]?n("div",{staticClass:"text-left"},[n("h2",[t._v("Instructions")]),n("span",[t._v(" 1. Type in your username and click the 'Publish ID' button. "),n("br"),t._v(' 2. After that transaction confirms click the "Prove ID" button. '),n("br"),t._v(" Troubleshooting: The server will only fetch your data once per authorization code so if you cancel the transaction or it fails, start over and re-authorize with "+t._s(t.$route.params["name"])+" ")]),n("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",{staticClass:"text-capitalize"},[t._v("Your "+t._s(t.$route.params["name"])+" Username")])]},proxy:!0},{key:"append",fn:function(){return[t.loading?t._e():n("b-button",{attrs:{variant:"outline-light"},on:{click:function(e){return t.setUser()}}},[t._v("Publish ID")]),t.loading?n("b-button",{attrs:{variant:"outline-light",disabled:""}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")]),n("b-spinner",{attrs:{small:"",label:"Spinning"}})],1):n("b-button",{attrs:{variant:"outline-light"},on:{click:function(e){return t.proveUser()}}},[t._v("Prove ID")])]},proxy:!0}])},[n("b-form-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1):n("connect")],1)],1)},a=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function u(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function s(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}n("d9e2");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return o(t)||u(t)||s(t)||c()}var l=n("1da1"),d=(n("25f0"),n("a15b"),n("4de4"),n("1276"),n("4d63"),n("c607"),n("2c3e"),n("e9c4"),n("96cf"),n("2b99")),p=n("f38b"),b=n("c030"),y=b.utils.defaultAbiCoder,g={components:{Tile:d["a"],Connect:p["a"]},data:function(){return{loading:!1,username:"",steps:[!1,!1],contract:"0x963a20cF7aD1c38c96B375bbE8BBA34cE34710b3"}},methods:{test2:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new b.Contract("0xefe992a50ecf45b5fadaca49438c144e82b064fd",n("fe8a"),t.$store.state.signer),e.next=3,r.estimateGas["decodedTest(string)"]("test");case 3:return e.sent,e.next=6,r.decodedTest("test");case 6:case"end":return e.stop()}}),e)})))()},test1:function(){console.log(y.encode(["uint256"],[209342]))},test:function(){var t=function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},e="0x00000000000000000000000000000000000000000000000000000000000000143862613630666531386130323333636462303564000000000000000000000000";e=e.substr(2);var n=64,r=e.split(new RegExp("(.{"+n.toString()+"})")).filter((function(t){return t.length==n})),a=2*parseInt(r[0],16);e=r[1];var i=t(e.slice(0,a)),o=String.fromCharCode.apply(String,f(i));console.log("byte string: ",o)},toggleLoading:function(){this.loading=!this.loading},checkState:function(t,e){return!t["state"]||e==t["state"]||(this.$bvToast.toast("State variable does not match. Please restart authentication flow",{variant:"danger",title:"Error"}),!1)},sendTransaction:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$store.state.send(t,e.$store.state.provider).then((function(t){return e.$bvToast.toast("The transaction was sent",{variant:"success",title:"Success"}),!0})).catch((function(t){return e.$bvToast.toast(t["message"],{variant:"danger",title:"Error"}),!1}));case 2:case"end":return n.stop()}}),n)})))()},proveUser:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r,a,i,o,u,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("state"),a=t.$route.query,i=t.username,i){e.next=5;break}return e.abrupt("return");case 5:if(t.checkState(a,r)){e.next=7;break}return e.abrupt("return");case 7:return t.toggleLoading(),e.next=10,fetch("https://api.github.com/users/"+i);case 10:if(o=e.sent,o.ok){e.next=14;break}return t.$bvToast.toast("Could not retrieve user account for "+i,{variant:"danger",title:"Error"}),e.abrupt("return");case 14:return e.next=16,o.json();case 16:return o=e.sent,u=a["code"],s=new b.Contract(t.contract,n("aaf9"),t.$store.state.signer),e.next=21,s.populateTransaction.proveUser(o.id,u);case 21:return c=e.sent,e.next=24,t.sendTransaction(c);case 24:t.toggleLoading();case 25:case"end":return e.stop()}}),e)})))()},setUser:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r,a,i,o,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("state"),a=t.$route.query,t.checkState(a,r)){e.next=4;break}return e.abrupt("return");case 4:return i=a["code"],o=new b.Contract(t.contract,n("aaf9"),t.$store.state.signer),e.next=8,o.populateTransaction.setUser(i);case 8:return u=e.sent,t.toggleLoading(),e.next=12,t.sendTransaction(u);case 12:s=e.sent,s&&t.proveUser(),t.toggleLoading();case 15:case"end":return e.stop()}}),e)})))()},getAccessToken:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("state"),r=t.$route.query,a=t.$route.params["name"],r["state"]&&n!=r["state"]){e.next=13;break}return i=r["code"],e.next=7,fetch(t.$store.state.server+a,{method:"POST",body:JSON.stringify({code:y.encode(["string"],[i])})});case 7:return o=e.sent,o.ok||t.$bvToast.toast("The code is expired or incorrect",{variant:"danger",title:"Error"}),e.next=11,o.text();case 11:u=e.sent,console.log(y.decode(["uint256"],u).toString());case 13:case"end":return e.stop()}}),e)})))()}}},v=g,h=(n("a4b9"),n("2877")),m=Object(h["a"])(v,r,a,!1,null,"48d778b4",null);e["default"]=m.exports},b980:function(t,e,n){var r=n("d039"),a=n("5c6c");t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",a(1,7)),7!==t.stack)}))},c513:function(t,e,n){var r=n("23e7"),a=n("1a2d"),i=n("d9b5"),o=n("0d51"),u=n("5692"),s=n("3d87"),c=u("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!s},{keyFor:function(t){if(!i(t))throw TypeError(o(t)+" is not a symbol");if(a(c,t))return c[t]}})},c607:function(t,e,n){var r=n("da84"),a=n("83ab"),i=n("fce3"),o=n("c6b6"),u=n("edd0"),s=n("69f3").get,c=RegExp.prototype,f=r.TypeError;a&&i&&u(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===o(this))return!!s(this).dotAll;throw f("Incompatible receiver, RegExp required")}}})},d28b:function(t,e,n){var r=n("746f");r("iterator")},d9e2:function(t,e,n){var r=n("23e7"),a=n("da84"),i=n("2ba4"),o=n("e5cb"),u="WebAssembly",s=a[u],c=7!==Error("e",{cause:7}).cause,f=function(t,e){var n={};n[t]=o(t,e,c),r({global:!0,constructor:!0,arity:1,forced:c},n)},l=function(t,e){if(s&&s[t]){var n={};n[t]=o(u+"."+t,e,c),r({target:u,stat:!0,constructor:!0,arity:1,forced:c},n)}};f("Error",(function(t){return function(e){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),f("URIError",(function(t){return function(e){return i(t,this,arguments)}})),l("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),l("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),l("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},d9f5:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("c65b"),o=n("e330"),u=n("c430"),s=n("83ab"),c=n("4930"),f=n("d039"),l=n("1a2d"),d=n("3a9b"),p=n("825a"),b=n("fc6a"),y=n("a04b"),g=n("577e"),v=n("5c6c"),h=n("7c73"),m=n("df75"),x=n("241c"),w=n("057f"),S=n("7418"),T=n("06cf"),E=n("9bf2"),k=n("37e8"),R=n("d1e7"),O=n("cb2d"),_=n("5692"),A=n("f772"),I=n("d012"),j=n("90e3"),$=n("b622"),C=n("e538"),M=n("746f"),P=n("57b9"),U=n("d44e"),D=n("69f3"),F=n("b727").forEach,N=A("hidden"),H="Symbol",L="prototype",J=D.set,q=D.getterFor(H),Y=Object[L],z=a.Symbol,B=z&&z[L],K=a.TypeError,W=a.QObject,G=T.f,Q=E.f,X=w.f,V=R.f,Z=o([].push),tt=_("symbols"),et=_("op-symbols"),nt=_("wks"),rt=!W||!W[L]||!W[L].findChild,at=s&&f((function(){return 7!=h(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(Y,e);r&&delete Y[e],Q(t,e,n),r&&t!==Y&&Q(Y,e,r)}:Q,it=function(t,e){var n=tt[t]=h(B);return J(n,{type:H,tag:t,description:e}),s||(n.description=e),n},ot=function(t,e,n){t===Y&&ot(et,e,n),p(t);var r=y(e);return p(n),l(tt,r)?(n.enumerable?(l(t,N)&&t[N][r]&&(t[N][r]=!1),n=h(n,{enumerable:v(0,!1)})):(l(t,N)||Q(t,N,v(1,{})),t[N][r]=!0),at(t,r,n)):Q(t,r,n)},ut=function(t,e){p(t);var n=b(e),r=m(n).concat(dt(n));return F(r,(function(e){s&&!i(ct,n,e)||ot(t,e,n[e])})),t},st=function(t,e){return void 0===e?h(t):ut(h(t),e)},ct=function(t){var e=y(t),n=i(V,this,e);return!(this===Y&&l(tt,e)&&!l(et,e))&&(!(n||!l(this,e)||!l(tt,e)||l(this,N)&&this[N][e])||n)},ft=function(t,e){var n=b(t),r=y(e);if(n!==Y||!l(tt,r)||l(et,r)){var a=G(n,r);return!a||!l(tt,r)||l(n,N)&&n[N][r]||(a.enumerable=!0),a}},lt=function(t){var e=X(b(t)),n=[];return F(e,(function(t){l(tt,t)||l(I,t)||Z(n,t)})),n},dt=function(t){var e=t===Y,n=X(e?et:b(t)),r=[];return F(n,(function(t){!l(tt,t)||e&&!l(Y,t)||Z(r,tt[t])})),r};c||(z=function(){if(d(B,this))throw K("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=j(t),n=function(t){this===Y&&i(n,et,t),l(this,N)&&l(this[N],e)&&(this[N][e]=!1),at(this,e,v(1,t))};return s&&rt&&at(Y,e,{configurable:!0,set:n}),it(e,t)},B=z[L],O(B,"toString",(function(){return q(this).tag})),O(z,"withoutSetter",(function(t){return it(j(t),t)})),R.f=ct,E.f=ot,k.f=ut,T.f=ft,x.f=w.f=lt,S.f=dt,C.f=function(t){return it($(t),t)},s&&(Q(B,"description",{configurable:!0,get:function(){return q(this).description}}),u||O(Y,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),F(m(nt),(function(t){M(t)})),r({target:H,stat:!0,forced:!c},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:st,defineProperty:ot,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt}),P(),U(z,H),I[N]=!0},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),i=n("da84"),o=n("e330"),u=n("1a2d"),s=n("1626"),c=n("3a9b"),f=n("577e"),l=n("9bf2").f,d=n("e893"),p=i.Symbol,b=p&&p.prototype;if(a&&s(p)&&(!("description"in b)||void 0!==p().description)){var y={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=c(b,this)?new p(t):void 0===t?p():p(t);return""===t&&(y[e]=!0),e};d(g,p),g.prototype=b,b.constructor=g;var v="Symbol(test)"==String(p("test")),h=o(b.toString),m=o(b.valueOf),x=/^Symbol\((.*)\)[^)]+$/,w=o("".replace),S=o("".slice);l(b,"description",{configurable:!0,get:function(){var t=m(this),e=h(t);if(u(y,t))return"";var n=v?S(e,7,-1):w(e,x,"$1");return""===n?void 0:n}}),r({global:!0,constructor:!0,forced:!0},{Symbol:g})}},e538:function(t,e,n){var r=n("b622");e.f=r},e5cb:function(t,e,n){"use strict";var r=n("d066"),a=n("1a2d"),i=n("9112"),o=n("3a9b"),u=n("d2bb"),s=n("e893"),c=n("aeb0"),f=n("7156"),l=n("e391"),d=n("ab367"),p=n("c770"),b=n("b980"),y=n("83ab"),g=n("c430");t.exports=function(t,e,n,v){var h="stackTraceLimit",m=v?2:1,x=t.split("."),w=x[x.length-1],S=r.apply(null,x);if(S){var T=S.prototype;if(!g&&a(T,"cause")&&delete T.cause,!n)return S;var E=r("Error"),k=e((function(t,e){var n=l(v?e:t,void 0),r=v?new S(t):new S;return void 0!==n&&i(r,"message",n),b&&i(r,"stack",p(r.stack,2)),this&&o(T,this)&&f(r,this,k),arguments.length>m&&d(r,arguments[m]),r}));if(k.prototype=T,"Error"!==w?u?u(k,E):s(k,E,{name:!0}):y&&h in S&&(c(k,S,h),c(k,S,"prepareStackTrace")),s(k,S),!g)try{T.name!==w&&i(T,"name",w),T.constructor=k}catch(R){}return k}}},e9c4:function(t,e,n){var r=n("23e7"),a=n("d066"),i=n("2ba4"),o=n("c65b"),u=n("e330"),s=n("d039"),c=n("e8b5"),f=n("1626"),l=n("861d"),d=n("d9b5"),p=n("f36a"),b=n("4930"),y=a("JSON","stringify"),g=u(/./.exec),v=u("".charAt),h=u("".charCodeAt),m=u("".replace),x=u(1..toString),w=/[\uD800-\uDFFF]/g,S=/^[\uD800-\uDBFF]$/,T=/^[\uDC00-\uDFFF]$/,E=!b||s((function(){var t=a("Symbol")();return"[null]"!=y([t])||"{}"!=y({a:t})||"{}"!=y(Object(t))})),k=s((function(){return'"\\udf06\\ud834"'!==y("\udf06\ud834")||'"\\udead"'!==y("\udead")})),R=function(t,e){var n=p(arguments),r=e;if((l(e)||void 0!==t)&&!d(t))return c(e)||(e=function(t,e){if(f(r)&&(e=o(r,this,t,e)),!d(e))return e}),n[1]=e,i(y,null,n)},O=function(t,e,n){var r=v(n,e-1),a=v(n,e+1);return g(S,t)&&!g(T,a)||g(T,t)&&!g(S,r)?"\\u"+x(h(t,0),16):t};y&&r({target:"JSON",stat:!0,arity:3,forced:E||k},{stringify:function(t,e,n){var r=p(arguments),a=i(E?R:y,null,r);return k&&"string"==typeof a?m(a,w,O):a}})},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("e8b5"),o=n("68ee"),u=n("861d"),s=n("23cb"),c=n("07fa"),f=n("fc6a"),l=n("8418"),d=n("b622"),p=n("1dde"),b=n("f36a"),y=p("slice"),g=d("species"),v=a.Array,h=Math.max;r({target:"Array",proto:!0,forced:!y},{slice:function(t,e){var n,r,a,d=f(this),p=c(d),y=s(t,p),m=s(void 0===e?p:e,p);if(i(d)&&(n=d.constructor,o(n)&&(n===v||i(n.prototype))?n=void 0:u(n)&&(n=n[g],null===n&&(n=void 0)),n===v||void 0===n))return b(d,y,m);for(r=new(void 0===n?v:n)(h(m-y,0)),a=0;y<m;y++,a++)y in d&&l(r,a,d[y]);return r.length=a,r}})},fe8a:function(t){t.exports=JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"_url","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"decodedTest","inputs":[{"type":"string","name":"_code","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bytes","name":"","internalType":"bytes"}],"name":"rawTest","inputs":[{"type":"uint256","name":"num1","internalType":"uint256"},{"type":"uint256","name":"num2","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTuringHelper","inputs":[{"type":"address","name":"_turingHelperAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract TuringHelper"}],"name":"turing","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"turingHelperAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"url","inputs":[]}]')}}]);
//# sourceMappingURL=about.6b03876c.js.map