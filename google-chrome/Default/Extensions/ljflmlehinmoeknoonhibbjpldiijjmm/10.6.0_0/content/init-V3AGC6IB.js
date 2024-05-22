import{a as L}from"./chunk-6NRTMNN7.js";import{a as k}from"./chunk-3YKS52JG.js";import{a as N}from"./chunk-UYYFRKUS.js";import{b as w}from"./chunk-WRXKWN4M.js";import{a as c}from"./chunk-K5UBOOCY.js";import{c as n}from"./chunk-NI3TKWPM.js";import{a as s,f as y,h as l,i as a}from"./chunk-GQDQ63G2.js";import{a as e}from"./chunk-TQDQJ2R3.js";import"./chunk-T2I5CTNL.js";import{$b as E,Db as O,Sa as b,Yb as _,Zb as v,f as g,ib as S,mb as C,u as A}from"./chunk-MXAKFU6F.js";import"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{d as R,h as p,j as o,o as f}from"./chunk-67P5Y4J4.js";f();p();f();p();var h=R(A());var Y=e(n)`
  pointer-events: auto;
  font-family: 'ABCDiatype';
  font-style: normal;
  letter-spacing: 0.01em;
  box-sizing: border-box;
  padding: 16px;
  font-style: normal;
  width: 360px;
  background: ${()=>a.elements.background};
  border: 1px solid ${()=>l(s.glass200)};
  border-radius: 12px;
  position: absolute;
  z-index: 20000;
  top: 20px;
  right: 30px;
`,z=e(c)`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
`,D=e(c)`
  color: ${()=>a.typography.step};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`,G=e(c)`
  color: ${()=>l(s.glass500)};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
`,j=e(w)`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  fill: ${()=>l(s.glass500)};
`,V=e(n)`
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: ${()=>a.controls.backgrounds.box};
  border-radius: 50%;
`,W=e(n)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  width: 250px;
  border-radius: 4px;
  background: ${()=>l(s.glass200)};
  margin-top: 16px;
`,U=e(c)`
  color: ${()=>a.typography.step};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,q=e(n)`
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${()=>l(s.electric400)};
  cursor: pointer;
`,P=({historyItem:i,onRemind:d,onPlay:T,removeNotification:r})=>{k(y);let m=(0,h.useMemo)(()=>`${Math.ceil((1-i.leavePosition)*i.duration/60)}`,[i]),u=(0,h.useMemo)(()=>`https://www.google.com/s2/favicons?domain=${new URL(i.url).hostname}`,[i]);return o(Y,null,o(n,{separation:"16px"},o(V,null,o(L,{color:l(s.electric400),width:"24px",height:"13px"})),o(n,{column:!0,separation:"4px"},o(z,null,"Listen to where you left"),o(n,{column:!0,separation:"8px"},o(D,null,"You haven’t finished this article. Spend ",m," minutes to wrap it up!"),o(W,{separation:"8px"},o(n,{yAlign:!0,separation:"8px"},o("img",{src:u,alt:""}),o(U,null,i.title)),o(q,{onClick:T},o(N,{size:"14px",color:a.elements.background}))),o(G,{onClick:d},"Remind me later")))),o(j,{onClick:r}))};var B=12*60*60*1e3,H=36*60*60*1e3,K=.2,J=.7,Q=48*60*60*1e3;async function X(){if(!await b())return;let i=new Date().getTime(),d=await E("listen-history-item");if(i-(d?.lastDisplayedAt??0)<Q)return;let r=(await g("/listen-history/get-history-list")).find(t=>i-t.updatedAt>=B&&i-t.updatedAt<=H&&t.leavePosition>=K&&t.leavePosition<=J&&t.url!==window.location.href);if(!r)return;let m=await S("ListeningHistoryNotification");if(C("ListeningHistoryNotification",m),m!=="notification")return;v({id:"listen-history-item",timeSensitive:!1,priority:151,duration:0,global:!0,allowPointerActions:!0,showOnMobile:!1,render:({dismiss:t})=>o(P,{historyItem:r,onRemind:u,onPlay:x,removeNotification:t})});let u=()=>{I()},x=async()=>{let t=r.url;O("extension_listen_history_click_notification",{url:t,title:r.title,duration:r.duration,readingProgress:r.leavePosition}),I(),await g("/listen-history/navigate-history-item",{url:t}),window.open(t,"_blank")};return I}function I(){_("listen-history-item")}export{X as default,I as destroyHistoryNotification};
//# sourceMappingURL=init-V3AGC6IB.js.map
