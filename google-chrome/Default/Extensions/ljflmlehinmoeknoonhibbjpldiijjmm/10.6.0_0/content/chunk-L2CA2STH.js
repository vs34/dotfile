import{h as Pe,i as le,j as Le}from"./chunk-IBQ36UGR.js";import{b as Ee}from"./chunk-IYRDPVLC.js";import{a as Te}from"./chunk-3YKS52JG.js";import{a as K}from"./chunk-NXQEIO42.js";import{c as te}from"./chunk-HY6N2ZOB.js";import{e as ye,i as U,q as be,r as xe}from"./chunk-FVAPUUYJ.js";import{a as ne}from"./chunk-X5OSF7OY.js";import{a as Be}from"./chunk-LW72LJYS.js";import{a as O}from"./chunk-K5UBOOCY.js";import{c as E}from"./chunk-NI3TKWPM.js";import{a as z}from"./chunk-GQDQ63G2.js";import{a as v}from"./chunk-TQDQJ2R3.js";import{a as Y}from"./chunk-26DQFRDO.js";import{Aa as V,B as ge,D as pe,Db as ie,E as he,Ga as fe,Ja as Ce,Jb as G,Ma as Q,Va as ke,g as _e,i as S,l as j,lb as ve,m as ue,ra as q,u as me}from"./chunk-MXAKFU6F.js";import{H as b}from"./chunk-KJG3EQPP.js";import{d as oe,h as $,j as r,l as re,n as $e,o as _}from"./chunk-67P5Y4J4.js";_();$();var Ie=oe(me());var ae=oe(_e());$e();ue();_();$();var Fe=oe(me());ue();function We({wrapper:e,getElementsToPlay:c,playbackTriggerSource:f,backgroundElement:T,darkTheme:B,textWithButton:F}){let[n,o]=(0,Fe.useState)(null),{state:C,pause:k,play:l,queueAndPlayContent:P,isActive:g}=V(n),i=g&&C==="playing",y=g&&C==="buffering",W=g&&C==="errored";S(()=>{(async()=>{let m=c(e).filter(Boolean),{ObjectRef:w}=await q(),A={getContent:await Q(async()=>({content:m,chunksAfter:0,chunksBefore:0})),converter:N=>({text:N.textContent??"",ref:new w({ref:N})}),options:{autoplay:!0,sideEffects:!1},metadata:{source:"Reddit"}};o(A)})()},[e]);let a=j(()=>{if(!g)return P();if(!y){if(i)return k();if(!i)return l();Array.from(document.querySelectorAll(".speechify-inbox-player")).forEach(m=>m.classList.remove("speechify-inbox-player")),Array.from(document.querySelectorAll(`.${b}`)).forEach(m=>m.classList.remove(b)),e.classList.add(b),G({triggeredFrom:f})}},[e,i,y,n,g]),{isDarkBackground:s}=K(T),t=B??s,p="#FFFFFF",L="#111112",d={size:"18px",color:z.electric350,darkThemeColor:"#91CDFF",pressedBackgroundColor:z.electric350,pressedDarkBackgroundColor:"#91CDFF",borderWidth:"1.5px",iconsize:"11.5px",hoverPlayButton:!0,lightThemeBackgroundColor:"transparent",darkThemeBackgroundColor:"transparent"},J={playerColor:i?p:d.color,playerBackgroundColor:i?d?.pressedBackgroundColor:d.lightThemeBackgroundColor},M={playerColor:i?L:d.darkThemeColor,playerBackgroundColor:i?d.pressedDarkBackgroundColor:d.darkThemeBackgroundColor},D=t?M:J;return r(Qe,{onClick:a,isDarkTheme:t},r(U,{isLoading:y,isPlaying:g&&i,isLoadingFailed:W,iconSize:d.iconsize,background:D.playerBackgroundColor,outlined:!i,color:D.playerColor,outlinedColor:D.playerColor,borderWidth:d.borderWidth,size:d.size}),!y&&r("button",{style:{background:"none",padding:"0"}},r(O,{fixedWidthNumbers:!0,color:t?"#91CDFF":z.electric350,style:{display:"flex",alignItems:"center",fontWeight:700,marginLeft:"4px",cursor:"pointer",fontFamily:"IBMPlexSans,Arial,sans-serif",lineHeight:"100%"}},r("span",{style:{fontSize:"12px"}},i?"Pause":F))),r(Y,{onClick:a}))}var Re=[],De=e=>{Re.includes(e)||Re.push(e)},Qe=v(E)`
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  height: 26px;
  justify-content: center;
  &:hover {
    background-color: ${({isDarkTheme:e})=>e?"#283750":"#EEEEFF"};
  }
  &:active {
    background-color: ${({isDarkTheme:e})=>e?"#556478":z.electric200Press};
  }
  width: 65px;
  border-radius: 4px;
`;var Ue="speechify-play",x={wrapper:{hoverColor:"",hoverDarkColor:"",hoverHeight:"",hoverWidth:"",hoverBorderRadius:""},button:{color:"",darkThemeColor:"",pressedBackgroundColor:"",pressedDarkBackgroundColor:"",size:"18px",iconsize:"10px",borderWidth:"1.5px",lightThemeBackgroundColor:"transparent",darkThemeBackgroundColor:"transparent",textWithButton:!1,outlined:!0,hoverPlayButton:!1}},Xo=async({mainSelector:e,getWrappers:c,embedPlayElement:f,getElementsToPlay:T,buttonId:B,buttonText:F,playbackTriggerSource:n,continuousPlaying:o,backgroundElement:C,styling:k,darkTheme:l,showNewDesignForReddit:P})=>{await he(e);let g=ge(e),i=(0,ae.debounce)(W=>{Ge(W)||c()?.forEach(a=>{let s=a.querySelector(`.${Ue}`)??f(a),t=typeof k=="function"?k(s):k,{wrapper:p,button:L}=t;s.querySelector(`#${B}`)||(B==="reddit-inbox-button"&&P(s)?(De(s),re(r(We,{wrapper:s,getElementsToPlay:T,playbackTriggerSource:n,continuousPlaying:o,backgroundElement:C,darkTheme:l,textWithButton:"Listen"}),s)):(Ke(s),re(r(Ye,{wrapper:s,getElementsToPlay:T,buttonId:B,text:F,playbackTriggerSource:n,continuousPlaying:o,backgroundElement:C,darkTheme:l,wrapperStyles:p,buttonStyles:L,textWithButton:L.textWithButton??x.button.textWithButton?"Listen":"",editable:!0}),s)))})},100);i([]);let y=new MutationObserver(i);return y.observe(g,{subtree:!0,childList:!0}),()=>{y.disconnect()}};function Ye({wrapper:e,getElementsToPlay:c,buttonId:f,text:T,playbackTriggerSource:B,backgroundElement:F,wrapperStyles:n,buttonStyles:o,darkTheme:C,textWithButton:k}){let{route:l}=Te(Pe,["route"]),[P,g]=(0,Ie.useState)(null),{state:i,play:y,pause:W,isActive:a,queueAndPlayContent:s}=V(P),t=a&&i==="playing",p=a&&i==="buffering",L=a&&i==="errored",d=Ee(),{variant:J}=ve("show_inline_player_voice_speed");S(()=>{(async()=>{let h=c(e).filter(Boolean),{ObjectRef:Oe}=await q(),Me={getContent:await Q(async()=>({content:h.flatMap(X=>ke({startingNode:X,shouldFindHeadings:!1,getAllTextBlocksInitialThreshold:1,ignoreCache:!0})),chunksAfter:0,chunksBefore:0})),converter:R=>({text:R.textContent??"",ref:new Oe({ref:R})}),options:{autoplay:!0,sideEffects:!1,experimentalEdits:async function*(R){let X=()=>new Promise(Z=>{let H=[],de=()=>{ee.disconnect(),Z([])},Ne=(0,ae.debounce)(I=>{H=[],ee.disconnect(),R.removeEventListener("abort",de),Z(I)},1e3),ee=new MutationObserver(I=>{H.push(...I),Ne(H)});R.addEventListener("abort",de),h.forEach(I=>ee.observe(I,{childList:!0,subtree:!0,characterData:!0}))});for(;;)yield await X()}},metadata:{source:B}};g(Me)})()},[e]);let M=j(()=>{if(!a)return s();if(!p){if(t)return W();if(!t)return y();Array.from(document.querySelectorAll(".speechify-inbox-player")).forEach(h=>h.classList.remove("speechify-inbox-player")),Array.from(document.querySelectorAll(`.${b}`)).forEach(h=>h.classList.remove(b)),e.classList.add(b),G({triggeredFrom:B})}},[e,t,p,a,P,s]);S(()=>pe(()=>{Ce.pause()}),[]);let{isDarkBackground:D}=K(F),m=C!==void 0?C:D,w="#FFFFFF",A="#030303",N={playerColor:t?w:o?.color,playerBackgroundColor:t?o?.pressedBackgroundColor:o?.lightThemeBackgroundColor??x.button.lightThemeBackgroundColor,voicesColor:l==="/voices"?w:o?.color,voicesBackgroundColor:l==="/voices"?o?.pressedBackgroundColor:o?.lightThemeBackgroundColor??x.button.lightThemeBackgroundColor,speedColor:l==="/speed"?w:o?.color,speedBackgroundColor:l==="/speed"?o?.pressedBackgroundColor:o?.lightThemeBackgroundColor??x.button.lightThemeBackgroundColor},Se={playerColor:t?A:o?.darkThemeColor,playerBackgroundColor:t?o?.pressedDarkBackgroundColor:o?.darkThemeBackgroundColor??x.button.darkThemeBackgroundColor,voicesColor:l==="/voices"?A:o?.darkThemeColor,voicesBackgroundColor:l==="/voices"?o?.pressedDarkBackgroundColor:o?.darkThemeBackgroundColor??x.button.darkThemeBackgroundColor,speedColor:l==="/speed"?A:o?.darkThemeColor,speedBackgroundColor:l==="/speed"?o.pressedDarkBackgroundColor:o.darkThemeBackgroundColor??x.button.darkThemeBackgroundColor},u=m?Se:N,se=h=>async()=>{if(te()&&l===h)return le("/");switch(te()||await fe("browser-action",{animate:!1},"pill-player"),Le({hidePlayerPill:!1,showCollapseButton:!0,allowCollapse:!0}),le(h),h){case"/speed":ie("extension_usage_speed_controller_opened",{source:"inline"});break;case"/voices":ie("extension_usage_voice_opened",{source:"inline"});break}},ce={borderRadius:"50%",outlineWidth:"thin",borderWidth:"1px",minWidth:o?.size,width:o?.size,minHeight:o?.size,height:o?.size},ze=o?.hoverPlayButton&&!t?m?o.pressedDarkBackgroundColor:o.pressedBackgroundColor:u.playerColor;return r(Be,{direction:"right",id:f,text:T,display:!1},r(Xe,null,r(Ze,{onClick:M,collapsed:!t&&!p&&!a,hoverColor:m?n.hoverDarkColor:n.hoverColor,hoverWidth:n.hoverWidth,hoverHeight:n.hoverHeight,hoverButtonColor:ze,hoverBorderRadius:f==="reddit-inbox-button"?n.hoverBorderRadius:!t&&!p&&k?"4px":"50%"},r(U,{isLoading:p,isPlaying:a&&t,isLoadingFailed:L,iconSize:o.iconsize??"10px",background:u.playerBackgroundColor,outlined:f==="linkedin-inbox-button"&&!t?o.outlined??x.button.outlined:!t,color:u.playerColor,outlinedColor:u.playerColor,borderWidth:o.borderWidth,size:o.size??"18px"}),k&&!t&&!p&&!a&&r(O,{fixedWidthNumbers:!0,color:u.playerColor,style:{display:"flex",alignItems:"center",fontWeight:500,marginLeft:"6px",cursor:"pointer"}},r("span",{style:{lineHeight:"6px",fontSize:"15px"}},k)),r(Y,{onClick:()=>M()})),J&&r(Je,{collapsed:!a},r(Ae,{hoverBorderRadius:f==="reddit-inbox-button"?n.hoverBorderRadius:"50%",hoverColor:m?n.hoverDarkColor:n.hoverColor},r(xe,{style:{...ce,outlineColor:u.voicesColor,backgroundColor:u.voicesBackgroundColor,outlineStyle:l==="/voices"?"none":"solid"},"aria-label":ne("VOICE_MENU_BUTTON"),onClick:se("/voices")},r(ye,{size:"10px",color:u.voicesColor}))),r(Ae,{hoverBorderRadius:f==="reddit-inbox-button"?n.hoverBorderRadius:"50%",hoverColor:m?n.hoverDarkColor:n.hoverColor},r(be,{"aria-label":ne("VOICE_MENU_BUTTON"),style:{...ce,outlineColor:u.speedColor,backgroundColor:u.speedBackgroundColor,outlineStyle:l==="/speed"?"none":"solid",color:u.speedColor},onClick:se("/speed")},r(O,{fontSize:"7px",fixedWidthNumbers:!0,color:u.speedColor,medium:!0,style:{display:"flex",alignItems:"center",fontWeight:500,flexDirection:"row"}},(d??1).toFixed(1),r("span",{style:{lineHeight:"7px",fontSize:"7px"}},"x")))))))}var Ge=e=>e.some(c=>c.target instanceof HTMLElement?c.target?.className?.includes("speechify")||c.target?.id?.includes("speechify"):!1),we=[],Ke=e=>{we.includes(e)||we.push(e)},Je=v(E)`
  height: ${({collapsed:e})=>e?"0px":"50px"};
  width: ${({collapsed:e})=>e?"0px":"55px"};
  transition: height 300ms ease-in-out,width 300ms ease-in-out;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  justify-content:space-around;

  > * {
    transform: translateY(0px);
    transition-duration: 300ms
    transition: transform 0.31s ease-in-out;
  }
`,Xe=v(E)`
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
`,Ze=v(E)`
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  height: ${({collapsed:e,hoverHeight:c})=>e?c:"25px"};
  justify-content: center;
  &:hover {
    background-color: ${({hoverColor:e})=>e};
    > button {
      color: ${({hoverButtonColor:e})=>e};
      border-color: ${({hoverButtonColor:e})=>e};
    }
  }
  width: ${({collapsed:e,hoverWidth:c})=>e?c:"25px"};
  border-radius: ${({hoverBorderRadius:e})=>e};
`,Ae=v(E)`
  border-radius: ${({hoverBorderRadius:e})=>e};
  min-width: 25px;
  width: 25px;
  min-height: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({hoverColor:e})=>e};
`;export{Ue as a,Xo as b};
//# sourceMappingURL=chunk-L2CA2STH.js.map
