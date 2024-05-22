import{i as Le}from"./chunk-JFYIYEE3.js";import{d as Re,f as i,h as r,o as t}from"./chunk-67P5Y4J4.js";t();r();var ra=()=>!1,ta=()=>!0,Mt=()=>!1;t();r();var aa=1.1;var Pe=(f=>(f.STRICT="strict",f.IGNORE_WWW="ignore-www",f.IGNORE="ignore",f))(Pe||{});var Be=(g=>(g.ANALYTICS="analytics",g.ANONYMOUS_SITE_VISIT_LOGGING="anonymous-site-visit-logging",g.CLARITY="clarity",g.CHATGPT="chatgpt",g.CONTEXT_MENUS="context-menus",g.DEBUGGER="debugger",g.DOCS_SUPPORT="docs-support",g.DYSLEXIC_FONT_SIZE="dyslexic-font-size",g.EMBEDDED_PLAYER="embedded-player",g.FACEBOOK="facebook",g.FEEDBACK="feedback",g.FEEDBACK_FORM="feedback-form",g.FIRST_WORD_PLAYER="first-word-player",g.FOCUS_MODE="focus-mode",g.FORCE_LOGIN="force-login",g.GAMIFICATION="gamification",g.GMAIL_SUPPORT="gmail-support",g.GOOGLE="google",g.GOOGLE_GEN_AI_RESULT="google-gen-ai-result",g.GOOGLE_DRIVE_SUPPORT="google-drive-support",g.HISTORY_NOTIFICATION="history-notification",g.HOVER_PLAYER="hover-player",g.HTTP="http",g.KINDLE_SUPPORT="kindle-support",g.LINKEDIN="linkedin",g.MEDIA_SESSION="media-session",g.MOBILE_AUTO_SCROLL_NUDGE="mobile-auto-scroll-nudge",g.MOBILE_PLAYER="mobile-player",g.MOBILE_SELECTION_PLAYER="mobile-selection-player",g.MOBILE_SENTENCE_PLAYER="mobile-sentence-player",g.NOTIFICATIONS="notifications",g.OUTLOOK="outlook",g.PARAGRAPH_PLAYER="paragraph-player",g.PARSER="parser",g.PDF_SUPPORT="pdf-support",g.PILL_PLAYER="pill-player",g.PLAYER="player",g.PLAYER_ACTIONS="player-actions",g.REDDIT="reddit",g.SCREENSHOT_MODE="screenshot-mode",g.SELECTION_PLAYER="selection-player",g.SENTENCE_PLAYER="sentence-player",g.SETTINGS_SYNC="settings-sync",g.SHORTCUTS_PROMPT="shortcuts-prompt",g.TRACK_LISTEN_HISTORY="track-listen-history",g.CANVAS_NOTIFICATION="canvas-notification",g.STANDARD_PLAYER="standard-player",g.INDIVIDUAL_POSTS_PLAYER="individual-posts-player",g))(Be||{}),ke=(y=>(y.INIT="init",y.READABLE="readable",y.AUDIO_LOADING="audio-loading",y.AUDIO_LOADED="audio-loaded",y.BROWSER_ACTION="browser-action",y.HIDE_SHORTCUT_PROMPT="hide-shortcut-prompt",y.ERROR="error",y.DESTROY="destroy",y))(ke||{});var sa=["github.com","stackoverflow.com","sourceforge.net","bitbucket.org","gitlab.com","kaggle.com","leetcode.com","geekforgeeks.org","huggingface.co","openai.com","typescript.com","rust-lang.org","nodejs.org","swift.org","npmjs.com","replit.com","codesandbox.io"],ua=["brown.edu","cornell.edu","columbia.edu","home.dartmouth.edu","harvard.edu","yale.edu","princeton.edu","psu.edu","mit.edu","berkeley.edu","stanford.edu"],fa=["docs-support","gmail-support","google","linkedin","reddit","facebook","chatgpt","kindle-support","outlook"],Me="https://chromewebstore.google.com/detail/speechify-for-chrome/ljflmlehinmoeknoonhibbjpldiijjmm/reviews",We="https://microsoftedge.microsoft.com/addons/detail/speechify-text-to-speech-/ogapibpahpkbcdidopigillpmndjemnj",ca=()=>Mt()?We:Me,pa="speechify-active-inbox-player";t();r();t();r();var Xr=class{value;next;constructor(e){this.value=e}},pr=class{#r;#t;#e;constructor(){this.clear()}enqueue(e){let n=new Xr(e);this.#r?(this.#t.next=n,this.#t=n):(this.#r=n,this.#t=n),this.#e++}dequeue(){let e=this.#r;if(e)return this.#r=this.#r.next,this.#e--,e.value}clear(){this.#r=void 0,this.#t=void 0,this.#e=0}get size(){return this.#e}*[Symbol.iterator](){let e=this.#r;for(;e;)yield e.value,e=e.next}};function Vr(o){if(!((Number.isInteger(o)||o===Number.POSITIVE_INFINITY)&&o>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");let e=new pr,n=0,f=()=>{n--,e.size>0&&e.dequeue()()},c=async(_,y,v)=>{n++;let R=(async()=>_(...v))();y(R);try{await R}catch{}f()},l=(_,y,v)=>{e.enqueue(c.bind(void 0,_,y,v)),(async()=>(await Promise.resolve(),n<o&&e.size>0&&e.dequeue()()))()},m=(_,...y)=>new Promise(v=>{l(_,v,y)});return Object.defineProperties(m,{activeCount:{get:()=>n},pendingCount:{get:()=>e.size},clearQueue:{value:()=>{e.clear()}}}),m}t();r();function wr(o){return{_ok:!0,value:o}}function Nr(o){return{_ok:!1,error:o}}function Oa(o,e){return o._ok===!1?Nr(e(o.error)):o}function Aa(o,e){return o._ok===!0?o.value:e(o.error)}function Sa(o){return o._ok}function Ea(o){return!o._ok}async function Wt(o){let{default:{Result:e}}=await import("./util-2VLLEQQ7.js");return o instanceof e.Success?wr(o.value):o instanceof e.Failure?Nr(o.error):wr(void 0)}function Ta(o){return async(...e)=>{try{return wr(await o(e))}catch(n){return Nr(n)}}}function ba(o){return(...e)=>{try{return wr(o(...e))}catch(n){return Nr(n)}}}t();r();function La(o){return(...e)=>new Promise(n=>{let f=c=>Wt(c).then(n);e.length===0?o(f):e.length===1?o(e[0],f):o(e[0],e[1],f)})}var Pa=(o,e)=>Promise.all(o.map(e)).then(n=>n.flat());t();r();t();r();t();r();t();r();function x(o){return o!=null&&typeof o=="object"&&o["@@functional/placeholder"]===!0}function d(o){return function e(n){return arguments.length===0||x(n)?e:o.apply(this,arguments)}}function p(o){return function e(n,f){switch(arguments.length){case 0:return e;case 1:return x(n)?e:d(function(c){return o(n,c)});default:return x(n)&&x(f)?e:x(n)?d(function(c){return o(c,f)}):x(f)?d(function(c){return o(n,c)}):o(n,f)}}}var Ue=p(function(e,n){return Number(e)+Number(n)}),Dr=Ue;t();r();t();r();t();r();var N=Array.isArray||function(e){return e!=null&&e.length>=0&&Object.prototype.toString.call(e)==="[object Array]"};t();r();function lr(o){return o!=null&&typeof o["@@transducer/step"]=="function"}function I(o,e,n){return function(){if(arguments.length===0)return n();var f=arguments[arguments.length-1];if(!N(f)){for(var c=0;c<o.length;){if(typeof f[o[c]]=="function")return f[o[c]].apply(f,Array.prototype.slice.call(arguments,0,-1));c+=1}if(lr(f)){var l=e.apply(null,Array.prototype.slice.call(arguments,0,-1));return l(f)}}return n.apply(this,arguments)}}t();r();function rr(o,e){for(var n=0,f=e.length,c=Array(f);n<f;)c[n]=o(e[n]),n+=1;return c}t();r();t();r();t();r();function z(o){return Object.prototype.toString.call(o)==="[object String]"}var Fe=d(function(e){return N(e)?!0:!e||typeof e!="object"||z(e)?!1:e.length===0?!0:e.length>0?e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1):!1}),ur=Fe;t();r();var je=function(){function o(e){this.f=e}return o.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},o.prototype["@@transducer/result"]=function(e){return e},o.prototype["@@transducer/step"]=function(e,n){return this.f(e,n)},o}();function Cr(o){return new je(o)}t();r();t();r();function D(o,e){switch(o){case 0:return function(){return e.apply(this,arguments)};case 1:return function(n){return e.apply(this,arguments)};case 2:return function(n,f){return e.apply(this,arguments)};case 3:return function(n,f,c){return e.apply(this,arguments)};case 4:return function(n,f,c,l){return e.apply(this,arguments)};case 5:return function(n,f,c,l,m){return e.apply(this,arguments)};case 6:return function(n,f,c,l,m,_){return e.apply(this,arguments)};case 7:return function(n,f,c,l,m,_,y){return e.apply(this,arguments)};case 8:return function(n,f,c,l,m,_,y,v){return e.apply(this,arguments)};case 9:return function(n,f,c,l,m,_,y,v,R){return e.apply(this,arguments)};case 10:return function(n,f,c,l,m,_,y,v,R,W){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}var Ge=p(function(e,n){return D(e.length,function(){return e.apply(n,arguments)})}),zr=Ge;function He(o,e,n){for(var f=0,c=n.length;f<c;){if(e=o["@@transducer/step"](e,n[f]),e&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}f+=1}return o["@@transducer/result"](e)}function Ut(o,e,n){for(var f=n.next();!f.done;){if(e=o["@@transducer/step"](e,f.value),e&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}f=n.next()}return o["@@transducer/result"](e)}function Ft(o,e,n,f){return o["@@transducer/result"](n[f](zr(o["@@transducer/step"],o),e))}var jt=typeof Symbol<"u"?Symbol.iterator:"@@iterator";function T(o,e,n){if(typeof o=="function"&&(o=Cr(o)),ur(n))return He(o,e,n);if(typeof n["fantasy-land/reduce"]=="function")return Ft(o,e,n,"fantasy-land/reduce");if(n[jt]!=null)return Ut(o,e,n[jt]());if(typeof n.next=="function")return Ut(o,e,n);if(typeof n.reduce=="function")return Ft(o,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}t();r();t();r();var O={init:function(){return this.xf["@@transducer/init"]()},result:function(o){return this.xf["@@transducer/result"](o)}};var qe=function(){function o(e,n){this.xf=n,this.f=e}return o.prototype["@@transducer/init"]=O.init,o.prototype["@@transducer/result"]=O.result,o.prototype["@@transducer/step"]=function(e,n){return this.xf["@@transducer/step"](e,this.f(n))},o}(),Ke=p(function(e,n){return new qe(e,n)}),Gt=Ke;t();r();t();r();function q(o,e,n){return function(){for(var f=[],c=0,l=o,m=0;m<e.length||c<arguments.length;){var _;m<e.length&&(!x(e[m])||c>=arguments.length)?_=e[m]:(_=arguments[c],c+=1),f[m]=_,x(_)||(l-=1),m+=1}return l<=0?n.apply(this,f):D(l,q(o,f,n))}}var Xe=p(function(e,n){return e===1?d(n):D(e,q(e,[],n))}),E=Xe;t();r();t();r();function b(o,e){return Object.prototype.hasOwnProperty.call(e,o)}t();r();var Ht=Object.prototype.toString,Ve=function(){return Ht.call(arguments)==="[object Arguments]"?function(e){return Ht.call(e)==="[object Arguments]"}:function(e){return b("callee",e)}}(),Yr=Ve;var ze=!{toString:null}.propertyIsEnumerable("toString"),qt=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Kt=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),Ye=function(e,n){for(var f=0;f<e.length;){if(e[f]===n)return!0;f+=1}return!1},$e=typeof Object.keys=="function"&&!Kt?d(function(e){return Object(e)!==e?[]:Object.keys(e)}):d(function(e){if(Object(e)!==e)return[];var n,f,c=[],l=Kt&&Yr(e);for(n in e)b(n,e)&&(!l||n!=="length")&&(c[c.length]=n);if(ze)for(f=qt.length-1;f>=0;)n=qt[f],b(n,e)&&!Ye(c,n)&&(c[c.length]=n),f-=1;return c}),C=$e;var Je=p(I(["fantasy-land/map","map"],Gt,function(e,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return E(n.length,function(){return e.call(this,n.apply(this,arguments))});case"[object Object]":return T(function(f,c){return f[c]=e(n[c]),f},{},C(n));default:return rr(e,n)}})),L=Je;t();r();t();r();var K=Number.isInteger||function(e){return e<<0===e};t();r();var Ze=p(function(e,n){var f=e<0?n.length+e:e;return z(n)?n.charAt(f):n[f]}),X=Ze;var Qe=p(function(e,n){if(n!=null)return K(e)?X(e,n):n[e]}),G=Qe;t();r();t();r();function h(o){return function e(n,f,c){switch(arguments.length){case 0:return e;case 1:return x(n)?e:p(function(l,m){return o(n,l,m)});case 2:return x(n)&&x(f)?e:x(n)?p(function(l,m){return o(l,f,m)}):x(f)?p(function(l,m){return o(n,l,m)}):d(function(l){return o(n,f,l)});default:return x(n)&&x(f)&&x(c)?e:x(n)&&x(f)?p(function(l,m){return o(l,m,c)}):x(n)&&x(c)?p(function(l,m){return o(l,f,m)}):x(f)&&x(c)?p(function(l,m){return o(n,l,m)}):x(n)?d(function(l){return o(l,f,c)}):x(f)?d(function(l){return o(n,l,c)}):x(c)?d(function(l){return o(n,f,l)}):o(n,f,c)}}}var ro=h(T),k=ro;t();r();t();r();var to=p(function(e,n){return n>e?n:e}),Y=to;t();r();var eo=p(function(e,n){return L(G(e),n)}),tr=eo;var oo=d(function(e){return E(k(Y,0,tr("length",e)),function(){for(var n=0,f=e.length;n<f;){if(!e[n].apply(this,arguments))return!1;n+=1}return!0})}),no=oo;t();r();t();r();t();r();function j(o){return o&&o["@@transducer/reduced"]?o:{"@@transducer/value":o,"@@transducer/reduced":!0}}var io=function(){function o(e,n){this.xf=n,this.f=e,this.any=!1}return o.prototype["@@transducer/init"]=O.init,o.prototype["@@transducer/result"]=function(e){return this.any||(e=this.xf["@@transducer/step"](e,!1)),this.xf["@@transducer/result"](e)},o.prototype["@@transducer/step"]=function(e,n){return this.f(n)&&(this.any=!0,e=j(this.xf["@@transducer/step"](e,!0))),e},o}(),ao=p(function(e,n){return new io(e,n)}),Xt=ao;var so=p(I(["any"],Xt,function(e,n){for(var f=0;f<n.length;){if(e(n[f]))return!0;f+=1}return!1})),uo=so;t();r();var fo=d(function(e){return E(k(Y,0,tr("length",e)),function(){for(var n=0,f=e.length;n<f;){if(e[n].apply(this,arguments))return!0;n+=1}return!1})}),co=fo;t();r();t();r();function er(o){var e=Object.prototype.toString.call(o);return e==="[object Function]"||e==="[object AsyncFunction]"||e==="[object GeneratorFunction]"||e==="[object AsyncGeneratorFunction]"}t();r();var po=p(function(e,n){return e&&n}),$r=po;t();r();t();r();t();r();t();r();function P(o,e){o=o||[],e=e||[];var n,f=o.length,c=e.length,l=[];for(n=0;n<f;)l[l.length]=o[n],n+=1;for(n=0;n<c;)l[l.length]=e[n],n+=1;return l}var lo=p(function(e,n){return typeof n["fantasy-land/ap"]=="function"?n["fantasy-land/ap"](e):typeof e.ap=="function"?e.ap(n):typeof e=="function"?function(f){return e(f)(n(f))}:T(function(f,c){return P(f,L(c,n))},[],e)}),Rr=lo;var mo=p(function(e,n){var f=E(e,n);return E(e,function(){return T(Rr,L(f,arguments[0]),Array.prototype.slice.call(arguments,1))})}),Jr=mo;var _o=d(function(e){return Jr(e.length,e)}),fr=_o;var ho=p(function(e,n){return er(e)?function(){return e.apply(this,arguments)&&n.apply(this,arguments)}:fr($r)(e,n)}),Zr=ho;t();r();t();r();var yo=d(function(e){return!e}),Qr=yo;var go=fr(Qr),rt=go;t();r();t();r();function tt(o,e){return function(){return e.call(this,o.apply(this,arguments))}}t();r();t();r();function $(o,e){return function(){var n=arguments.length;if(n===0)return e();var f=arguments[n-1];return N(f)||typeof f[o]!="function"?e.apply(this,arguments):f[o].apply(f,Array.prototype.slice.call(arguments,0,n-1))}}t();r();var xo=h($("slice",function(e,n,f){return Array.prototype.slice.call(f,e,n)})),M=xo;var vo=d($("tail",M(1,1/0))),mr=vo;function et(){if(arguments.length===0)throw new Error("pipe requires at least one argument");return D(arguments[0].length,k(tt,arguments[0],mr(arguments)))}t();r();var Io=X(0),ot=Io;t();r();t();r();function dr(o){return o}var Oo=d(dr),_r=Oo;t();r();var Ao=p(function(e,n){if(n.length<=0)return _r;var f=ot(n),c=mr(n);return D(f.length,function(){return T(function(l,m){return e.call(this,m,l)},f.apply(this,arguments),c)})}),Vt=Ao;t();r();t();r();function hr(o,e){for(var n=0,f=e.length,c=[];n<f;)o(e[n])&&(c[c.length]=e[n]),n+=1;return c}t();r();function or(o){return Object.prototype.toString.call(o)==="[object Object]"}t();r();var So=function(){function o(e,n){this.xf=n,this.f=e}return o.prototype["@@transducer/init"]=O.init,o.prototype["@@transducer/result"]=O.result,o.prototype["@@transducer/step"]=function(e,n){return this.f(n)?this.xf["@@transducer/step"](e,n):e},o}(),Eo=p(function(e,n){return new So(e,n)}),zt=Eo;var To=p(I(["fantasy-land/filter","filter"],zt,function(o,e){return or(e)?T(function(n,f){return o(e[f])&&(n[f]=e[f]),n},{},C(e)):hr(o,e)})),nt=To;t();r();var bo=d(function(e){return E(e.length,e)}),it=bo;t();r();t();r();function Lr(o){return function e(n){for(var f,c,l,m=[],_=0,y=n.length;_<y;){if(ur(n[_]))for(f=o?e(n[_]):n[_],l=0,c=f.length;l<c;)m[m.length]=f[l],l+=1;else m[m.length]=n[_];_+=1}return m}}var wo=d(Lr(!0)),No=wo;t();r();var Do=h(function(e,n,f){return E(Math.max(e.length,n.length,f.length),function(){return e.apply(this,arguments)?n.apply(this,arguments):f.apply(this,arguments)})}),Co=Do;t();r();var Ro=p(function(e,n){return n instanceof e||n!=null&&(n.constructor===e||e.name==="Object"&&typeof n=="object")}),yr=Ro;t();r();t();r();t();r();t();r();function Pr(o){for(var e=[],n;!(n=o.next()).done;)e.push(n.value);return e}t();r();function J(o,e,n){for(var f=0,c=n.length;f<c;){if(o(e,n[f]))return!0;f+=1}return!1}t();r();function at(o){var e=String(o).match(/^function (\w*)/);return e==null?"":e[1]}t();r();function Lo(o,e){return o===e?o!==0||1/o===1/e:o!==o&&e!==e}var gr=typeof Object.is=="function"?Object.is:Lo;t();r();var Po=d(function(e){return e===null?"Null":e===void 0?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}),xr=Po;function Yt(o,e,n,f){var c=Pr(o),l=Pr(e);function m(_,y){return vr(_,y,n.slice(),f.slice())}return!J(function(_,y){return!J(m,y,_)},l,c)}function vr(o,e,n,f){if(gr(o,e))return!0;var c=xr(o);if(c!==xr(e))return!1;if(typeof o["fantasy-land/equals"]=="function"||typeof e["fantasy-land/equals"]=="function")return typeof o["fantasy-land/equals"]=="function"&&o["fantasy-land/equals"](e)&&typeof e["fantasy-land/equals"]=="function"&&e["fantasy-land/equals"](o);if(typeof o.equals=="function"||typeof e.equals=="function")return typeof o.equals=="function"&&o.equals(e)&&typeof e.equals=="function"&&e.equals(o);switch(c){case"Arguments":case"Array":case"Object":if(typeof o.constructor=="function"&&at(o.constructor)==="Promise")return o===e;break;case"Boolean":case"Number":case"String":if(!(typeof o==typeof e&&gr(o.valueOf(),e.valueOf())))return!1;break;case"Date":if(!gr(o.valueOf(),e.valueOf()))return!1;break;case"Error":return o.name===e.name&&o.message===e.message;case"RegExp":if(!(o.source===e.source&&o.global===e.global&&o.ignoreCase===e.ignoreCase&&o.multiline===e.multiline&&o.sticky===e.sticky&&o.unicode===e.unicode))return!1;break}for(var l=n.length-1;l>=0;){if(n[l]===o)return f[l]===e;l-=1}switch(c){case"Map":return o.size!==e.size?!1:Yt(o.entries(),e.entries(),n.concat([o]),f.concat([e]));case"Set":return o.size!==e.size?!1:Yt(o.values(),e.values(),n.concat([o]),f.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var m=C(o);if(m.length!==C(e).length)return!1;var _=n.concat([o]),y=f.concat([e]);for(l=m.length-1;l>=0;){var v=m[l];if(!(b(v,e)&&vr(e[v],o[v],_,y)))return!1;l-=1}return!0}var Bo=p(function(e,n){return vr(e,n,[],[])}),B=Bo;var ko=h(function(e,n,f){return B(n,G(e,f))}),Mo=ko;t();r();var Wo=h(function(e,n,f){return yr(e,G(n,f))}),Uo=Wo;t();r();var Ir=`	
\v\f\r                　\u2028\u2029\uFEFF`,Fo="​",jo=typeof String.prototype.trim=="function",Go=!jo||Ir.trim()||!Fo.trim()?d(function(e){var n=new RegExp("^["+Ir+"]["+Ir+"]*"),f=new RegExp("["+Ir+"]["+Ir+"]*$");return e.replace(n,"").replace(f,"")}):d(function(e){return e.trim()}),Ho=Go;t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();var Or=function(e){return(e<10?"0":"")+e},Jh=typeof Date.prototype.toISOString=="function"?function(e){return e.toISOString()}:function(e){return e.getUTCFullYear()+"-"+Or(e.getUTCMonth()+1)+"-"+Or(e.getUTCDate())+"T"+Or(e.getUTCHours())+":"+Or(e.getUTCMinutes())+":"+Or(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();function un(o){if(o==null)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(o),n=1,f=arguments.length;n<f;){var c=arguments[n];if(c!=null)for(var l in c)b(l,c)&&(e[l]=c[l]);n+=1}return e}var Ar=typeof Object.assign=="function"?Object.assign:un;t();r();var fn=p(function(e,n){var f={};return f[e]=n,f}),ne=fn;t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();var gn=p(function(e,n){return Ar({},e,n)}),ht=gn;t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();t();r();function jn(o,{getInitialState:e},n=i.storage.local){let f=new Promise((A,w)=>n.get(o,F=>F[o]===void 0?e().then(Q=>n.set({[o]:Q},A)).catch(w):A())),c=()=>new Promise(A=>n.get(o,w=>A(w[o]??{}))),l=(A,w,F)=>new Promise(Q=>n.set({[o]:{...A,[w]:F}},()=>Q(A))),m=A=>new Promise(w=>n.set({[o]:A},w)),_=Vr(1),y=async()=>f.then(()=>_(c)),v=A=>f.then(()=>_(c)).then(w=>w[A]),R=async A=>f.then(()=>_(()=>m(A))),W=async(A,w)=>f.then(()=>_(async()=>{let F=await c(),Q=typeof w=="function"?w(F[A]):w,kt=Zr(yr(Object),rt(Array.isArray));return typeof w!="function"&&kt(Q)&&kt(F)?l(F,A,ht(F[A],Q)):l(F,A,Q)})),U=[],V=A=>(U.push(A),()=>{U=U.filter(w=>w!==A)});return i.storage.onChanged.addListener(A=>{Object.keys(A).includes(o)&&y().then(w=>{U.forEach(F=>F(w))})}),{get:v,getAll:y,set:W,setAll:R,listen:V}}function ue(o,{getInitialState:e}){return jn(o,{getInitialState:e})}t();r();var cr=ue("logger",{getInitialState:async()=>({enableRequestLogging:!0,enableLogging:!0})}),ce={red:"#E06C75",green:"#98C379",yellow:"#E5C07B",blue:"#61AFEF",purple:"#C678DD",cyan:"#56B6C2",orange:"#e08d6c",lime:"#a9c379"},fe=Object.values(ce),Gn=o=>fe[Array.from(o).map(e=>e.charCodeAt(0)).reduce((e,n)=>e+n,0)%fe.length],FH=(o=10)=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(16).slice(0,o),Mr=!0;cr.get("enableRequestLogging").then(o=>{o===!1&&(Mr=o)});function jH({hash:o,label:e,labelCSS:n,path:f,logInfo:c}){let l=performance.now();return()=>{}}var Wr=!0;cr.get("enableLogging").then(o=>{Wr=o});function GH(o,e="blue"){let n=(f,c)=>(...l)=>{Wr&&console[f](o?`%c${o}:`:`%c${f[0].toUpperCase()}${f.slice(1)}:`,`color: ${ce[o?e:c]}; font-weight: bold;`,...l)};return{debug:n("debug","cyan"),info:n("info","green"),warn:n("warn","yellow"),error:n("error","red")}}globalThis.enableRequestLogging=async()=>{await cr.set("enableRequestLogging",!0),Mr=!0};globalThis.disableRequestLogging=async()=>{await cr.set("enableRequestLogging",!1),Mr=!1};globalThis.enableLogging=async()=>{await cr.set("enableLogging",!0),Wr=!0};globalThis.disableLogging=async()=>{await cr.set("enableLogging",!1),Wr=!1};t();r();t();r();t();r();var le=function(o){let e=[],n=0;for(let f=0;f<o.length;f++){let c=o.charCodeAt(f);c<128?e[n++]=c:c<2048?(e[n++]=c>>6|192,e[n++]=c&63|128):(c&64512)===55296&&f+1<o.length&&(o.charCodeAt(f+1)&64512)===56320?(c=65536+((c&1023)<<10)+(o.charCodeAt(++f)&1023),e[n++]=c>>18|240,e[n++]=c>>12&63|128,e[n++]=c>>6&63|128,e[n++]=c&63|128):(e[n++]=c>>12|224,e[n++]=c>>6&63|128,e[n++]=c&63|128)}return e},Hn=function(o){let e=[],n=0,f=0;for(;n<o.length;){let c=o[n++];if(c<128)e[f++]=String.fromCharCode(c);else if(c>191&&c<224){let l=o[n++];e[f++]=String.fromCharCode((c&31)<<6|l&63)}else if(c>239&&c<365){let l=o[n++],m=o[n++],_=o[n++],y=((c&7)<<18|(l&63)<<12|(m&63)<<6|_&63)-65536;e[f++]=String.fromCharCode(55296+(y>>10)),e[f++]=String.fromCharCode(56320+(y&1023))}else{let l=o[n++],m=o[n++];e[f++]=String.fromCharCode((c&15)<<12|(l&63)<<6|m&63)}}return e.join("")},me={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(o,e){if(!Array.isArray(o))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,f=[];for(let c=0;c<o.length;c+=3){let l=o[c],m=c+1<o.length,_=m?o[c+1]:0,y=c+2<o.length,v=y?o[c+2]:0,R=l>>2,W=(l&3)<<4|_>>4,U=(_&15)<<2|v>>6,V=v&63;y||(V=64,m||(U=64)),f.push(n[R],n[W],n[U],n[V])}return f.join("")},encodeString(o,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(o):this.encodeByteArray(le(o),e)},decodeString(o,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(o):Hn(this.decodeStringToByteArray(o,e))},decodeStringToByteArray(o,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,f=[];for(let c=0;c<o.length;){let l=n[o.charAt(c++)],_=c<o.length?n[o.charAt(c)]:0;++c;let v=c<o.length?n[o.charAt(c)]:64;++c;let W=c<o.length?n[o.charAt(c)]:64;if(++c,l==null||_==null||v==null||W==null)throw Error();let U=l<<2|_>>4;if(f.push(U),v!==64){let V=_<<4&240|v>>2;if(f.push(V),W!==64){let A=v<<6&192|W;f.push(A)}}}return f},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let o=0;o<this.ENCODED_VALS.length;o++)this.byteToCharMap_[o]=this.ENCODED_VALS.charAt(o),this.charToByteMap_[this.byteToCharMap_[o]]=o,this.byteToCharMapWebSafe_[o]=this.ENCODED_VALS_WEBSAFE.charAt(o),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[o]]=o,o>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(o)]=o,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(o)]=o)}}},qn=function(o){let e=le(o);return me.encodeByteArray(e,!0)},Er=function(o){return qn(o).replace(/\./g,"")},Kn=function(o){try{return me.decodeString(o,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XH(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function VH(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zH(){let o=typeof chrome=="object"?chrome.runtime:typeof i=="object"?i.runtime:void 0;return typeof o=="object"&&o.id!==void 0}function YH(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $H(){let o=de();return o.indexOf("MSIE ")>=0||o.indexOf("Trident/")>=0}function _e(){return typeof indexedDB=="object"}function he(){return new Promise((o,e)=>{try{let n=!0,f="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(f);c.onsuccess=()=>{c.result.close(),n||self.indexedDB.deleteDatabase(f),o(!0)},c.onupgradeneeded=()=>{n=!1},c.onerror=()=>{var l;e(((l=c.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}function Xn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Vn=()=>Xn().__FIREBASE_DEFAULTS__,zn=()=>{if(typeof process>"u"||typeof process.env>"u")return;let o=process.env.__FIREBASE_DEFAULTS__;if(o)return JSON.parse(o)},Yn=()=>{if(typeof document>"u")return;let o;try{o=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=o&&Kn(o[1]);return e&&JSON.parse(e)},xt=()=>{try{return Vn()||zn()||Yn()}catch(o){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${o}`);return}},$n=o=>{var e,n;return(n=(e=xt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[o]},JH=o=>{let e=$n(o);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let f=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),f]:[e.substring(0,n),f]},ye=()=>{var o;return(o=xt())===null||o===void 0?void 0:o.config},ZH=o=>{var e;return(e=xt())===null||e===void 0?void 0:e[`_${o}`]};var Ur=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,f)=>{n?this.reject(n):this.resolve(f),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,f))}}};function QH(o,e){if(o.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},f=e||"demo-project",c=o.iat||0,l=o.sub||o.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let m=Object.assign({iss:`https://securetoken.google.com/${f}`,aud:f,iat:c,exp:c+3600,auth_time:c,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},o),_="";return[Er(JSON.stringify(n)),Er(JSON.stringify(m)),_].join(".")}var Jn="FirebaseError",nr=class o extends Error{constructor(e,n,f){super(n),this.code=e,this.customData=f,this.name=Jn,Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}},Tr=class{constructor(e,n,f){this.service=e,this.serviceName=n,this.errors=f}create(e,...n){let f=n[0]||{},c=`${this.service}/${e}`,l=this.errors[e],m=l?Zn(l,f):"Error",_=`${this.serviceName}: ${m} (${c}).`;return new nr(c,_,f)}};function Zn(o,e){return o.replace(Qn,(n,f)=>{let c=e[f];return c!=null?String(c):`<${f}?>`})}var Qn=/\{\$([^}]+)}/g;function Fr(o,e){if(o===e)return!0;let n=Object.keys(o),f=Object.keys(e);for(let c of n){if(!f.includes(c))return!1;let l=o[c],m=e[c];if(pe(l)&&pe(m)){if(!Fr(l,m))return!1}else if(l!==m)return!1}for(let c of f)if(!n.includes(c))return!1;return!0}function pe(o){return o!==null&&typeof o=="object"}function rq(o){let e=[];for(let[n,f]of Object.entries(o))Array.isArray(f)?f.forEach(c=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(c))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(f));return e.length?"&"+e.join("&"):""}function tq(o){let e={};return o.replace(/^\?/,"").split("&").forEach(f=>{if(f){let[c,l]=f.split("=");e[decodeURIComponent(c)]=decodeURIComponent(l)}}),e}function eq(o){let e=o.indexOf("?");if(!e)return"";let n=o.indexOf("#",e);return o.substring(e,n>0?n:void 0)}function oq(o,e){let n=new gt(o,e);return n.subscribe.bind(n)}var gt=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(f=>{this.error(f)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,f){let c;if(e===void 0&&n===void 0&&f===void 0)throw new Error("Missing Observer.");ri(e,["next","error","complete"])?c=e:c={next:e,error:n,complete:f},c.next===void 0&&(c.next=yt),c.error===void 0&&(c.error=yt),c.complete===void 0&&(c.complete=yt);let l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?c.error(this.finalError):c.complete()}catch{}}),this.observers.push(c),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(f){typeof console<"u"&&console.error&&console.error(f)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function ri(o,e){if(typeof o!="object"||o===null)return!1;for(let n of e)if(n in o&&typeof o[n]=="function")return!0;return!1}function yt(){}var nq=4*60*60*1e3;function iq(o){return o&&o._delegate?o._delegate:o}var ar=class{constructor(e,n,f){this.name=e,this.instanceFactory=n,this.type=f,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var ir="[DEFAULT]";var vt=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let f=new Ur;if(this.instancesDeferred.set(n,f),this.isInitialized(n)||this.shouldAutoInitialize())try{let c=this.getOrInitializeService({instanceIdentifier:n});c&&f.resolve(c)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;let f=this.normalizeInstanceIdentifier(e?.identifier),c=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(f)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:f})}catch(l){if(c)return null;throw l}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ei(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(let[n,f]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(n);try{let l=this.getOrInitializeService({instanceIdentifier:c});f.resolve(l)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,f=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(f))throw Error(`${this.name}(${f}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let c=this.getOrInitializeService({instanceIdentifier:f,options:n});for(let[l,m]of this.instancesDeferred.entries()){let _=this.normalizeInstanceIdentifier(l);f===_&&m.resolve(c)}return c}onInit(e,n){var f;let c=this.normalizeInstanceIdentifier(n),l=(f=this.onInitCallbacks.get(c))!==null&&f!==void 0?f:new Set;l.add(e),this.onInitCallbacks.set(c,l);let m=this.instances.get(c);return m&&e(m,c),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){let f=this.onInitCallbacks.get(n);if(f)for(let c of f)try{c(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let f=this.instances.get(e);if(!f&&this.component&&(f=this.component.instanceFactory(this.container,{instanceIdentifier:ti(e),options:n}),this.instances.set(e,f),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(f,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,f)}catch{}return f||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function ti(o){return o===ir?void 0:o}function ei(o){return o.instantiationMode==="EAGER"}var jr=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new vt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};t();r();var oi=[],S;(function(o){o[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT"})(S||(S={}));var ni={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},ii=S.INFO,ai={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},si=(o,e,...n)=>{if(e<o.logLevel)return;let f=new Date().toISOString(),c=ai[e];if(c)console[c](`[${f}]  ${o.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Gr=class{constructor(e){this.name=e,this._logLevel=ii,this._logHandler=si,this._userLogHandler=null,oi.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ni[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}};t();r();t();r();var ui=(o,e)=>e.some(n=>o instanceof n),ge,xe;function fi(){return ge||(ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ci(){return xe||(xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ve=new WeakMap,Ot=new WeakMap,Ie=new WeakMap,It=new WeakMap,St=new WeakMap;function pi(o){let e=new Promise((n,f)=>{let c=()=>{o.removeEventListener("success",l),o.removeEventListener("error",m)},l=()=>{n(H(o.result)),c()},m=()=>{f(o.error),c()};o.addEventListener("success",l),o.addEventListener("error",m)});return e.then(n=>{n instanceof IDBCursor&&ve.set(n,o)}).catch(()=>{}),St.set(e,o),e}function li(o){if(Ot.has(o))return;let e=new Promise((n,f)=>{let c=()=>{o.removeEventListener("complete",l),o.removeEventListener("error",m),o.removeEventListener("abort",m)},l=()=>{n(),c()},m=()=>{f(o.error||new DOMException("AbortError","AbortError")),c()};o.addEventListener("complete",l),o.addEventListener("error",m),o.addEventListener("abort",m)});Ot.set(o,e)}var At={get(o,e,n){if(o instanceof IDBTransaction){if(e==="done")return Ot.get(o);if(e==="objectStoreNames")return o.objectStoreNames||Ie.get(o);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(o[e])},set(o,e,n){return o[e]=n,!0},has(o,e){return o instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in o}};function Oe(o){At=o(At)}function mi(o){return o===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let f=o.call(Hr(this),e,...n);return Ie.set(f,e.sort?e.sort():[e]),H(f)}:ci().includes(o)?function(...e){return o.apply(Hr(this),e),H(ve.get(this))}:function(...e){return H(o.apply(Hr(this),e))}}function di(o){return typeof o=="function"?mi(o):(o instanceof IDBTransaction&&li(o),ui(o,fi())?new Proxy(o,At):o)}function H(o){if(o instanceof IDBRequest)return pi(o);if(It.has(o))return It.get(o);let e=di(o);return e!==o&&(It.set(o,e),St.set(e,o)),e}var Hr=o=>St.get(o);function Se(o,e,{blocked:n,upgrade:f,blocking:c,terminated:l}={}){let m=indexedDB.open(o,e),_=H(m);return f&&m.addEventListener("upgradeneeded",y=>{f(H(m.result),y.oldVersion,y.newVersion,H(m.transaction))}),n&&m.addEventListener("blocked",()=>n()),_.then(y=>{l&&y.addEventListener("close",()=>l()),c&&y.addEventListener("versionchange",()=>c())}).catch(()=>{}),_}var _i=["get","getKey","getAll","getAllKeys","count"],hi=["put","add","delete","clear"],Et=new Map;function Ae(o,e){if(!(o instanceof IDBDatabase&&!(e in o)&&typeof e=="string"))return;if(Et.get(e))return Et.get(e);let n=e.replace(/FromIndex$/,""),f=e!==n,c=hi.includes(n);if(!(n in(f?IDBIndex:IDBObjectStore).prototype)||!(c||_i.includes(n)))return;let l=async function(m,..._){let y=this.transaction(m,c?"readwrite":"readonly"),v=y.store;return f&&(v=v.index(_.shift())),(await Promise.all([v[n](..._),c&&y.done]))[0]};return Et.set(e,l),l}Oe(o=>({...o,get:(e,n,f)=>Ae(e,n)||o.get(e,n,f),has:(e,n)=>!!Ae(e,n)||o.has(e,n)}));var wt=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yi(n)){let f=n.getImmediate();return`${f.library}/${f.version}`}else return null}).filter(n=>n).join(" ")}};function yi(o){let e=o.getComponent();return e?.type==="VERSION"}var Nt="@firebase/app",Ee="0.8.4";var sr=new Gr("@firebase/app"),gi="@firebase/app-compat",xi="@firebase/analytics-compat",vi="@firebase/analytics",Ii="@firebase/app-check-compat",Oi="@firebase/app-check",Ai="@firebase/auth",Si="@firebase/auth-compat",Ei="@firebase/database",Ti="@firebase/database-compat",bi="@firebase/functions",wi="@firebase/functions-compat",Ni="@firebase/installations",Di="@firebase/installations-compat",Ci="@firebase/messaging",Ri="@firebase/messaging-compat",Li="@firebase/performance",Pi="@firebase/performance-compat",Bi="@firebase/remote-config",ki="@firebase/remote-config-compat",Mi="@firebase/storage",Wi="@firebase/storage-compat",Ui="@firebase/firestore",Fi="@firebase/firestore-compat",ji="firebase",Gi="9.14.0";var Dt="[DEFAULT]",Hi={[Nt]:"fire-core",[gi]:"fire-core-compat",[vi]:"fire-analytics",[xi]:"fire-analytics-compat",[Oi]:"fire-app-check",[Ii]:"fire-app-check-compat",[Ai]:"fire-auth",[Si]:"fire-auth-compat",[Ei]:"fire-rtdb",[Ti]:"fire-rtdb-compat",[bi]:"fire-fn",[wi]:"fire-fn-compat",[Ni]:"fire-iid",[Di]:"fire-iid-compat",[Ci]:"fire-fcm",[Ri]:"fire-fcm-compat",[Li]:"fire-perf",[Pi]:"fire-perf-compat",[Bi]:"fire-rc",[ki]:"fire-rc-compat",[Mi]:"fire-gcs",[Wi]:"fire-gcs-compat",[Ui]:"fire-fst",[Fi]:"fire-fst-compat","fire-js":"fire-js",[ji]:"fire-js-all"};var qr=new Map,Ct=new Map;function qi(o,e){try{o.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${o.name}`,n)}}function Rt(o){let e=o.name;if(Ct.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Ct.set(e,o);for(let n of qr.values())qi(n,o);return!0}function Dq(o,e){let n=o.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),o.container.getProvider(e)}var Ki={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Z=new Tr("app","Firebase",Ki);var Lt=class{constructor(e,n,f){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=f,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}};var Cq=Gi;function Xi(o,e={}){let n=o;typeof e!="object"&&(e={name:e});let f=Object.assign({name:Dt,automaticDataCollectionEnabled:!1},e),c=f.name;if(typeof c!="string"||!c)throw Z.create("bad-app-name",{appName:String(c)});if(n||(n=ye()),!n)throw Z.create("no-options");let l=qr.get(c);if(l){if(Fr(n,l.options)&&Fr(f,l.config))return l;throw Z.create("duplicate-app",{appName:c})}let m=new jr(c);for(let y of Ct.values())m.addComponent(y);let _=new Lt(n,f,m);return qr.set(c,_),_}function Rq(o=Dt){let e=qr.get(o);if(!e&&o===Dt)return Xi();if(!e)throw Z.create("no-app",{appName:o});return e}function Tt(o,e,n){var f;let c=(f=Hi[o])!==null&&f!==void 0?f:o;n&&(c+=`-${n}`);let l=c.match(/\s|\//),m=e.match(/\s|\//);if(l||m){let _=[`Unable to register library "${c}" with version "${e}":`];l&&_.push(`library name "${c}" contains illegal characters (whitespace or "/")`),l&&m&&_.push("and"),m&&_.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(_.join(" "));return}Rt(new ar(`${c}-version`,()=>({library:c,version:e}),"VERSION"))}var Vi="firebase-heartbeat-database",zi=1,br="firebase-heartbeat-store",bt=null;function Ne(){return bt||(bt=Se(Vi,zi,{upgrade:(o,e)=>{switch(e){case 0:o.createObjectStore(br)}}}).catch(o=>{throw Z.create("idb-open",{originalErrorMessage:o.message})})),bt}async function Yi(o){var e;try{return(await Ne()).transaction(br).objectStore(br).get(De(o))}catch(n){if(n instanceof nr)sr.warn(n.message);else{let f=Z.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});sr.warn(f.message)}}}async function Te(o,e){var n;try{let c=(await Ne()).transaction(br,"readwrite");return await c.objectStore(br).put(e,De(o)),c.done}catch(f){if(f instanceof nr)sr.warn(f.message);else{let c=Z.create("idb-set",{originalErrorMessage:(n=f)===null||n===void 0?void 0:n.message});sr.warn(c.message)}}}function De(o){return`${o.name}!${o.options.appId}`}var $i=1024,Ji=30*24*60*60*1e3,Pt=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Bt(n),this._heartbeatsCachePromise=this._storage.read().then(f=>(this._heartbeatsCache=f,f))}async triggerHeartbeat(){let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=be();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(c=>c.date===f)))return this._heartbeatsCache.heartbeats.push({date:f,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{let l=new Date(c.date).valueOf();return Date.now()-l<=Ji}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";let e=be(),{heartbeatsToSend:n,unsentEntries:f}=Zi(this._heartbeatsCache.heartbeats),c=Er(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,f.length>0?(this._heartbeatsCache.heartbeats=f,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}};function be(){return new Date().toISOString().substring(0,10)}function Zi(o,e=$i){let n=[],f=o.slice();for(let c of o){let l=n.find(m=>m.agent===c.agent);if(l){if(l.dates.push(c.date),we(n)>e){l.dates.pop();break}}else if(n.push({agent:c.agent,dates:[c.date]}),we(n)>e){n.pop();break}f=f.slice(1)}return{heartbeatsToSend:n,unsentEntries:f}}var Bt=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _e()?he().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yi(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){let c=await this.read();return Te(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:c.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){let c=await this.read();return Te(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...e.heartbeats]})}else return}};function we(o){return Er(JSON.stringify({version:2,heartbeats:o})).length}function Qi(o){Rt(new ar("platform-logger",e=>new wt(e),"PRIVATE")),Rt(new ar("heartbeat",e=>new Pt(e),"PRIVATE")),Tt(Nt,Ee,o),Tt(Nt,Ee,"esm2017"),Tt("fire-js","")}Qi("");t();r();var Kr=Re(Le()),Ce=class extends Kr.AbstractBoundaryMap{constructor(n){super();this.obj=n}entries(){return Object.entries(this.obj).map(([n,f])=>new Kr.BoundaryPair(n,f))}get(n){let f=this.obj[n];return f===void 0?null:f}hasKey(n){return!!this.obj[n]}keys(){return Object.keys(this.obj)}set(n,f){this.obj[n]=f}values(){return Object.values(this.obj)}};export{Dr as a,L as b,G as c,k as d,no as e,uo as f,co as g,Zr as h,rt as i,et as j,ot as k,_r as l,Vt as m,nt as n,it as o,No as p,Co as q,ne as r,yr as s,Mo as t,Uo as u,Ho as v,ra as w,ta as x,Mt as y,aa as z,Pe as A,Be as B,ke as C,sa as D,ua as E,fa as F,ca as G,pa as H,Vr as I,ue as J,FH as K,jH as L,GH as M,wr as N,Nr as O,Oa as P,Aa as Q,Sa as R,Ea as S,Ta as T,ba as U,Kn as V,de as W,XH as X,VH as Y,zH as Z,YH as _,$H as $,JH as aa,ZH as ba,QH as ca,nr as da,Tr as ea,Fr as fa,rq as ga,tq as ha,eq as ia,oq as ja,iq as ka,ar as la,S as ma,Gr as na,Rt as oa,Dq as pa,Cq as qa,Xi as ra,Rq as sa,Tt as ta,Ce as ua,La as va,Pa as wa};
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=chunk-KJG3EQPP.js.map
