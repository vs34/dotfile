import{a as D}from"./chunk-2FG3LFIK.js";import{b as Q}from"./chunk-HEEDIM7V.js";import{a as q}from"./chunk-6NRTMNN7.js";import{a as J}from"./chunk-3YKS52JG.js";import{d as X,k as j,o as h}from"./chunk-FVAPUUYJ.js";import{a as Y}from"./chunk-UYYFRKUS.js";import{a as c}from"./chunk-K5UBOOCY.js";import{c as p}from"./chunk-NI3TKWPM.js";import{a as s,f as K,h as a,i as x,j as O}from"./chunk-GQDQ63G2.js";import{a as S}from"./chunk-TQDQJ2R3.js";import{b as A,h as W}from"./chunk-T2I5CTNL.js";import{Db as I,Oa as Z,Sb as G,e as z,h as C,i as P,m as so,q as R,u as U}from"./chunk-MXAKFU6F.js";import{d as B,f,h as u,j as o,o as g}from"./chunk-67P5Y4J4.js";g();u();var b=B(U());so();g();u();var oo=e=>o(O,{viewBox:"0 0 15 8",xmlns:"http://www.w3.org/2000/svg",...e},o("path",{d:"M1.25586 1.61035H14.0527C14.3398 1.61035 14.5723 1.38477 14.5723 1.09766C14.5723 0.810547 14.3398 0.578125 14.0527 0.578125H1.25586C0.96875 0.578125 0.743164 0.810547 0.743164 1.09766C0.743164 1.38477 0.96875 1.61035 1.25586 1.61035ZM1.25586 4.59082H14.0527C14.3398 4.59082 14.5723 4.36523 14.5723 4.07812C14.5723 3.78418 14.3398 3.55176 14.0527 3.55176H1.25586C0.96875 3.55176 0.743164 3.78418 0.743164 4.07812C0.743164 4.36523 0.96875 4.59082 1.25586 4.59082ZM1.25586 7.57812H14.0527C14.3398 7.57812 14.5723 7.3457 14.5723 7.05176C14.5723 6.76465 14.3398 6.53906 14.0527 6.53906H1.25586C0.96875 6.53906 0.743164 6.76465 0.743164 7.05176C0.743164 7.3457 0.96875 7.57812 1.25586 7.57812Z"}));g();u();var k=B(U());var ao=S(p)`
  font-family: var(--font-family);
  font-size: 16px;
  display: flex !important;
  position: absolute;
  top: 0;
  right: calc(100% + 16px);

  width: 380px;
  border-radius: 6px;

  color: ${()=>x.typography.primary};

  a {
    color: ${()=>a(s.electric400)};
  }

  background: ${()=>x.elements.background};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  padding: 24px;

  transition: 200ms opacity;
  opacity: 1;

  ${({isHidden:e})=>e&&"opacity: 0; pointer-events: none;"}
`,eo=({isHidden:e,isLocalFile:r,isTooBig:t,webAppHref:n})=>{let[m,l]=(0,k.useState)(!0);(0,k.useEffect)(()=>{(async()=>{if(r||t)l(!0);else{let{pdfNudge:y}=await new Promise(d=>f.storage.sync.get(["pdfNudge"],d));y?.notificationDisabled&&l(!1)}})()},[r,t]);let M=async()=>{l(!1);let{pdfNudge:y}=await new Promise(d=>f.storage.sync.get(["pdfNudge"],d));f.storage.sync.set({pdfNudge:{...y,notificationDisabled:!0}})};if(m)return o(ao,{separation:"12px",isHidden:e},o(q,{color:a(s.electric400),width:"100px",height:"19px",style:{marginTop:"14px"}}),t&&o(p,{column:!0,separation:"6px"},o(c,{bold:!0},"This PDF file is too big"),o(c,null,"Please drag & drop it on"," ",o("a",{target:"_blank",rel:"noopener noreferrer",href:n},n.replace(/^https?:\/\//,"").replace(/\/$/,"")))),r&&!t&&o(p,{column:!0,separation:"6px"},o(c,{bold:!0},"This a local PDF file"),o(c,null,"To listen to this local file, drag & drop it on"," ",o("a",{target:"_blank",rel:"noopener noreferrer",href:n},n.replace(/^https?:\/\//,"").replace(/\/$/,"")))),!r&&!t&&o(p,{column:!0,separation:"6px"},o(c,{bold:!0},"Listen now or save for later"),o(c,null,"Click play to listen to this PDF. Or click the bookmark to save it to your library.")),o(h,{size:"16px",style:{position:"absolute",top:"16px",right:"16px"}},o(D,{color:x.controls.tints.secondary,onClick:M})))};var lo=({duration:e,immediateToggle:r})=>{let[t,n]=C("start"),m=async()=>{if(!["forward","backward"].includes(t)){if(t==="start")return n("forward"),new Promise(l=>setTimeout(()=>{n("end"),l()},e));if(t==="end")return n("backward"),new Promise(l=>setTimeout(()=>{n("start"),l()},e))}};return P(()=>{r&&setTimeout(m,0)},[]),{state:t,toggleState:m}},po=S(p)`
  font-family: var(--font-family);
  background: ${()=>a(s.glass200)};
  border-radius: 6px;
  pointer-events: all;

  padding: 6px 4px;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  color: ${()=>x.typography.primary};

  transition-duration: 200ms;
  transition-property: height, transform;
  height: ${({noSaveToMobile:e})=>e?"36px":"58px"};
  overflow: hidden;

  transform: ${({isHidden:e,root:r})=>e?"translateX(calc(100% + "+r.style.right+"))":"translateX(0)"};

  > * {
    transition: 200ms transform;
    transform: translateY(-20px);
  }

  ${({forceExpanded:e})=>e?"&":":hover"} {
    height: ${({noSaveToMobile:e})=>e?"88px":"112px"};
    transform: translateY(-24px) !important;

    & > * {
      transform: none;
    }
  }
`,jo=({doc:e,noSaveToMobile:r,root:t,pdfUrl:n=null})=>{J(K);let[m,l]=C(0),[M,y]=C(!1),d=(e||document).location.href;n||(n=new URLSearchParams(window.location.search).get("url")??d);let v=(0,b.useMemo)(()=>d.startsWith("file://"),[]),w=(0,b.useMemo)(()=>m>25*1e3*1e3,[m]),T=v||w,E=(0,b.useMemo)(()=>`https://app.speechify.com/${v||w?"":`importFile?type=pdf&url=${encodeURIComponent(n)}`}`,[v,w]);P(()=>{let i=f.runtime.connect();i.onMessage.addListener(l),i.postMessage({domain:"com.speechify.pdf",fnName:"getPdfSize",payload:{href:d}})},[]);let{saveToMobileStatus:$}=X(),to=(0,b.useMemo)(()=>A({key:"pdf-emotion-cache",container:t}),[t]),{state:L}=lo({duration:200,immediateToggle:!0}),[F,N]=C(!1),{handleDrag:_,startDragging:no}=(0,b.useMemo)(()=>Q(t),[]);P(()=>{if(!F)return;let i=()=>N(!1);return(e||document).addEventListener("mousemove",_),(e||document).addEventListener("mouseup",i),()=>{(e||document).removeEventListener("mousemove",_),(e||document).removeEventListener("mouseup",i)}},[F]);let ro=()=>{y(!0),I("extension_pdf_nudge_dismiss_clicked")},io=()=>{if(T){window.open(Z("?importModal=true",z.speechifyWebApp.baseUrl),"_blank");return}R().then(i=>{i&&!G(i)?(I(e?"extension_iframe_pdf_import_click":"extension_pdf_import_click",{href:(e||document).location.href}),window.open(E,"_blank")):window.open("https://app.speechify.com","_blank")})};return M?null:o(W,{value:to},o(p,null,o(po,{className:"notranslate",xAlign:!0,relative:!0,column:!0,separation:"2px",forceExpanded:F||$==="saving"||$==="saved",isHidden:["start","backward"].includes(L),noSaveToMobile:r,root:t},o(h,{onMouseDown:i=>{no(i.nativeEvent),N(!0)},onMouseUp:()=>N(!1),noResponsive:!0,size:"18px",color:a(s.glass500)},o(oo,null)),o(h,{noResponsive:!0,size:"32px",color:a(s.glass500),onClick:io},o(Y,null)),!r&&o(j,{disabled:T,source:"PDF",background:"transparent",color:T?a(s.glass300):a(s.glass500),boxShadow:"none",size:"24px",style:T?{cursor:"default",opacity:.5}:{}}),o(h,{noResponsive:!0,size:"32px",color:a(s.glass500),onClick:ro},o(D,{width:"15px"}))),o(eo,{isHidden:L!=="end",isLocalFile:v,isTooBig:w,webAppHref:E})))};export{jo as a};
//# sourceMappingURL=chunk-ISDPWYDC.js.map
