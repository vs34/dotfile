import{a as U,b as Y}from"./chunk-YM5H5SVQ.js";import{a as K}from"./chunk-NXQEIO42.js";import{a as q,c as R}from"./chunk-HY6N2ZOB.js";import{b as _,e as j}from"./chunk-LW72LJYS.js";import"./chunk-FSRBHFBF.js";import{a as W}from"./chunk-ECF6E4RL.js";import{a as w}from"./chunk-K5UBOOCY.js";import{c as S}from"./chunk-NI3TKWPM.js";import{a as r}from"./chunk-GQDQ63G2.js";import{a as d}from"./chunk-TQDQJ2R3.js";import"./chunk-T2I5CTNL.js";import{a as G}from"./chunk-26DQFRDO.js";import{Aa as B,Ca as I,D as P,E as F,Ga as N,Ja as z,Ma as Q,g as te,ra as $,u as D}from"./chunk-MXAKFU6F.js";import"./chunk-TOYWBR4G.js";import{a as M}from"./chunk-AEJIAELE.js";import"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{d as k,h as y,j as o,k as b,o as h}from"./chunk-67P5Y4J4.js";h();y();var v=k(D());h();y();var i=k(D());var ne=d(S)`
  font-family: var(--font-family);
  background: ${({isDarkBackground:e})=>e?"#283750":"#EEEEFF"};
  border-radius: 4000px;
  cursor: pointer;
  height: 20px;
  padding: 2px 2px;
  overflow: hidden;
  width: 55px;
  margin-left: 5px;
  margin-top: 3px;
  &:hover {
    background-color: ${({isDarkBackground:e})=>e?"#465069":r.electric200Hov};
  }
  &:active {
    background-color: ${({isDarkBackground:e})=>e?"#556478":r.electric200Press};
  }
`,ie=d(S)`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`,le=j(d.div`
  // this is to make sure the tooltip and the icon are center aligned and we don't have to hack the margin left/right values for the tooltip;
  display: flex;
  flex-direction: column;
  align-items: center;
`),ae=d(_)`
  position: absolute;
  margin-top: 34px;
  margin-left: 4px;
  z-index: 1000;
`,ce=({isPlaying:e,isLoading:t,isDarkBackground:n,...s})=>{let l=(0,i.useMemo)(()=>t?"loading":e?"playing":"paused",[e,t]);return o(S,{...s},l==="playing"&&o(U,{pathFill:n?r.electric350:r.electric400,width:"18",height:"18"}),l==="loading"&&o(W,{color:n?r.electric350:r.electric400,width:"18",height:"18"}),l==="paused"&&o(Y,{pathFill:n?r.electric350:r.electric400,width:"18",height:"18"}))},J=({selectors:e,wrapper:t})=>{let[n,s]=(0,i.useState)(null),{state:l,pause:C,play:x,duration:u,isActive:c,queueAndPlayContent:f}=B(n),[a,Z]=(0,i.useState)(0),{isDarkBackground:m}=K(document.querySelector(e.darkThemeSelector)),p=c&&l==="playing",E=c&&l==="buffering";(0,i.useEffect)(()=>{n&&I(n).then(Z)},[n]),(0,i.useEffect)(()=>((async()=>{let{ObjectRef:H}=await $(),O=t.closest(e.contentParentSelector)?.querySelector(e.contentSelector1)??t.closest(e.contentParentSelector)?.querySelector(e.contentSelector2);if(!O)return;let ee={getContent:await Q(async()=>({content:[O],chunksAfter:0,chunksBefore:0})),converter:A=>({text:A.textContent??"",ref:new H({ref:A})}),options:{autoplay:!0,sideEffects:!1},metadata:{source:"Outlook"}};s(ee)})(),()=>{T(t)}),[t]),(0,i.useEffect)(()=>P(()=>{z.pause()}),[]),(0,i.useEffect)(()=>P(()=>{T(t)}));let L=g=>{if(g.stopPropagation(),!c)return f();if(!E){if(p)return C();if(R()||N("browser-action",{animate:!1},"pill-player"),!p)return x()}};return o(le,null,g=>o(b,null,o(ae,{background:m?r.glass200:r.glass800,display:g&&!p&&!E,direction:"up",tooltipStyle:{justifyContent:"space-between",minWidth:"128px",fontFamily:"ABCDiatype",fontSize:"14px"}},o(w,{color:m?r.glass700:r.glass1},"Listen to this email")),o(ne,{yAlign:!0,onClick:L,isDarkBackground:m,separation:"2px"},o(ce,{isLoading:E,isPlaying:p,isDarkBackground:m}),o(ie,{yAlign:!0,xAlign:!0},o(w,{color:m?r.electric350:r.electric400,fixedWidthNumbers:!0},q("short")(u===0?a:u))),o(G,{onClick:L}))))};var X=k(te());var V="speechify-outlook-player-root";async function se(e){let t=e.selectors,n=(0,X.debounce)(async C=>{if(ue(C))return;let x=!!(document.querySelector(`${t.forwardedEmailSelector}`)??document.querySelector(`${t.forwardedEmailSelector2}`)?.querySelector(`${t.forwardedEmailSelectorChild}`)?.querySelector(`${t.forwardedEmailSelectorChild}`)),u=document.querySelectorAll(`${t.mainSelector}`);if(u.length===0)return;let c=0;for(let f of u){if(f.querySelector(`#${V}`)||x)continue;c&&await M(c*1e3),c=c+2;let a=document.createElement("span");a.id=V,a.style.display="inline-flex",a.style.marginTop="-1px",a.style.position="absolute",f.appendChild(a),(0,v.render)(o(J,{selectors:t,wrapper:a}),a)}},500);n([]),await F(t.mainHandleSelector);let s=document.querySelector(t.mainHandleSelector),l=new MutationObserver(n);return l.observe(s,{subtree:!0,childList:!0}),()=>{l.disconnect()}}var ue=e=>e.some(t=>t.target instanceof HTMLElement?t.target?.className?.includes("speechify")||t.target?.id?.includes("speechify"):!1),T=e=>{e&&(e.remove(),(0,v.render)(null,e))};export{se as default,T as destroyOutlook};
//# sourceMappingURL=init-F4YIL3MC.js.map
