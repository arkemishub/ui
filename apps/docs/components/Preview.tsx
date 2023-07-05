"use client";

import React, { PropsWithChildren } from "react";
import { Tabs } from "@arkejs/ui";
import components from "@/config/components";
import { notFound } from "next/navigation";

function Preview({
  name,
  children,
}: PropsWithChildren<{
  name: string;
}>) {
  const Component = components.find((item) => item.name === name)?.component;

  if (!Component) {
    return notFound();
  }

  return (
    <>
      <Tabs className="docs__tabs__list">
        <Tabs.Tab>Preview</Tabs.Tab>
        <Tabs.Tab>Code</Tabs.Tab>
        <Tabs.TabPanel>
          <div className="rounded-theme bg-background-400 flex h-[400px] flex-col items-center justify-center p-8">
            <Component />
          </div>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <div className="rounded-theme bg-background-400 h-[400px] overflow-y-auto p-4">
            {children}
          </div>
        </Tabs.TabPanel>
      </Tabs>
    </>
  );
}

export default Preview;
