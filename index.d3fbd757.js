!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}}));var a={};function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){s.default(t,e,r[e])}))}return t};var u,s=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var f={},h=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&n.call(x,a)&&(w=x);var L=g.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=g,u(L,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(f);try{regeneratorRuntime=h}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=h:Function("r","regeneratorRuntime = r")(h)}var p=document.querySelector("#search-form"),d=document.querySelector(".pokemog-gallery"),y=document.querySelector("[data-backdrop]");function v(){return(v=t(a)(t(f).mark((function e(r){var n,o,a,i;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://pokeapi.co/api/v2/pokemon/?limit=".concat(r),e.next=3,fetch(n);case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,console.log(a),i=a.results.map((function(e,r){return t(c)({},e,{apiURL:e.url,id:r+1,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(r+1,".png")})})),console.log(i),m(i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(t){var e=t.map((function(t){return'\n    <li class="card" >\n        <img class="card-image" src ="'.concat(t.image,'"/>\n        <button class="card-title card-btn">').concat(t.name,"</button>\n    </li>\n    ")})).join("");d.insertAdjacentHTML("beforeend",e)}function g(){return(g=t(a)(t(f).mark((function e(r){var n,o,a,i,c;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o="https://pokeapi.co/api/v2/pokemon/".concat(r),t.next=4,fetch(o);case 4:return a=t.sent,t.next=7,a.json();case 7:i=t.sent,c={name:i.name,id:i.id,image:i.sprites.front_default,type:i.types.map((function(t){return t.type.name})).join(", "),statsName:i.stats.map((function(t){return t.stat.name})),statsValue:i.stats.map((function(t){return t.base_stat}))},n.push(c),w(n);case 11:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function w(t){var e=t.map((function(t){return'\n    <div class="popup">\n        <div class="card-popup">\n        <button class="modal-btn" id="closeBtn">Close</button>\n        <h3>Card ID#'.concat(t.id,'</h3>\n            <img class="card-image" src ="').concat(t.image,'"/>\n            <h2 class="card-title">').concat(t.id,". ").concat(t.name,'</h2>\n            <p class="card-text">Type:').concat(t.type,'</p>\n            <p class="card-text">Basic info:').concat(t.statsName[0],":").concat(t.statsValue[0]," | ").concat(t.statsName[1],":").concat(t.statsValue[1]," |").concat(t.statsName[2],":").concat(t.statsValue[2]," |").concat(t.statsName[3],":").concat(t.statsValue[3]," |").concat(t.statsName[4],":").concat(t.statsValue[4]," |").concat(t.statsName[5],":").concat(t.statsValue[5]," </p>\n            <p><small></small></p>\n        </div>\n    </div>\n    ")})).join("");y.innerHTML=e}p.addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements.searchQuery.value;if(""===r)return;(function(t){v.apply(this,arguments)})(r),console.log(void 0===r?"undefined":t(l)(r))})),d.addEventListener("click",(function(t){if(!t.target.classList.contains("card-title"))return;var e=t.target.textContent;console.log(e),function(t){g.apply(this,arguments)}(e),y.classList.toggle("is-hidden")})),y.addEventListener("click",(function(){y.classList.toggle("is-hidden")}))}();
//# sourceMappingURL=index.d3fbd757.js.map
