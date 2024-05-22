import{a as V}from"./chunk-W3OIQ7P2.js";import{a as L}from"./chunk-C3I6GVRE.js";import{c as Y}from"./chunk-IYRDPVLC.js";import{a as z}from"./chunk-6NRTMNN7.js";import{a as B}from"./chunk-XGYFSZQ6.js";import"./chunk-QN4RGOLN.js";import{a as k,b as N}from"./chunk-HLMPSWHH.js";import{b as D}from"./chunk-LHOLRJGV.js";import"./chunk-7UQMA7CF.js";import"./chunk-XE6MGSMA.js";import"./chunk-7C54YT6Q.js";import"./chunk-JOEBXTX7.js";import"./chunk-A7YAUIHP.js";import"./chunk-FVAPUUYJ.js";import"./chunk-X5OSF7OY.js";import"./chunk-UYYFRKUS.js";import"./chunk-WYLZIWPZ.js";import"./chunk-LW72LJYS.js";import"./chunk-FSRBHFBF.js";import"./chunk-ECF6E4RL.js";import"./chunk-WRXKWN4M.js";import"./chunk-K5UBOOCY.js";import{c as d}from"./chunk-NI3TKWPM.js";import{a as r}from"./chunk-GQDQ63G2.js";import{a as n}from"./chunk-TQDQJ2R3.js";import{b as w,h as M}from"./chunk-T2I5CTNL.js";import"./chunk-26DQFRDO.js";import{Da as O,Db as F,Ea as I,f as A,ib as U,mb as $,u as et}from"./chunk-MXAKFU6F.js";import"./chunk-TOYWBR4G.js";import"./chunk-AEJIAELE.js";import"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{d as tt,h as f,j as o,l as P,n as ot,o as h}from"./chunk-67P5Y4J4.js";h();f();ot();h();f();var e=tt(et());h();f();var X={"⌘":"Cmd","⌃":"Ctrl","⌥":"Option","⇧":"Shift"};function R(t){return t in X?X[t]:t}var nt=n.div`
  cursor: grab;
  position: fixed;
  z-index: 999999999;
  border: 6px solid transparent;

  opacity: 0.2;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`,j=n(d)`
  padding: 6px;
  background: ${()=>r.glass800};
  border-radius: 8px;
  font-family: ABCDiatype;
  color: ${()=>r.glass0};
  position: relative;
  user-select: none;
`,rt=n(d)`
  position: relative;
  font-size: 14px;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`,st=n(d)`
  font-size: 22px;
  line-height: 24px;
`,it=n(d)`
  background-color: ${()=>r.glass200};
  color: ${()=>r.glass700};
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid ${()=>r.glass350};
  box-shadow: 1px 1px 0px ${()=>r.glass350};
`,at=n(d)`
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`,Bt=n(j)`
  position: relative;
  max-width: 240px;
  padding: 0px;
`,Vt=n.div`
  position: absolute;
  width: 39px;
  height: 41px;
  left: 201px;
  top: 0px;

  /* glass0 */
  background: #ffffff;
  opacity: 0.75;
  filter: blur(4.5px);
  z-index: 1;
`,Xt=n(L)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  path {
    fill: ${()=>r.glass700};
  }
}`,ct=n(L)`
  position: absolute;
  background: ${()=>r.electric350};
  border-radius: 100%;
  padding: 4px;
  top: -16px;
  right: -16px;
  width: 8px;
  height: 8px;
  fill: white;
`,Gt=n.div`
  padding: 1rem;
`,Ht=n(B)`
  width: 100%;
  object-fit: contain;
  /* shadow 400 */
  filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  border-radius: 8px 8px 0px 0px;
  animation: fade-in 1s ease-in-out;
`,lt=n(d)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-color: ${()=>r.electric400};
  border-radius: 32px;

  &:hover {
    background-color: ${()=>r.electric350};
  }

  & > svg {
    width: 16px;
  }
`,u={},ut=t=>{let s=(0,e.useRef)();(0,e.useEffect)(()=>{if(t){let m=c=>{if(s.current){let{x:b,y:g}=s.current,x=c.clientX-b,S=c.clientY-g,y={x:Number(t.style.left.replace("px","")),y:Number(t.style.bottom.replace("px",""))};u.x=y.x+x,u.y=y.y-S,t.style.left=`${u.x}px`,t.style.bottom=`${u.y}px`,s.current={x:c.clientX,y:c.clientY}}},i=()=>{s.current=void 0,t.style.cursor="grab"},a=c=>{t.style.cursor="grabbing",s.current={x:c.clientX,y:c.clientY}};return t.addEventListener("mousedown",a),document.addEventListener("mousemove",m),document.addEventListener("mouseup",i),()=>{t.removeEventListener("mousedown",a),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",i)}}},[t])},mt=!1;function K({root:t}){let[s,m]=(0,e.useState)(null),i=Y(),[a,c]=(0,e.useState)(!1),[b,g]=(0,e.useState)(!0),[x,S]=(0,e.useState)(!1),[y,q]=(0,e.useState)(),[C,J]=(0,e.useState)();if(ut(s),V(g),["app.speechify.com","onboarding.speechify.com","calendar.google.com","sheets.google.com","youtube.com","google.com","mail.google.com","read.amazon.in","read.amazon.com"].includes(window.location.hostname))return;let _=()=>{g(!0),D(),F("extension_shortcut_prompt_closed")},Q=(0,e.useMemo)(()=>w({key:"shortcuts-prompt-emotion-cache",container:t}),[t]);return(0,e.useEffect)(()=>{let l=async()=>{c(p=>!p)};return O("hide-shortcut-prompt",l,"shortcuts-prompt"),()=>{I("browser-action",l),I("hide-shortcut-prompt",l)}},[]),(0,e.useEffect)(()=>{let l=k.on("update",p=>{let E=p["play-pause-new"]||p["play-pause"],Z=window.navigator.userAgent,v=[];/Mac OS|Macintosh|MacIntel/.test(Z)?v=E?.shortcut.split("").map(R):v=E?.shortcut.split("+").map(R),q(E?.shortcut),J(v)});return()=>l()},[]),o(M,{value:Q},!a&&!b&&i&&C&&o(nt,{ref:m,style:{left:u.x?u.x:mt?274:26,bottom:u.y?u.y:26},onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1)},o(j,{as:"button",separation:"8px",yAlign:!0},x?o(rt,{yAlign:!0},o("span",null,"Press"),C.map((l,p)=>o(at,{key:l,yAlign:!0},o(it,{key:l},l),p<C.length-1&&o("span",null,"+"))),o("span",null,"to listen")):o(st,null,y),o(lt,{xAlign:!0,yAlign:!0,onClick:_},o(z,null)),x?o(ct,{onClick:_}):null)))}var T;async function dt({disabled:t=!1}){let s=await U("shortcutReminderPlayPause");if($("shortcutReminderPlayPause",s),s==="enabled"&&!t){if(!T){let a=document.createElement("div");a.id="speechify-shortcuts-prompt",document.body.appendChild(a),T=a.attachShadow({mode:"open"})}let m=async()=>{if(document.visibilityState==="hidden")return;let a=await A("/keyboard-shortcuts/force-get-command-list");N(a)};document.addEventListener("visibilitychange",m);let i=document.createElement("div");return i.id="speechify-shortcuts-prompt-root",T.appendChild(i),P(o(K,{root:i}),i),()=>{document.removeEventListener("visibilitychange",m),P(()=>null,i)}}}export{dt as default};
//# sourceMappingURL=init-5ZOYWLZ2.js.map
