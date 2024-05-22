import{a as w}from"./chunk-2FG3LFIK.js";import{a as N}from"./chunk-XGYFSZQ6.js";import{o as v}from"./chunk-FVAPUUYJ.js";import"./chunk-X5OSF7OY.js";import"./chunk-UYYFRKUS.js";import"./chunk-WYLZIWPZ.js";import"./chunk-LW72LJYS.js";import"./chunk-FSRBHFBF.js";import"./chunk-ECF6E4RL.js";import"./chunk-WRXKWN4M.js";import{a as y}from"./chunk-K5UBOOCY.js";import{c as g}from"./chunk-NI3TKWPM.js";import{a as u,b as C,i as h}from"./chunk-GQDQ63G2.js";import{a as e}from"./chunk-TQDQJ2R3.js";import"./chunk-T2I5CTNL.js";import{Db as c,Yb as l,Zb as b,f,n as d,q as x}from"./chunk-MXAKFU6F.js";import"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{f as i,h as n,j as t,o as a}from"./chunk-67P5Y4J4.js";a();n();a();n();var S=d(async(o,s)=>f("/lms/get-integration-credential",{userId:o,provider:s}));a();n();var B=e(g)`
  width: 512px;
  height: 48px;
  position: fixed;
  top: 64px !important;
  left: 50%;
  pointer-events: auto;
  transform: translateX(-50%);
  display: inline-flex;
  padding: 8px 24px 8px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  box-sizing: border-box;
  background: ${u.glass700};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04),
    0px 16px 24px 0px rgba(0, 0, 0, 0.06);
  @keyframes slide-down {
    from {
      transform: translate(-50%, -100%);
    }
    to {
      transform: translate(-50%, 0);
    }
  }
  animation: slide-down 0.25s ease-out;
`,L=e(y)`
  font-family: 'ABCDiatype';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.14px;
`,O=e(v)`
  position: absolute;
  top: 16px;
  right: 8px;
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  svg {
    width: 10px;
    height: 10px;
    min-width: 12px;
  }
`,U=e("a")`
  display: flex;
  width: 74px !importat;
  height: 24px;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  font-family: 'ABCDiatype';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.12px;
  border-radius: 4px;
  box-sizing: border-box;
  background: ${C.electric[350]};
  &:hover {
    background: '#9BA3FF';
  }
  &:active {
    background: '#6870CC';
  }
`,z=e(N)`
  width: 32px;
  height: 32px;
  padding: 4px;
  box-sizing: border-box;
  align-items: flex-start;
  border-radius: 50px;
  background: #283750;
`,D=({dismiss:o})=>{let s=async()=>{let{"notif-analytics":{"canvas-upsell":r={}}={}}=await i.storage.local.get(["notif-analytics"]),p=(r.dismissedCount||0)+1;await i.storage.local.set({"notif-analytics":{"canvas-upsell":{...r,dismissedCount:p}}}),c("extension_canvas_upsell_dismissed"),l("canvas-notification"),o()};return t(B,null,t(z,{src:"logo.svg",alt:"Speechify Logo"}),t(L,null,"Connect Canvas to Speechify and listen to your readings"),t(U,{onClick:()=>{c("extension_canvas_upsell_synced"),l("canvas-notification")},target:"_blank",rel:"noopener noreferrer",href:"https://app.speechify.com/settings?tab=Integrations&integration=canvas"},"Sync now"),t(O,null,t(w,{color:h.controls.tints.secondary,onClick:s})))};var F=()=>document.querySelector(".ic-app-header__logomark")&&document.querySelector(".ic-app-header__menu-list");async function V(){let{"notif-analytics":{"canvas-upsell":o={}}={}}=await i.storage.local.get(["notif-analytics"]);if(!!!F())return;let m=await x(),r=await S(m.uid,"lms.canvas"),p=o.lastDisplayedAt||0,_=(new Date().getTime()-p)/(1e3*60*60),k=o.dismissedCount||0;!r&&_>24&&k<3&&b({id:"canvas-notification",priority:151,duration:200,showOnMobile:!1,global:!0,allowPointerActions:!0,render:({dismiss:E})=>t(D,{dismiss:E})})}var ft=V;export{ft as default};
//# sourceMappingURL=init-W7BOJPUY.js.map
