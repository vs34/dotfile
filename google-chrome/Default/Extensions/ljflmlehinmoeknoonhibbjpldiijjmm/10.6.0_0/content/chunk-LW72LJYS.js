import{a as k}from"./chunk-FSRBHFBF.js";import{c as g}from"./chunk-NI3TKWPM.js";import{a as m,h as x,i as u}from"./chunk-GQDQ63G2.js";import{a as p}from"./chunk-TQDQJ2R3.js";import{Db as $,u as E}from"./chunk-MXAKFU6F.js";import{d as A,f as a,h as S,j as t,o as C}from"./chunk-67P5Y4J4.js";C();S();var r=A(E());var z=p(g)`
  font-family: Google Sans, sans-serif;
  background: ${x(m.electric350)};
  color: ${x(m.glass0)};
  font-size: 14px;
  position: absolute;
  z-index: 5000;
  transform: translateX(-50%);
  margin-bottom: 8px;
  left: ${o=>o.leftAlign?"-5%":"50%"};
  bottom: 100%;
  min-width: 225px;
  border-radius: 8px;
  padding: 0.75rem;
  .btn-section {
    > button {
      background: inherit;
      color: inherit;
      font-size: 14px;
      font-weight: 500;
      outline: none;
      border: none;
      margin: 0;
      padding: 4px;
      cursor: pointer;
      &:hover {
        border-radius: 4px;
        background-color: #828df9;
      }
    }
  }
  ::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: ${o=>o.leftAlign?"70%":"47%"};
    bottom: -6px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${x(m.electric350)};
  }
`.withComponent("div"),D=p.div`
  position: relative;
`,M=p(g)`
  font-family: var(--font-family);
  color: rgb(109, 109, 109);
  font-weight: 500;
  font-size: 16px;
  ${({direction:o})=>o==="up"||o==="down"?"width: 240px;":""}

  position: absolute;
  z-index: 5000;

  ${({direction:o})=>o==="down"&&`
  transform: translateX(-50%);
  margin-bottom: 8px;
  left: 50%;
  bottom: 100%;
  `}

  ${({direction:o})=>o==="up"&&`
  transform: translateX(-50%);
  margin-top: 8px;
  left: 50%;
  top: 100%;
  `}

  ${({direction:o})=>o==="left"&&`
  left: 100%;
  top: 0;
  bottom: 0;
  margin-left: 8px;
  `};

  ${({direction:o})=>o==="right"&&`
  right: 100%;
  top: 0;
  bottom: 0;
  margin-right: 8px;
  `};

  > svg {
    ${({direction:o})=>o==="left"||o==="right"?"width: 35px;":""}

    > path {
      fill: rgb(109, 109, 109);
    }
  }

  > span {
    ${({direction:o})=>o==="left"||o==="right"?"width: max-content;":""}
    position: relative;
    color: #112d6d;
    display: flex;
    border-radius: 6px;
    border: 1px solid rgba(58, 98, 254, 0.12);
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    background-color: #ffffff;
    padding: 5px;
    align-items: center;
    sup {
      position: absolute;
      top: -7.5px;
      right: -7.5px;
    }
  }
`,R=p.sup`
  font-size: 13px;
  margin-left: 4px;
`,N=({children:o,direction:e,...n})=>{let i=(0,r.useMemo)(()=>({left:"row",right:"row-reverse",up:"column",down:"column-reverse"})[e]??"row",[e]);return t(M,{xAlign:!0,yAlign:!0,separation:"4px",direction:e,...n,style:{flexDirection:i,...n?.style??{}}},t(k,{direction:e}),t("span",null,o,t(R,null,t("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",fill:"white",stroke:"#E7ECFF",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M7.5 4.5L4.5 7.5",stroke:"#3A62FE",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M4.5 4.5L7.5 7.5",stroke:"#3A62FE",strokeLinecap:"round",strokeLinejoin:"round"})))))},P=({text:o,direction:e,display:n,children:i,tooltipStyle:s,...l})=>t(D,{...l},i,n&&t(N,{direction:e,style:s},o)),to=({id:o,display:e,variant:n="simple",leftAlign:i,onToolTipDismiss:s,...l})=>{let[d,b]=(0,r.useState)(!1),T=(0,r.useRef)(null);(0,r.useEffect)(()=>{(async()=>{let{oneTimeTooltips:v}=await new Promise(c=>a.storage.sync.get(["oneTimeTooltips"],c));b(!v?.[o]),a.storage.onChanged.addListener(async(c,h)=>{if(h!=="sync"||!c.oneTimeTooltips)return;let{oneTimeTooltips:y}=await new Promise(L=>a.storage.sync.get(["oneTimeTooltips"],L));b(!y?.[o])})})()},[]);let w=async f=>{if(s?.(),f.preventDefault(),f.stopPropagation(),!d)return;let c=T.current.base?.contains(f.target)?"extension_listen_nudge_dismissed":"extension_listened_while_nudge_shown";$(c,{source:o}),b(!1);let{oneTimeTooltips:h}=await new Promise(y=>a.storage.sync.get(["oneTimeTooltips"],y));a.storage.sync.set({oneTimeTooltips:{...h,[o]:!0}})};return n==="simple"?t(P,{id:o,ref:T,display:e??d,onClick:w,...l}):n==="gmailStyle"?t(D,{ref:T,...l},l.children,d?t(z,{column:!0,leftAlign:i},t("div",null,t("p",null,"Listen to how your email sounds before hitting send.")),t("div",{className:"btn-section"},t("button",{onClick:w},"Dismiss"))):""):null},O=p.div`
  position: absolute;
  ${({display:o})=>o?"opacity: 1":"opacity: 0"};
  transition: 0.26s opacity;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
`,B=p.div`
  position: absolute;
  ${({direction:o})=>["up","down"].includes(o)?`top:${o==="up"?" 0":"100%"}; left: 50%;`:`left:${o==="left"?" 0":"100%"}; top: 50%;`}
  transform: translate(-50%, -50%);
  z-index: 100;
`,F=p(g)`
  padding: 4px 8px;
  border-radius: 3px;
  min-height: 24px;
  min-width: 100px;
  background: ${({background:o})=>o};
`,eo=({direction:o,display:e,children:n,tooltipStyle:i,background:s,style:l,...d})=>t(O,{style:l,...d,display:e},e&&t(F,{xAlign:!0,yAlign:!0,style:i,background:s},t(B,{direction:o},t("svg",{width:"8",height:"8",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M0 3L2.82843 0.171573L5.65685 3L2.82843 5.82843L0 3Z",fill:s}))),n));function W(){let[o,e]=(0,r.useState)(!1),n=(0,r.useRef)(null),i=(0,r.useCallback)(()=>{n.current=setTimeout(()=>{e(!0)},300)},[]),s=(0,r.useCallback)(()=>{clearTimeout(n.current),e(!1)},[]);return{showTooltip:o,onMouseOver:i,onMouseOut:s}}var G=p.div`
  position: relative;
  display: inline-block;
  pointer-events: auto;

  span {
    visibility: hidden;
    width: 133px;
    background-color: ${()=>u.controls.backgrounds.tooltip};
    font-family: 'ABCDiatype';
    color: ${()=>u.typography.tooltip};
    font-size: 12px;
    padding: 8px;
    border-radius: 3px;
    position: absolute;
    opacity: 1;
    z-index: 1;
    ${({down:o})=>o?"top: 150%":"bottom: 150%"};
    left: 154%;
    margin-left: -87px;

    &:after {
      content: '';
      position: absolute;
      ${({down:o})=>o?"bottom: 100%":"top: 100%"};
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      ${({down:o})=>o?`border-color: transparent transparent ${u.controls.backgrounds.tooltip} transparent`:`border-color: ${u.controls.backgrounds.tooltip} transparent transparent transparent;`};
    }
  }

  :hover span {
    visibility: visible;
  }
`,no=({title:o,tooltipText:e,down:n})=>t(G,{down:n,onClick:i=>i.preventDefault()},o,t("span",null,e)),j=o=>({children:e,...n})=>{let{showTooltip:i,onMouseOver:s,onMouseOut:l}=W();return t(o,{...n,showTooltip:i,onMouseOut:l,onMouseOver:s},typeof e=="function"?e(i&&j):e)};export{to as a,eo as b,W as c,no as d,j as e};
//# sourceMappingURL=chunk-LW72LJYS.js.map
