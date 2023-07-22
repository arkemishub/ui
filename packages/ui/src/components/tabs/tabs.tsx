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

"use client";

import { Tab as HeadlessTab } from "@headlessui/react";
import {
  Children,
  isValidElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Tab from "./tab";
import TabPanel from "./tab-panel";
import { TabsProps } from "./tabs.types";
import { cn } from "../../lib/utils";

const classNames = {
  tabsList: cn("w-full flex gap-2", "tabs__list"),
};

function Tabs({ children, onChange, active = 0, className }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(active);

  const tabs = useMemo(() => {
    return Children.map(children, (child: ReactNode) => {
      if (isValidElement(child) && child?.type === Tab) {
        return child;
      }
    });
  }, [children]);

  const tabPanels = useMemo(() => {
    return Children.map(children, (child: ReactNode) => {
      if (isValidElement(child) && child?.type === TabPanel) {
        return child;
      }
    });
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
      <HeadlessTab.List className={cn(classNames.tabsList, className)}>
        {tabs}
      </HeadlessTab.List>
      <HeadlessTab.Panels>{tabPanels}</HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
