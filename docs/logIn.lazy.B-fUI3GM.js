import{j as R,p as P,c as v}from"./index.BVeJwb8i.js";import{r as d,A as D}from"./vendor.-zAMWLWi.js";var A={exports:{}},C={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E;function M(){if(E)return C;E=1;var e=D,i=Symbol.for("react.element"),g=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(n,o,c){var t,r={},s=null,y=null;c!==void 0&&(s=""+c),o.key!==void 0&&(s=""+o.key),o.ref!==void 0&&(y=o.ref);for(t in o)h.call(o,t)&&!f.hasOwnProperty(t)&&(r[t]=o[t]);if(n&&n.defaultProps)for(t in o=n.defaultProps,o)r[t]===void 0&&(r[t]=o[t]);return{$$typeof:i,type:n,key:s,ref:y,props:r,_owner:l.current}}return C.Fragment=g,C.jsx=m,C.jsxs=m,C}A.exports=M();var _=A.exports;const T=(e,i,g,h)=>{let l=i/(g+h),f=Math.floor(e.length/l);l>e.length&&(l=e.length,f=1);const m=[];for(let n=0;n<l;n++){let o=0;for(let c=0;c<f&&n*f+c<e.length;c++)o+=e[n*f+c];m.push(o/f)}return m},k=(e,i,g,h,l,f)=>{const m=i.height/2,n=i.getContext("2d");n&&(n.clearRect(0,0,i.width,i.height),l!=="transparent"&&(n.fillStyle=l,n.fillRect(0,0,i.width,i.height)),e.forEach((o,c)=>{n.fillStyle=f;const t=c*(g+h),r=m-o/2,s=g,y=o||1;n.beginPath(),n.roundRect?(n.roundRect(t,r,s,y,50),n.fill()):n.fillRect(t,r,s,y)}))},I=({mediaRecorder:e,width:i="100%",height:g="100%",barWidth:h=2,gap:l=1,backgroundColor:f="transparent",barColor:m="rgb(160, 198, 255)",fftSize:n=1024,maxDecibels:o=-10,minDecibels:c=-90,smoothingTimeConstant:t=.4})=>{const[r]=d.useState(()=>new AudioContext),[s,y]=d.useState(),u=d.useRef(null);d.useEffect(()=>{if(!e.stream)return;const a=r.createAnalyser();y(a),a.fftSize=n,a.minDecibels=c,a.maxDecibels=o,a.smoothingTimeConstant=t,r.createMediaStreamSource(e.stream).connect(a)},[e.stream]),d.useEffect(()=>{s&&e.state==="recording"&&b()},[s,e.state]);const b=d.useCallback(()=>{if(!s)return;const a=new Uint8Array(s==null?void 0:s.frequencyBinCount);e.state==="recording"?(s==null||s.getByteFrequencyData(a),x(a),requestAnimationFrame(b)):e.state==="paused"?x(a):e.state==="inactive"&&r.state!=="closed"&&r.close()},[s,r.state]),x=a=>{if(!u.current)return;const p=T(a,u.current.width,h,l);k(p,u.current,h,l,f,m)};return _.jsx("canvas",{ref:u,width:i,height:g,style:{aspectRatio:"unset"}})},F=(e,i,g,h,l)=>{const f=e.getChannelData(0),m=g/(h+l),n=Math.floor(f.length/m),o=i/2;let c=[],t=0;for(let r=0;r<m;r++){const s=[];let y=0;const u=[];let b=0;for(let p=0;p<n&&r*n+p<e.length;p++){const w=f[r*n+p];w<=0&&(s.push(w),y++),w>0&&(u.push(w),b++)}const x=s.reduce((p,w)=>p+w,0)/y,a={max:u.reduce((p,w)=>p+w,0)/b,min:x};a.max>t&&(t=a.max),Math.abs(a.min)>t&&(t=Math.abs(a.min)),c.push(a)}if(o*.8>t*o){const r=o*.8/t;c=c.map(s=>({max:s.max*r,min:s.min*r}))}return c},S=(e,i,g,h,l,f,m,n=0,o=1)=>{const c=i.height/2,t=i.getContext("2d");if(!t)return;t.clearRect(0,0,i.width,i.height),l!=="transparent"&&(t.fillStyle=l,t.fillRect(0,0,i.width,i.height));const r=(n||0)/o;e.forEach((s,y)=>{const u=y/e.length,b=r>u;t.fillStyle=b&&m?m:f;const x=y*(g+h),a=c+s.min,p=g,w=c+s.max-a;t.beginPath(),t.roundRect?(t.roundRect(x,a,p,w,50),t.fill()):t.fillRect(x,a,p,w)})},j=d.forwardRef(({blob:e,width:i,height:g,barWidth:h=2,gap:l=1,currentTime:f,style:m,backgroundColor:n="transparent",barColor:o="rgb(184, 184, 184)",barPlayedColor:c="rgb(160, 198, 255)"},t)=>{const r=d.useRef(null),[s,y]=d.useState([]),[u,b]=d.useState(0);return d.useImperativeHandle(t,()=>r.current,[]),d.useEffect(()=>{(async()=>{if(!r.current)return;if(!e){const a=Array.from({length:100},()=>({max:0,min:0}));S(a,r.current,h,l,n,o,c);return}const x=await e.arrayBuffer();await new AudioContext().decodeAudioData(x,a=>{if(!r.current)return;b(a.duration);const p=F(a,g,i,h,l);y(p),S(p,r.current,h,l,n,o,c)})})()},[e,r.current]),d.useEffect(()=>{r.current&&S(s,r.current,h,l,n,o,c,f,u)},[f,u]),_.jsx("canvas",{ref:r,width:i,height:g,style:{...m}})});j.displayName="AudioVisualizer";const O=()=>{const e=d.useRef(null),[i,g]=d.useState(!1),[h,l]=d.useState(null),f=()=>{i?e.current&&e.current.pause():e.current&&e.current.play(),g(!i)},[m,n]=d.useState(),o=d.useRef(null),c=async()=>{try{const b=await(await fetch("/video.mp4")).blob();n(b)}catch(u){console.error("Помилка завантаження аудіо:",u)}};d.useEffect(()=>(c(),()=>{c()}),[]);const t=async()=>{try{const u=e.current;if(!u)return;const b=new(window.AudioContext||window.webkitAudioContext),x=b.createMediaElementSource(u),a=b.createMediaStreamDestination();x.connect(a),x.connect(b.destination);const p=new MediaRecorder(a.stream);l(p),p.start()}catch(u){console.error("Помилка налаштування MediaRecorder:",u)}},r=async()=>{await t(),f()},[s,y]=d.useState(0);return d.useEffect(()=>{let u;const b=()=>{e.current&&y(e.current.currentTime),u=requestAnimationFrame(b)};return b(),()=>cancelAnimationFrame(u)},[]),R.jsxs("div",{children:[R.jsxs("video",{ref:e,width:"320",height:"240",poster:P,children:[R.jsx("source",{src:"/video.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),m&&R.jsx(j,{ref:o,blob:m,width:300,height:70,barWidth:5,gap:5,barColor:"#ffffff",barPlayedColor:"#ad7955",currentTime:s}),R.jsx("button",{onClick:r,children:i?"Pause":"Play"}),h&&R.jsx("div",{className:"equalizer__wrapper",children:R.jsx(I,{mediaRecorder:h,width:300,height:70,barWidth:5,gap:8,barColor:"#ffffff"})})]})},B=v("/_logInLayout/logIn")({component:z});function z(){return R.jsxs("div",{children:[R.jsx("h3",{children:"Log in page"}),R.jsx(O,{})]})}export{B as Route};
