"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[369],{7942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(i,".").concat(u)]||m[u]||s[u]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4656:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(959);function a(e){let{type:t}=e;return r.createElement("span",{style:{borderColor:"variant"===t?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",borderRadius:"8px",borderWidth:"1px",borderStyle:"solid",fontSize:"12px",color:"variant"===t?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",padding:"4px 8px"}},"variant"===t?"Variant":"Element")}},8876:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(959);const a=e=>{let{displayName:t}=e;const[a,l]=r.useState("desc"),o=function(e){const[t,a]=(0,r.useState)(null);return(0,r.useEffect)((()=>{let t=!1;return n.e(54).then(n.t.bind(n,5054,19)).then((n=>{const r=Object.values(n).find((t=>t?.[0]?.displayName===e))?.[0]?.props;t||(t=!0,a(r))})).catch(console.error),()=>{t=!0}}),[e]),t}(t);return console.log(o),r.createElement("table",{className:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{onClick:(0,r.useCallback)((()=>{l((e=>"desc"===e?"asc":"desc"))}),[])},"Name"),r.createElement("th",null,"Required"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default Value"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(o||{}).sort(((e,t)=>{const n="desc"===a;return e<t?n?-1:1:e>t?n?1:-1:0})).map((e=>r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,o[e].required||"No"),r.createElement("td",null,r.createElement("code",null,o[e]?.tsType?.raw??o[e]?.tsType?.name)),r.createElement("td",null,o[e].defaultValue?.value),r.createElement("td",null,o[e].description))))))}},9974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=n(1163),a=(n(959),n(7942)),l=n(4656),o=n(8876);const p={hide_table_of_contents:!0},i="Select",c={unversionedId:"components/select",id:"components/select",title:"Select",description:"Props",source:"@site/docs/components/select.md",sourceDirName:"components",slug:"/components/select",permalink:"/ui/docs/components/select",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/select.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"RadioGroup",permalink:"/ui/docs/components/radioGroup"},next:{title:"Skeleton",permalink:"/ui/docs/components/skeleton"}},d={},m=[{value:"Props",id:"props",level:3},{value:"CSS",id:"css",level:3}],s={toc:m},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},"Select"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(o.Z,{displayName:"Select",mdxType:"PropTable"}),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Class Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__input")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select input")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__options")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select options list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__option")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select single option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__option--active")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{type:"variant",mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select active option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__startAdornment")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select start adornment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__startAdornment__icon")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select start adornment icon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__endAdornment")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select end adornment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".select__endAdornment__icon")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.Z,{mdxType:"Chip"})),(0,a.kt)("td",{parentName:"tr",align:null},"Applied to Select end adornment icon")))))}k.isMDXComponent=!0}}]);