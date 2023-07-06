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

import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useMemo,
} from "react";
import { IAccordionProps } from "./Accordion.types";
import { twMerge } from "tailwind-merge";
import AccordionSummary from "./AccordionSummary";
import AccordionDetail from "./AccordionDetail";

function Accordion({
  expanded,
  disabled = false,
  onChange,
  className,
  children,
}: IAccordionProps) {
  const content = useMemo(() => {
    return Children.map(children, (child, index) => {
      if (isValidElement(child) && child?.type === AccordionSummary)
        return cloneElement(child as ReactElement, {
          expanded,
          onChange,
          index,
          disabled,
        });
      if (isValidElement(child) && child?.type === AccordionDetail)
        return cloneElement(child as ReactElement, { expanded });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <div
      className={twMerge("accordion", disabled && "opacity-50", className)}
      data-testid="arke-accordion"
    >
      {content}
    </div>
  );
}

Accordion.Summary = AccordionSummary;
Accordion.Detail = AccordionDetail;

export default Accordion;
