import{t as u,j as e,a}from"./index-c1a7ca2b.js";import{r as c}from"./index-c0014c39.js";import"./_commonjsHelpers-042e6b4d.js";const f={component:u},r=n=>{const[d,i]=c.useState("");return e.jsxs(u,{...n,name:"numbers",value:d,onChange:t=>i(t?t.target.value:""),children:[e.jsx(a,{value:"first",label:"first"}),e.jsx(a,{value:"second",label:"second"}),e.jsx(a,{value:"third",label:"third"}),e.jsx(a,{value:"fourth",label:"fourth"})]})};var s,o,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: Story["args"]) => {
  const [value, setValue] = useState("");
  return <RadioGroup {...args} name={"numbers"} value={value} onChange={e => setValue(e ? e.target.value : "")}>
      <Radio value="first" label="first" />
      <Radio value="second" label="second" />
      <Radio value="third" label="third" />
      <Radio value="fourth" label="fourth" />
    </RadioGroup>;
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["Default"];export{r as Default,h as __namedExportsOrder,f as default};
//# sourceMappingURL=RadioGroup.stories-9d3976d8.js.map
