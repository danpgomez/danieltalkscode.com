"use strict";(self.webpackChunkdaniel_talks_code=self.webpackChunkdaniel_talks_code||[]).push([[847],{978:function(e,A,t){t.d(A,{G:function(){return T},L:function(){return M},M:function(){return z},P:function(){return f},S:function(){return P},_:function(){return s},a:function(){return i},b:function(){return o},c:function(){return l},g:function(){return u},h:function(){return c}});var a=t(6540),n=(t(2729),t(5556)),r=t.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var A=1;A<arguments.length;A++){var t=arguments[A];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function s(e,A){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)A.indexOf(t=r[a])>=0||(n[t]=e[t]);return n}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const l=e=>{var A;return(e=>{var A,t;return Boolean(null==e||null==(A=e.images)||null==(t=A.fallback)?void 0:t.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(A=e.childImageSharp)?void 0:A.gatsbyImageData};function o(e,A,t,a,n){return void 0===n&&(n={}),i({},t,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:A?1:0})})}function u(e,A,t,a,n,r,s,c){const l={};r&&(l.backgroundColor=r,"fixed"===t?(l.width=a,l.height=n,l.backgroundColor=r,l.position="relative"):("constrained"===t||"fullWidth"===t)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const o=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:A?0:1,transition:"opacity 500ms linear"},l)});return o}const g=["children"],d=function(e){let{layout:A,width:t,height:n}=e;return"fullWidth"===A?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/t*100+"%"}}):"constrained"===A?a.createElement("div",{style:{maxWidth:t,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${n}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},M=function(e){let{children:A}=e,t=s(e,g);return a.createElement(a.Fragment,null,a.createElement(d,i({},t)),A,null)},N=["src","srcSet","loading","alt","shouldLoad"],w=["fallback","sources","shouldLoad"],D=function(e){let{src:A,srcSet:t,loading:n,alt:r="",shouldLoad:c}=e,l=s(e,N);return a.createElement("img",i({},l,{decoding:"async",loading:n,src:c?A:void 0,"data-src":c?void 0:A,srcSet:c?t:void 0,"data-srcset":c?void 0:t,alt:r}))},y=function(e){let{fallback:A,sources:t=[],shouldLoad:n=!0}=e,r=s(e,w);const c=r.sizes||(null==A?void 0:A.sizes),l=a.createElement(D,i({},r,A,{sizes:c,shouldLoad:n}));return t.length?a.createElement("picture",null,t.map((e=>{let{media:A,srcSet:t,type:r}=e;return a.createElement("source",{key:`${A}-${r}-${t}`,type:r,media:A,srcSet:n?t:void 0,"data-srcset":n?void 0:t,sizes:c})})),l):l};var j;D.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const m=["fallback"],f=function(e){let{fallback:A}=e,t=s(e,m);return A?a.createElement(y,i({},t,{fallback:{src:A},"aria-hidden":!0,alt:""})):a.createElement("div",i({},t))};f.displayName="Placeholder",f.propTypes={fallback:n.string,sources:null==(j=y.propTypes)?void 0:j.sources,alt:function(e,A,t){return e[A]?new Error(`Invalid prop \`${A}\` supplied to \`${t}\`. Validation failed.`):null}};const z=function(e){return a.createElement(a.Fragment,null,a.createElement(y,i({},e)),a.createElement("noscript",null,a.createElement(y,i({},e,{shouldLoad:!0}))))};z.displayName="MainImage",z.propTypes=y.propTypes;const v=function(e,A,t){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?r().string.apply(r(),[e,A,t].concat(n)):new Error(`The "alt" prop is required in ${t}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},p={image:r().object.isRequired,alt:v},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],b=["style","className"],C=new Set;let h,L;const E=function(e){let{as:A="div",image:n,style:r,backgroundColor:l,className:o,class:u,onStartLoad:g,onLoad:d,onError:M}=e,N=s(e,I);const{width:w,height:D,layout:y}=n,j=function(e,A,t){const a={};let n="gatsby-image-wrapper";return"fixed"===t?(a.width=e,a.height=A):"constrained"===t&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(w,D,y),{style:m,className:f}=j,z=s(j,b),v=(0,a.useRef)(),p=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(o=u);const E=function(e,A,t){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${t/A*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${A}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${t}' width='${A}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(y,w,D);return(0,a.useEffect)((()=>{h||(h=Promise.all([t.e(593),t.e(896)]).then(t.bind(t,7896)).then((e=>{let{renderImageToString:A,swapPlaceholderImage:t}=e;return L=A,{renderImageToString:A,swapPlaceholderImage:t}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==g||g({wasCached:!0}),null==d||d({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function A(){e.removeEventListener("load",A),null==d||d({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void C.add(p);if(L&&C.has(p))return;let A,a;return h.then((e=>{let{renderImageToString:t,swapPlaceholderImage:s}=e;v.current&&(v.current.innerHTML=t(i({isLoading:!0,isLoaded:C.has(p),image:n},N)),C.has(p)||(A=requestAnimationFrame((()=>{v.current&&(a=s(v.current,p,C,r,g,d,M))}))))})),()=>{A&&cancelAnimationFrame(A),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{C.has(p)&&L&&(v.current.innerHTML=L(i({isLoading:C.has(p),isLoaded:C.has(p),image:n},N)),null==g||g({wasCached:!0}),null==d||d({wasCached:!0}))}),[n]),(0,a.createElement)(A,i({},z,{style:i({},m,r,{backgroundColor:l}),className:`${f}${o?` ${o}`:""}`,ref:v,dangerouslySetInnerHTML:{__html:E},suppressHydrationWarning:!0}))},T=(0,a.memo)((function(e){return e.image?(0,a.createElement)(E,e):null}));T.propTypes=p,T.displayName="GatsbyImage";const Q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],x=function(e,A){for(var t=arguments.length,a=new Array(t>2?t-2:0),n=2;n<t;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==A&&"height"!==A||!e[A]?r().number.apply(r(),[e,A].concat(a)):new Error(`"${A}" ${e[A]} may not be passed when layout is fullWidth.`)},O=new Set(["fixed","fullWidth","constrained"]),B={src:r().string.isRequired,alt:v,width:x,height:x,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},P=(k=T,function(e){let{src:A,__imageData:t,__error:n}=e,r=s(e,Q);return n&&console.warn(n),t?a.createElement(k,i({image:t},r)):(console.warn("Image not loaded",A),null)});var k;P.displayName="StaticImage",P.propTypes=B},2729:function(e){const A=(e,A)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");A=Object.assign({pascalCase:!1},A);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return A.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let A=!1,t=!1,a=!1;for(let n=0;n<e.length;n++){const r=e[n];A&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,n)+"-"+e.slice(n),A=!1,a=t,t=!0,n++):t&&a&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=t,t=!1,A=!0):(A=r.toLowerCase()===r&&r.toUpperCase()!==r,a=t,t=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,A)=>A.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),t=e,A.pascalCase?t.charAt(0).toUpperCase()+t.slice(1):t;var t};e.exports=A,e.exports.default=A},4967:function(e,A,t){var a=t(6540),n=t(8007),r=t(978);A.A=()=>{var e,A;const i=(0,n.useStaticQuery)("3916629824"),s=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(A=i.site.siteMetadata)||void 0===A?void 0:A.social;return a.createElement("div",{className:"bio"},a.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:t(5897)}),(null==s?void 0:s.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," "," Follow me on "," ",a.createElement("a",{href:`https://bsky.app/profile/${(null==c?void 0:c.bluesky)||""}`},"Bluesky"),","," ",a.createElement("a",{href:`https://mastodon.social/${(null==c?void 0:c.mastodon)||""}`},"Mastodon"),","," ",a.createElement("a",{href:`https://github.com/${(null==c?void 0:c.github)||""}`},"GitHub"),", and "," ",a.createElement("a",{href:`https://youtube.com/${(null==c?void 0:c.youtube)||""}`},"YouTube")))}},5005:function(e,A,t){t.d(A,{A:function(){return s}});var a=t(6540),n=t(8007);const r=[{url:"https://bsky.app/profile/danieltalkscode.bsky.social",label:"Bluesky",icon:t.p+"static/Bluesky_Logo.svg-bccc250635755c8cf1f39e7ed08a01dd.png"},{url:"https://mastodon.social/@danpgomez",label:"Mastodon",icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNzkiIHZpZXdCb3g9IjAgMCA3NSA3OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTczLjgzOTMgMTcuNDg5OEM3Mi42OTczIDkuMDAxNjUgNjUuMjk5NCAyLjMxMjM1IDU2LjUyOTYgMS4wMTYxNEM1NS4wNSAwLjc5NzExNSA0OS40NDQxIDAgMzYuNDU4MiAwSDM2LjM2MTJDMjMuMzcxNyAwIDIwLjU4NSAwLjc5NzExNSAxOS4xMDU0IDEuMDE2MTRDMTAuNTc5OCAyLjI3NjQ0IDIuNzkzOTkgOC4yODcxMiAwLjkwNDk5NyAxNi44NzU4Qy0wLjAwMzU4NTI0IDIxLjEwNTYgLTAuMTAwNTQ5IDI1Ljc5NDkgMC4wNjgyMzk0IDMwLjA5NjVDMC4zMDg4NTIgMzYuMjY1MSAwLjM1NTUzOCA0Mi40MjMgMC45MTU3NyA0OC41NjY1QzEuMzAzMDcgNTIuNjQ3NCAxLjk3ODcyIDU2LjY5NTcgMi45Mzc2MyA2MC42ODEyQzQuNzMzMjUgNjguMDQyIDEyLjAwMTkgNzQuMTY3NiAxOS4xMjMzIDc2LjY2NjZDMjYuNzQ3OCA3OS4yNzI4IDM0Ljk0NzQgNzkuNzA1NSA0Mi44MDM5IDc3LjkxNjJDNDMuNjY4MiA3Ny43MTUxIDQ0LjUyMTcgNzcuNDgxNyA0NS4zNjQ1IDc3LjIxNkM0Ny4yNzUgNzYuNjA5MiA0OS41MTIzIDc1LjkzMDUgNTEuMTU3MSA3NC43Mzg1QzUxLjE3OTcgNzQuNzIxNyA1MS4xOTgyIDc0LjcwMDEgNTEuMjExMiA3NC42NzUzQzUxLjIyNDMgNzQuNjUwNCA1MS4yMzE2IDc0LjYyMjkgNTEuMjMyNSA3NC41OTQ4VjY4LjY0MTZDNTEuMjMyMSA2OC42MTU0IDUxLjIyNTkgNjguNTg5NiA1MS4yMTQyIDY4LjU2NjFDNTEuMjAyNSA2OC41NDI2IDUxLjE4NTggNjguNTIyIDUxLjE2NTEgNjguNTA1OEM1MS4xNDQ0IDY4LjQ4OTYgNTEuMTIwNCA2OC40NzgzIDUxLjA5NDggNjguNDcyNkM1MS4wNjkyIDY4LjQ2NjkgNTEuMDQyNiA2OC40NjcgNTEuMDE3MSA2OC40NzI5QzQ1Ljk4MzUgNjkuNjc1IDQwLjgyNTQgNzAuMjc3NyAzNS42NTAyIDcwLjI2ODJDMjYuNzQzOSA3MC4yNjgyIDI0LjM0ODYgNjYuMDQyIDIzLjY2MjYgNjQuMjgyNkMyMy4xMTEzIDYyLjc2MiAyMi43NjEyIDYxLjE3NTkgMjIuNjIxMiA1OS41NjQ2QzIyLjYxOTcgNTkuNTM3NSAyMi42MjQ3IDU5LjUxMDUgMjIuNjM1NyA1OS40ODU3QzIyLjY0NjYgNTkuNDYwOSAyMi42NjMzIDU5LjQzOTEgMjIuNjg0MyA1OS40MjJDMjIuNzA1MyA1OS40MDQ4IDIyLjczIDU5LjM5MjkgMjIuNzU2NSA1OS4zODcxQzIyLjc4MyA1OS4zODEzIDIyLjgxMDQgNTkuMzgxOCAyMi44MzY3IDU5LjM4ODZDMjcuNzg2NCA2MC41ODI2IDMyLjg2MDQgNjEuMTg1MyAzNy45NTIyIDYxLjE4MzlDMzkuMTc2OCA2MS4xODM5IDQwLjM5NzggNjEuMTgzOSA0MS42MjI0IDYxLjE1MTZDNDYuNzQzNSA2MS4wMDggNTIuMTQxMSA2MC43NDU5IDU3LjE3OTYgNTkuNzYyMUM1Ny4zMDUzIDU5LjczNjkgNTcuNDMxIDU5LjcxNTQgNTcuNTM4NyA1OS42ODMxQzY1LjQ4NjEgNTguMTU3IDczLjA0OTMgNTMuMzY3MiA3My44MTc4IDQxLjIzODFDNzMuODQ2NSA0MC43NjA2IDczLjkxODQgMzYuMjM2NCA3My45MTg0IDM1Ljc0MDlDNzMuOTIxOSAzNC4wNTY5IDc0LjQ2MDYgMjMuNzk0OSA3My44MzkzIDE3LjQ4OThaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTQ5XzM0KSIvPgo8cGF0aCBkPSJNNjEuMjQ4NCAyNy4wMjYzVjQ4LjExNEg1Mi44OTE2VjI3LjY0NzVDNTIuODkxNiAyMy4zMzg4IDUxLjA5NiAyMS4xNDEzIDQ3LjQ0MzcgMjEuMTQxM0M0My40Mjg3IDIxLjE0MTMgNDEuNDE3NyAyMy43NDA5IDQxLjQxNzcgMjguODc1NVY0MC4wNzgySDMzLjExMTFWMjguODc1NUMzMy4xMTExIDIzLjc0MDkgMzEuMDk2NSAyMS4xNDEzIDI3LjA4MTUgMjEuMTQxM0MyMy40NTA3IDIxLjE0MTMgMjEuNjM3MSAyMy4zMzg4IDIxLjYzNzEgMjcuNjQ3NVY0OC4xMTRIMTMuMjgzOVYyNy4wMjYzQzEzLjI4MzkgMjIuNzE3NiAxNC4zODQgMTkuMjk0NiAxNi41ODQzIDE2Ljc1NzJDMTguODUzOSAxNC4yMjU4IDIxLjgzMTEgMTIuOTI2IDI1LjUyNjQgMTIuOTI2QzI5LjgwMzYgMTIuOTI2IDMzLjAzNTcgMTQuNTcwNSAzNS4xOTA1IDE3Ljg1NTlMMzcuMjY5OCAyMS4zNDZMMzkuMzUyNyAxNy44NTU5QzQxLjUwNzQgMTQuNTcwNSA0NC43Mzk1IDEyLjkyNiA0OS4wMDk1IDEyLjkyNkM1Mi43MDEzIDEyLjkyNiA1NS42Nzg0IDE0LjIyNTggNTcuOTU1MyAxNi43NTcyQzYwLjE1MzEgMTkuMjkyMiA2MS4yNTA4IDIyLjcxNTIgNjEuMjQ4NCAyNy4wMjYzWiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81NDlfMzQiIHgxPSIzNy4wNjkyIiB5MT0iMCIgeDI9IjM3LjA2OTIiIHkyPSI3OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjM2NEZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2M0FDQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="},{url:"https://www.youtube.com/@danieltalkscode",label:"YouTube",icon:"data:image/png;base64,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"},{url:"https://github.com/danpgomez/",label:"GitHub",icon:t.p+"static/github-logo-363cb5edea582a89c41f692c6836393e.png"}],i=()=>a.createElement("footer",{className:"footer"},a.createElement("section",null,a.createElement("span",null,"© Daniel Perez-Gomez ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")),a.createElement("nav",null,r.map((e=>a.createElement("a",{href:e.url,title:e.label,target:"_blank",rel:"noopener noreferrer",key:e.url},a.createElement("span",null,e.label),a.createElement("img",{src:e.icon,alt:e.label})))))));var s=e=>{let{location:A,title:t,children:r}=e;const s="/"===A.pathname;let c;return c=s?a.createElement("h1",{className:"main-heading"},a.createElement(n.Link,{to:"/"},t)):a.createElement(n.Link,{className:"header-link-home",to:"/"},t),a.createElement("div",{className:"global-wrapper","data-is-root-path":s},a.createElement("header",{className:"global-header"},c),a.createElement("main",null,r),a.createElement(i,null))}},5897:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#184878","images":{"fallback":{"src":"/static/bfc0d0584a51a5b9a8fe9d39cfd5685a/e5610/profile-pic.png","srcSet":"/static/bfc0d0584a51a5b9a8fe9d39cfd5685a/e5610/profile-pic.png 50w,\\n/static/bfc0d0584a51a5b9a8fe9d39cfd5685a/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/bfc0d0584a51a5b9a8fe9d39cfd5685a/d4bf4/profile-pic.avif 50w,\\n/static/bfc0d0584a51a5b9a8fe9d39cfd5685a/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/bfc0d0584a51a5b9a8fe9d39cfd5685a/3faea/profile-pic.webp 50w,\\n/static/bfc0d0584a51a5b9a8fe9d39cfd5685a/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},7528:function(e,A,t){var a=t(6540),n=t(8007);const r=e=>{var A,t,r;let{description:i,lang:s,title:c,children:l}=e;const{site:o}=(0,n.useStaticQuery)("2841359383"),u=i||o.siteMetadata.description,g=null===(A=o.siteMetadata)||void 0===A?void 0:A.title;return a.createElement(a.Fragment,null,a.createElement("title",null,g?`${c} | ${g}`:c),a.createElement("meta",{name:"description",content:u}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:u}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(t=o.siteMetadata)||void 0===t||null===(r=t.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:u}),l)};r.defaultProps={description:""},A.A=r}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-ff469fb35fcd880851b6.js.map