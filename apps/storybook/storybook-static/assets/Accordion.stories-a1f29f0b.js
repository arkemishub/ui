import{E as n,j as e}from"./index-c1a7ca2b.js";import{r as c}from"./index-c0014c39.js";import"./_commonjsHelpers-042e6b4d.js";const x={component:n},s=()=>{const[t,o]=c.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(n,{expanded:t,onChange:()=>o(a=>!a),children:[e.jsx(n.Summary,{expandIcon:"^",children:e.jsx("p",{children:"Accordion 1"})}),e.jsx(n.Detail,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsx("hr",{}),e.jsxs(n,{expanded:!1,disabled:!0,onChange:()=>o(a=>!a),children:[e.jsx(n.Summary,{expandIcon:"^",children:e.jsx("p",{children:"Disabled Accordion 3"})}),e.jsx(n.Detail,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})};var d,i,r;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return <div className="flex flex-col gap-4">
      <Accordion expanded={expanded} onChange={() => setExpanded(p => !p)}>
        <Accordion.Summary expandIcon={"^"}>
          <p>Accordion 1</p>
        </Accordion.Summary>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <hr />
      <Accordion expanded={false} disabled onChange={() => setExpanded(p => !p)}>
        <Accordion.Summary expandIcon={"^"}>
          <p>Disabled Accordion 3</p>
        </Accordion.Summary>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </div>;
}`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const u=["Default"];export{s as Default,u as __namedExportsOrder,x as default};
//# sourceMappingURL=Accordion.stories-a1f29f0b.js.map
