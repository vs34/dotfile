import{b as Ae}from"./chunk-IYRDPVLC.js";import{a as ke}from"./chunk-6NRTMNN7.js";import{a as B,c as ye}from"./chunk-HY6N2ZOB.js";import{a as V,d as Ee}from"./chunk-X5OSF7OY.js";import"./chunk-UYYFRKUS.js";import"./chunk-ECF6E4RL.js";import{b as Ce}from"./chunk-WRXKWN4M.js";import{a as P,b as ge}from"./chunk-K5UBOOCY.js";import{c as w,d as ue}from"./chunk-NI3TKWPM.js";import{a as fe,b as f,c as J,h as g,i as he,j as R}from"./chunk-GQDQ63G2.js";import{a as m}from"./chunk-TQDQJ2R3.js";import{b as me,h as ce}from"./chunk-T2I5CTNL.js";import{a as ve}from"./chunk-26DQFRDO.js";import{B as be,Cb as Te,D as xe,Db as ee,E as we,Ga as Se,Ja as M,Jb as Pe,Ka as A,Sb as Le,e as ae,h as de,ib as Y,m as Ge,mb as H,q as pe,u as z,za as Q}from"./chunk-MXAKFU6F.js";import"./chunk-TOYWBR4G.js";import"./chunk-AEJIAELE.js";import{J as le}from"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{d as W,f as h,h as d,j as t,l as O,n as je,o as p}from"./chunk-67P5Y4J4.js";p();d();je();p();d();var Ie=le("site-setting",{getInitialState:async()=>({settings:[]})}),te=()=>Ie.get("settings"),Me=e=>Ie.set("settings",e);p();d();var L=W(z());p();d();var _=W(z());p();d();Ge();p();d();var E=W(z());p();d();var Re=({strokeLineCap:e,...o})=>t("path",{d:"M 1,1 L 99,1","fill-opacity":"0","stroke-width":"2",stroke:g(fe.glass300),"stroke-linecap":e??"square",...o}),q=({percent:e,strokeColor:o,strokeLineCap:n,...i})=>t("svg",{viewBox:"0 0 100 2",preserveAspectRatio:"none","aria-label":V("SEEKBAR"),style:{width:"100%",cursor:"pointer"},...i},t(Re,{strokeLineCap:n}),t(Re,{stroke:o,strokeLineCap:n,style:`stroke-dashoffset: 0.2px; stroke-dasharray: ${Math.max(e-.2,0)}px, 100px;`}));var oe=m(w)`
  position: absolute;
  left: 0;
  right: 0;
`,Ze=m(w)`
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-between;
  padding: 0 8px;
