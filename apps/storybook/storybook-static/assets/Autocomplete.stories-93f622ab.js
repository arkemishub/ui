import{n as d,j as n}from"./index-c1a7ca2b.js";import{r as g}from"./index-c0014c39.js";import"./_commonjsHelpers-042e6b4d.js";const{useArgs:i}=__STORYBOOK_MODULE_CLIENT_API__,v=[{id:1,name:"Marketing",contact:"Durward Reynolds"},{id:2,name:"HR",contact:"Kenton Towne"},{id:3,name:"Sales",contact:"Therese Wunsch"},{id:4,name:"Finance",contact:"Benedict Kessler"},{id:5,name:"Customer service",contact:"Katelyn Rohan"}],K={component:d},m=t=>{const[{value:r,values:s=v},l]=i(),[o,u]=g.useState(""),a=e=>l({value:e}),c=s.filter(e=>e.name.toLowerCase().includes(o));return n.jsx(d,{...t,value:r,values:c,onInputChange:e=>u(e.target.value),onChange:a,renderValue:e=>e==null?void 0:e.name,placeholder:"Search..."})},p=t=>{const[{value:r,values:s=v},l]=i(),[o,u]=g.useState(""),a=e=>l({value:e}),c=s.filter(e=>e.name.toLowerCase().includes(o));return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>a(null),children:"reset"}),n.jsx(d,{...t,nullable:!0,value:r,values:c,onInputChange:e=>{u(e.target.value)},onChange:a,renderValue:e=>e==null?void 0:e.name,placeholder:"Search..."})]})},C=t=>{const[{value:r,values:s=v},l]=i(),[o,u]=g.useState(""),a=e=>l({value:e}),c=s.filter(e=>e.name.toLowerCase().includes(o));return n.jsx(d,{...t,nullable:!0,clearable:!0,value:r,values:c,onInputChange:e=>{u(e.target.value)},onChange:a,renderValue:e=>e==null?void 0:e.name,placeholder:"Search..."})},S=t=>{const[{value:r,values:s=v},l]=i(),[o,u]=g.useState(""),a=e=>{l({value:e})},c=s.filter(e=>e.name.toLowerCase().includes(o));return n.jsx(d,{...t,label:"Select an item",value:r,nullable:!0,clearable:!0,values:c,onInputChange:e=>u(e.target.value),onChange:a,multiple:!0,placeholder:"Search..."})},w=t=>{const[{value:r,values:s=v},l]=i(),[o,u]=g.useState(""),a=h=>l({value:h}),c=s.filter(h=>h.name.toLowerCase().includes(o)),e=()=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"h-4 w-4",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"})}),O=()=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"h-4 w-4",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"})});return n.jsx(d,{...t,value:r,values:c,onInputChange:h=>u(h.target.value),onChange:a,startAdornment:n.jsx(e,{}),endAdornment:n.jsx(O,{}),placeholder:"Search..."})};var f,A,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`(args: Story["args"]) => {
  const [{
    value,
    values = departments
  }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");
  const handleChange = (val: unknown) => updateArgs({
    value: val
  });
  const filteredValues = values.filter((v: {
    name: string;
  }) => v.name.toLowerCase().includes(search));
  return (
    //   @ts-ignore
    <Autocomplete {...args} value={value} values={filteredValues} onInputChange={e => setSearch(e.target.value)} onChange={handleChange} renderValue={val => val?.name} placeholder="Search..." />
  );
}`,...(x=(A=m.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var L,k,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`(args: Story["args"]) => {
  const [{
    value,
    values = departments
  }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");
  const handleChange = (val: unknown) => updateArgs({
    value: val
  });
  const filteredValues = values.filter((v: {
    name: string;
  }) => v.name.toLowerCase().includes(search));
  return <>
      <button onClick={() => handleChange(null)}>reset</button>
      <Autocomplete {...args} nullable value={value} values={filteredValues} onInputChange={e => {
      setSearch(e.target.value);
    }} onChange={handleChange} renderValue={val => val?.name} placeholder="Search..." />
    </>;
}`,...(V=(k=p.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var I,b,j;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`(args: Story["args"]) => {
  const [{
    value,
    values = departments
  }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");
  const handleChange = (val: unknown) => updateArgs({
    value: val
  });
  const filteredValues = values.filter((v: {
    name: string;
  }) => v.name.toLowerCase().includes(search));
  return <Autocomplete {...args} nullable clearable value={value} values={filteredValues} onInputChange={e => {
    setSearch(e.target.value);
  }} onChange={handleChange} renderValue={val => val?.name} placeholder="Search..." />;
}`,...(j=(b=C.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var M,_,E;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`(args: Story["args"]) => {
  const [{
    value,
    values = departments
  }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");
  const handleChange = (val: unknown) => {
    updateArgs({
      value: val
    });
  };
  const filteredValues = values.filter((v: {
    name: string;
  }) => v.name.toLowerCase().includes(search));
  return (
    //   @ts-ignore
    <Autocomplete {...args} label="Select an item" value={value} nullable clearable values={filteredValues} onInputChange={e => setSearch(e.target.value)} onChange={handleChange} multiple placeholder="Search..." />
  );
}`,...(E=(_=S.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var y,N,B;w.parameters={...w.parameters,docs:{...(y=w.parameters)==null?void 0:y.docs,source:{originalSource:`(args: Story["args"]) => {
  const [{
    value,
    values = departments
  }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");
  const handleChange = (val: unknown) => updateArgs({
    value: val
  });
  const filteredValues = values.filter((v: {
    name: string;
  }) => v.name.toLowerCase().includes(search));
  const StartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>;
  const EndIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>;
  return (
    //   @ts-ignore
    <Autocomplete {...args} value={value} values={filteredValues} onInputChange={e => setSearch(e.target.value)} onChange={handleChange} startAdornment={<StartIcon />} endAdornment={<EndIcon />} placeholder="Search..." />
  );
}`,...(B=(N=w.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const T=["Default","Nullable","Clearable","Multiple","Icons"];export{C as Clearable,m as Default,w as Icons,S as Multiple,p as Nullable,T as __namedExportsOrder,K as default};
//# sourceMappingURL=Autocomplete.stories-93f622ab.js.map
