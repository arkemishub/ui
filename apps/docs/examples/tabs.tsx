import { Tabs } from "@arkejs/ui";
import React from "react";

function MyTabs() {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-[400px]">
      <Tabs>
        {tabs.map((tab, index) => (
          <Tabs.Tab key={index}>{tab}</Tabs.Tab>
        ))}

        <Tabs.TabPanel>Content 1</Tabs.TabPanel>
        <Tabs.TabPanel>Content 2</Tabs.TabPanel>
        <Tabs.TabPanel>Content 3</Tabs.TabPanel>
      </Tabs>
    </div>
  );
}

export default MyTabs;
