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
          <div className="bg-background-400 rounded-theme flex h-[400px] items-center justify-center">
            <Component />
          </div>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <div className="bg-background-400 rounded-theme h-[400px] overflow-y-auto p-8">
            {children}
          </div>
        </Tabs.TabPanel>
      </Tabs>
    </>
  );
}

export default Preview;