`,G=he.controls.seekbar.holder,ne=m("div")`
  width: 4px;
  height: 12px;
  background: ${()=>G};
  border-radius: 1px;
  pointer-events: none;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,j=({ariaElement:e,time:o})=>t(ge,{"aria-label":V(e),fixedWidthNumbers:!0,fontSize:"12px",style:{whiteSpace:"nowrap"}},B("short")(o)),Oe=({customStyle:e,currentTime:o,duration:n,onChange:i,onMouseUp:r,...c})=>{let s=(0,E.useRef)(),[l,y]=(0,E.useState)(!1),a=o/Math.max(n,1)*100,b=(0,E.useCallback)(u=>{let x=s.current.base.getBoundingClientRect();return Math.max(0,(u.clientX-x.x)/x.width*n)},[s,n]),v=(0,E.useCallback)(u=>{u.stopPropagation(),i(b(u)),y(!0)},[l,b,i]);return(0,E.useEffect)(()=>{if(!l)return;let u=x=>i(b(x));return window.addEventListener("mousemove",u),()=>window.removeEventListener("mousemove",u)},[l,b,i]),(0,E.useEffect)(()=>{if(!l)return;let u=x=>{y(!1),typeof r=="function"&&r(b(x)),window.removeEventListener("mouseup",u)};return window.addEventListener("mouseup",u),()=>window.removeEventListener("mouseup",u)},[l,b,i]),e?.position?e?.position==="top"?t(oe,{yAlign:!0,relative:!0,...c,style:{top:0}},t(q,{ref:s,percent:a,strokeColor:G,onMouseDown:v}),t(ne,{percent:a,disableAnimation:l,style:{left:`${a}%`,height:"4px"}})):t(oe,{yAlign:!0,relative:!0,...c,style:{bottom:0}},e.withTimeLabel&&t(Ze,{relative:!0,align:!0},t(j,{ariaElement:"CURRENT_TIME",time:o}),t(j,{ariaElement:"DURATION",time:n})),t(oe,{yAlign:!0,relative:!0,...c,style:{bottom:0}},t(q,{ref:s,percent:a,strokeColor:G,onMouseDown:v}),t(ne,{percent:a,disableAnimation:l,style:{left:`${a}%`,height:"12px",width:"12px",marginLeft:"-6px",borderRadius:"100%"}}))):t(w,{separation:"16px",yAlign:!0,...c},t(j,{ariaElement:"CURRENT_TIME",time:o}),t(w,{yAlign:!0,relative:!0},t(q,{ref:s,percent:a,strokeColor:G,strokeLineCap:"round",onMouseDown:v,style:{width:"100%",cursor:"pointer",padding:"8px 0"}}),t(ne,{percent:a,disableAnimation:l,style:{left:`${a}%`}})),t(j,{ariaElement:"DURATION",time:n}))};var Be=({customStyle:e={},duration:o,seek:n,...i})=>{let r=A.useProgress(),[c,s]=de(null),l=Math.floor((r??0)*o);return t(Oe,{customStyle:e,currentTime:c??l,duration:o,onChange:async a=>{a<=o&&s(Math.round(a))},onMouseUp:a=>{n(a/o).then(()=>{if(Q(A.getPlayingState()))s(null);else{let b=M.registerHook("PLAYBACK_STATE_CHANGED",async({state:v})=>{Q(v)&&(s(null),b())})}})},...i})};p();d();var _e=e=>t(R,{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",...e},t("path",{opacity:"0.5","fill-rule":"evenodd","clip-rule":"evenodd",d:"M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z",fill:"#2137FC"}),t("path",{opacity:"0.5","fill-rule":"evenodd","clip-rule":"evenodd",d:"M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26ZM14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z",fill:"#6B78FC"}));p();d();var De=e=>t(R,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",...e},t("path",{d:"M12.0094 15.795C12.2348 15.795 12.4508 15.7199 12.6762 15.4945L15.8227 12.4608C15.9823 12.3011 16.0762 12.132 16.0762 11.8972C16.0762 11.4558 15.7193 11.1459 15.2873 11.1459C15.0713 11.1459 14.8552 11.2304 14.705 11.3994L13.3901 12.7989L12.7889 13.4939L12.8829 12.0945V2.36409C12.8829 1.90387 12.4884 1.5 12.0094 1.5C11.521 1.5 11.1265 1.90387 11.1265 2.36409V12.0945L11.2204 13.4939L10.6193 12.7989L9.30442 11.3994C9.15414 11.2304 8.92873 11.1459 8.71271 11.1459C8.28066 11.1459 7.93315 11.4558 7.93315 11.8972C7.93315 12.132 8.02707 12.3011 8.18674 12.4608L11.3331 15.4945C11.568 15.7199 11.7746 15.795 12.0094 15.795ZM6.59945 21.8718H17.4099C19.4481 21.8718 20.5 20.8199 20.5 18.8099V9.2674C20.5 7.25746 19.4481 6.20553 17.4099 6.20553H14.7895V8.08398H17.2878C18.1519 8.08398 18.6309 8.53481 18.6309 9.43646V18.6409C18.6309 19.5519 18.1519 20.0028 17.2878 20.0028H6.71215C5.84807 20.0028 5.37845 19.5519 5.37845 18.6409V9.43646C5.37845 8.53481 5.84807 8.08398 6.71215 8.08398H9.21989V6.20553H6.59945C4.56133 6.20553 3.5 7.25746 3.5 9.2674V18.8099C3.5 20.8199 4.56133 21.8718 6.59945 21.8718Z",fill:"white"}));p();d();var Ne=e=>t(R,{viewBox:"0 0 4 12",xmlns:"http://www.w3.org/2000/svg",size:"16px",...e},t("path",{d:"M2.225 2.871a1.23 1.23 0 001.242-1.254 1.243 1.243 0 00-2.485 0c0 .692.563 1.254 1.243 1.254zm0 4.365c.697 0 1.242-.545 1.242-1.242 0-.685-.557-1.236-1.242-1.236-.68 0-1.243.55-1.243 1.236 0 .686.563 1.242 1.243 1.242zm0 4.383c.697 0 1.242-.55 1.242-1.242 0-.697-.557-1.254-1.242-1.254a1.25 1.25 0 000 2.496z"}));var Ke=m(ue)`
  background-color: ${f.glass[700]};
  border-radius: 8px;
  width: ${({width:e})=>e??"691px"};
  min-width: 360px;
  max-width: 100%;
  height: ${({height:e})=>e??"72px"};
`.withComponent("div"),Je=m(w)`
  border-radius: 8px;
  margin: 4px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`.withComponent("div"),Fe=m(P)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  justify-self: start;
  margin-left: 12px;
  width: calc(100% - 12px);
  font-family: 'ABCDiatype';
  > div > div {
    width: 100%;
  }
`.withComponent("div"),Qe=m(P)`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  justify-self: end;
  font-family: 'ABCDiatype';
  width: 18px;
  position: absolute;
  align-self: baseline;
  margin-top: 5px;
`.withComponent("div"),He=m(P)`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  justify-self: end;
  font-family: 'ABCDiatype';
  color: rgba(255, 255, 255, 1);
  width: 34px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  border-radius: 4px;
  background-color: ${f.glass[700]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`.withComponent("div"),et=m(P)`
  display: flex;
  justify-content: end;
  margin-bottom: 8px;
  min-width: 360px;
  max-width: 100%;
  width: ${({width:e})=>e??"691px"};
  height: 18px;
`.withComponent("div"),tt=m("div")`
  position: relative;
  margin-left: 16px;
  & svg {
    cursor: pointer;
  }

  & .tooltip {
    display: none;
  }

  &:hover .tooltip {
    display: flex;
  }
`,ot=m("div")`
  & svg {
    margin: auto 16px;
    width: 40px;
    height: 22.35px;
  }
`,nt=m(w)`
  position: absolute;
  z-index: 2000;
  top: 40px;
  right: 0px;
  transform: translateX(calc(50% - 12px));
  width: 216px;
  font-family: 'ABCDiatype';
  font-style: normal;
  border-radius: 6px;
  padding: 26px 24px 23px 24px;
  border: 1px solid ${()=>g(f.glass[300])};
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  color: ${()=>g(f.glass[700])};
  background-color: ${()=>g(f.glass[200])};

  ::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: calc(50% - 8px);
    bottom: 100%;
    border-style: solid;
    border-width: 8px;
    border-color: transparent transparent
      ${()=>g(f.glass[300])} transparent;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left: calc(50% - 6px);
    bottom: 100%;
    border-style: solid;
    border-width: 6px;
    border-color: transparent transparent
      ${()=>g(f.glass[200])} transparent;
  }
`,it=m(P)`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`,rt=m(P)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
`,st=m(Ce)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`,at=m(w)`
  position: absolute;
  z-index: 2000;
  bottom: 34px;
  right: 0px;
  transform: translateX(calc(50% - 12px));
  font-family: 'ABCDiatype';
  font-style: normal;
  border-radius: 3px;
  padding: 8px;
  border: 0.5px solid ${()=>g(f.glass[300])};
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  color: ${()=>g(f.glass[700])};
  background-color: ${()=>g(f.glass[200])};

  ::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: calc(50% - 4px);
    top: 100%;
    border-style: solid;
    border-width: 4px;
    border-color: ${()=>g(f.glass[300])} transparent
      transparent transparent;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left: calc(50% - 3px);
    top: 100%;
    border-style: solid;
    border-width: 3px;
    border-color: ${()=>g(f.glass[200])} transparent
      transparent transparent;
  }
`,lt=m(P)`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  width: max-content;
`,dt=({onClose:e})=>t(nt,{column:!0,separation:"4px"},t(it,null,"Import this book"),t(rt,null,"Get the entire book imported. So you can listen this book smoothly in Speechify library."),t(st,{onClick:e})),pt=()=>t(at,{className:"tooltip"},t(lt,null,"Import this entire book"));Fe.defaultProps={color:J.typography.onBackground.primary};var $e=({onClick:e,isLoadingFailed:o,isLoading:n,isPlaying:i,duration:r,durationSaved:c,addSiteToHideList:s,configure:l,width:y,importEnabled:a=!1})=>{let{seekTo:b}=M,v=Ee({isLoadingFailed:o,isLoading:n,isPlaying:i}),[u,x]=(0,_.useState)(!1),[k,F]=(0,_.useState)(!1),K=()=>{x(!u)},$=()=>{s(l.site),x(!1),ee("extension_usage_hide_player",{site:l.site})};(0,_.useEffect)(()=>{new Promise(I=>h.storage.sync.get("embeddedPlayerImportNofiticationShown",I)).then(({embeddedPlayerImportNofiticationShown:I})=>{F(I)})},[]);let U=()=>{F(!0),h.storage.sync.set({embeddedPlayerImportNofiticationShown:!0})},T=()=>{ee("extension_import_on_embedded_player"),pe().then(I=>{if(I&&!Le(I)){let qe=`${ae.speechifyWebApp.baseUrl}/importUrl?url=${encodeURIComponent(window.location.href)}`;window.open(qe,"_blank")}else window.open("https://app.speechify.com","_blank")})},Ve=()=>{T(),U()},Ye=()=>{e()};return t(Je,null,t(et,{width:y},u&&t(He,{onClick:$},"Hide")),t(Ke,{width:y,height:l.height,yAlign:!0,xAlign:!0,columns:"72px 1fr max-content"},t("button",{style:{position:"relative",backgroundColor:"#6A79FD",borderRadius:"50%",height:"48px",width:"48px",marginLeft:"12px",display:"flex",justifyContent:"center",alignItems:"center",outline:"none",border:"none"},"aria-label":"Speechify Play Button"},t(v,{onClick:e,width:"24px",height:"32px",color:f.glass[0],style:{pointerEvents:"all"}}),t(ve,{onClick:Ye})),t(Fe,{style:{marginLeft:"12px"}},c>0?`Save ${B("short")(c)} by listening`:B("long")(r),t(Be,{duration:r,seek:b,style:{marginTop:"5px"}})),t(w,null,a&&t(tt,null,t(De,{onClick:T,color:f.glass[0]}),!k&&t(_e,{onClick:Ve,style:{position:"absolute",left:"-2px"}}),a&&!k&&t(dt,{onClose:U}),a&&k&&t(pt,null)),t(ot,null,t(ke,{color:J.controls.backgrounds.contrast}))),t(Qe,null,t(Ne,{width:"13px",height:"13px",color:f.glass[350],onClick:K}))))};p();d();var D=W(z());function Ue(){let e=Ae(),{totalEstimatedDuration:o}=A.useTime(),[n,i]=(0,D.useState)(o),[r,c]=(0,D.useState)(0);return(0,D.useEffect)(()=>{let s=n/(e??1);i(o),c(n-s)},[n,o]),{duration:n,durationSaved:r}}function X({container:e,importEnabled:o,config:n,addSiteToHideList:i}){let[r,c]=(0,L.useState)();(0,L.useEffect)(()=>{let $=new ResizeObserver(U=>{let T=U[0];T&&T.contentRect&&T.contentRect.width&&c(T.contentRect.width<=691?`${T.contentRect.width}px`:"691px")});return $.observe(e),()=>$.disconnect()},[e,c]);let s=A.usePlayingState(),{play:l,pause:y}=M,a=s==="playing",b=s==="ended",v=s==="buffering",u=s==="errored",x=(0,L.useCallback)(async()=>{if(a)return y();ye()||Se("browser-action",{animate:!1},"pill-player"),await l(),Pe({triggeredFrom:"EmbeddedPlayer"})},[a,b,l,y]),{duration:k,durationSaved:F}=Ue();if(k===0)return null;let K=(0,L.useMemo)(()=>me({key:"player-emotion-cache",container:e}),[e]);return t(ce,{value:K},t($e,{onClick:x,isLoadingFailed:u,isLoading:v,isPlaying:a,duration:k,durationSaved:F,addSiteToHideList:i,configure:n,width:r,importEnabled:o}))}var N="speechify-embedded-player",Z,ie=new Date;function re(){let e=document.querySelector(`#${N}`);Z&&Z.disconnect(),e&&(O(()=>null,e),e.remove())}function mt(e){let o=document.querySelector('[data-testid="headline"]');if(!o)return;let n=document.createElement("div");n.id=N;let i=n.attachShadow({mode:"open"});o.parentNode.insertBefore(n,o.nextElementSibling);let r=document.createElement("div");r.id="speechify-embedded-player-root",i.appendChild(r),O(t(X,{container:r,addSiteToHideList:se,config:e,importEnabled:!1}),r)}async function ct(e){let o=e.inlinePlayerSelector.indexOf("::prepend")>-1,n=o?e.inlinePlayerSelector.replace("::prepend",""):e.inlinePlayerSelector,i=be(n);if(i){let r=document.createElement("div");r.id=N;let c=r.attachShadow({mode:"open"});o?i.parentNode.prepend(r):i.parentNode.insertBefore(r,i.nextElementSibling);let s=document.createElement("div");if(s.id="speechify-embedded-player-root",c.appendChild(s),window.location.hostname.endsWith("royalroad.com")||window.location.hostname.endsWith("archiveofourown.org")){let l=await Y("show_import_button_royal_road");l==="show"&&(H("show_import_button_royal_road",l),e.importEnabled=!0)}O(t(X,{container:s,importEnabled:e.importEnabled,addSiteToHideList:se,config:e}),s)}return()=>{}}async function ut(e){let o=parseInt(window.location.pathname.match(/[0-9]+/)?.[0]??""),n=xe(()=>{let a=parseInt(window.location.pathname.match(/[0-9]+/)?.[0]??"");o!==a&&window.location.reload()}),i=document.querySelector("div.author"),r=document.createElement("div");r.id=N;let c=r.attachShadow({mode:"open"});i?document.querySelector("header.panel.panel-reading")?.insertBefore(r,i):document.querySelector("div.part-header")?.parentNode?.appendChild(r);let s=document.createElement("div");s.id="speechify-embedded-player-root",c.appendChild(s);let l=!1,y=await Y("show_import_button_royal_road");return y==="show"&&(H("show_import_button_royal_road",y),l=!0),O(t(X,{container:s,importEnabled:l,addSiteToHideList:se,config:e}),s),()=>{n()}}var ze=e=>Me(e);async function se(e){let o=await te(),n=o?.findIndex(i=>i.name===e);n>=0?(o[n].settings.embeddedPlayer.lastModifiedAt=ie.getTime(),o[n].settings.embeddedPlayer.state=!1):o.push({name:e,settings:{embeddedPlayer:{state:!1,lastModifiedAt:ie.getTime()}}}),re(),ze(o)}async function ft(e){let o=await te(),n=12096e5,i=o?.find(r=>r.name===e);return i?i.settings.embeddedPlayer.lastModifiedAt+n<=ie.getTime()||i.settings.embeddedPlayer.state===!0?(i.settings.embeddedPlayer.state=!0,o[o.indexOf(i)]=i,ze(o),!1):!0:!1}async function We(e){if(await we(e?.awaitedElement??""),!document.querySelector(`#${N}`))return e?.site==="Nytimes"?mt(e):e?.site==="Wattpad"?ut(e):e?.site?ct(e):()=>{}}async function ht(e){let o=await Y("UseFirstWordToPlay");if(await Te()&&o==="UseFirstWordToPlay")return;if(await ft(e?.site))return()=>{};let n=await We(e);return Z=new MutationObserver(We),Z.observe(document,{subtree:!0,childList:!0}),()=>{n&&n(),re&&re()}}export{ht as default};
//# sourceMappingURL=init-7TX5LYV2.js.map
