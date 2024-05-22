import{e as k,i as v,j as R}from"./chunk-BGOOWEE6.js";import{a as C}from"./chunk-TQDQJ2R3.js";import{b as g,h as x}from"./chunk-T2I5CTNL.js";import{I as f,Ja as p,Ka as u,La as m,Ma as w,Na as T,nb as b,ra as E,u as H,x as S}from"./chunk-MXAKFU6F.js";import{d as W,h as c,j as i,l as d,n as z,o as s}from"./chunk-67P5Y4J4.js";s();c();z();s();c();var B=W(H());var I=C.div`
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
  pointer-events: auto;

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
  }
`;function h({onKeyPress:e,root:t}){let n=(0,B.useMemo)(()=>g({key:"selection-emotion-cache",container:t}),[t]);return i(x,{value:n},i(I,{role:"button",onClick:e},i("div",{className:"esc-key-button"}," Click"),"to Exit selection player"))}s();c();function M(e){let t=[(e||[])[0]];for(let n of e.slice(1)||[])n&&t.every(o=>!o.contains(n))&&(t=[...t.filter(o=>!n.contains(o)),n]);return t}function F(e){let t=document.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);let n=t.collapsed;return t.detach(),n}function O(){let e=window.getSelection();if(!e||e.isCollapsed)return;let t=F(e),n=e.focusNode;if(!n)return;let o=e.focusOffset;e.collapse(e.anchorNode,e.anchorOffset);let r=[];t?r.push("backward","forward"):r.push("forward","backward"),e.modify("move",r[0],"character"),e.modify("move",r[0],"character"),e.modify("move",r[1],"word"),e.extend(n,o),e.modify("extend",r[1],"character"),e.modify("extend",r[1],"character"),e.modify("extend",r[0],"word")}var G=e=>Array.from(e.querySelectorAll("div.kix-canvas-tile-content.kix-canvas-tile-selection > svg")),L=()=>G(document.body).find(n=>n.hasChildNodes()),q=(e,t)=>{let n=e.x-16<=t.x&&e.x+e.width+16>=t.x+t.width,o=e.y-16<=t.y&&e.y+e.height+16>=t.y+t.height;return n&&o};var Q=async e=>{let{ObjectRef:t}=await E(),n=e.getRangeAt(0),o=M(S(n));if(o.length===0)throw new Error("No elements found");return{getContent:await w(async()=>({content:o,chunksBefore:0,chunksAfter:0})),converter:r=>{let a=r.isSameNode(n.startContainer)?n.startOffset:0;return{text:r.textContent?.slice(r.isSameNode(n.startContainer)?n.startOffset:0,r.isSameNode(n.endContainer)?n.endOffset:void 0)??"",ref:new t({ref:r,highlightInfo:{startOffset:a}})}},options:{sideEffects:!1,autoplay:!0},metadata:{source:"Selection Player"}}},j=async()=>{let e=L();if(!e)return;let t=Array.from(e.querySelectorAll("rect:not(clipPath rect)"))[0],n=t.getBoundingClientRect(),o=v(t),a=k(o).find(D=>q(D.getBoundingClientRect(),n)),{bundle:l}=u.getBundleState();!a||!l||R(l,a)},y=()=>{let e=document.querySelector("#speechify-selection-mode"),t=e?.shadowRoot;if(!t||!e)return;e.style.display="none",e.style.pointerEvents="auto";let n=t.getElementById("speechify-selection-player");n&&(d(null,n),n.remove())},K=e=>{let t=document.querySelector("#speechify-selection-mode");if(!t)return f(new Error("No mounting point found for speechify selection player, cannot mount."));t.style.display="block",t.style.pointerEvents="none";let n=t?.shadowRoot;if(!n)return f(new Error("No shadow root found for speechify selection player, cannot mount."));let o=document.createElement("div");o.id="speechify-selection-player",n.appendChild(o),d(i(h,{root:o,onKeyPress:()=>{e&&(p.pause(),e.options?.autoplay&&(e.options.autoplay=!1),m(e,!0)),y()}}),o)},_=async()=>{if(b())return j();let e=window.getSelection();if(!e||e.isCollapsed)return;O();let t=await Q(e);m(t,!0),e.collapseToEnd()};async function U(){if(!document.querySelector("#speechify-selection-mode")){let o=document.createElement("div");o.id="speechify-selection-mode",o.style.cssText="position: fixed; top: 0; right: 0; width: 100%; min-height: 100%; z-index: 2147483640; display: none !important;",document.body.appendChild(o),o.attachShadow({mode:"open"})}let e=await p.registerHook("BEFORE_PLAY",_),t=u.getBundleState().currentContent,n=await T("PLAYABLE_CONTENT_UPDATED",async({changed:o})=>{o.metadata.source!=="Selection Player"?(y(),t=o):(y(),K(t))});return()=>{document.querySelector("#speechify-selection-mode")?.remove(),e(),n()}}export{y as a,_ as b,U as c};
//# sourceMappingURL=chunk-KUDMPC3Q.js.map
