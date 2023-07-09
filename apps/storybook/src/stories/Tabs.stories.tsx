import type { Meta } from "@storybook/react";

import { Tabs } from "@arkejs/ui";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

export const Default = () => {
  return (
    <Tabs>
      {tabs.map((tab, index) => (
        <Tabs.Tab key={index}>{tab}</Tabs.Tab>
      ))}

      <Tabs.TabPanel>Content 1</Tabs.TabPanel>
      <Tabs.TabPanel>Content 2</Tabs.TabPanel>
    </Tabs>
  );
};
