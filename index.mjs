// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-poisson@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function u(f,v){var c,g,b,x,y;if(!o(f))throw new TypeError(a("0qJ71,NQ",f));if(arguments.length>1){if(!d(v))throw new TypeError(a("0qJ2V,FD",v));if(c=i({},v),l(c,"iter")){if(!m(c.iter))throw new TypeError(a("0qJ2t,G9","iter",c.iter))}else c.iter=j;b=p(f,c),void 0===c.prng&&!1!==c.copy&&(c.state=b.state)}else b=p(f),c={iter:j,state:b.state};return y=0,e(g={},"next",G),e(g,"return",L),c&&c.prng?(e(g,"seed",null),e(g,"seedLength",null),s(g,"state",n(null),r),e(g,"stateLength",null),e(g,"byteLength",null)):(t(g,"seed",P),t(g,"seedLength",w),s(g,"state",E,J),t(g,"stateLength",R),t(g,"byteLength",q)),e(g,"PRNG",b.PRNG),h&&e(g,h,N),g;function G(){return y+=1,x||y>c.iter?{done:!0}:{value:b(),done:!1}}function L(e){return x=!0,arguments.length?{value:e,done:!0}:{done:!0}}function N(){return u(f,c)}function P(){return b.PRNG.seed}function w(){return b.PRNG.seedLength}function R(){return b.PRNG.stateLength}function q(){return b.PRNG.byteLength}function E(){return b.PRNG.state}function J(e){b.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
