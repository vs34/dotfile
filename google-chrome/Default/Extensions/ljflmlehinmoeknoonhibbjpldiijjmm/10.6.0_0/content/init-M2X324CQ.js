import{a as Ge,b as ee,e as Z,f as te,g as Ue,i as Ve}from"./chunk-P73XAEKE.js";import{b as We}from"./chunk-LC7JTIGZ.js";import{a as Ye}from"./chunk-XGYFSZQ6.js";import"./chunk-NXQEIO42.js";import{a as Ie}from"./chunk-A7YAUIHP.js";import"./chunk-WRXKWN4M.js";import{a as j}from"./chunk-K5UBOOCY.js";import{c as z}from"./chunk-NI3TKWPM.js";import{a as k,h as pe,i as ge}from"./chunk-GQDQ63G2.js";import{a as F}from"./chunk-TQDQJ2R3.js";import{b as me,h as fe,l as he}from"./chunk-T2I5CTNL.js";import{a as we}from"./chunk-26DQFRDO.js";import{$b as Be,Ab as De,D as ve,Db as Le,I as J,Ja as A,Jb as ke,Ka as B,Na as Se,Y as Q,Yb as Me,Zb as Fe,g as de,i as $,m as lt,nb as X,o as ue,pb as be,rb as _e,sb as xe,tb as Ne,u as ct,ub as Te,va as Re,vb as Oe,wb as Ae,xb as He,yb as Ce,za as Pe}from"./chunk-MXAKFU6F.js";import"./chunk-TOYWBR4G.js";import"./chunk-AEJIAELE.js";import{Q as ye,va as Ee,w as ce}from"./chunk-KJG3EQPP.js";import{i as dt}from"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{d as V,f as N,h,j as a,l as le,n as st,o as p}from"./chunk-67P5Y4J4.js";p();h();p();h();var W=V(de());st();p();h();var u=V(ct()),Xe=V(de());lt();var Ze=V(dt());p();h();var $e="speechify-hover-player-icon";var oe=ue({events:["initial","buffering","destroying","destroyed"]}),ut=2147483640,mt=F.button`
  position: absolute;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  pointer-events: all;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .fadeOut {
    animation-name: fadeOut;
    animation-duration: ${200}ms;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  .fadeIn {
    animation-name: fadeIn;
    animation-timing-function: ease-out;
    animation-duration: ${100}ms;
    animation-fill-mode: forwards;
  }

  .icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    color: ${ge.typography.onBackground.primary};
    background: ${k.electric350};
    &:hover {
      background: #9ba3ff;
    }

    > .play-icon-svg {
      cursor: pointer;
      width: 100%;
      height: 100%;
    }

    .circularProgress {
      position: absolute;
      width: calc(100% + 2px + 1.75px); /* Increased by stroke width */
      height: calc(100% + 2px + 1.75px); /* Increased by stroke width */
      top: calc(-1px - 0.875px); /* Offset decreased by half stroke width */
      left: calc(-1px - 0.875px); /* Offset decreased by half stroke width */
      animation-name: loading;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
`,ft=e=>a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},a("path",{d:"M16.3711 11.3506C16.8711 11.6393 16.8711 12.361 16.3711 12.6497L10.3711 16.1138C9.87109 16.4024 9.24609 16.0416 9.24609 15.4642L9.24609 8.53603C9.24609 7.95868 9.87109 7.59784 10.3711 7.88651L16.3711 11.3506Z",fill:"white"})),ht=he`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`,pt=F.div`
  position: absolute;
  height: 3px;
  background: linear-gradient(90deg, #6b78fc 52.5%, rgba(107, 120, 252, 0) 93.6%);
  opacity: 1;

  top: 0;
  left: 0;
  animation-fill-mode: forwards;
  animation: ${ht} ${100}ms ease-out;
  width: 100%;
`,gt="hover-player-sandbox";function qe(e){let t=(0,u.useRef)(!0),[r,i]=(0,u.useState)("initial"),c=(0,u.useRef)(null),m=(0,u.useRef)(!1),l=(0,u.useRef)(null),[n,g]=(0,u.useState)(null),s={x:window.scrollX,y:window.scrollY},f=(0,u.useCallback)(()=>{m.current=!1,i("initial"),t.current=!0,l.current=null},[]),w=(0,u.useCallback)(E=>{E&&f(),g(E)},[f]);$(()=>{if(!l.current)w(e.hoveredParagraph);else{let{created:E,timeoutId:P}=l.current,x=Date.now()-E,S=200-x;clearTimeout(P),b(S,e.hoveredParagraph)}},[e.hoveredParagraph,f]);let v=(0,u.useMemo)(()=>n?.firstThreeWordsRange?n?.firstThreeWordsRange.getBoundingClientRect():new DOMRect,[n]),b=(0,u.useCallback)((E=200,P)=>{l.current={created:Date.now(),timeoutId:setTimeout(()=>{l.current=null,Q(!0),i("destroyed"),w(P)},E)}},[]),M=(0,u.useCallback)(async()=>{if(m.current=!0,r!=="initial"||!n)return;i("buffering"),Q(!1);let E=Ze.CursorQueryBuilder.fromCursor(n.block.start);A.seekToCursor(E),Pe(B.getPlayingState())||A.play(),Le("extension_hover_player_button_clicked"),ke({triggeredFrom:"HoverPlayer"})},[r,n]);$(()=>{let E=()=>{i("destroying"),b()},P=(0,Xe.debounce)(()=>{if(r==="destroyed"){x();return}if(!(B.getPlayingState()==="playing")){P();return}E()},300),x=A.registerHook("PLAYBACK_STATE_CHANGED",async({state:S})=>{if(m.current&&S==="buffering"){i("buffering");return}S==="playing"&&(P(),x())});return x},[b]),$(()=>{oe.emit(r,{})},[r]);let L=(0,u.useCallback)(()=>{c.current?.click?.()},[]),_=(0,u.useMemo)(()=>n?n.playerIconRect:new DOMRect,[n]),G=(0,u.useMemo)(()=>!["destroying","destroyed"].includes(r),[r]),U=(0,u.useMemo)(()=>r!=="destroyed",[r]);return a(fe,{value:e.emotionCache},G?a("div",{style:{position:"absolute",top:v.y+s.y+(n?.elementFontSize??0)+4,left:v.x+s.x,width:v.width+4}},a(pt,null)):null,a("div",{"aria-label":"Speechify Hover Player Button",style:{position:"absolute",left:`${_.left+s.x-4}px`,top:`${_.top+s.y-4}px`,width:`${_.width+2*4}px`,height:`${_.height+2*4}px`,zIndex:ut}},U?a(mt,{onClick:M,ref:c,style:{position:"absolute",left:"0px",top:"0px",width:"100%",height:"100%"}},a("div",{id:$e,style:{width:`${_.width}px`,height:`${_.height}px`,left:`${4}px`,top:`${4}px`},className:["icon",r==="destroying"?"fadeOut":"fadeIn"].join(" ")},a(ft,{className:"play-icon-svg"}),r==="buffering"&&a("div",{className:"circularProgress"},a(We,{value:.7,size:"100%",circleRatio:.7,circleColor:k.electric350,progressColor:k.electric350,strokeWidth:4,ended:!1})))):null,a(we,{key:gt,onClick:L})))}p();h();p();h();var Ke=(e,t)=>(...r)=>Object.assign({},e,t(...r));p();h();var je=e=>{let t=Math.min(...e.map(n=>n.x)),r=Math.min(...e.map(n=>n.y)),i=Math.max(...e.map(n=>n.x+n.width)),c=Math.max(...e.map(n=>n.y+n.height)),m=i-t,l=c-r;return new DOMRect(t,r,m,l)},ne=({rect:e,horizontalPadding:t,verticalPadding:r})=>new DOMRect(e.x-t,e.y-r,e.width+2*t,e.height+2*r);var Rt=/^\s*$/,Qe=e=>e.nodeType===Node.TEXT_NODE&&!Rt.test(e.textContent),tt=e=>{if(!e)return null;if(Qe(e))return e;for(let t of Array.from(e.childNodes)){if(Qe(t))return t;let r=tt(t);if(r!==null)return r}return null};function*rt(e){if(e.nodeType===Node.TEXT_NODE){let t=e.textContent.trim().split(" ");for(let r of t)yield{node:e,word:r}}else for(let t=0;t<e.childNodes.length;t++)yield*rt(e.childNodes[t])}var et=(e,t)=>{if(!e||!tt(e))return null;let r=document.createRange(),i=rt(e),c=null,m="",l=0,n=1;for(;n<=t;){let g=i.next();if(g.done)return n<t&&r.setEnd(c,Math.min(l+m.length,c.textContent.length)),null;let{node:s,word:f}=g.value;if(!(!s||!f)){if(c!==s&&(l=0),n===1&&r.setStart(s,l),n===t){let w=s.textContent.indexOf(f,l)+f.length;r.setEnd(s,Math.min(w,s.textContent.length))}l+=f.length+1,m=f,c=s,n++}}return r},D=Re(Ke({hoveredParagraph:null,shouldShowHint:!1},e=>({updateHoveredParagraph:t=>e(r=>({...r,hoveredParagraph:t})),updateShouldShowHint:t=>e(r=>({...r,shouldShowHint:t}))}))),q=({element:e,block:t},r)=>{if(!e)return null;let i=et(e,1);if(!i)return null;let c=et(e,3);if(!c)return null;let m=i.getBoundingClientRect(),l=window.getComputedStyle(e),n=parseFloat(l.fontSize||"16")||16,g=Math.max(n,20),s=c.getBoundingClientRect(),f=new DOMRect(s.x-16,s.y,s.width+16,s.height),w=new DOMRect(f.x-g,s.y-(g-s.height)/2,g,g),v=ne({rect:w,horizontalPadding:4,verticalPadding:4}),b=je([s,f,v]),M=ne({rect:b,horizontalPadding:4,verticalPadding:0}),L=c.toString();return{block:t,element:e,elementFontSize:n,firstThreeWords:L,firstThreeWordsRange:c,hoverAreaRect:M,hoverPlayerSize:g,playerIconRect:w,firstWordRect:m,blockIndex:r,get reactKey(){return`${r}-${L}`}}};var ot="speechify-hover-player-shadow-root",nt="speechify-hover-player-container",Y=null,I=null,it=null,ie=()=>{};async function K(){let e=bt(),t=[];if(Y=document.querySelector(`#${ot}`)?.shadowRoot??null,!Y){let o=document.createElement("div");o.id=ot,document.body.appendChild(o),Y=o.attachShadow({mode:"open"})}I=Y.querySelector(`#${nt}`),I||(I=document.createElement("div"),I.id=nt,it=me({key:"hover-player-emotion-cache",container:I}),Y.appendChild(I));let{updateHoveredParagraph:r,updateShouldShowHint:i}=D.getState(),c=await Z("hover-player-hints");i(c);let m=()=>{i(!1),Ue("hover-player-hints")},l=o=>{if(!I){J(new Error("hover-player renderTooltip is called with no container"),{type:"hover-player"});return}if(!D.getState().shouldShowHint||!o||!o.firstThreeWords){te("hover-player-hints");return}let d=o.playerIconRect;Ve({key:o?.reactKey??"hover-player-hint-null",hintId:"hover-player-hints",anchorElement:null,text:"Hover over the first three words of any paragraph and click the “Play” button to start listening",xOffset:d.x+Ge*-1+ee*-1+ee/2*-1+d.width/2,yOffset:d.y-14,closable:!0,maxWidth:"350px",onClose:m})},n=o=>{if(!I){J(new Error("hover-player renderHoverPlayer is called with no container"),{type:"hover-player"});return}le(a(qe,{key:o?.reactKey??"hover-player-null",root:I,hoveredParagraph:o,emotionCache:it}),I)},g=()=>{n(null)},s=async()=>{if(!t||t.length===0)return;ie();let o=t.filter(y=>It(y)).map(y=>{let R=y.start.getParentElement().ref.value.ref;return{element:wt({tagName:R.tagName,startElement:R,endElement:y.end.getParentElement().ref.value.ref}),block:y}}),d=(0,W.debounce)(y=>{if(!e)return;let R=o.map(q).filter(Boolean).find(({hoverAreaRect:O})=>y.clientX>O.x&&y.clientX<O.x+O.width&&y.clientY>O.y&&y.clientY<O.y+O.height);!R&&D.getState().shouldShowHint||r(R??null)},16);window.addEventListener("mousemove",d),ie=()=>{window.removeEventListener("mousemove",d)},o?.length>0&&c&&w(q(o[0],0))},f=await Se("PLAYABLE_CONTENT_UPDATED",async({changed:o})=>{let d=o?.options?.sideEffects??!1,{bundle:y}=B.getBundleState();if(!y||d)return;let R=y?.listeningBundle.contentBundle.standardView,O=await Ee(R.getBlocksBetweenCursors.bind(R))(R.start,R.end),se=ye(O,()=>({blocks:[]})).blocks;(0,W.isEqual)(se,t)||(t=se,s())}),w=o=>{c&&o&&r(o)},v=null,b=!1,M=D.subscribe((o,d)=>{e&&d?.hoveredParagraph!==o?.hoveredParagraph&&(o?.hoveredParagraph?(v=o?.hoveredParagraph?.firstThreeWordsRange?.getBoundingClientRect(),n(o.hoveredParagraph),l(o.hoveredParagraph)):(g(),te("hover-player-hints")),o?.hoveredParagraph?.element!==d?.hoveredParagraph?.element&&(d?.hoveredParagraph?.element&&(P.unobserve(d?.hoveredParagraph?.element),x.unobserve(d?.hoveredParagraph?.element)),o?.hoveredParagraph?.element&&(P.observe(o?.hoveredParagraph?.element),x.observe(o?.hoveredParagraph?.element))))}),L=(0,W.debounce)(()=>{b=!1;let{hoveredParagraph:o}=D.getState();o&&(v=o.firstThreeWordsRange.getBoundingClientRect())},100),_=()=>{b=!0,L()};window.addEventListener("scroll",_);let G=()=>{let{hoveredParagraph:o}=D.getState();if(!o)return;let d=o.firstThreeWordsRange.getBoundingClientRect();if(!(d.x!==v?.x||d.y!==v?.y||d.width!==v?.width||d.height!==v?.height))return;let R=q(o,o.blockIndex);r(R),v=d},U=!1,E=o=>{U=o[0].isIntersecting},P=new ResizeObserver(G),x=new IntersectionObserver(E),S,ae=()=>{!b&&U&&e&&G(),S=requestAnimationFrame(ae)};return S=requestAnimationFrame(ae),()=>{e=!1,m(),S&&cancelAnimationFrame(S),window.removeEventListener("scroll",_),P.disconnect(),x.disconnect(),f(),M(),ie()}}var St=["H1","H2","H3","H4","H5","H6","PRE"],It=e=>e.start.getParentElement().ref.value.ref.nodeType===Node.ELEMENT_NODE&&!St.includes(e.start.getParentElement().ref.value.ref.tagName),wt=({startElement:e,endElement:t,tagName:r="P"})=>{let i=e,c=m=>{let l=m;for(;l;){if(l.tagName===r)return!0;l=l.parentElement}return!1};for(;i&&i!==t.parentElement;){if(c(i))return i;if(i.firstElementChild)i=i.firstElementChild;else{for(;i&&!i.nextElementSibling&&i!==t;)i=i.parentElement;i&&(i=i.nextElementSibling)}}return null},bt=()=>!(Ae()||xe()||_e()||X()||Ne()||be()||He()||Ce()||Te());p();h();var _t=F(z)`
  border-radius: 8px;
  margin-top: 1.5rem;
  position: relative;
`,at=({removeNotification:e})=>a(Ie,{removeNotification:e},a(z,{column:!0,separation:"12px"},a(_t,null,a(Ye,{alt:"hover player demo",src:"hoverPlayer/notification.png",style:{marginLeft:"-21px",height:"64px",width:"252px"}})),a(z,{column:!0,yAlign:!0,separation:"4px"},a(j,{semiBold:!0,fontSize:"16px"},"One click play"),a(j,{fontSize:"14px",color:pe(k.glass500),lineHeight:"20px"},"Hover over the first three words of any paragraph to start listening from there."))));async function xt(){let{listeningNudge:e={disabled:!1}}=await new Promise(n=>N.storage.local.get(["listeningNudge"],n));if(Oe()||X()||e.disabled||!await De())return;let t=()=>{};t=await K();let r=ve(async()=>{t(),t=await K()}),c=await Z("hover-player-hints",!0)?()=>{}:A.registerHook("PLAYBACK_STATE_CHANGED",async({state:n})=>{if(n==="playing"&&(Me("still-listening"),!ce())){let g=await Be("hover-player");if(g){let{dismissedByUser:s,displayCount:f}=g;if(s||f>0)return}Fe({id:"hover-player",priority:100,showOnMobile:!1,timeSensitive:!0,render:({dismiss:s})=>a(at,{removeNotification:s})})}}),m=oe.on("destroyed",()=>{t(),t=()=>{}}),l=A.registerHook("PLAYBACK_STATE_CHANGED",async({state:n})=>{(n==="playing"||n==="buffering")&&(t(),t=()=>{})});return()=>{r(),c(),t(),m(),l()}}export{xt as default};
//# sourceMappingURL=init-M2X324CQ.js.map
