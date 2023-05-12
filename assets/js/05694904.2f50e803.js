"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[950],{7942:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4656:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(959);function a(e){let{type:t}=e;return n.createElement("span",{style:{borderColor:"variant"===t?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",borderRadius:"8px",borderWidth:"1px",borderStyle:"solid",fontSize:"12px",color:"variant"===t?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",padding:"4px 8px"}},"variant"===t?"Variant":"Element")}},8876:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(959);const a=e=>{let{displayName:t}=e;const[a,l]=n.useState("desc"),o=function(e){const[t,a]=(0,n.useState)(null);return(0,n.useEffect)((()=>{let t=!1;return r.e(54).then(r.t.bind(r,5054,19)).then((r=>{const n=Object.values(r).find((t=>t?.[0]?.displayName===e))?.[0]?.props;t||(t=!0,a(n))})).catch(console.error),()=>{t=!0}}),[e]),t}(t);return console.log(o),n.createElement("table",{className:"table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{onClick:(0,n.useCallback)((()=>{l((e=>"desc"===e?"asc":"desc"))}),[])},"Name"),n.createElement("th",null,"Required"),n.createElement("th",null,"Type"),n.createElement("th",null,"Default Value"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,Object.keys(o||{}).sort(((e,t)=>{const r="desc"===a;return e<t?r?-1:1:e>t?r?1:-1:0})).map((e=>n.createElement("tr",{key:e},n.createElement("td",null,n.createElement("code",null,e)),n.createElement("td",null,o[e].required||"No"),n.createElement("td",null,n.createElement("code",null,o[e]?.tsType?.raw??o[e]?.tsType?.name)),n.createElement("td",null,o[e].defaultValue?.value),n.createElement("td",null,o[e].description))))))}},5218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(1163),a=(r(959),r(7942)),l=r(4656),o=r(8876);const c={hide_table_of_contents:!0},i="TextArea",p={unversionedId:"components/textarea",id:"components/textarea",title:"TextArea",description:"Props",source:"@site/docs/components/textarea.md",sourceDirName:"components",slug:"/components/textarea",permalink:"/ui/docs/components/textarea",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/textarea.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Tabs",permalink:"/ui/docs/components/tabs"}},s={},u=[{value:"Props",id:"props",level:3},{value:"CSS",id:"css",level:3}],d={toc:u},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"textarea"},"TextArea"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(o.Z,{displayName:"TextArea",mdxType:"PropTable"}),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Class Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".textarea")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"TextArea")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".textarea__label")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{type:"variant",mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"TextArea with ",(0,a.kt)("inlineCode",{parentName:"td"},"label")," accent")))))}f.isMDXComponent=!0}}]);