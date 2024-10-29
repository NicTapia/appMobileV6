"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(y,g,a)=>{a.d(g,{c:()=>r});var e=a(4261),u=a(1086),d=a(8607);const r=(o,i)=>{let n,t;const _=(c,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,p);E&&i(E)&&!E.disabled?E!==n&&(s(),l(E,w)):s()},l=(c,p)=>{n=c,t||(t=n);const w=n;(0,e.w)(()=>w.classList.add("ion-activated")),p()},s=(c=!1)=>{if(!n)return;const p=n;(0,e.w)(()=>p.classList.remove("ion-activated")),c&&t!==n&&n.click(),n=void 0};return(0,d.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>_(c.currentX,c.currentY,u.a),onMove:c=>_(c.currentX,c.currentY,u.b),onEnd:()=>{s(!0),(0,u.h)(),t=void 0}})}},8438:(y,g,a)=>{a.d(g,{g:()=>u});var e=a(8476);const u=()=>{if(void 0!==e.w)return e.w.Capacitor}},5572:(y,g,a)=>{a.d(g,{c:()=>e,i:()=>u});const e=(d,r,o)=>"function"==typeof o?o(d,r):"string"==typeof o?d[o]===r[o]:Array.isArray(r)?r.includes(d):d===r,u=(d,r,o)=>void 0!==d&&(Array.isArray(d)?d.some(i=>e(i,r,o)):e(d,r,o))},3351:(y,g,a)=>{a.d(g,{g:()=>e});const e=(i,n,t,_,l)=>d(i[1],n[1],t[1],_[1],l).map(s=>u(i[0],n[0],t[0],_[0],s)),u=(i,n,t,_,l)=>l*(3*n*Math.pow(l-1,2)+l*(-3*t*l+3*t+_*l))-i*Math.pow(l-1,3),d=(i,n,t,_,l)=>o((_-=l)-3*(t-=l)+3*(n-=l)-(i-=l),3*t-6*n+3*i,3*n-3*i,i).filter(c=>c>=0&&c<=1),o=(i,n,t,_)=>{if(0===i)return((i,n,t)=>{const _=n*n-4*i*t;return _<0?[]:[(-n+Math.sqrt(_))/(2*i),(-n-Math.sqrt(_))/(2*i)]})(n,t,_);const l=(3*(t/=i)-(n/=i)*n)/3,s=(2*n*n*n-9*n*t+27*(_/=i))/27;if(0===l)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-l),-Math.sqrt(-l)];const c=Math.pow(s/2,2)+Math.pow(l/3,3);if(0===c)return[Math.pow(s/2,.5)-n/3];if(c>0)return[Math.pow(-s/2+Math.sqrt(c),1/3)-Math.pow(s/2+Math.sqrt(c),1/3)-n/3];const p=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-n/3,E*Math.cos((w+2*Math.PI)/3)-n/3,E*Math.cos((w+4*Math.PI)/3)-n/3]}},5083:(y,g,a)=>{a.d(g,{i:()=>e});const e=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,g,a)=>{a.r(g),a.d(g,{startFocusVisible:()=>r});const e="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let i=[],n=!0;const t=o?o.shadowRoot:document,_=o||document.body,l=M=>{i.forEach(v=>v.classList.remove(e)),M.forEach(v=>v.classList.add(e)),i=M},s=()=>{n=!1,l([])},c=M=>{n=d.includes(M.key),n||l([])},p=M=>{if(n&&void 0!==M.composedPath){const v=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(v)}},w=()=>{t.activeElement===_&&l([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:l}}},1086:(y,g,a)=>{a.d(g,{I:()=>u,a:()=>n,b:()=>t,c:()=>i,d:()=>l,h:()=>_});var e=a(8438),u=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(u||{});const r={getEngine(){const s=(0,e.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const c=(0,e.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const c=this.getEngine();c&&c.impact({style:s.style})},notification(s){const c=this.getEngine();c&&c.notification({type:s.type})},selection(){this.impact({style:u.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},o=()=>r.available(),i=()=>{o()&&r.selection()},n=()=>{o()&&r.selectionStart()},t=()=>{o()&&r.selectionChanged()},_=()=>{o()&&r.selectionEnd()},l=s=>{o()&&r.impact(s)}},909:(y,g,a)=>{a.d(g,{I:()=>i,a:()=>l,b:()=>o,c:()=>p,d:()=>E,f:()=>s,g:()=>_,i:()=>t,p:()=>w,r:()=>M,s:()=>c});var e=a(467),u=a(4920),d=a(4929);const o="ion-content",i=".ion-content-scroll-host",n=`${o}, ${i}`,t=v=>"ION-CONTENT"===v.tagName,_=function(){var v=(0,e.A)(function*(m){return t(m)?(yield new Promise(h=>(0,u.c)(m,h)),m.getScrollElement()):m});return function(h){return v.apply(this,arguments)}}(),l=v=>v.querySelector(i)||v.querySelector(n),s=v=>v.closest(n),c=(v,m)=>t(v)?v.scrollToTop(m):Promise.resolve(v.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(v,m,h,O)=>t(v)?v.scrollByPoint(m,h,O):Promise.resolve(v.scrollBy({top:h,left:m,behavior:O>0?"smooth":"auto"})),w=v=>(0,d.b)(v,o),E=v=>{if(t(v)){const h=v.scrollY;return v.scrollY=!1,h}return v.style.setProperty("overflow","hidden"),!0},M=(v,m)=>{t(v)?v.scrollY=m:v.style.removeProperty("overflow")}},3992:(y,g,a)=>{a.d(g,{a:()=>e,b:()=>p,c:()=>n,d:()=>w,e:()=>P,f:()=>i,g:()=>E,h:()=>d,i:()=>u,j:()=>f,k:()=>D,l:()=>t,m:()=>s,n:()=>M,o:()=>l,p:()=>o,q:()=>r,r:()=>C,s:()=>b,t:()=>c,u:()=>h,v:()=>O,w:()=>_,x:()=>v,y:()=>m});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,g,a)=>{a.d(g,{c:()=>r,g:()=>o});var e=a(8476),u=a(4920),d=a(4929);const r=(n,t,_)=>{let l,s;if(void 0!==e.w&&"MutationObserver"in e.w){const E=Array.isArray(t)?t:[t];l=new MutationObserver(M=>{for(const v of M)for(const m of v.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&E.includes(m.slot))return _(),void(0,u.r)(()=>c(m))}),l.observe(n,{childList:!0,subtree:!0})}const c=E=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(v=>{_();for(const m of v)for(const h of m.removedNodes)h.nodeType===Node.ELEMENT_NODE&&h.slot===t&&w()}),s.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},o=(n,t,_)=>{const l=null==n?0:n.toString().length,s=i(l,t);if(void 0===_)return s;try{return _(l,t)}catch(c){return(0,d.a)("Exception in provided `counterFormatter`.",c),s}},i=(n,t)=>`${n} / ${t}`},1622:(y,g,a)=>{a.r(g),a.d(g,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>v,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var e=a(4379);a(8438),a(8476);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let n={},t={},_=!1;const l=()=>{n={},t={},_=!1},s=f=>{if(e.K.getEngine())c(f);else{if(!f.visualViewport)return;t=C(f.visualViewport),f.visualViewport.onresize=()=>{O(f),E()||M(f)?p(f):v(f)&&w(f)}}},c=f=>{f.addEventListener("keyboardDidShow",D=>p(f,D)),f.addEventListener("keyboardDidHide",()=>w(f))},p=(f,D)=>{m(f,D),_=!0},w=f=>{h(f),_=!1},E=()=>!_&&n.width===t.width&&(n.height-t.height)*t.scale>150,M=f=>_&&!v(f),v=f=>_&&t.height===f.innerHeight,m=(f,D)=>{const P=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:f.innerHeight-t.height}});f.dispatchEvent(P)},h=f=>{const D=new CustomEvent(o);f.dispatchEvent(D)},O=f=>{n=Object.assign({},t),t=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},4379:(y,g,a)=>{a.d(g,{K:()=>r,a:()=>d});var e=a(8438),u=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(u||{}),d=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(d||{});const r={getEngine(){const o=(0,e.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(i=>{if(i.code!==u.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(y,g,a)=>{a.d(g,{c:()=>i});var e=a(467),u=a(8476),d=a(4379);const r=n=>{if(void 0===u.d||n===d.a.None||void 0===n)return null;const t=u.d.querySelector("ion-app");return null!=t?t:u.d.body},o=n=>{const t=r(n);return null===t?0:t.clientHeight},i=function(){var n=(0,e.A)(function*(t){let _,l,s,c;const p=function(){var m=(0,e.A)(function*(){const h=yield d.K.getResizeMode(),O=void 0===h?void 0:h.mode;_=()=>{void 0===c&&(c=o(O)),s=!0,w(s,O)},l=()=>{s=!1,w(s,O)},null==u.w||u.w.addEventListener("keyboardWillShow",_),null==u.w||u.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),w=(m,h)=>{t&&t(m,E(h))},E=m=>{if(0===c||c===o(m))return;const h=r(m);return null!==h?new Promise(O=>{const f=new ResizeObserver(()=>{h.clientHeight===c&&(f.disconnect(),O())});f.observe(h)}):void 0};return yield p(),{init:p,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",_),null==u.w||u.w.removeEventListener("keyboardWillHide",l),_=l=void 0},isKeyboardVisible:()=>s}});return function(_){return n.apply(this,arguments)}}()},7838:(y,g,a)=>{a.d(g,{c:()=>u});var e=a(467);const u=()=>{let d;return{lock:function(){var o=(0,e.A)(function*(){const i=d;let n;return d=new Promise(t=>n=t),void 0!==i&&(yield i),n});return function(){return o.apply(this,arguments)}}()}}},9001:(y,g,a)=>{a.d(g,{c:()=>d});var e=a(8476),u=a(4920);const d=(r,o,i)=>{let n;const t=()=>!(void 0===o()||void 0!==r.label||null===i()),l=()=>{const c=o();if(void 0===c)return;if(!t())return void c.style.removeProperty("width");const p=i().scrollWidth;if(0===p&&null===c.offsetParent&&void 0!==e.w&&"IntersectionObserver"in e.w){if(void 0!==n)return;const w=n=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),w.disconnect(),n=void 0)},{threshold:.01,root:r});w.observe(c)}else c.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,u.r)(()=>{l()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},7895:(y,g,a)=>{a.d(g,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(d,r,o)=>{const i=d*r/o-d+"ms",n=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(d,r,o)=>{const i=r/o,n=d*i-d+"ms",t=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})}}},7166:(y,g,a)=>{a.r(g),a.d(g,{createSwipeBackGesture:()=>o});var e=a(4920),u=a(5083),d=a(8607);a(1970);const o=(i,n,t,_,l)=>{const s=i.ownerDocument.defaultView;let c=(0,u.i)(i);const w=h=>c?-h.deltaX:h.deltaX;return(0,d.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:h=>(c=(0,u.i)(i),(h=>{const{startX:C}=h;return c?C>=s.innerWidth-50:C<=50})(h)&&n()),onStart:t,onMove:h=>{const C=w(h)/s.innerWidth;_(C)},onEnd:h=>{const O=w(h),C=s.innerWidth,f=O/C,D=(h=>c?-h.velocityX:h.velocityX)(h),P=D>=0&&(D>.2||O>C/2),L=(P?1-f:f)*C;let B=0;if(L>5){const T=L/Math.abs(D);B=Math.min(T,540)}l(P,f<=0?.01:(0,e.j)(0,f,.9999),B)}})}},2935:(y,g,a)=>{a.d(g,{w:()=>e});const e=(r,o,i)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(t=>{i(u(t,o))});return n.observe(r,{childList:!0,subtree:!0}),n},u=(r,o)=>{let i;return r.forEach(n=>{for(let t=0;t<n.addedNodes.length;t++)i=d(n.addedNodes[t],o)||i}),i},d=(r,o)=>{if(1!==r.nodeType)return;const i=r;return(i.tagName===o.toUpperCase()?[i]:Array.from(i.querySelectorAll(o))).find(t=>t.value===i.value)}},3683:(y,g,a)=>{a.d(g,{H:()=>n});var e=a(4438),u=a(177),d=a(4742),r=a(4341);function o(t,_){if(1&t&&e.nrm(0,"ion-icon",4),2&t){const l=e.XpG();e.Y8G("name",l.icon)}}function i(t,_){if(1&t){const l=e.RV6();e.j41(0,"ion-button",5),e.bIt("click",function(){e.eBV(l);const c=e.XpG();return e.Njj(c.showOrHidePassword())}),e.nrm(1,"ion-icon",6),e.k0s()}if(2&t){const l=e.XpG();e.R7$(),e.Y8G("name",l.hide?"eye-outline":"eye-off-outline")}}let n=(()=>{var t;class _{constructor(){this.hide=!0}ngOnInit(){"password"==this.type&&(this.isPassword=!0)}showOrHidePassword(){this.hide=!this.hide,this.type=this.hide?"password":"text"}}return(t=_).\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-custom-input"]],inputs:{control:"control",type:"type",label:"label",autocomplete:"autocomplete",icon:"icon"},decls:4,vars:6,consts:[["lines","none",1,"custom-input"],["color","primary","slot","start",3,"name",4,"ngIf"],["label-placement","floating",3,"type","autocomplete","label","formControl"],["slot","end","fill","clear","shape","round",3,"click",4,"ngIf"],["color","primary","slot","start",3,"name"],["slot","end","fill","clear","shape","round",3,"click"],["slot","icon-only",3,"name"]],template:function(s,c){1&s&&(e.j41(0,"ion-item",0),e.DNE(1,o,1,1,"ion-icon",1),e.nrm(2,"ion-input",2),e.DNE(3,i,2,1,"ion-button",3),e.k0s()),2&s&&(e.R7$(),e.Y8G("ngIf",c.icon),e.R7$(),e.Y8G("type",c.type)("autocomplete",c.autocomplete)("label",c.label)("formControl",c.control),e.R7$(),e.Y8G("ngIf",c.isPassword))},dependencies:[u.bT,d.Jm,d.iq,d.$w,d.uz,d.Gw,r.BC,r.l_]}),_})()},9381:(y,g,a)=>{a.d(g,{l:()=>n});var e=a(4438),u=a(5265),d=a(177),r=a(4742);function o(t,_){if(1&t&&e.nrm(0,"ion-back-button",5),2&t){const l=e.XpG();e.Y8G("defaultHref",l.backButton)}}function i(t,_){if(1&t){const l=e.RV6();e.j41(0,"ion-button",6),e.bIt("click",function(){e.eBV(l);const c=e.XpG();return e.Njj(c.dismissModal())}),e.nrm(1,"ion-icon",7),e.k0s()}}let n=(()=>{var t;class _{constructor(){this.utilsSvc=(0,e.WQX)(u.T)}ngOnInit(){}dismissModal(){this.utilsSvc.dismissModal()}}return(t=_).\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-header"]],inputs:{title:"title",backButton:"backButton",isModal:"isModal"},decls:8,vars:3,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],[3,"defaultHref",4,"ngIf"],[3,"click",4,"ngIf"],[3,"defaultHref"],[3,"click"],["name","close-circle-outline"]],template:function(s,c){1&s&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.DNE(3,o,1,1,"ion-back-button",3)(4,i,2,0,"ion-button",4),e.k0s(),e.j41(5,"ion-title")(6,"strong"),e.EFF(7),e.k0s()()()()),2&s&&(e.R7$(3),e.Y8G("ngIf",c.backButton),e.R7$(),e.Y8G("ngIf",c.isModal),e.R7$(3),e.JRh(c.title))},dependencies:[d.bT,r.Jm,r.QW,r.eU,r.iq,r.BC,r.ai,r.el],styles:[".admin[_ngcontent-%COMP%]{font-size:13px}"]}),_})()},3887:(y,g,a)=>{a.d(g,{G:()=>o});var e=a(177),u=a(4742),d=a(4341),r=a(4438);let o=(()=>{var i;class n{}return(i=n).\u0275fac=function(_){return new(_||i)},i.\u0275mod=r.$C({type:i}),i.\u0275inj=r.G2t({imports:[e.MD,u.bv,d.X1,d.YN,d.X1]}),n})()}}]);