import{w as a,j as n}from"./index-c1a7ca2b.js";import{r}from"./index-c0014c39.js";import"./_commonjsHelpers-042e6b4d.js";var K={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const L=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=(t,s)=>{const e=r.forwardRef(({color:l="currentColor",size:m=24,strokeWidth:S=2,absoluteStrokeWidth:W,children:h,...D},E)=>r.createElement("svg",{ref:E,...K,width:m,height:m,stroke:l,strokeWidth:W?Number(S)*24/Number(m):S,className:`lucide lucide-${L(t)}`,...D},[...s.map(([R,q])=>r.createElement(R,q)),...(Array.isArray(h)?h:[h])||[]]));return e.displayName=`${t}`,e},$=A("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]),I=A("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]),o=[{id:1,name:"Marketing",contact:"Durward Reynolds"},{id:2,name:"HR",contact:"Kenton Towne"},{id:3,name:"Sales",contact:"Therese Wunsch"},{id:4,name:"Finance",contact:"Benedict Kessler"},{id:5,name:"Customer service",contact:"Katelyn Rohan"}],z={component:a},c=()=>{var e;const[t,s]=r.useState(null);return n.jsxs(a,{onChange:s,label:"test",helperText:"test",placeholder:"test",value:t,children:[n.jsx(a.Button,{children:(e=o.find(l=>l.id==t))==null?void 0:e.name}),n.jsx(a.Options,{children:o.map(l=>n.jsx(a.Option,{value:l.id,children:l.name},l.id))})]})},i=()=>{const[t,s]=r.useState(null);return n.jsxs(a,{onChange:s,label:"test",helperText:"test",placeholder:"test",value:t,children:[n.jsx(a.Button,{children:t==null?void 0:t.name}),n.jsx(a.Options,{children:o.map(e=>n.jsx(a.Option,{value:e,children:e.name},e.id))})]})},p=()=>{const[t,s]=r.useState([]);return n.jsxs(a,{onChange:e=>s(e),label:"test",helperText:"test",placeholder:"test",multiple:!0,value:t,children:[n.jsx(a.Button,{children:o.filter(e=>t==null?void 0:t.includes(e.id)).map(e=>e.name).join(", ")}),n.jsx(a.Options,{children:o.map(e=>n.jsx(a.Option,{value:e.id,children:e.name},e.id))})]})},u=()=>{const[t,s]=r.useState([]);return n.jsxs(a,{onChange:e=>s(e),label:"test",helperText:"test",placeholder:"test",multiple:!0,value:t,children:[n.jsx(a.Button,{children:t.map(e=>e.name).join(", ")}),n.jsx(a.Options,{children:o.map(e=>n.jsx(a.Option,{value:e,children:e.name},e.id))})]})},d=()=>{var e;const[t,s]=r.useState(null);return n.jsxs(a,{onChange:s,label:"test",helperText:"test",placeholder:"test",startAdornment:n.jsx($,{}),endAdornment:n.jsx(I,{}),value:t,children:[n.jsx(a.Button,{children:(e=o.find(l=>l.id==t))==null?void 0:e.name}),n.jsx(a.Options,{children:o.map(l=>n.jsx(a.Option,{value:l.id,children:l.name},l.id))})]})};var v,x,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number | null>(null);
  return <Select onChange={setValue} label="test" helperText="test" placeholder="test" value={value}>
      <Select.Button>
        {departments.find(item => item.id == value)?.name}
      </Select.Button>
      <Select.Options>
        {departments.map(dpt => <Select.Option key={dpt.id} value={dpt.id}>
            {dpt.name}
          </Select.Option>)}
      </Select.Options>
    </Select>;
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var j,k,g;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Department | null>(null);
  return <Select onChange={setValue} label="test" helperText="test" placeholder="test" value={value}>
      <Select.Button>{value?.name}</Select.Button>
      <Select.Options>
        {departments.map(dpt => <Select.Option key={dpt.id} value={dpt}>
            {dpt.name}
          </Select.Option>)}
      </Select.Options>
    </Select>;
}`,...(g=(k=i.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var y,b,f;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number[]>([]);
  return <Select onChange={value => setValue(value)} label="test" helperText="test" placeholder="test" multiple value={value}>
      <Select.Button>
        {departments.filter(item => value?.includes(item.id)).map(item => item.name).join(", ")}
      </Select.Button>
      <Select.Options>
        {departments.map(dpt => <Select.Option key={dpt.id} value={dpt.id}>
            {dpt.name}
          </Select.Option>)}
      </Select.Options>
    </Select>;
}`,...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var B,M,w;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Department[]>([]);
  return <Select onChange={v => setValue(v)} label="test" helperText="test" placeholder="test" multiple value={value}>
      <Select.Button>{value.map(item => item.name).join(", ")}</Select.Button>
      <Select.Options>
        {departments.map(dpt => <Select.Option key={dpt.id} value={dpt}>
            {dpt.name}
          </Select.Option>)}
      </Select.Options>
    </Select>;
}`,...(w=(M=u.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var C,V,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number | null>(null);
  return <Select onChange={setValue} label="test" helperText="test" placeholder="test" startAdornment={<BuildingIcon />} endAdornment={<ShipIcon />} value={value}>
      <Select.Button>
        {departments.find(item => item.id == value)?.name}
      </Select.Button>
      <Select.Options>
        {departments.map(dpt => <Select.Option key={dpt.id} value={dpt.id}>
            {dpt.name}
          </Select.Option>)}
      </Select.Options>
    </Select>;
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const F=["Default","WithObject","Multiple","MultipleObjects","WithAdornments"];export{c as Default,p as Multiple,u as MultipleObjects,d as WithAdornments,i as WithObject,F as __namedExportsOrder,z as default};
//# sourceMappingURL=Select.stories-75bed1b0.js.map
