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
      <Tabs className="docs__tabs__list mb-4 inline-flex w-auto">
        <Tabs.Tab>Preview</Tabs.Tab>
        <Tabs.Tab>Code</Tabs.Tab>
        <Tabs.TabPanel>
          <div className="rounded-theme bg-background-400 flex h-[300px] flex-col items-center justify-center p-8 md:h-[400px]">
            <Component />
          </div>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <div className="rounded-theme bg-background-400 max-h-[300px] overflow-y-auto md:max-h-[400px]">
            {children}
          </div>
        </Tabs.TabPanel>
      </Tabs>
    </>
  );
}

export default Preview;
