"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=o(function(h,a){
var s=require('@stdlib/math-base-assert-is-integer/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-floor/dist');function p(e,r,t){return n(e)||n(r)||n(t)||!s(r)||!s(t)||r>t?NaN:e<r?0:e>=t?1:(l(e)-r+1)/(t-r+1)}a.exports=p
});var N=o(function(j,q){
var g=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-integer/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-floor/dist');function I(e,r){var t,f;if(u(e)||u(r)||!v(e)||!v(r)||e>r)return g(NaN);return t=e-1,f=r-e+1,d;function d(i){return u(i)?NaN:i<e?0:i>=r?1:(m(i)-t)/f}}q.exports=I
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),O=N();F(y,"factory",O);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
