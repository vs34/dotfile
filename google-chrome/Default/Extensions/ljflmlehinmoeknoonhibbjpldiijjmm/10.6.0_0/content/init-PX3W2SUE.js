import{a as mi}from"./chunk-TLMW4CFF.js";import{a as fi}from"./chunk-2FG3LFIK.js";import{a as ui}from"./chunk-KUDMPC3Q.js";import"./chunk-BGOOWEE6.js";import{b as ci,h as di,j as ge}from"./chunk-IBQ36UGR.js";import"./chunk-ELOZQXNY.js";import"./chunk-C3I6GVRE.js";import"./chunk-HEEDIM7V.js";import"./chunk-46663WCP.js";import"./chunk-RS2PUYJF.js";import{a as hi}from"./chunk-IYRDPVLC.js";import"./chunk-6NRTMNN7.js";import{a as pi}from"./chunk-BBOY5F3V.js";import"./chunk-EXTJNHZ3.js";import{a as li}from"./chunk-3YKS52JG.js";import"./chunk-LC7JTIGZ.js";import"./chunk-XGYFSZQ6.js";import"./chunk-H5THYEAK.js";import"./chunk-QN4RGOLN.js";import"./chunk-HY6N2ZOB.js";import"./chunk-7UQMA7CF.js";import"./chunk-7C54YT6Q.js";import"./chunk-JOEBXTX7.js";import"./chunk-A7YAUIHP.js";import"./chunk-FVAPUUYJ.js";import"./chunk-X5OSF7OY.js";import"./chunk-UYYFRKUS.js";import"./chunk-WYLZIWPZ.js";import"./chunk-LW72LJYS.js";import"./chunk-FSRBHFBF.js";import"./chunk-ECF6E4RL.js";import"./chunk-WRXKWN4M.js";import"./chunk-K5UBOOCY.js";import"./chunk-NI3TKWPM.js";import"./chunk-GQDQ63G2.js";import{a as Bt}from"./chunk-TQDQJ2R3.js";import{b as Je,h as ti}from"./chunk-T2I5CTNL.js";import{a as si}from"./chunk-SABTKPAZ.js";import"./chunk-L5VE55SK.js";import"./chunk-4QGSHI6F.js";import"./chunk-26DQFRDO.js";import{$ as ii,I as ei,Ja as Ut,Ka as jt,La as me,Yb as ni,aa as ue,ba as ri,h as Wt,i as Mt,j as _t,k as Qe,l as Ke,m as Ze,nb as oi,ta as ai,u as fe}from"./chunk-MXAKFU6F.js";import"./chunk-TOYWBR4G.js";import"./chunk-AEJIAELE.js";import"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{b as Fe,d as de,h as ot,j as k,o as nt}from"./chunk-67P5Y4J4.js";var gi=Fe((ve,be)=>{nt();ot();(function(u,w){typeof ve=="object"&&typeof be<"u"?be.exports=w():typeof define=="function"&&define.amd?define(w):(u=typeof globalThis<"u"?globalThis:u||self,u.Cropper=w())})(ve,function(){"use strict";function u(r,t){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),i.push.apply(i,e)}return i}function w(r){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?u(Object(i),!0).forEach(function(e){H(r,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}function m(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(t){return typeof t}:m=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(r)}function g(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function M(r,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function S(r,t,i){return t&&M(r.prototype,t),i&&M(r,i),r}function H(r,t,i){return t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i,r}function U(r){return J(r)||q(r)||et(r)||z()}function J(r){if(Array.isArray(r))return N(r)}function q(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function et(r,t){if(r){if(typeof r=="string")return N(r,t);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return N(r,t)}}function N(r,t){(t==null||t>r.length)&&(t=r.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=r[i];return e}function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I=typeof window<"u"&&typeof window.document<"u",C=I?window:{},F=I&&C.document.documentElement?"ontouchstart"in C.document.documentElement:!1,Y=I?"PointerEvent"in C:!1,x="cropper",st="all",ht="crop",ct="move",Q="zoom",X="e",W="w",it="s",dt="n",St="ne",Nt="nw",Rt="se",At="sw",Zt="".concat(x,"-crop"),xe="".concat(x,"-disabled"),j="".concat(x,"-hidden"),Ee="".concat(x,"-hide"),Ri="".concat(x,"-invisible"),Pt="".concat(x,"-modal"),Jt="".concat(x,"-move"),kt="".concat(x,"Action"),Yt="".concat(x,"Preview"),te="crop",De="move",Me="none",ee="crop",ie="cropend",re="cropmove",ae="cropstart",Ce="dblclick",Ai=F?"touchstart":"mousedown",ki=F?"touchmove":"mousemove",zi=F?"touchend touchcancel":"mouseup",Te=Y?"pointerdown":Ai,Oe=Y?"pointermove":ki,Se=Y?"pointerup pointercancel":zi,Ne="ready",Re="resize",Ae="wheel",oe="zoom",ke="image/jpeg",Ii=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,_i=/^data:/,Bi=/^data:image\/jpeg;base64,/,Li=/^img|canvas$/i,ze=200,Ie=100,_e={viewMode:0,dragMode:te,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:ze,minContainerHeight:Ie,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Pi='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',Yi=Number.isNaN||C.isNaN;function v(r){return typeof r=="number"&&!Yi(r)}var Be=function(t){return t>0&&t<1/0};function ne(r){return typeof r>"u"}function gt(r){return m(r)==="object"&&r!==null}var Xi=Object.prototype.hasOwnProperty;function yt(r){if(!gt(r))return!1;try{var t=r.constructor,i=t.prototype;return t&&i&&Xi.call(i,"isPrototypeOf")}catch{return!1}}function $(r){return typeof r=="function"}var Hi=Array.prototype.slice;function Le(r){return Array.from?Array.from(r):Hi.call(r)}function R(r,t){return r&&$(t)&&(Array.isArray(r)||v(r.length)?Le(r).forEach(function(i,e){t.call(r,i,e,r)}):gt(r)&&Object.keys(r).forEach(function(i){t.call(r,r[i],i,r)})),r}var T=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];return gt(t)&&e.length>0&&e.forEach(function(a){gt(a)&&Object.keys(a).forEach(function(o){t[o]=a[o]})}),t},Wi=/\.\d*(?:0|9){12}\d*$/;function xt(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Wi.test(r)?Math.round(r*t)/t:r}var Ui=/^width|height|left|top|marginLeft|marginTop$/;function ft(r,t){var i=r.style;R(t,function(e,n){Ui.test(n)&&v(e)&&(e="".concat(e,"px")),i[n]=e})}function ji(r,t){return r.classList?r.classList.contains(t):r.className.indexOf(t)>-1}function L(r,t){if(t){if(v(r.length)){R(r,function(e){L(e,t)});return}if(r.classList){r.classList.add(t);return}var i=r.className.trim();i?i.indexOf(t)<0&&(r.className="".concat(i," ").concat(t)):r.className=t}}function rt(r,t){if(t){if(v(r.length)){R(r,function(i){rt(i,t)});return}if(r.classList){r.classList.remove(t);return}r.className.indexOf(t)>=0&&(r.className=r.className.replace(t,""))}}function Et(r,t,i){if(t){if(v(r.length)){R(r,function(e){Et(e,t,i)});return}i?L(r,t):rt(r,t)}}var $i=/([a-z\d])([A-Z])/g;function se(r){return r.replace($i,"$1-$2").toLowerCase()}function he(r,t){return gt(r[t])?r[t]:r.dataset?r.dataset[t]:r.getAttribute("data-".concat(se(t)))}function zt(r,t,i){gt(i)?r[t]=i:r.dataset?r.dataset[t]=i:r.setAttribute("data-".concat(se(t)),i)}function Vi(r,t){if(gt(r[t]))try{delete r[t]}catch{r[t]=void 0}else if(r.dataset)try{delete r.dataset[t]}catch{r.dataset[t]=void 0}else r.removeAttribute("data-".concat(se(t)))}var Pe=/\s\s*/,Ye=function(){var r=!1;if(I){var t=!1,i=function(){},e=Object.defineProperty({},"once",{get:function(){return r=!0,t},set:function(a){t=a}});C.addEventListener("test",i,e),C.removeEventListener("test",i,e)}return r}();function tt(r,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=i;t.trim().split(Pe).forEach(function(a){if(!Ye){var o=r.listeners;o&&o[a]&&o[a][i]&&(n=o[a][i],delete o[a][i],Object.keys(o[a]).length===0&&delete o[a],Object.keys(o).length===0&&delete r.listeners)}r.removeEventListener(a,n,e)})}function K(r,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=i;t.trim().split(Pe).forEach(function(a){if(e.once&&!Ye){var o=r.listeners,s=o===void 0?{}:o;n=function(){delete s[a][i],r.removeEventListener(a,n,e);for(var l=arguments.length,h=new Array(l),c=0;c<l;c++)h[c]=arguments[c];i.apply(r,h)},s[a]||(s[a]={}),s[a][i]&&r.removeEventListener(a,s[a][i],e),s[a][i]=n,r.listeners=s}r.addEventListener(a,n,e)})}function Dt(r,t,i){var e;return $(Event)&&$(CustomEvent)?e=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0}):(e=document.createEvent("CustomEvent"),e.initCustomEvent(t,!0,!0,i)),r.dispatchEvent(e)}function Xe(r){var t=r.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var ce=C.location,Gi=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function He(r){var t=r.match(Gi);return t!==null&&(t[1]!==ce.protocol||t[2]!==ce.hostname||t[3]!==ce.port)}function We(r){var t="timestamp=".concat(new Date().getTime());return r+(r.indexOf("?")===-1?"?":"&")+t}function It(r){var t=r.rotate,i=r.scaleX,e=r.scaleY,n=r.translateX,a=r.translateY,o=[];v(n)&&n!==0&&o.push("translateX(".concat(n,"px)")),v(a)&&a!==0&&o.push("translateY(".concat(a,"px)")),v(t)&&t!==0&&o.push("rotate(".concat(t,"deg)")),v(i)&&i!==1&&o.push("scaleX(".concat(i,")")),v(e)&&e!==1&&o.push("scaleY(".concat(e,")"));var s=o.length?o.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function qi(r){var t=w({},r),i=0;return R(r,function(e,n){delete t[n],R(t,function(a){var o=Math.abs(e.startX-a.startX),s=Math.abs(e.startY-a.startY),d=Math.abs(e.endX-a.endX),l=Math.abs(e.endY-a.endY),h=Math.sqrt(o*o+s*s),c=Math.sqrt(d*d+l*l),p=(c-h)/h;Math.abs(p)>Math.abs(i)&&(i=p)})}),i}function Xt(r,t){var i=r.pageX,e=r.pageY,n={endX:i,endY:e};return t?n:w({startX:i,startY:e},n)}function Fi(r){var t=0,i=0,e=0;return R(r,function(n){var a=n.startX,o=n.startY;t+=a,i+=o,e+=1}),t/=e,i/=e,{pageX:t,pageY:i}}function ut(r){var t=r.aspectRatio,i=r.height,e=r.width,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",a=Be(e),o=Be(i);if(a&&o){var s=i*t;n==="contain"&&s>e||n==="cover"&&s<e?i=e/t:e=i*t}else a?i=e/t:o&&(e=i*t);return{width:e,height:i}}function Qi(r){var t=r.width,i=r.height,e=r.degree;if(e=Math.abs(e)%180,e===90)return{width:i,height:t};var n=e%90*Math.PI/180,a=Math.sin(n),o=Math.cos(n),s=t*o+i*a,d=t*a+i*o;return e>90?{width:d,height:s}:{width:s,height:d}}function Ki(r,t,i,e){var n=t.aspectRatio,a=t.naturalWidth,o=t.naturalHeight,s=t.rotate,d=s===void 0?0:s,l=t.scaleX,h=l===void 0?1:l,c=t.scaleY,p=c===void 0?1:c,y=i.aspectRatio,b=i.naturalWidth,O=i.naturalHeight,E=e.fillColor,_=E===void 0?"transparent":E,P=e.imageSmoothingEnabled,A=P===void 0?!0:P,lt=e.imageSmoothingQuality,G=lt===void 0?"low":lt,f=e.maxWidth,D=f===void 0?1/0:f,B=e.maxHeight,Z=B===void 0?1/0:B,pt=e.minWidth,vt=pt===void 0?0:pt,bt=e.minHeight,mt=bt===void 0?0:bt,at=document.createElement("canvas"),V=at.getContext("2d"),wt=ut({aspectRatio:y,width:D,height:Z}),Ht=ut({aspectRatio:y,width:vt,height:mt},"cover"),le=Math.min(wt.width,Math.max(Ht.width,b)),pe=Math.min(wt.height,Math.max(Ht.height,O)),$e=ut({aspectRatio:n,width:D,height:Z}),Ve=ut({aspectRatio:n,width:vt,height:mt},"cover"),Ge=Math.min($e.width,Math.max(Ve.width,a)),qe=Math.min($e.height,Math.max(Ve.height,o)),pr=[-Ge/2,-qe/2,Ge,qe];return at.width=xt(le),at.height=xt(pe),V.fillStyle=_,V.fillRect(0,0,le,pe),V.save(),V.translate(le/2,pe/2),V.rotate(d*Math.PI/180),V.scale(h,p),V.imageSmoothingEnabled=A,V.imageSmoothingQuality=G,V.drawImage.apply(V,[r].concat(U(pr.map(function(dr){return Math.floor(xt(dr))})))),V.restore(),at}var Ue=String.fromCharCode;function Zi(r,t,i){var e="";i+=t;for(var n=t;n<i;n+=1)e+=Ue(r.getUint8(n));return e}var Ji=/^data:.*,/;function tr(r){var t=r.replace(Ji,""),i=atob(t),e=new ArrayBuffer(i.length),n=new Uint8Array(e);return R(n,function(a,o){n[o]=i.charCodeAt(o)}),e}function er(r,t){for(var i=[],e=8192,n=new Uint8Array(r);n.length>0;)i.push(Ue.apply(null,Le(n.subarray(0,e)))),n=n.subarray(e);return"data:".concat(t,";base64,").concat(btoa(i.join("")))}function ir(r){var t=new DataView(r),i;try{var e,n,a;if(t.getUint8(0)===255&&t.getUint8(1)===216)for(var o=t.byteLength,s=2;s+1<o;){if(t.getUint8(s)===255&&t.getUint8(s+1)===225){n=s;break}s+=1}if(n){var d=n+4,l=n+10;if(Zi(t,d,4)==="Exif"){var h=t.getUint16(l);if(e=h===18761,(e||h===19789)&&t.getUint16(l+2,e)===42){var c=t.getUint32(l+4,e);c>=8&&(a=l+c)}}}if(a){var p=t.getUint16(a,e),y,b;for(b=0;b<p;b+=1)if(y=a+b*12+2,t.getUint16(y,e)===274){y+=8,i=t.getUint16(y,e),t.setUint16(y,1,e);break}}}catch{i=1}return i}function rr(r){var t=0,i=1,e=1;switch(r){case 2:i=-1;break;case 3:t=-180;break;case 4:e=-1;break;case 5:t=90,e=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90;break}return{rotate:t,scaleX:i,scaleY:e}}var ar={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,n=this.cropper,a=Number(i.minContainerWidth),o=Number(i.minContainerHeight);L(n,j),rt(t,j);var s={width:Math.max(e.offsetWidth,a>=0?a:ze),height:Math.max(e.offsetHeight,o>=0?o:Ie)};this.containerData=s,ft(n,{width:s.width,height:s.height}),L(t,j),rt(n,j)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,n=Math.abs(i.rotate)%180===90,a=n?i.naturalHeight:i.naturalWidth,o=n?i.naturalWidth:i.naturalHeight,s=a/o,d=t.width,l=t.height;t.height*s>t.width?e===3?d=t.height*s:l=t.width/s:e===3?l=t.width/s:d=t.height*s;var h={aspectRatio:s,naturalWidth:a,naturalHeight:o,width:d,height:l};this.canvasData=h,this.limited=e===1||e===2,this.limitCanvas(!0,!0),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),h.left=(t.width-h.width)/2,h.top=(t.height-h.height)/2,h.oldLeft=h.left,h.oldTop=h.top,this.initialCanvasData=T({},h)},limitCanvas:function(t,i){var e=this.options,n=this.containerData,a=this.canvasData,o=this.cropBoxData,s=e.viewMode,d=a.aspectRatio,l=this.cropped&&o;if(t){var h=Number(e.minCanvasWidth)||0,c=Number(e.minCanvasHeight)||0;s>1?(h=Math.max(h,n.width),c=Math.max(c,n.height),s===3&&(c*d>h?h=c*d:c=h/d)):s>0&&(h?h=Math.max(h,l?o.width:0):c?c=Math.max(c,l?o.height:0):l&&(h=o.width,c=o.height,c*d>h?h=c*d:c=h/d));var p=ut({aspectRatio:d,width:h,height:c});h=p.width,c=p.height,a.minWidth=h,a.minHeight=c,a.maxWidth=1/0,a.maxHeight=1/0}if(i)if(s>(l?0:1)){var y=n.width-a.width,b=n.height-a.height;a.minLeft=Math.min(0,y),a.minTop=Math.min(0,b),a.maxLeft=Math.max(0,y),a.maxTop=Math.max(0,b),l&&this.limited&&(a.minLeft=Math.min(o.left,o.left+(o.width-a.width)),a.minTop=Math.min(o.top,o.top+(o.height-a.height)),a.maxLeft=o.left,a.maxTop=o.top,s===2&&(a.width>=n.width&&(a.minLeft=Math.min(0,y),a.maxLeft=Math.max(0,y)),a.height>=n.height&&(a.minTop=Math.min(0,b),a.maxTop=Math.max(0,b))))}else a.minLeft=-a.width,a.minTop=-a.height,a.maxLeft=n.width,a.maxTop=n.height},renderCanvas:function(t,i){var e=this.canvasData,n=this.imageData;if(i){var a=Qi({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),o=a.width,s=a.height,d=e.width*(o/e.naturalWidth),l=e.height*(s/e.naturalHeight);e.left-=(d-e.width)/2,e.top-=(l-e.height)/2,e.width=d,e.height=l,e.aspectRatio=o/s,e.naturalWidth=o,e.naturalHeight=s,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,ft(this.canvas,T({width:e.width,height:e.height},It({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,n=e.naturalWidth*(i.width/i.naturalWidth),a=e.naturalHeight*(i.height/i.naturalHeight);T(e,{width:n,height:a,left:(i.width-n)/2,top:(i.height-a)/2}),ft(this.image,T({width:e.width,height:e.height},It(T({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,n=Number(t.autoCropArea)||.8,a={width:i.width,height:i.height};e&&(i.height*e>i.width?a.height=a.width/e:a.width=a.height*e),this.cropBoxData=a,this.limitCropBox(!0,!0),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),a.width=Math.max(a.minWidth,a.width*n),a.height=Math.max(a.minHeight,a.height*n),a.left=i.left+(i.width-a.width)/2,a.top=i.top+(i.height-a.height)/2,a.oldLeft=a.left,a.oldTop=a.top,this.initialCropBoxData=T({},a)},limitCropBox:function(t,i){var e=this.options,n=this.containerData,a=this.canvasData,o=this.cropBoxData,s=this.limited,d=e.aspectRatio;if(t){var l=Number(e.minCropBoxWidth)||0,h=Number(e.minCropBoxHeight)||0,c=s?Math.min(n.width,a.width,a.width+a.left,n.width-a.left):n.width,p=s?Math.min(n.height,a.height,a.height+a.top,n.height-a.top):n.height;l=Math.min(l,n.width),h=Math.min(h,n.height),d&&(l&&h?h*d>l?h=l/d:l=h*d:l?h=l/d:h&&(l=h*d),p*d>c?p=c/d:c=p*d),o.minWidth=Math.min(l,c),o.minHeight=Math.min(h,p),o.maxWidth=c,o.maxHeight=p}i&&(s?(o.minLeft=Math.max(0,a.left),o.minTop=Math.max(0,a.top),o.maxLeft=Math.min(n.width,a.left+a.width)-o.width,o.maxTop=Math.min(n.height,a.top+a.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=n.width-o.width,o.maxTop=n.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&zt(this.face,kt,e.width>=i.width&&e.height>=i.height?ct:st),ft(this.cropBox,T({width:e.width,height:e.height},It({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Dt(this.element,ee,this.getData())}},or={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,n=i?this.crossOriginUrl:this.url,a=t.alt||"The image to preview",o=document.createElement("img");if(i&&(o.crossOrigin=i),o.src=n,o.alt=a,this.viewBox.appendChild(o),this.viewBoxImage=o,!!e){var s=e;typeof e=="string"?s=t.ownerDocument.querySelectorAll(e):e.querySelector&&(s=[e]),this.previews=s,R(s,function(d){var l=document.createElement("img");zt(d,Yt,{width:d.offsetWidth,height:d.offsetHeight,html:d.innerHTML}),i&&(l.crossOrigin=i),l.src=n,l.alt=a,l.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',d.innerHTML="",d.appendChild(l)})}},resetPreview:function(){R(this.previews,function(t){var i=he(t,Yt);ft(t,{width:i.width,height:i.height}),t.innerHTML=i.html,Vi(t,Yt)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,n=e.width,a=e.height,o=t.width,s=t.height,d=e.left-i.left-t.left,l=e.top-i.top-t.top;!this.cropped||this.disabled||(ft(this.viewBoxImage,T({width:o,height:s},It(T({translateX:-d,translateY:-l},t)))),R(this.previews,function(h){var c=he(h,Yt),p=c.width,y=c.height,b=p,O=y,E=1;n&&(E=p/n,O=a*E),a&&O>y&&(E=y/a,b=n*E,O=y),ft(h,{width:b,height:O}),ft(h.getElementsByTagName("img")[0],T({width:o*E,height:s*E},It(T({translateX:-d*E,translateY:-l*E},t))))}))}},nr={bind:function(){var t=this.element,i=this.options,e=this.cropper;$(i.cropstart)&&K(t,ae,i.cropstart),$(i.cropmove)&&K(t,re,i.cropmove),$(i.cropend)&&K(t,ie,i.cropend),$(i.crop)&&K(t,ee,i.crop),$(i.zoom)&&K(t,oe,i.zoom),K(e,Te,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&K(e,Ae,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&K(e,Ce,this.onDblclick=this.dblclick.bind(this)),K(t.ownerDocument,Oe,this.onCropMove=this.cropMove.bind(this)),K(t.ownerDocument,Se,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&K(window,Re,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;$(i.cropstart)&&tt(t,ae,i.cropstart),$(i.cropmove)&&tt(t,re,i.cropmove),$(i.cropend)&&tt(t,ie,i.cropend),$(i.crop)&&tt(t,ee,i.crop),$(i.zoom)&&tt(t,oe,i.zoom),tt(e,Te,this.onCropStart),i.zoomable&&i.zoomOnWheel&&tt(e,Ae,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&tt(e,Ce,this.onDblclick),tt(t.ownerDocument,Oe,this.onCropMove),tt(t.ownerDocument,Se,this.onCropEnd),i.responsive&&tt(window,Re,this.onResize)}},sr={resize:function(){if(!this.disabled){var t=this.options,i=this.container,e=this.containerData,n=i.offsetWidth/e.width,a=i.offsetHeight/e.height,o=Math.abs(n-1)>Math.abs(a-1)?n:a;if(o!==1){var s,d;t.restore&&(s=this.getCanvasData(),d=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(R(s,function(l,h){s[h]=l*o})),this.setCropBoxData(R(d,function(l,h){d[h]=l*o})))}}},dblclick:function(){this.disabled||this.options.dragMode===Me||this.setDragMode(ji(this.dragBox,Zt)?De:te)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,n=1;this.disabled||(t.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(v(i)&&i!==1||v(e)&&e!==0||t.ctrlKey))){var n=this.options,a=this.pointers,o;t.changedTouches?R(t.changedTouches,function(s){a[s.identifier]=Xt(s)}):a[t.pointerId||0]=Xt(t),Object.keys(a).length>1&&n.zoomable&&n.zoomOnTouch?o=Q:o=he(t.target,kt),Ii.test(o)&&Dt(this.element,ae,{originalEvent:t,action:o})!==!1&&(t.preventDefault(),this.action=o,this.cropping=!1,o===ht&&(this.cropping=!0,L(this.dragBox,Pt)))}},cropMove:function(t){var i=this.action;if(!(this.disabled||!i)){var e=this.pointers;t.preventDefault(),Dt(this.element,re,{originalEvent:t,action:i})!==!1&&(t.changedTouches?R(t.changedTouches,function(n){T(e[n.identifier]||{},Xt(n,!0))}):T(e[t.pointerId||0]||{},Xt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?R(t.changedTouches,function(n){delete e[n.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,Et(this.dragBox,Pt,this.cropped&&this.options.modal)),Dt(this.element,ie,{originalEvent:t,action:i}))}}},hr={change:function(t){var i=this.options,e=this.canvasData,n=this.containerData,a=this.cropBoxData,o=this.pointers,s=this.action,d=i.aspectRatio,l=a.left,h=a.top,c=a.width,p=a.height,y=l+c,b=h+p,O=0,E=0,_=n.width,P=n.height,A=!0,lt;!d&&t.shiftKey&&(d=c&&p?c/p:1),this.limited&&(O=a.minLeft,E=a.minTop,_=O+Math.min(n.width,e.width,e.left+e.width),P=E+Math.min(n.height,e.height,e.top+e.height));var G=o[Object.keys(o)[0]],f={x:G.endX-G.startX,y:G.endY-G.startY},D=function(Z){switch(Z){case X:y+f.x>_&&(f.x=_-y);break;case W:l+f.x<O&&(f.x=O-l);break;case dt:h+f.y<E&&(f.y=E-h);break;case it:b+f.y>P&&(f.y=P-b);break}};switch(s){case st:l+=f.x,h+=f.y;break;case X:if(f.x>=0&&(y>=_||d&&(h<=E||b>=P))){A=!1;break}D(X),c+=f.x,c<0&&(s=W,c=-c,l-=c),d&&(p=c/d,h+=(a.height-p)/2);break;case dt:if(f.y<=0&&(h<=E||d&&(l<=O||y>=_))){A=!1;break}D(dt),p-=f.y,h+=f.y,p<0&&(s=it,p=-p,h-=p),d&&(c=p*d,l+=(a.width-c)/2);break;case W:if(f.x<=0&&(l<=O||d&&(h<=E||b>=P))){A=!1;break}D(W),c-=f.x,l+=f.x,c<0&&(s=X,c=-c,l-=c),d&&(p=c/d,h+=(a.height-p)/2);break;case it:if(f.y>=0&&(b>=P||d&&(l<=O||y>=_))){A=!1;break}D(it),p+=f.y,p<0&&(s=dt,p=-p,h-=p),d&&(c=p*d,l+=(a.width-c)/2);break;case St:if(d){if(f.y<=0&&(h<=E||y>=_)){A=!1;break}D(dt),p-=f.y,h+=f.y,c=p*d}else D(dt),D(X),f.x>=0?y<_?c+=f.x:f.y<=0&&h<=E&&(A=!1):c+=f.x,f.y<=0?h>E&&(p-=f.y,h+=f.y):(p-=f.y,h+=f.y);c<0&&p<0?(s=At,p=-p,c=-c,h-=p,l-=c):c<0?(s=Nt,c=-c,l-=c):p<0&&(s=Rt,p=-p,h-=p);break;case Nt:if(d){if(f.y<=0&&(h<=E||l<=O)){A=!1;break}D(dt),p-=f.y,h+=f.y,c=p*d,l+=a.width-c}else D(dt),D(W),f.x<=0?l>O?(c-=f.x,l+=f.x):f.y<=0&&h<=E&&(A=!1):(c-=f.x,l+=f.x),f.y<=0?h>E&&(p-=f.y,h+=f.y):(p-=f.y,h+=f.y);c<0&&p<0?(s=Rt,p=-p,c=-c,h-=p,l-=c):c<0?(s=St,c=-c,l-=c):p<0&&(s=At,p=-p,h-=p);break;case At:if(d){if(f.x<=0&&(l<=O||b>=P)){A=!1;break}D(W),c-=f.x,l+=f.x,p=c/d}else D(it),D(W),f.x<=0?l>O?(c-=f.x,l+=f.x):f.y>=0&&b>=P&&(A=!1):(c-=f.x,l+=f.x),f.y>=0?b<P&&(p+=f.y):p+=f.y;c<0&&p<0?(s=St,p=-p,c=-c,h-=p,l-=c):c<0?(s=Rt,c=-c,l-=c):p<0&&(s=Nt,p=-p,h-=p);break;case Rt:if(d){if(f.x>=0&&(y>=_||b>=P)){A=!1;break}D(X),c+=f.x,p=c/d}else D(it),D(X),f.x>=0?y<_?c+=f.x:f.y>=0&&b>=P&&(A=!1):c+=f.x,f.y>=0?b<P&&(p+=f.y):p+=f.y;c<0&&p<0?(s=Nt,p=-p,c=-c,h-=p,l-=c):c<0?(s=At,c=-c,l-=c):p<0&&(s=St,p=-p,h-=p);break;case ct:this.move(f.x,f.y),A=!1;break;case Q:this.zoom(qi(o),t),A=!1;break;case ht:if(!f.x||!f.y){A=!1;break}lt=Xe(this.cropper),l=G.startX-lt.left,h=G.startY-lt.top,c=a.minWidth,p=a.minHeight,f.x>0?s=f.y>0?Rt:St:f.x<0&&(l-=c,s=f.y>0?At:Nt),f.y<0&&(h-=p),this.cropped||(rt(this.cropBox,j),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}A&&(a.width=c,a.height=p,a.left=l,a.top=h,this.action=s,this.renderCropBox()),R(o,function(B){B.startX=B.endX,B.startY=B.endY})}},cr={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&L(this.dragBox,Pt),rt(this.cropBox,j),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=T({},this.initialImageData),this.canvasData=T({},this.initialCanvasData),this.cropBoxData=T({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(T(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),rt(this.dragBox,Pt),L(this.cropBox,j)),this},replace:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,R(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,rt(this.cropper,xe)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,L(this.cropper,xe)),this},destroy:function(){var t=this.element;return t[x]?(t[x]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=e.left,a=e.top;return this.moveTo(ne(t)?t:n+Number(t),ne(i)?i:a+Number(i))},moveTo:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(v(t)&&(e.left=t,n=!0),v(i)&&(e.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var n=this.options,a=this.canvasData,o=a.width,s=a.height,d=a.naturalWidth,l=a.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&n.zoomable){var h=d*t,c=l*t;if(Dt(this.element,oe,{ratio:t,oldRatio:o/d,originalEvent:e})===!1)return this;if(e){var p=this.pointers,y=Xe(this.cropper),b=p&&Object.keys(p).length?Fi(p):{pageX:e.pageX,pageY:e.pageY};a.left-=(h-o)*((b.pageX-y.left-a.left)/o),a.top-=(c-s)*((b.pageY-y.top-a.top)/s)}else yt(i)&&v(i.x)&&v(i.y)?(a.left-=(h-o)*((i.x-a.left)/o),a.top-=(c-s)*((i.y-a.top)/s)):(a.left-=(h-o)/2,a.top-=(c-s)/2);a.width=h,a.height=c,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),v(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,v(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(v(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(v(t)&&(e.scaleX=t,n=!0),v(i)&&(e.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.options,e=this.imageData,n=this.canvasData,a=this.cropBoxData,o;if(this.ready&&this.cropped){o={x:a.left-n.left,y:a.top-n.top,width:a.width,height:a.height};var s=e.width/e.naturalWidth;if(R(o,function(h,c){o[c]=h/s}),t){var d=Math.round(o.y+o.height),l=Math.round(o.x+o.width);o.x=Math.round(o.x),o.y=Math.round(o.y),o.width=l-o.x,o.height=d-o.y}}else o={x:0,y:0,width:0,height:0};return i.rotatable&&(o.rotate=e.rotate||0),i.scalable&&(o.scaleX=e.scaleX||1,o.scaleY=e.scaleY||1),o},setData:function(t){var i=this.options,e=this.imageData,n=this.canvasData,a={};if(this.ready&&!this.disabled&&yt(t)){var o=!1;i.rotatable&&v(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(v(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),v(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var s=e.width/e.naturalWidth;v(t.x)&&(a.left=t.x*s+n.left),v(t.y)&&(a.top=t.y*s+n.top),v(t.width)&&(a.width=t.width*s),v(t.height)&&(a.height=t.height*s),this.setCropBoxData(a)}return this},getContainerData:function(){return this.ready?T({},this.containerData):{}},getImageData:function(){return this.sized?T({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&R(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&yt(t)&&(v(t.left)&&(i.left=t.left),v(t.top)&&(i.top=t.top),v(t.width)?(i.width=t.width,i.height=t.width/e):v(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,i;return this.ready&&this.cropped&&(i={left:t.left,top:t.top,width:t.width,height:t.height}),i||{}},setCropBoxData:function(t){var i=this.cropBoxData,e=this.options.aspectRatio,n,a;return this.ready&&this.cropped&&!this.disabled&&yt(t)&&(v(t.left)&&(i.left=t.left),v(t.top)&&(i.top=t.top),v(t.width)&&t.width!==i.width&&(n=!0,i.width=t.width),v(t.height)&&t.height!==i.height&&(a=!0,i.height=t.height),e&&(n?i.height=i.width/e:a&&(i.width=i.height*e)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=Ki(this.image,this.imageData,i,t);if(!this.cropped)return e;var n=this.getData(),a=n.x,o=n.y,s=n.width,d=n.height,l=e.width/Math.floor(i.naturalWidth);l!==1&&(a*=l,o*=l,s*=l,d*=l);var h=s/d,c=ut({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=ut({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0},"cover"),y=ut({aspectRatio:h,width:t.width||(l!==1?e.width:s),height:t.height||(l!==1?e.height:d)}),b=y.width,O=y.height;b=Math.min(c.width,Math.max(p.width,b)),O=Math.min(c.height,Math.max(p.height,O));var E=document.createElement("canvas"),_=E.getContext("2d");E.width=xt(b),E.height=xt(O),_.fillStyle=t.fillColor||"transparent",_.fillRect(0,0,b,O);var P=t.imageSmoothingEnabled,A=P===void 0?!0:P,lt=t.imageSmoothingQuality;_.imageSmoothingEnabled=A,lt&&(_.imageSmoothingQuality=lt);var G=e.width,f=e.height,D=a,B=o,Z,pt,vt,bt,mt,at;D<=-s||D>G?(D=0,Z=0,vt=0,mt=0):D<=0?(vt=-D,D=0,Z=Math.min(G,s+D),mt=Z):D<=G&&(vt=0,Z=Math.min(s,G-D),mt=Z),Z<=0||B<=-d||B>f?(B=0,pt=0,bt=0,at=0):B<=0?(bt=-B,B=0,pt=Math.min(f,d+B),at=pt):B<=f&&(bt=0,pt=Math.min(d,f-B),at=pt);var V=[D,B,Z,pt];if(mt>0&&at>0){var wt=b/s;V.push(vt*wt,bt*wt,mt*wt,at*wt)}return _.drawImage.apply(_,[e].concat(U(V.map(function(Ht){return Math.floor(xt(Ht))})))),E},setAspectRatio:function(t){var i=this.options;return!this.disabled&&!ne(t)&&(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,n=this.face;if(this.ready&&!this.disabled){var a=t===te,o=i.movable&&t===De;t=a||o?t:Me,i.dragMode=t,zt(e,kt,t),Et(e,Zt,a),Et(e,Jt,o),i.cropBoxMovable||(zt(n,kt,t),Et(n,Zt,a),Et(n,Jt,o))}return this}},lr=C.Cropper,je=function(){function r(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(g(this,r),!t||!Li.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=T({},_e,yt(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return S(r,[{key:"init",value:function(){var i=this.element,e=i.tagName.toLowerCase(),n;if(!i[x]){if(i[x]=this,e==="img"){if(this.isImg=!0,n=i.getAttribute("src")||"",this.originalUrl=n,!n)return;n=i.src}else e==="canvas"&&window.HTMLCanvasElement&&(n=i.toDataURL());this.load(n)}}},{key:"load",value:function(i){var e=this;if(i){this.url=i,this.imageData={};var n=this.element,a=this.options;if(!a.rotatable&&!a.scalable&&(a.checkOrientation=!1),!a.checkOrientation||!window.ArrayBuffer){this.clone();return}if(_i.test(i)){Bi.test(i)?this.read(tr(i)):this.clone();return}var o=new XMLHttpRequest,s=this.clone.bind(this);this.reloading=!0,this.xhr=o,o.onabort=s,o.onerror=s,o.ontimeout=s,o.onprogress=function(){o.getResponseHeader("content-type")!==ke&&o.abort()},o.onload=function(){e.read(o.response)},o.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&He(i)&&n.crossOrigin&&(i=We(i)),o.open("GET",i,!0),o.responseType="arraybuffer",o.withCredentials=n.crossOrigin==="use-credentials",o.send()}}},{key:"read",value:function(i){var e=this.options,n=this.imageData,a=ir(i),o=0,s=1,d=1;if(a>1){this.url=er(i,ke);var l=rr(a);o=l.rotate,s=l.scaleX,d=l.scaleY}e.rotatable&&(n.rotate=o),e.scalable&&(n.scaleX=s,n.scaleY=d),this.clone()}},{key:"clone",value:function(){var i=this.element,e=this.url,n=i.crossOrigin,a=e;this.options.checkCrossOrigin&&He(e)&&(n||(n="anonymous"),a=We(e)),this.crossOrigin=n,this.crossOriginUrl=a;var o=document.createElement("img");n&&(o.crossOrigin=n),o.src=a||e,o.alt=i.alt||"The image to crop",this.image=o,o.onload=this.start.bind(this),o.onerror=this.stop.bind(this),L(o,Ee),i.parentNode.insertBefore(o,i.nextSibling)}},{key:"start",value:function(){var i=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var n=C.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(C.navigator.userAgent),a=function(l,h){T(i.imageData,{naturalWidth:l,naturalHeight:h,aspectRatio:l/h}),i.initialImageData=T({},i.imageData),i.sizing=!1,i.sized=!0,i.build()};if(e.naturalWidth&&!n){a(e.naturalWidth,e.naturalHeight);return}var o=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){a(o.width,o.height),n||s.removeChild(o)},o.src=e.src,n||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(o))}},{key:"stop",value:function(){var i=this.image;i.onload=null,i.onerror=null,i.parentNode.removeChild(i),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var i=this.element,e=this.options,n=this.image,a=i.parentNode,o=document.createElement("div");o.innerHTML=Pi;var s=o.querySelector(".".concat(x,"-container")),d=s.querySelector(".".concat(x,"-canvas")),l=s.querySelector(".".concat(x,"-drag-box")),h=s.querySelector(".".concat(x,"-crop-box")),c=h.querySelector(".".concat(x,"-face"));this.container=a,this.cropper=s,this.canvas=d,this.dragBox=l,this.cropBox=h,this.viewBox=s.querySelector(".".concat(x,"-view-box")),this.face=c,d.appendChild(n),L(i,j),a.insertBefore(s,i.nextSibling),this.isImg||rt(n,Ee),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,L(h,j),e.guides||L(h.getElementsByClassName("".concat(x,"-dashed")),j),e.center||L(h.getElementsByClassName("".concat(x,"-center")),j),e.background&&L(s,"".concat(x,"-bg")),e.highlight||L(c,Ri),e.cropBoxMovable&&(L(c,Jt),zt(c,kt,st)),e.cropBoxResizable||(L(h.getElementsByClassName("".concat(x,"-line")),j),L(h.getElementsByClassName("".concat(x,"-point")),j)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),$(e.ready)&&K(i,Ne,e.ready,{once:!0}),Dt(i,Ne)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),rt(this.element,j))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=lr,r}},{key:"setDefaults",value:function(i){T(_e,yt(i)&&i)}}]),r}();return T(je.prototype,ar,or,nr,sr,hr,cr),je})});var yi=Fe(Qt=>{"use strict";nt();ot();Object.defineProperty(Qt,"__esModule",{value:!0});var Ct=fe(),fr=gi();function bi(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var qt=bi(Ct),ur=bi(fr);var Ft=function(){return Ft=Object.assign||function(w){for(var m,g=1,M=arguments.length;g<M;g++){m=arguments[g];for(var S in m)Object.prototype.hasOwnProperty.call(m,S)&&(w[S]=m[S])}return w},Ft.apply(this,arguments)};function vi(u,w){var m={};for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&w.indexOf(g)<0&&(m[g]=u[g]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,g=Object.getOwnPropertySymbols(u);M<g.length;M++)w.indexOf(g[M])<0&&Object.prototype.propertyIsEnumerable.call(u,g[M])&&(m[g[M]]=u[g[M]]);return m}var mr=function(u,w){w===void 0&&(w={});var m=w.enable,g=m===void 0?!0:m,M=w.scaleX,S=M===void 0?1:M,H=w.scaleY,U=H===void 0?1:H,J=w.zoomTo,q=J===void 0?0:J,et=w.rotateTo;g?u.enable():u.disable(),u.scaleX(S),u.scaleY(U),et!==void 0&&u.rotateTo(et),q>0&&u.zoomTo(q)},gr=function(){for(var u=[],w=0;w<arguments.length;w++)u[w]=arguments[w];var m=Ct.useRef(null);return qt.default.useEffect(function(){u.forEach(function(g){g&&(typeof g=="function"?g(m.current):g.current=m.current)})},[u]),m},wi=qt.default.forwardRef(function(u,w){var m=vi(u,[]),g=m.dragMode,M=g===void 0?"crop":g,S=m.src,H=m.style,U=m.className,J=m.crossOrigin,q=m.scaleX,et=m.scaleY,N=m.enable,z=m.zoomTo,I=m.rotateTo,C=m.alt,F=C===void 0?"picture":C,Y=m.ready,x=m.onInitialized,st=vi(m,["dragMode","src","style","className","crossOrigin","scaleX","scaleY","enable","zoomTo","rotateTo","alt","ready","onInitialized"]),ht={scaleY:et,scaleX:q,enable:N,zoomTo:z,rotateTo:I},ct=Ct.useRef(null),Q=gr(w,ct);return Ct.useEffect(function(){var X;!((X=Q.current)===null||X===void 0)&&X.cropper&&typeof z=="number"&&Q.current.cropper.zoomTo(z)},[m.zoomTo]),Ct.useEffect(function(){var X;!((X=Q.current)===null||X===void 0)&&X.cropper&&typeof S<"u"&&Q.current.cropper.reset().clear().replace(S)},[S]),Ct.useEffect(function(){if(Q.current!==null){var X=new ur.default(Q.current,Ft(Ft({dragMode:M},st),{ready:function(W){W.currentTarget!==null&&mr(W.currentTarget.cropper,ht),Y&&Y(W)}}));x&&x(X)}return function(){var W,it;(it=(W=Q.current)===null||W===void 0?void 0:W.cropper)===null||it===void 0||it.destroy()}},[Q]),qt.default.createElement("div",{style:H,className:U},qt.default.createElement("img",{crossOrigin:J,src:S,alt:F,style:{opacity:0,maxWidth:"100%"},ref:Q}))});Qt.Cropper=wi;Qt.default=wi});nt();ot();var ye=de(fe());Ze();nt();ot();var Mi=de(fe());Ze();var Ci=de(yi());nt();ot();var xi=Bt.div`
  .cropper-container {
    direction: ltr;
    font-size: 0;
    line-height: 0;
    position: relative;
    -ms-touch-action: none;
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .cropper-container img {
    display: block;
    height: 100%;
    image-orientation: 0deg;
    max-height: none !important;
    max-width: none !important;
    min-height: 0 !important;
    min-width: 0 !important;
    width: 100%;
  }

  .cropper-wrap-box,
  .cropper-canvas,
  .cropper-drag-box,
  .cropper-crop-box,
  .cropper-modal {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .cropper-wrap-box,
  .cropper-canvas {
    overflow: hidden;
  }

  .cropper-drag-box,
  .cropper-modal {
    cursor: crosshair;
    mix-blend-mode: multiply;
    background-color: #9a9c9e;
  }

  .cropper-view-box {
    display: block;
    height: 100%;
    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
    overflow: hidden;
    width: 100%;
  }

  .cropper-dashed {
    border: 0 dashed #eee;
    display: block;
    opacity: 0.5;
    position: absolute;
  }

  .cropper-dashed.dashed-h {
    border-bottom-width: 1px;
    border-top-width: 1px;
    height: calc(100% / 3);
    left: 0;
    top: calc(100% / 3);
    width: 100%;
  }

  .cropper-dashed.dashed-v {
    border-left-width: 1px;
    border-right-width: 1px;
    height: 100%;
    left: calc(100% / 3);
    top: 0;
    width: calc(100% / 3);
  }

  .cropper-center {
    display: block;
    height: 0;
    left: 50%;
    opacity: 0.75;
    position: absolute;
    top: 50%;
    width: 0;
  }

  .cropper-center::before,
  .cropper-center::after {
    background-color: #eee;
    content: ' ';
    display: block;
    position: absolute;
  }

  .cropper-center::before {
    height: 1px;
    left: -3px;
    top: 0;
    width: 7px;
  }

  .cropper-center::after {
    height: 7px;
    left: 0;
    top: -3px;
    width: 1px;
  }

  .cropper-face,
  .cropper-line,
  .cropper-point {
    display: block;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    width: 100%;
  }

  .cropper-face {
    background-color: #fff;
    left: 0;
    top: 0;
  }

  .cropper-line {
    background-color: #39f;
  }

  .cropper-line.line-e {
    cursor: ew-resize;
    right: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-n {
    cursor: ns-resize;
    height: 5px;
    left: 0;
    top: -3px;
  }

  .cropper-line.line-w {
    cursor: ew-resize;
    left: -3px;
    top: 0;
    width: 5px;
  }

  .cropper-line.line-s {
    bottom: -3px;
    cursor: ns-resize;
    height: 5px;
    left: 0;
  }

  .cropper-point {
    background-color: #39f;
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }

  .cropper-point.point-e {
    cursor: ew-resize;
    margin-top: -3px;
    right: -3px;
    top: 50%;
  }

  .cropper-point.point-n {
    cursor: ns-resize;
    left: 50%;
    margin-left: -3px;
    top: -3px;
  }

  .cropper-point.point-w {
    cursor: ew-resize;
    left: -3px;
    margin-top: -3px;
    top: 50%;
  }

  .cropper-point.point-s {
    bottom: -3px;
    cursor: s-resize;
    left: 50%;
    margin-left: -3px;
  }

  .cropper-point.point-ne {
    cursor: nesw-resize;
    right: -3px;
    top: -3px;
  }

  .cropper-point.point-nw {
    cursor: nwse-resize;
    left: -3px;
    top: -3px;
  }

  .cropper-point.point-sw {
    bottom: -3px;
    cursor: nesw-resize;
    left: -3px;
  }

  .cropper-point.point-se {
    bottom: -3px;
    cursor: nwse-resize;
    right: -3px;
  }

  .cropper-point.point-se::before {
    background-color: #39f;
    bottom: -50%;
    content: ' ';
    display: block;
    height: 200%;
    opacity: 0;
    position: absolute;
    right: -50%;
    width: 200%;
  }

  .cropper-invisible {
    opacity: 0;
  }

  .cropper-hide {
    display: block;
    height: 0;
    position: absolute;
    width: 0;
  }

  .cropper-hidden {
    display: none !important;
  }

  .cropper-move {
    cursor: move;
  }

  .cropper-crop {
    cursor: crosshair;
  }

  .cropper-disabled .cropper-drag-box,
  .cropper-disabled .cropper-face,
  .cropper-disabled .cropper-line,
  .cropper-disabled .cropper-point {
    cursor: not-allowed;
  }
`,Ei=Bt.div`
  align-items: center;
  background-color: #111112;
  border-radius: 6px;
  bottom: 40px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: 'ABCDiatype';
  font-size: 14px;
  gap: 6px;
  line-height: 20px;
  padding: 8px 12px;
  position: absolute;
  right: 20px;
  z-index: 9999;

  .esc-key-button {
    align-items: center;
    background-color: #f1f4f9;
    border: 1px solid #afb9c8;
    border-radius: 4px;
    box-shadow: 0px 1px 0px 0px rgba(175, 185, 200, 1);
    color: #1e1e1e;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    height: 24px;
    justify-content: center;
    line-height: 20px;
    text-align: center;
    width: 32px;
  }
`,Di=Bt.div`
  align-items: center;
  background-color: #111112;
  border-radius: 8px;
  color: #fff;
  display: ${({showHelper:u})=>u?"flex":"none"};
  font-family: 'ABCDiatype';
  left: 0;
  margin: auto;
  max-width: 390px;
  padding-left: 10px;
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 9999;

  .icon-and-text-container {
    align-items: center;
    display: flex;
    padding: 10px 5px;
  }

  .text-container {
    margin-left: 12px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin: 0 0 4px 0;
  }

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 16px;
    margin: 0px;
    padding: 0px;
  }

  .icon-container {
    align-items: center;
    background-color: #283750;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    height: 48px;
    width: 48px;

    svg {
      color: #5f9bf0;
      cursor: pointer;
      height: 60%;
      width: 60%;
    }
  }

  .close-icon {
    cursor: pointer;
    height: 14px;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 14px;
  }
`,Nr=Bt.div`
  position: absolute;
  width: ${({width:u})=>u}px;
  height: ${({height:u})=>u}px;
  left: ${({left:u})=>u}px;
  top: ${({top:u})=>u}px;

  border: 1px dashed #778fad;
`;var vr=({src:u,root:w,onSelect:m})=>{let[g,M]=Wt(!0),S=_t(null);(0,Mi.useEffect)(()=>(document.addEventListener("keydown",N),()=>{document.removeEventListener("keydown",N),S?.current?.cropper?.destroy()}),[]);let H=async()=>{M(!1),(S?.current?.cropper).destroy(),ue(),ii(),Oi(),await ri()},U=()=>{let C=S?.current?.cropper;C?.enable(),C?.clear(),M(!0)},J=()=>{H()},q=async()=>{try{let C=S?.current?.cropper,{top:F,left:Y,width:x,height:st}=C.cropBoxData,ht=C.getCroppedCanvas().toDataURL(),ct=C.getCroppedCanvas();C.disable(),ct.width===window.innerWidth&&ct.height===window.innerHeight?await m(ht,{top:0,left:0,width:ct.width,height:ct.height},U):await m(ht,{top:F,left:Y,width:x,height:st},U)}catch(I){console.error(I)}},et=()=>{M(!1),ue()},N=I=>{(I.key==="Escape"||I.key==="Esc")&&H()},z=Qe(()=>Je({key:"crop-emotion-cache",container:w}),[w]);return k(ti,{value:z},k(Di,{showHelper:g},k("div",{className:"icon-and-text-container"},k("div",{className:"icon-container"},k(ci,{size:"32px"})),k("div",{className:"text-container"},k("h3",null,"Listen to the selected area"),k("p",null,"Drag your mouse across the area you want to listen to."))),k(fi,{className:"close-icon",width:"8px",onClick:J})),k(Ei,{onClick:J,showHelper:g},k("div",{className:"esc-key-button"},"Esc"),"to Exit Screenshot mode"),k(xi,null,k(Ci.default,{src:u,ref:S,style:{height:"100%",width:"100%"},initialAspectRatio:1/1,guides:!1,autoCrop:!1,cropend:q,cropstart:et})))},Ti=vr;var Lt="speechify-screenshot-mode",we="speechify-screenshot-marker",Ot,Si="",Ni="",Tt=null,Kt=u=>u.preventDefault(),br=()=>{Ut.pause(),jt.getBundleState().currentContent?.metadata.source!=="Screenshot"&&(ui(),Tt=jt.getBundleState().currentContent),document.body.style.position="relative",document.body.style.overflow="hidden",document.querySelector(`#${Lt}`).style.display="block",window.addEventListener("scroll",Kt,{capture:!0}),window.addEventListener("wheel",Kt,{capture:!0})},Oi=()=>{document.body.style.position=Si,document.body.style.overflow=Ni,Tt&&(Tt.options?.autoplay&&(Tt.options.autoplay=!1),jt.getPlayingState()==="playing"&&Ut.pause(),me(Tt,!0),Tt=null),document.querySelector(`#${Lt}`).style.display="none",window.removeEventListener("scroll",Kt,{capture:!0}),window.removeEventListener("wheel",Kt,{capture:!0})},wr=()=>document.querySelector(".kix-rotatingtilemanager");async function yr(){if(!Ot){let g=document.createElement("div");g.id=Lt,g.style.cssText="position: fixed; top: 0; right: 0; width: 100%; min-height: 100%; z-index: 2147483640; display: none !important;",document.body.appendChild(g),Ot=g.attachShadow({mode:"open"})}let u=document.createElement("div");u.id=`${Lt}-root`,u.style.width="100%",u.style.height="100%",u.style.position="relative",Ot.appendChild(u);let w=document.getElementsByTagName("body")[0],m=window.getComputedStyle(w);return Si=m.getPropertyValue("position"),Ni=m.getPropertyValue("overflow"),(0,ye.render)(k(Er,{root:u}),u),xr}function xr(){if(!Ot)return;let u=Ot.querySelector(`#${Lt}-root`);u&&((0,ye.render)(()=>null,u),Ot.removeChild(u))}function Er({root:u}){let{screenshotMode:w}=hi(),[m,g]=Wt([]),{enabled:M,visibleTabDataUrl:S,takingScreenshot:H}=w??{},{hidePlayerPill:U}=li(di,["hidePlayerPill"]),J=_t(U),q=_t(null),et=Ke(async(N,z,I)=>{try{q.current=I,mi(N,z.width,z.height).then(ai);let C=N.replace("data:image/png;base64,",""),F=z.top+document.documentElement.scrollTop;g([F,z.left,z.width,z.height]);let Y=await si(C,F,z.left);me(Y,!0)}catch(C){console.error(C),pi("No text detected. Please take another screenshot.",{wrapperPadding:"5px",duration:0})}},[]);return Mt(()=>{let N=Ut.registerHook("PLAYBACK_STATE_CHANGED",async({state:z})=>{z==="ended"&&q.current&&q.current()});return()=>{N()}},[]),Mt(()=>{H&&S&&br()},[H,S]),Mt(()=>{if(M&&m.length>=3&&!H){document.getElementById(we)?.remove();let N=document.createElement("div"),[z,I,C,F]=m,Y=oi()?wr():document.body;if(!Y){ei(new Error("ScreenshotMode: elementToAppendTo is null"));return}let x=Y.getBoundingClientRect(),st=Y===document.body?0:x.top-Y.scrollTop,ht=Y===document.body?0:x.left;N.id=we,N.setAttribute("style",`
        position: absolute;
        width: ${C}px;
        height: ${F}px;
        left: ${I-ht}px;
        top: ${z-st}px;
        border: 1px dashed #778fad;
        z-index: 2147483640;
        `),Y.append(N)}else{let N=document.getElementById(we);N&&N.remove()}},[M,m,H]),Mt(()=>{M&&ni("screenshot-recommendation")},[M]),Mt(()=>{U&&M?ge({hidePlayerPill:!1,collapseState:"collapsed"}):J.current&&!M&&!U&&ge({hidePlayerPill:!0,collapseState:"expanded"})},[M,U]),S&&H&&M?k(Ti,{src:S,root:u,onSelect:et}):null}export{yr as default,xr as destroyScreenshotMode,Oi as disableTakingScreenshotMode};
/*! Bundled license information:

cropperjs/dist/cropper.js:
  (*!
   * Cropper.js v1.5.12
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2021-06-12T08:00:17.411Z
   *)

react-cropper/dist/react-cropper.umd.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=init-PX3W2SUE.js.map
