import{c as s}from"./chunk-NI3TKWPM.js";import{j as r}from"./chunk-GQDQ63G2.js";import{a as i}from"./chunk-TQDQJ2R3.js";import{l as o}from"./chunk-T2I5CTNL.js";import{h as e,j as n,o as t}from"./chunk-67P5Y4J4.js";t();e();var p=a=>n(r,{xmlns:"http://www.w3.org/2000/svg",style:{display:"block",shapeRendering:"auto",animationPlayState:"running",animationDelay:"0s"},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",...a},n("circle",{cx:"50",cy:"50",fill:"none",stroke:"currentColor",strokeWidth:"9",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",style:{animationPlayState:"running",animationDelay:"0s"}},n("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1",style:{animationPlayState:"running",animationDelay:"0s"}}))),w=()=>n("svg",{version:"1.1",className:"audio-loading-error-icon",width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27.963 27.963"},n("g",null,n("g",null,n("polygon",{fill:"currentColor",points:"15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158 		"}),n("path",{fill:"currentColor",d:`M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528
      C16.441,19.575,15.468,18.546,13.998,18.546z`})))),l=()=>o`

  25%{
    transform: scaleY(.8);
  }
  50%{
    transform: scaleY(.6);
  }
  75%{
    transform: scaleY(.4);
  }
`,m=()=>o`
25%{
  transform: scaleY(.6);
}
50%{
  transform: scaleY(.4);
}
75%{
  transform: scaleY(.8);
}
`,c=()=>o`
25%{
  transform: scaleY(.4);
}
50%{
  transform: scaleY(.8);
}
75%{
  transform: scaleY(.6);
}
`,d=()=>o`
25%{
  transform: scaleY(.2);
}
50%{
  transform: scaleY(.4);
}
75%{
  transform: scaleY(.6);
}
`,x=i(s)`
  body {
    display: flex;
    justify-content: center;
    background: black;
    margin: 0;
    padding: 0;
    align-items: center;
    height: 100vh;
  }

  .boxContainer {
    display: flex;
    justify-content: space-between;
    height: 18px;
    width: 10px;
    // --boxSize: 8px;
    // --gutter: 4px;
    // width: calc((var(--boxSize) + var(--gutter)) * 5);
  }

  .box {
    transform: scaleY(0.4);
    height: 100%;
    width: 4px;
    background: #ffffff;
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    border-radius: 8px;
  }

  .box1 {
    animation-name: ${l()};
  }

  .box2 {
    animation-name: ${m()};
  }

  .box3 {
    animation-name: ${c()};
  }

  .box4 {
    animation-name: ${d()};
  }
`,Y=a=>n(x,null,n("div",{className:"boxContainer",...a},n("div",{className:"box box1"}),n("div",{className:"box box2"}),n("div",{className:"box box3"}),n("div",{className:"box box4"})));export{p as a,w as b,Y as c};
//# sourceMappingURL=chunk-ECF6E4RL.js.map
