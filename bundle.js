// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cdf=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;var l=r,c=function(e,t,r){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||f.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},_=t()?l:c;var p=function(e,t,r){_(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=Math.floor,b=d;var y=function(e){return b(e)===e};var s=function(e){return e!=e},v=y,j=s,m=d;var g=function(e){return function(){return e}},h=y,w=s,N=d;var O=function(e,t,r){return j(e)||j(t)||j(r)||!v(t)||!v(r)||t>r?NaN:e<t?0:e>=r?1:(m(e)-t+1)/(r-t+1)};return p(O,"factory",(function(e,t){var r,n;return w(e)||w(t)||!h(e)||!h(t)||e>t?g(NaN):(r=e-1,n=t-e+1,function(o){if(w(o))return NaN;if(o<e)return 0;if(o>=t)return 1;return(N(o)-r)/n})})),O}));
//# sourceMappingURL=bundle.js.map