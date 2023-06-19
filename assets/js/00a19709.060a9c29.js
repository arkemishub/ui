"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[351],{7942:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4656:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(959);function a(e){let{type:t}=e;return r.createElement("span",{style:{borderColor:"variant"===t?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",borderRadius:"8px",borderWidth:"1px",borderStyle:"solid",fontSize:"12px",color:"variant"===t?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",padding:"4px 8px"}},"variant"===t?"Variant":"Element")}},8876:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(959);const a=e=>{let{displayName:t}=e;const[a,l]=r.useState("desc"),o=function(e){const[t,a]=(0,r.useState)(null);return(0,r.useEffect)((()=>{let t=!1;return n.e(54).then(n.t.bind(n,5054,19)).then((n=>{const r=Object.values(n).find((t=>t?.[0]?.displayName===e))?.[0]?.props;t||(t=!0,a(r))})).catch(console.error),()=>{t=!0}}),[e]),t}(t);return console.log(o),r.createElement("table",{className:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{onClick:(0,r.useCallback)((()=>{l((e=>"desc"===e?"asc":"desc"))}),[])},"Name"),r.createElement("th",null,"Required"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default Value"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(o||{}).sort(((e,t)=>{const n="desc"===a;return e<t?n?-1:1:e>t?n?1:-1:0})).map((e=>r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,o[e].required||"No"),r.createElement("td",null,r.createElement("code",null,o[e]?.tsType?.raw??o[e]?.tsType?.name)),r.createElement("td",null,o[e].defaultValue?.value),r.createElement("td",null,o[e].description))))))}},6479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var r=n(1163),a=(n(959),n(7942)),l=n(4656),o=n(8876);const c={hide_table_of_contents:!0},i="Tabs",p={unversionedId:"components/tabs",id:"components/tabs",title:"Tabs",description:"Props",source:"@site/docs/components/tabs.md",sourceDirName:"components",slug:"/components/tabs",permalink:"/ui/docs/components/tabs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/tabs.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Switch",permalink:"/ui/docs/components/switch"},next:{title:"TextArea",permalink:"/ui/docs/components/textarea"}},s={},d=[{value:"Props",id:"props",level:3},{value:"CSS",id:"css",level:3}],u={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tabs"},"Tabs"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(o.Z,{displayName:"Tabs",mdxType:"PropTable"}),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Class Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".tabs__list")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Tabs container")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".tab")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Tab")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".tab--selected")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{type:"variant",mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to selected Tab")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".tab__panel")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Tab Panel")))))}b.isMDXComponent=!0}}]);