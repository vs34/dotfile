import{a as M}from"./chunk-NXQEIO42.js";import{b as O}from"./chunk-WRXKWN4M.js";import{a as x}from"./chunk-TQDQJ2R3.js";import{b as L,h as w,l as R}from"./chunk-T2I5CTNL.js";import{$b as k,Wb as A,Xb as $,f as S,g as D,ib as P,mb as N,u as _}from"./chunk-MXAKFU6F.js";import{d as f,h as u,j as l,o as m}from"./chunk-67P5Y4J4.js";m();u();var H=f(_()),z=f(D());m();u();var i=f(_()),B=f(D());var nt=-45,it=-30,y=10,rt=12,st=8,lt=R`
  from { opacity: 0; }
  to { opacity: 1; }
`,at=x(O)`
  cursor: pointer;
  position: absolute;
  right: 6px;
  top: 8px;
`,pt=x.div`
  position: absolute;
  z-index: 2147483645;
  height: fit-content;
  font-size: initial;

  opacity: ${({visible:t})=>t?1:0};
  animation: ${lt} 0.25s ease;

  background: #373737;
  border: 1px solid #373737;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-family: ABCDiatype, sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: ${st}px ${rt}px;

  margin-top: ${nt}px;
  margin-left: ${it}px;
  width: max-content;

  svg {
    display: none;
  }

  &.closable {
    padding: 8px 32px 8px 12px;

    svg {
      display: inherit;
      fill: #fff;
    }
  }

  &::after {
    border-color: #373737 transparent transparent transparent;
    border-style: solid;
    border-width: ${y/2}px;
    bottom: ${-y}px;
    content: '';
    left: ${y}px;
    position: absolute;
  }

  &.light {
    background: #f1f4f9;
    border: 1px solid #e4eaf1;
    color: #1e1e1e;

    &::after {
      border-color: #f1f4f9 transparent transparent transparent;
    }

    svg {
      fill: #1e1e1e;
    }
  }
`,ct=t=>{if(!t)return null;if(t.nodeType===Node.ELEMENT_NODE)return t.getBoundingClientRect();if(t.nodeType===Node.TEXT_NODE){let n=document.createRange();return n.selectNode(t),n.getBoundingClientRect()}return null},F=({className:t,onClick:n,onClose:e,root:r,text:a="",visible:C=!0,anchorElement:s,xOffset:T=0,yOffset:b=0,maxWidth:V,hintId:h,...W})=>{let{isDarkBackground:K}=M(document.body),[X,Y]=(0,i.useState)(0),[Z,j]=(0,i.useState)(0),E=(0,i.useRef)(null),q=(0,i.useMemo)(()=>L({key:"player-emotion-cache",container:r}),[r]),J=o=>{o.preventDefault(),o.stopPropagation(),n&&n()},Q=o=>{o.preventDefault(),o.stopPropagation(),e&&e()};return(0,i.useEffect)(()=>{if(!s)return;let o=()=>{if(!s)return;let d=ct(s)||{left:0,top:0};Y(d.left),j(d.top)},c=new ResizeObserver(o);c.observe(s),o();let g=(0,B.debounce)(o,50);return window.addEventListener("resize",g),()=>{c.disconnect(),window.removeEventListener("resize",g)}},[s]),(0,i.useEffect)(()=>{let o=new IntersectionObserver(c=>{c.find(d=>d.isIntersecting)&&(G(h),o.disconnect())});return o.observe(E.current),()=>{o.disconnect()}},[E.current,h]),l(w,{value:q},l(pt,{ref:E,id:"speechify-hint-tooltip",visible:C,className:`
              ${t?`${t} `:""}
              fadeIn
              ${K?"light":""}
              ${W.closable?"closable":""}
            `,onClick:J,style:{display:"inherit",position:"absolute",top:`${Z+b+window.scrollY}px`,left:`${X+T+window.scrollX}px`,maxWidth:V}},l("span",{className:"hint-tooltip-text"},a),l(at,{onClick:Q})))};var Rt=["hover-player-hints","click-to-listen-hints"],dt=new Date(2024,0,1),Ot=async(t,n=!1)=>{let e=await P("listeningHints"),r=e==="enabled";N("listeningHints",e),Number.parseInt((0,z.get)(await S("/auth/get-user"),"user.createdAt"))>=dt.getTime()||(r=!1);let s=await k(t);if(!n&&s){let{dismissedByUser:T,displayCount:b}=s;(T||b>3)&&(r=!1)}return N("listeningHintsEnabled",r),r},I,p={},v=t=>{p[t]&&((0,H.render)(null,p[t]),p[t].remove(),p[t]=null)},Pt=v,ft=t=>{$(t),v(t)},U={},G=t=>{let n=U[t],e=window.location.href;n!==e&&(U[t]=e,A(t))},At=({hintId:t,...n})=>{if(!I){let a=document.createElement("div");a.id="speechify-hint-tooltip-shadow-root",document.body.appendChild(a),I=a.attachShadow({mode:"open"})}let e=p[t];e||(e=document.createElement("div"),e.id=`speechify-hint-tooltip-root-${t}`,I.appendChild(e),p[t]=e);let r=n.onClose??(()=>ft(t));return(0,H.render)(l(F,{...n,root:e,hintId:t,onClose:r}),e),()=>v(t)};export{it as a,y as b,Rt as c,dt as d,Ot as e,Pt as f,ft as g,G as h,At as i};
//# sourceMappingURL=chunk-P73XAEKE.js.map
