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

import { Tab as HeadlessTab } from "@headlessui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ITabsProps } from "./Tabs.types";
import { twMerge } from "tailwind-merge";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

function Tabs({ children, onChange, active = 0, className }: ITabsProps) {
  const [selectedTab, setSelectedTab] = useState(active);

  const { tabs, tabPanels, others } = useMemo(() => {
    const rawChildren = Array.isArray(children) ? children : [children];
    return rawChildren.reduce(
      (acc, child) => {
        const childType = child.type;
        if (childType === Tab) {
          acc.tabs.push(child);
        } else if (childType === TabPanel) {
          acc.tabPanels.push(child);
        } else {
          acc.others.push(child);
        }

        return acc;
      },
      {
        tabs: [],
        tabPanels: [],
        others: [],
      }
    );
  }, [children]);

  const handleTabChange = useCallback(
    (index: number) => {
      onChange ? onChange(index) : setSelectedTab(index);
    },
    [onChange]
  );

  useEffect(() => {
    if (typeof active !== "undefined") setSelectedTab(active);
  }, [active]);

  return (
    <HeadlessTab.Group selectedIndex={selectedTab} onChange={handleTabChange}>
      <HeadlessTab.List className={twMerge("tabs__list", className)}>
        {tabs}
      </HeadlessTab.List>
      {others}
      <HeadlessTab.Panels>{tabPanels}</HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
