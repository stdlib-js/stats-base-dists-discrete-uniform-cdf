// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var c=r;var f=Math.floor;function _(e){return f(e)===e}function p(e){return e!=e}function b(e,r,t){return p(e)||p(r)||p(t)||!_(r)||!_(t)||r>t?NaN:e<r?0:e>=t?1:(f(e)-r+1)/(t-r+1)}function y(e,r){var t,n,o;return p(e)||p(r)||!_(e)||!_(r)||e>r?(o=NaN,function(){return o}):(t=e-1,n=r-e+1,function(o){if(p(o))return NaN;if(o<e)return 0;if(o>=r)return 1;return(f(o)-t)/n})}c(b,"factory",{configurable:!1,enumerable:!1,writable:!1,value:y});export{b as default,y as factory};
//# sourceMappingURL=mod.js.map