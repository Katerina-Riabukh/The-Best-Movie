"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[890],{9:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{GS:function(){return P},Kh:function(){return E},aN:function(){return j}});var i=r(791),s={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function l(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return s[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}var u=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,c="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(c,0),n},f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},h=[1,3,5],p=[u("PropagateLoader","25% {transform: translateX(-".concat(h[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(h[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(h[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),u("PropagateLoader","25% {transform: translateX(-".concat(h[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(h[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(h[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),u("PropagateLoader","25% {transform: translateX(-".concat(h[0],"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(h[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),u("PropagateLoader","25% {transform: translateX(".concat(h[0],"rem) scale(0.75)}\n    75% {transform: translateX(").concat(h[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),u("PropagateLoader","25% {transform: translateX(".concat(h[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(h[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(h[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),u("PropagateLoader","25% {transform: translateX(".concat(h[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(h[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(h[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")];var m=function(e){var t=e.loading,r=void 0===t||t,n=e.color,a=void 0===n?"#000000":n,o=e.speedMultiplier,c=void 0===o?1:o,s=e.cssOverride,u=void 0===s?{}:s,h=e.size,m=void 0===h?15:h,y=d(e,["loading","color","speedMultiplier","cssOverride","size"]),g=l(m),v=g.value,x=g.unit,b=f({display:"inherit",position:"relative"},u),w=function(e){return{position:"absolute",fontSize:"".concat(v/3).concat(x),width:"".concat(v).concat(x),height:"".concat(v).concat(x),background:a,borderRadius:"50%",animation:"".concat(p[e]," ").concat(1.5/c,"s infinite"),animationFillMode:"forwards"}};return r?i.createElement("span",f({style:b},y),i.createElement("span",{style:w(0)}),i.createElement("span",{style:w(1)}),i.createElement("span",{style:w(2)}),i.createElement("span",{style:w(3)}),i.createElement("span",{style:w(4)}),i.createElement("span",{style:w(5)})):null},y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)};var g=function(e){var t=e.animate,r=void 0===t||t,n=e.animateBegin,a=e.backgroundColor,o=void 0===a?"#f5f6f7":a,c=e.backgroundOpacity,s=void 0===c?1:c,l=e.baseUrl,u=void 0===l?"":l,f=e.children,d=e.foregroundColor,h=void 0===d?"#eee":d,p=e.foregroundOpacity,m=void 0===p?1:p,g=e.gradientRatio,v=void 0===g?2:g,x=e.gradientDirection,b=void 0===x?"left-right":x,w=e.uniqueKey,O=e.interval,j=void 0===O?.25:O,E=e.rtl,P=void 0!==E&&E,k=e.speed,X=void 0===k?1.2:k,C=e.style,S=void 0===C?{}:C,_=e.title,L=void 0===_?"Loading...":_,R=e.beforeMask,D=void 0===R?null:R,M=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),B=w||Math.random().toString(36).substring(6),z=B+"-diff",I=B+"-animated-diff",N=B+"-aria",T=P?{transform:"scaleX(-1)"}:null,q="0; "+j+"; 1",F=X+"s",K="top-bottom"===b?"rotate(90)":void 0;return(0,i.createElement)("svg",y({"aria-labelledby":N,role:"img",style:y(y({},S),T)},M),L?(0,i.createElement)("title",{id:N},L):null,D&&(0,i.isValidElement)(D)?D:null,(0,i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+z+")",style:{fill:"url("+u+"#"+I+")"}}),(0,i.createElement)("defs",null,(0,i.createElement)("clipPath",{id:z},f),(0,i.createElement)("linearGradient",{id:I,gradientTransform:K},(0,i.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:s},r&&(0,i.createElement)("animate",{attributeName:"offset",values:-v+"; "+-v+"; 1",keyTimes:q,dur:F,repeatCount:"indefinite",begin:n})),(0,i.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:m},r&&(0,i.createElement)("animate",{attributeName:"offset",values:-v/2+"; "+-v/2+"; "+(1+v/2),keyTimes:q,dur:F,repeatCount:"indefinite",begin:n})),(0,i.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:s},r&&(0,i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+v),keyTimes:q,dur:F,repeatCount:"indefinite",begin:n})))))},v=function(e){return e.children?(0,i.createElement)(g,y({},e)):(0,i.createElement)(x,y({},e))},x=function(e){return(0,i.createElement)(v,y({viewBox:"0 0 476 124"},e),(0,i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},b=v,w=r(184),O=["width","heading","row","column","padding","borderRadius"],j=function(){return(0,w.jsx)(m,{color:"#f9fcfc",style:{marginLeft:"100px"}})},E=function(e){return(0,w.jsxs)(b,c(c({width:1440,height:700,viewBox:"-10 0 700 300",backgroundColor:"#f5f5f58b",foregroundColor:"#dbdbdb2b"},e),{},{children:[(0,w.jsx)("rect",{x:"4",y:"8",rx:"3",ry:"3",width:"3",height:"788"}),(0,w.jsx)("rect",{x:"6",y:"689",rx:"3",ry:"3",width:"669",height:"3"}),(0,w.jsx)("rect",{x:"25",y:"42",rx:"0",ry:"0",width:"174",height:"300"}),(0,w.jsx)("rect",{x:"250",y:"113",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"123",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"133",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"143",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"51",rx:"3",ry:"3",width:"220",height:"8"}),(0,w.jsx)("rect",{x:"250",y:"159",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"172",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"189",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"200",rx:"3",ry:"3",width:"390",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"220",rx:"3",ry:"3",width:"110",height:"2"}),(0,w.jsx)("rect",{x:"250",y:"230",rx:"3",ry:"3",width:"110",height:"2"}),(0,w.jsx)("rect",{x:"5",y:"8",rx:"3",ry:"3",width:"769",height:"3"})]}))},P=function(e){for(var t,r=e.width,a=void 0===r?1366:r,o=e.heading,i=void 0===o?{width:140,height:1}:o,s=e.row,l=void 0===s?2:s,u=e.column,f=void 0===u?5:u,d=e.padding,h=void 0===d?12:d,p=e.borderRadius,m=void 0===p?4:p,y=n(e,O),g=[],v=1;v<=l;v++)for(var x=0;x<f;x++){var j=(a-h*(f+1))/f,E=h+x*(j+h),P=h+390+(h/2+20)+1+4*h,k=h+i.height+2*h+P*(v-1),X=k+h+390,C=X+h/2+20;g.push((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("rect",{x:E,y:k,rx:m,ry:m,width:j,height:390}),(0,w.jsx)("rect",{x:E,y:X,rx:0,ry:0,width:j,height:20}),(0,w.jsx)("rect",{x:E,y:C,rx:0,ry:0,width:.6*j,height:1})]})),v===l&&(t=C+1)}return(0,w.jsxs)(b,c(c({viewBox:"0 0 ".concat(a," ").concat(t),width:a,height:t,backgroundColor:"rgba(#9c9ca90,0.36)",foregroundColor:"#dbdbdb2b"},y),{},{children:[i&&(0,w.jsx)("rect",{x:h,y:h,rx:0,ry:0,width:i.width,height:i.height}),g]}))}},172:function(e,t,r){r.d(t,{Ht:function(){return i},RC:function(){return o},p9:function(){return c},tx:function(){return u},v3:function(){return s},zv:function(){return l}});var n="https://api.themoviedb.org/3",a="ca91f553c1d1eddac924c37d8c93fceb",o=function(){return fetch("".concat(n,"/trending/movie/day?api_key=").concat(a)).then((function(e){return e.json()}))},c=function(e){return fetch("".concat(n,"/movie/").concat(e,"?api_key=").concat(a)).then((function(e){return e.json()}))},i=function(e){return fetch("".concat(n,"/search/movie?query=").concat(e,"&api_key=").concat(a)).then((function(e){return e.json()}))},s=function(e){return fetch("".concat(n,"/search/movie").concat(e,"&api_key=").concat(a)).then((function(e){return e.json()}))},l=function(e){return fetch("".concat(n,"/movie/").concat(e,"/credits?api_key=").concat(a)).then((function(e){return e.json()}))},u=function(e){return fetch("".concat(n,"/movie/").concat(e,"/reviews?api_key=").concat(a)).then((function(e){return e.json()}))}}}]);
//# sourceMappingURL=890.30283991.chunk.js.map