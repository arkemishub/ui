"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[750],{7942:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(959);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=m(n),s=r,k=d["".concat(i,".").concat(s)]||d[s]||u[s]||l;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:r,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4656:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(959);function r(t){let{type:e}=t;return a.createElement("span",{style:{borderColor:"variant"===e?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",borderRadius:"8px",borderWidth:"1px",borderStyle:"solid",fontSize:"12px",color:"variant"===e?"var(--ifm-color-primary)":"var(--ifm-color-secondary-dark)",padding:"4px 8px"}},"variant"===e?"Variant":"Element")}},8876:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(959);const r=t=>{let{displayName:e}=t;const[r,l]=a.useState("desc"),o=function(t){const[e,r]=(0,a.useState)(null);return(0,a.useEffect)((()=>{let e=!1;return n.e(54).then(n.t.bind(n,5054,19)).then((n=>{const a=Object.values(n).find((e=>e?.[0]?.displayName===t))?.[0]?.props;e||(e=!0,r(a))})).catch(console.error),()=>{e=!0}}),[t]),e}(e);return console.log(o),a.createElement("table",{className:"table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{onClick:(0,a.useCallback)((()=>{l((t=>"desc"===t?"asc":"desc"))}),[])},"Name"),a.createElement("th",null,"Required"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default Value"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,Object.keys(o||{}).sort(((t,e)=>{const n="desc"===r;return t<e?n?-1:1:t>e?n?1:-1:0})).map((t=>a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,o[t].required||"No"),a.createElement("td",null,a.createElement("code",null,o[t]?.tsType?.raw??o[t]?.tsType?.name)),a.createElement("td",null,o[t].defaultValue?.value),a.createElement("td",null,o[t].description))))))}},8166:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var a=n(1163),r=(n(959),n(7942)),l=n(4656),o=n(8876);const p={hide_table_of_contents:!0},i="Autocomplete",m={unversionedId:"components/autocomplete",id:"components/autocomplete",title:"Autocomplete",description:"Props",source:"@site/docs/components/autocomplete.md",sourceDirName:"components",slug:"/components/autocomplete",permalink:"/ui/docs/components/autocomplete",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/autocomplete.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Alert",permalink:"/ui/docs/components/alert"},next:{title:"Avatar",permalink:"/ui/docs/components/avatar"}},c={},d=[{value:"Props",id:"props",level:3},{value:"CSS",id:"css",level:3}],u={toc:d},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"autocomplete"},"Autocomplete"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.Z,{displayName:"Autocomplete",mdxType:"PropTable"}),(0,r.kt)("h3",{id:"css"},"CSS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__input__container")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete input container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__input__container--mutliple")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{type:"variant",mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to multiple Autocomplete input container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__input__container--error")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{type:"variant",mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete input container with error state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__input")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to  Autocomplete input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__options")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete options list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__option")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete single option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__option--active")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{type:"variant",mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete active option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__startAdornment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete start adornment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__startAdornment__icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete start adornment icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__endAdornment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete end adornment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__end__icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete end adornment icon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".autocomplete__chip")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(l.Z,{mdxType:"Chip"})),(0,r.kt)("td",{parentName:"tr",align:null},"Applied to Autocomplete chips")))))}k.isMDXComponent=!0}}]);