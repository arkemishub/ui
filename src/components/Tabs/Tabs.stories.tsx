/**
 * Copyright 2023 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ITabsProps } from "./index";
import React from "react";
import Tabs from "./Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

export const Uncontrolled = () => {
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

export const Controlled = (args: Partial<ITabsProps>) => {
  return (
    <Tabs {...args}>
      {tabs.map((tab, index) => (
        <Tabs.Tab key={index}>{tab}</Tabs.Tab>
      ))}

      <Tabs.TabPanel>Content 1</Tabs.TabPanel>
      <Tabs.TabPanel>Content 2</Tabs.TabPanel>
    </Tabs>
  );
};
