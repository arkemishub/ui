"use client";

import Preview from "@/components/Preview";
import PropsSpec from "@/components/PropsSpec";
import CSSSpec from "@/components/CSSSpec";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Chip, Tabs } from "@arkejs/ui";

const components = {
  Preview,
  Tabs,
  Chip,
  PropsSpec,
  CSSSpec,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="section__heading" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="docs__table">
      <table {...props} />
    </div>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="docs__paragraph" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className="docs__link" {...props} />
  ),
};

function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}

export default Mdx;
