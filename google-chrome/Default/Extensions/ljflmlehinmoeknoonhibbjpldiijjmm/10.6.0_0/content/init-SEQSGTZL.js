import{b as Se}from"./chunk-WA2H527Y.js";import{a as we,b as ve}from"./chunk-YM5H5SVQ.js";import{a as ie}from"./chunk-HY6N2ZOB.js";import{g as pe}from"./chunk-FVAPUUYJ.js";import"./chunk-X5OSF7OY.js";import"./chunk-UYYFRKUS.js";import"./chunk-WYLZIWPZ.js";import{a as fe}from"./chunk-LW72LJYS.js";import"./chunk-FSRBHFBF.js";import{a as ce}from"./chunk-ECF6E4RL.js";import"./chunk-WRXKWN4M.js";import{a as ne,g as re}from"./chunk-K5UBOOCY.js";import{c as I}from"./chunk-NI3TKWPM.js";import{a as v}from"./chunk-GQDQ63G2.js";import{a as L}from"./chunk-TQDQJ2R3.js";import{k as te,l as oe}from"./chunk-T2I5CTNL.js";import{m as ge,n as ye,o as be,p as H,q as he,r as Ce,s as xe,t as Ee,u as Pe}from"./chunk-4QGSHI6F.js";import{Ca as ue,Db as j,E as le,I as me,Ja as D,Ka as O,La as B,Ma as U,Va as de,g as W,i as ee,m as Xe,ra as $,u as T,w as se}from"./chunk-MXAKFU6F.js";import{N as ae,O as Q,R as V}from"./chunk-KJG3EQPP.js";import"./chunk-JFYIYEE3.js";import"./chunk-XAYVH6YF.js";import{d as w,f as g,h as l,j as a,l as G,n as Z,o as m}from"./chunk-67P5Y4J4.js";m();l();Z();m();l();Xe();m();l();var Fe=w(T());m();l();var R=w(T()),Te=w(W());m();l();var Me=w(W());m();l();var Ye=e=>{let o=e.nodeType===Node.ELEMENT_NODE?e:e.parentElement;return se(o)},k=e=>{let o=r=>r(e),n=()=>{let r=o(H);return Array.from(document.querySelectorAll(r))},t=r=>de({startingNode:r,ignoreCache:!0,shouldFindHeadings:!1,minimumTotalCharThresholdForGaussianHeuristic:4,getAllTextBlocksInitialThreshold:1}).filter(Ye),s=r=>{let u=o(xe),C=o(Ee),y=r.querySelector(u)?.getAttribute(C)??"";return y||me(new Error("Message ID not found in message view"),{type:"gmail-rewrite"}),y};return{getMessageViews:n,getParagraphs:t,getMessageId:s,findMatchingMessageView:r=>n().find(y=>s(y)===r)||null,findMessageViewForParagraph:r=>{let u=o(H);return r.closest(u)},getMessageViewBody:r=>r.querySelector(o(he))||r.querySelector(o(Ce)),getMessageViewBodyQuotedArea:r=>{let u=o(Pe);return r.querySelector(u)},getToWhomDiv:r=>{let u=".ady";return r.querySelector(u)}}};m();l();var Je=["gmail_attr","h5",".gmail_signature"],K=e=>{if(e instanceof HTMLElement&&Je.some(t=>e.classList.contains(t)))return[];let o=Array.from(e.childNodes);return o.length===0?[{text:e.textContent??"",elem:e}]:o.flatMap(t=>t.nodeType===Node.TEXT_NODE?[{text:t.textContent??"",elem:t}]:t.nodeType===Node.ELEMENT_NODE?K(t):[]).filter(t=>t.text.trim().replace(/\n|\r\n/,"").length>0).filter(t=>(t.text.match(/\w+/)??[]).length>0)};var N=async(e,o)=>{let{ObjectRef:n}=await $(),t=k(e),s=t.getMessageViewBody(o),i=t.getParagraphs(s),d=document.querySelector("div.Tm.aeJ");return{getContent:await U(async()=>({content:i,chunksAfter:0,chunksBefore:0})),converter:p=>({text:p.textContent??"",ref:new n({ref:p,highlightInfo:{scrollElement:d,startOffset:0}})}),options:{autoplay:!0,sideEffects:!1},metadata:{source:"GmailInbox"}}},X=async e=>{let{ObjectRef:o}=await $(),n=be(e),t=document.querySelector("div[speechify-play-window-id]");if(!t)return Q(null);let s=t.querySelector(n);return s?ae({getContent:await U(async()=>{let i=[];if(!e.shouldOnlyReadEmailBody){let d=t.querySelector("input[name=subjectbox]");d&&i.push({text:d.value,elem:d})}return i.push(...K(s)),{content:i.map(d=>d.elem),chunksAfter:0,chunksBefore:0}}),converter:i=>({text:i.textContent??"",ref:new o({ref:i})}),options:{autoplay:!0,sideEffects:!1,experimentalEdits:async function*(i){let d=()=>new Promise(p=>{let f=[],c=()=>{u.disconnect(),p([])},r=(0,Me.debounce)(C=>{f=[],u.disconnect(),i.removeEventListener("abort",c),p(C)},1e3),u=new MutationObserver(C=>{f.push(...C),r(f)});i.addEventListener("abort",c),u.observe(s,{childList:!0,subtree:!0,characterData:!0})});for(;;)yield await d()}},metadata:{source:"GmailCompose"}}):Q(null)};m();l();m();l();function Be({avoidNumbers:e}={}){let o="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";e||(n+="0123456789");for(let t=0;t<32;t++)o+=n.charAt(Math.floor(Math.random()*n.length));return o}var Ge="speechify-gmail-root";function Ie(e){Array.from(document.querySelectorAll("div[speechify-play-window-id]")).forEach(s=>s.removeAttribute("speechify-play-window-id"));let n=e.closest(".M9"),t=Be({avoidNumbers:!0});return n?.setAttribute("speechify-play-window-id",t),n}var ze=({isLoading:e,isLoadingFailed:o,isPlaying:n,playPause:t,onTooltipDismiss:s})=>a(fe,{id:"gmail-compose-button",variant:"simple",onToolTipDismiss:s,direction:"down",text:"Listen to how your email sounds before hitting send."},a(pe,{onClick:t,isLoading:e,isPlaying:n,isLoadingFailed:o,size:"16px",outlined:!0,outlinedColor:"#4A4A4A",border:"1.5px","data-tooltip":"Listen to how your email sounds before hitting send."}));function Le({wrapper:e,config:o}){let[n,t]=(0,R.useState)(null),{usePlayingState:s,useBundleInfo:i}=O,{play:d,pause:p}=D,f=s(),c=f==="buffering",r=f==="playing",u=f==="errored",{currentContent:C}=i(),y=!!C&&C?.id===n?.id;return(0,R.useEffect)(()=>{let x=new MutationObserver((0,Te.debounce)(async()=>{let M=f==="playing"||f==="buffering";if(y){let F=await X(o);D.pause(),V(F)&&t(B(F.value,M))}},1e3));return x.observe(e,{childList:!0}),()=>{x.disconnect()}},[e,f,y]),a(ze,{isLoading:y&&c,isPlaying:y&&r,isLoadingFailed:u,playPause:async()=>{if(j("extension_gmail_compose_button_clicked",{}),y)return r?p():d();Ie(e);let x=await X(o);if(V(x)){let M=B(x.value,!0);t(M)}},onTooltipDismiss:()=>{j("extension_gmail_compose_tooltip_disabled",{})}})}var De="speechify-gmail-draft-play-button-container",Ne;function Ae(e){let o=ye(e),n=document.querySelectorAll(o);for(let t of Array.from(n)){if(t.querySelector(`.${De}`))continue;let s=t.querySelector(".gU.gmail-draft-wrapper")||document.createElement("td");s.className="gU gmail-draft-wrapper";let i=document.createElement("div");i.className=De,(0,Fe.render)(a(Le,{wrapper:i,config:e}),i),s.appendChild(i),t.insertBefore(s,t.querySelector("td:nth-child(2)"))}}async function Oe(e){Ae(e),Ne=new MutationObserver(()=>{Ae(e)}),Ne.observe(document,{subtree:!0,childList:!0})}m();l();var $e=w(W());Z();m();l();var E=w(T());m();l();m();l();var We=w(T());m();l();var ke=w(T());var Re=L(I)`
  font-family: var(--font-family);
  margin-left: 8px;
  background: rgba(32, 33, 36, 0.059);
  border-radius: 2px;
  cursor: pointer;
  height: 20px;
  padding: 3px 4px;
  overflow: hidden;
`,qe=({isPlaying:e,isLoading:o,iconFill:n,size:t,...s})=>{let i=(0,ke.useMemo)(()=>o?"loading":e?"playing":"paused",[e,o]);return a(I,{...s},i==="playing"&&a(we,{pathFill:n,width:t,height:t}),i==="loading"&&a(ce,{color:n??"#4A4A4A",width:t??"14",height:t??"14"}),i==="paused"&&a(ve,{pathFill:n,width:t,height:t}))},_e=L(I)`
  font-size: 12px;
  font-weight: 600;
  font-family: 'ABCDiatype';
`;var Ze=oe`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 3px rgba(33, 55, 252, 0.2);
  }

  100% {
    transform: scale(1);
  }
`,et=L(Re)`
  background: ${v.electric400};
  padding: 4px 6px 4px 3px;
  margin-left: 12px;
  border-radius: 20px;

  ${({pulse:e})=>e?te`
          animation: ${Ze} 2s infinite;
        `:""};

  &:hover {
    background: ${v.electric400Hov};
    animation: none;
  }

  // change color to "Listen to email" text when hovered
  &:hover + span {
    color: ${v.electric400Hov};
  }

  &:active {
    background: ${v.electric400Press};
    animation: none;
  }

  &:active + span {
    color: ${v.electric400Press};
  }

  outline: inherit;
  border: none;
  height: inherit;

  // handle keyboard navigation since we are removing outline
  &:focus-visible {
    outline: 1px solid ${v.electric400};
    border: 1px solid #fff;
  }
`.withComponent("button");function q({duration:e,isLoading:o,isPlaying:n,playPage:t,pulseState:s}){let[i,d]=(0,We.useState)(s),p=async r=>{r.preventDefault(),r.stopPropagation();let u={show:!1,lastClicked:new Date().toISOString()};await g.storage.local.set({gmailInboxBtnPulseState:u}),d(u),t(r)},f=async r=>{r.preventDefault(),r.stopPropagation();let u={...i,show:!1,lastClicked:new Date().toISOString()};await g.storage.local.set({gmailInboxBtnPulseState:u}),d(u)},c=!n&&(Se(new Date(i.lastClicked||Date.now()),new Date)>=3||i.show);return a(I,{separation:"8px",yAlign:!0},a(et,{pulse:c,yAlign:!0,relative:!0,column:!1,title:c?void 0:"Listen to this email",onClick:p,onMouseEnter:f,separation:"4px"},a(qe,{size:"18",iconFill:"#FFF",isLoading:o,isPlaying:n}),a(_e,{yAlign:!0,xAlign:!0},a(re,{color:"#FFF",fixedWidthNumbers:!0,isLoading:!0},ie("short")(e)))),c?a(ne,{color:v.electric400,medium:!0,style:{letterSpacing:"0.12px"}},"Listen to email"):"")}var Qe=({messageViewElement:e,config:o,pulseState:n})=>{let{usePlayingState:t,useBundleInfo:s,useTime:i}=O,{totalEstimatedDuration:d}=i(),[p,f]=(0,E.useState)(0),[c,r]=(0,E.useState)(null),{play:u,pause:C}=D,y=t(),{currentContent:A}=s(),P=A&&A?.id===c?.id,x=!!P&&y==="playing",M=!!P&&y==="buffering",F=P&&d>0?d:p;(0,E.useEffect)(()=>{(async()=>{let S=await N(o,e);r(S)})()},[e,o]),(0,E.useEffect)(()=>{c&&ue(c).then(S=>{f(S)})},[c]),(0,E.useEffect)(()=>{if(!e)return;let S=new MutationObserver(async()=>{if(!e||!P)return;let _=await N(o,e);r(_)});return S.observe(e,{attributes:!0,attributeFilter:["aria-expanded"],subtree:!0}),()=>{S.disconnect()}},[e,o]);let Ke=(0,E.useCallback)(async S=>{if(e&&(S.stopPropagation(),!M)){if(x)return C();if(P)return u();if(!P&&c){let _=B(c,!0);r(_)}}},[M,x,P,u,C,c]);return a(q,{duration:F,isLoading:M,isPlaying:x,playPage:Ke,pulseState:n})};var Y="speechify-gmail-inbox-play-button-container-v2",tt="ady",J,Ve=(0,$e.debounce)((e,o,n,t)=>{if(ot(e))return;let s=t.getMessageViews();s&&s.forEach((i,d)=>{let p=t.getToWhomDiv(i);if(!p||p.querySelector(`.${Y}`))return;let f=document.createElement("div");f.className=Y,G(a(Qe,{pulseState:n,config:o,messageViewElement:i}),f),p.appendChild(f),d===s.length-1&&N(o,i).then(c=>{c.options?.autoplay&&(c.options.autoplay=!1),B(c,!0)})})},0);async function Ue(e,o){He();let n=k(e);Ve([],e,o,n),J=new MutationObserver(t=>Ve(t,e,o,n)),J.observe(document,{childList:!0,subtree:!0})}async function je(){J.disconnect(),He()}async function He(){let e=document.querySelectorAll(`.${Y}`);for(let o of e)G(()=>null,o),o.remove()}var ot=(e,o=[])=>e.some(n=>{if(n.target instanceof HTMLElement&&nt(n.target))return!0;for(let t of n.addedNodes)if(t instanceof HTMLIFrameElement&&!o.includes(t.src))return!0;for(let t of n.removedNodes)if(t instanceof HTMLIFrameElement&&!o.includes(t.src))return!0;return!1}),nt=e=>e.className?.includes("speechify")||e.id?.includes("speechify")||e.className?.includes(tt);function z({config:e,gmailInboxBtnPulseState:o}){return ee(()=>(Ue(e,o),Oe(e),()=>{je()}),[]),null}async function rt(e){let{gmailInboxBtnPulseState:o={show:!0,lastClicked:null}}=await new Promise(s=>g.storage.local.get(["gmailInboxBtnPulseState"],s)),n=ge(e);await le(n);let t=document.createElement("div");return t.id=Ge,document.body.append(t),G(a(z,{config:e,gmailInboxBtnPulseState:o}),t),()=>{G(()=>null,t),document.body.removeChild(t)}}export{rt as default};
//# sourceMappingURL=init-SEQSGTZL.js.map
