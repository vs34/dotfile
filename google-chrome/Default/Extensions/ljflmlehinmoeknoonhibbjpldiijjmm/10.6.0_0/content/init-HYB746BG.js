import{j as D}from"./chunk-46663WCP.js";import{a as w}from"./chunk-RS2PUYJF.js";import{a as _}from"./chunk-A7YAUIHP.js";import{c as R}from"./chunk-FSRBHFBF.js";import{b as L}from"./chunk-WRXKWN4M.js";import{a as n,f as T}from"./chunk-K5UBOOCY.js";import{c as m}from"./chunk-NI3TKWPM.js";import"./chunk-GQDQ63G2.js";import{a as i}from"./chunk-TQDQJ2R3.js";import"./chunk-T2I5CTNL.js";import"./chunk-L5VE55SK.js";import"./chunk-4QGSHI6F.js";import{Ba as A,Db as S,Ib as O,Ja as b,Jb as N,Na as d,Nb as k,Oa as I,Ob as v,Yb as h,Z as P,Zb as C,_ as x,e as g,p as y}from"./chunk-MXAKFU6F.js";import{I as E}from"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{f as u,h as a,j as e,o as l}from"./chunk-67P5Y4J4.js";l();a();l();a();var M=({onClick:t,removeNotification:o})=>e(z,null,e(m,{column:!0,xAlign:!0,separation:"12px"},e(m,{yAlign:"start",separation:"12px"},e(B,null,e(D,null)),e("div",null,e(Q,null,"No text detected."),e(U,{onClick:()=>{o(),t()}},"Try a screenshot instead.")),e(W,null,e(R,{animate:!0,animationDistance:"2px",direction:"right",height:"14px",width:"14px"})))),e(G,{onClick:()=>{o()}})),G=i(L)`
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
`,W=i("div")`
  height: 14px;
  margin-top: 22px;
  position: absolute;
  right: 10px;
  width: 14px;
`,U=i(n)`
  cursor: pointer;
  display: block;
  font-family: var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 20px;
`,B=i("div")`
  height: 20px;
  width: 20px;
`,z=i(m)`
  cursor: pointer;
`,Q=i(n)`
  display: block;
  font-family: var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 20px;
`;function j(){return y.on("subscriptionupdate",async t=>{!t||k(t)||v(t)||C({id:"subscription-expired",duration:5e3,showOnMobile:!1,timeSensitive:!0,priority:100,render:({dismiss:o})=>e(_,{removeNotification:o},e(n,null,"Your subscription has expired!",e("br",null),"Please renew"," ",e(T,{href:I(`plans/?extensionId=${u.runtime.id}&source=subscription_ended_notification`,g.foyerUrl),target:"_blank",rel:"noopener noreferrer"},"here")))})})}async function q(){return d("PLAYABLE_CONTENT_UPDATED",async({changed:t})=>{let o=t;if(!o||await w())return;if((await A(o)).length===0&&!window.location.href.endsWith(".pdf")){let r=()=>{h("pill_player-ocr-recommendation"),P(),x(),S("extension_initiated_ocr",{method:"pill-player"})};C({id:"pill_player-ocr-recommendation",priority:151,duration:0,showOnMobile:!0,timeSensitive:!0,render:({dismiss:p})=>e(M,{onClick:r,removeNotification:p})})}else h("pill_player-ocr-recommendation")})}var K=async()=>{let t=null,o=[],c=await d("PLAYABLE_CONTENT_UPDATED",async({changed:s})=>{t?.id!==s.id&&(t=s,o.length=0)}),r=E(1),p=await b.registerHook("PLAYBACK_STATE_CHANGED",s=>r(async({state:f})=>{t&&(f==="playing"&&!o.includes("extension_usage_widget_listened_to_page")?(o.push("extension_usage_widget_listened_to_page"),N({triggeredFrom:t.metadata.source,isSelection:t.metadata.source==="Selection Player"})):f==="playing"&&!o.includes("ended")?(o.push("extension_usage_widget_relistened_to_page"),O({triggeredFrom:t.metadata.source,isSelection:t.metadata.source==="Selection Player"})):f==="ended"&&o.push("ended"))},s));return()=>{p(),c()}};async function V(){let t=[j(),await q(),await K()];return()=>{t.forEach(o=>o())}}export{V as default};
//# sourceMappingURL=init-HYB746BG.js.map
