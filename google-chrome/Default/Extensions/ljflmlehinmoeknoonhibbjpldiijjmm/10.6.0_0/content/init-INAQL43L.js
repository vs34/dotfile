import{a as O,b as U}from"./chunk-YM5H5SVQ.js";import{a as M}from"./chunk-NXQEIO42.js";import{a as b,c as P}from"./chunk-HY6N2ZOB.js";import{b as q,e as N}from"./chunk-LW72LJYS.js";import"./chunk-FSRBHFBF.js";import{a as F}from"./chunk-ECF6E4RL.js";import{a as w}from"./chunk-K5UBOOCY.js";import{c as p}from"./chunk-NI3TKWPM.js";import{a as t}from"./chunk-GQDQ63G2.js";import{a as u}from"./chunk-TQDQJ2R3.js";import"./chunk-T2I5CTNL.js";import{Aa as I,E as k,Ga as R,Ma as B,ra as G,u as A}from"./chunk-MXAKFU6F.js";import{a as D}from"./chunk-AEJIAELE.js";import"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{d as v,f as d,h as y,j as e,k as S,o as h}from"./chunk-67P5Y4J4.js";h();y();var E=v(A());h();y();var s=v(A());var te=u(p)`
  font-family: var(--font-family);
  background: ${({isDarkBackground:n})=>n?t.electric350:t.glass0};
  border-radius: 4000px;
  cursor: pointer;
  height: 24px;
  padding: 3px 4px;
  overflow: hidden;
  width: 55px;
  margin-left: ${({isUSVersion:n})=>n?"0px":"10px"};
  margin-top: 3px;
`,oe=u(p)`
  font-family: var(--font-family);
  cursor: pointer;
  overflow: hidden;
`,ne=u(p)`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`,ie=N(u.div`
  position: relative;

  // this is to make sure the tooltip and the icon are center aligned and we don't have to hack the margin left/right values for the tooltip;
  display: flex;
  flex-direction: column;
  align-items: center;
`),re=u(q)`
  position: absolute;
  margin-top: 42px;
  margin-left: 10px;
  z-index: 1000;
`,le=({isPlaying:n,isLoading:i,isDarkBackground:o,...m})=>{let r=(0,s.useMemo)(()=>i?"loading":n?"playing":"paused",[n,i]);return e(p,{...m},r==="playing"&&e(O,{pathFill:o?t.glass0:t.electric400,width:"18",height:"18"}),r==="loading"&&e(F,{color:o?t.glass0:t.electric400,width:"18",height:"18"}),r==="paused"&&e(U,{pathFill:o?t.glass0:t.electric400,width:"18",height:"18"}))},z=({isUSVersion:n,selectors:i})=>{let{isDarkBackground:o}=M(document.body),[m,r]=(0,s.useState)(!0),l=document.querySelector(i.contentMainSelector),W="showGoogleGenAIListenCopy",[$,Q]=(0,s.useState)(null),{state:L,play:_,pause:j,duration:K,queueAndPlayContent:Y,isActive:C}=I($),f=C&&L==="playing",x=C&&L==="buffering";(0,s.useEffect)(()=>{(async()=>{let J=Array.from(document.querySelectorAll(i.contentSelector)).filter(a=>getComputedStyle(a.parentElement,null)?.getPropertyValue("display")!=="none").filter(a=>!(i.ignoredSelectors.some(H=>a.classList.contains(H))||a.classList.contains(i.ignoredSelectorForCodeSegment)&&a.tagName.toLowerCase()===i.ignoredTagForCodeSegment)),{ObjectRef:X}=await G(),Z={getContent:await B(async()=>({content:J,chunksAfter:0,chunksBefore:0})),converter:a=>({text:a.textContent??"",ref:new X({ref:a})}),options:{autoplay:!0,sideEffects:!1},metadata:{source:"GoogleGenAIResult"}};Q(Z)})()},[l]),(0,s.useEffect)(()=>{(async()=>{let{showGoogleGenAIListenCopy:c}=await d.storage.local.get([W]);r(c??!0)})()},[]);let T=async c=>{if(c.preventDefault(),c.stopPropagation(),P()||R("browser-action",{animate:!1},"pill-player"),!C)return Y();if(!x){if(f)return j();if(!f)return _();await d.storage.local.set({showGoogleGenAIListenCopy:!1}),r(!1)}};return e(ie,null,c=>e(S,null,e(re,{background:o?t.glass200:t.glass800,display:c&&!m&&!x&&!f,direction:"up",tooltipStyle:{justifyContent:"space-between",minWidth:"128px",fontFamily:"ABCDiatype",fontSize:"14px"}},e(w,{color:o?t.glass700:t.glass1},"Listen to this answer")),e(oe,{yAlign:!0,relative:!0,column:!1,onClick:g=>T(g)},e(te,{yAlign:!0,relative:!0,column:!1,isUSVersion:n,onClick:g=>T(g),isDarkBackground:o,separation:"3px"},e(le,{isLoading:x,isPlaying:f,isDarkBackground:o}),e(ne,{yAlign:!0,xAlign:!0},e(w,{color:o?t.glass0:t.electric400,fixedWidthNumbers:!0},b("short")(K)))),m&&e("h3",{style:{color:o?t.glass0:t.electric400,fontFamily:"ABCDiatype",marginLeft:"8px",marginTop:"4px",fontSize:"16px"}},"Listen to answer"))))};var V="speechify-google-gen-ai-player-root";async function ae(n){let i=n.selectors;await k(i.mainSelectorUS),se(),await D(800);let o=!document.querySelector(`${i.mainSelectorIN}`),m=o?i.mainSelectorUS:i.mainSelectorIN,r=document.querySelector(`${m}`);if(r){let l=document.createElement("span");l.id=V,o&&(l.style.display="flex",l.style.marginTop="10px",l.style.marginBottom="10px"),o?r.prepend(l):r.appendChild(l),(0,E.render)(e(z,{isUSVersion:o,selectors:i}),l)}return null}var se=()=>{let n=document.querySelector(`#${V}`);n&&(n.remove(),(0,E.render)(null,n))};export{ae as default};
//# sourceMappingURL=init-INAQL43L.js.map
