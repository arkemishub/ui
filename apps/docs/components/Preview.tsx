"use client";

import React, { PropsWithChildren, Suspense } from "react";
import { Tabs } from "@arkejs/ui";

function Preview({
  name,
  children,
}: PropsWithChildren<{
  name: string;
}>) {
  const Component = React.lazy(() => import(`../examples/${name}.tsx`));
  return (
    <>
      <Tabs className="docs__tabs__list">
        <Tabs.Tab>Preview</Tabs.Tab>
        <Tabs.Tab>Code</Tabs.Tab>
        <Tabs.TabPanel>
          <div className="bg-background-400 rounded-theme flex h-[400px] items-center justify-center">
            <Suspense>
              <Component />
            </Suspense>
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
