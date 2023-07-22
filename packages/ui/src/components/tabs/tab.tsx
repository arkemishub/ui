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
import { Fragment } from "react";
import { TabProps } from "./tabs.types";
import { cn } from "../../lib/utils";

const classNames = {
  tab: cn("flex-grow px-4 py-2 focus:outline-none rounded-theme-sm", "tab"),
  selectedTab: cn("bg-primary text-primary-contrast", "tab--selected"),
};

function Tab({ children, className }: TabProps) {
  return (
    <HeadlessTab as={Fragment}>
      {({ selected }) => (
        <button
          className={cn(
            classNames.tab,
            selected && classNames.selectedTab,
            className
          )}
        >
          {children}
        </button>
      )}
    </HeadlessTab>
  );
}

export default Tab;
