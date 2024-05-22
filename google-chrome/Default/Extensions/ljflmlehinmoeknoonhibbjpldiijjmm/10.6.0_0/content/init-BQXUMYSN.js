import{a as h}from"./chunk-26DQFRDO.js";import{Ra as u}from"./chunk-MXAKFU6F.js";import"./chunk-TOYWBR4G.js";import"./chunk-AEJIAELE.js";import"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{h as s,j as d,l as m,n as f,o as p}from"./chunk-67P5Y4J4.js";p();s();f();var x=()=>{let o="speechify-chatgpt-sandbox";u("body").then(e=>{if(!e||e.querySelector(`.${o}`))return;let t=document.createElement("div");t.classList.add(o),e.appendChild(t);let a=t.attachShadow({mode:"open"}),r=document.createElement("div");a.appendChild(r);let c=document.createElement("style");c.textContent=`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    `,a.appendChild(c),m(d(h,{onClick:l=>{let n=document.elementFromPoint(l.x,l.y);n&&(n.focus(),n.click())}}),r);let i=document.getElementById("prompt-textarea");i&&i.blur()})};async function y(){location.pathname.includes("/auth/")||x()}export{y as default};
//# sourceMappingURL=init-BQXUMYSN.js.map
