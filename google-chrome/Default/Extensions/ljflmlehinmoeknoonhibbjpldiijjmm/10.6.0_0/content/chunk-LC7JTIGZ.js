import{b as p,i as f}from"./chunk-GQDQ63G2.js";import{a}from"./chunk-TQDQJ2R3.js";import{u as y}from"./chunk-MXAKFU6F.js";import{d as V,h as c,j as t,o as u}from"./chunk-67P5Y4J4.js";u();c();var g=V(y());u();c();var x=({color:o,...e})=>t("svg",{width:"12px",height:"11px",viewBox:"0 0 12 11",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...e},t("path",{d:"M4.8528 10.25C5.24839 10.25 5.5592 10.0997 5.77395 9.78796L11.0353 1.88907C11.1878 1.66084 11.25 1.44375 11.25 1.24335C11.25 0.703402 10.8318 0.302612 10.2667 0.302612C9.8824 0.302612 9.6394 0.441775 9.40205 0.803599L4.83019 7.90648L2.51319 5.10652C2.29844 4.85046 2.06109 4.73913 1.73332 4.73913C1.16254 4.73913 0.75 5.13992 0.75 5.68544C0.75 5.93036 0.823466 6.14189 1.03821 6.38125L3.95425 9.83249C4.19726 10.1164 4.47982 10.25 4.8528 10.25Z",fill:o??f.elements.background}));var v=100,E=100,k=50,h=50,C=50;function $({className:o,counterClockwise:e,dashRatio:i,pathRadius:s,strokeWidth:r,xOffset:n=0,yOffset:l=0}){return t("path",{className:o,d:O({pathRadius:s,counterClockwise:e,positionX:h+n,positionY:C+l}),fillOpacity:0,strokeWidth:r,style:Object.assign({},M({pathRadius:s,dashRatio:i,counterClockwise:e}))})}function O({pathRadius:o,counterClockwise:e,positionX:i=h,positionY:s=C}){let r=o,n=e?1:0;return`
      M ${i},${s}
      m 0,-${r}
      a ${r},${r} ${n} 1 1 0,${2*r}
      a ${r},${r} ${n} 1 1 0,-${2*r}
    `}function M({counterClockwise:o,dashRatio:e,pathRadius:i}){let s=Math.PI*2*i,r=(1-e)*s;return{strokeDasharray:`${s}px ${s}px`,strokeDashoffset:`${o?-r:r}px`}}var X=a.div`
  width: ${({size:o})=>o??"24px"};
  height: ${({size:o})=>o??"24px"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`,_=a.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;
`,L=a($)`
  stroke: ${({isMaxValue:o,circleColor:e,progressColor:i})=>o?i:e};
  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
  stroke-linecap: round;
`,T=a($)`
  stroke: ${({progressColor:o})=>o};
  transition: stroke-dashoffset 0.5s ease 0s;
`,z=a.circle`
  fill: ${({progressColor:o})=>o};
`,D=a(x)`
  z-index: 1;
`,N=o=>{let{circleRatio:e=1,counterClockwise:i=!1,maxValue:s=100,minValue:r=0,strokeWidth:n=24,value:l=0,progressColor:m=p.electric[350],circleColor:R=p.glass[300],size:w="24px",ended:d}=o,b=(0,g.useMemo)(()=>k-n/2,[n]),P=(0,g.useMemo)(()=>(Math.min(Math.max(l,r),s)-r)/(s-r),[l,r,s]);return t(X,{size:w},d&&t(D,null),t(_,{viewBox:`0 0 ${v} ${E}`,"data-test-id":"CircularProgressbar"},d&&t(z,{cx:h,cy:C,r:k,progressColor:m}),t(L,{counterClockwise:i,dashRatio:e,pathRadius:b,strokeWidth:n,isMaxValue:d,progressColor:m,circleColor:R}),t(T,{counterClockwise:i,dashRatio:P*e,pathRadius:b,strokeWidth:n,progressColor:m})))},q=N;export{x as a,q as b};
//# sourceMappingURL=chunk-LC7JTIGZ.js.map
