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

import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";
import {
  IAccordionDetailProps,
  IAccordionProps,
  IAccordionSummaryProps,
} from "./Accordion.types";
import { twMerge } from "tailwind-merge";
import { Transition } from "@headlessui/react";

export const AccordionSummary = ({
  children,
  expanded,
  expandIcon,
  onChange,
  index,
  disabled,
}: IAccordionSummaryProps) => (
  <div
    className="accordion__summary"
    tabIndex={index}
    role="button"
    onClick={() => !disabled && onChange?.()}
    onKeyDown={() => !disabled && onChange?.()}
    data-testid="arke-accordion-summary"
  >
    <div className="accordion__summary__content">{children}</div>
    <div
      className={twMerge(
        "accordion__summary__icon",
        !disabled ? "cursor-pointer" : "cursor-default",
        expanded && "rotate-180"
      )}
      data-testid="arke-accordion-icon"
    >
      {onChange && expandIcon}
    </div>
  </div>
);

export const AccordionDetail = ({
  children,
  expanded,
}: IAccordionDetailProps) => (
  <Transition
    show={expanded}
    enter="transition-all ease-in-out duration-200"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-all ease-in-out duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    data-testid="arke-accordion-detail"
    className={twMerge(
      "accordion__detail",
      !expanded ? "h-0 overflow-hidden" : "h-[40px]"
    )}
  >
    {children}
  </Transition>
);

function Accordion({
  expanded,
  disabled,
  onChange,
  children,
}: IAccordionProps) {
  const content = useMemo(() => {
    return Children.map(
      children,
      (
        child: ReactElement<IAccordionProps & { index: number }>,
        index: number
      ) => {
        if (isValidElement(child) && child?.type === AccordionSummary)
          return cloneElement(child, {
            expanded,
            onChange,
            index,
            disabled,
          });
        if (isValidElement(child) && child?.type === AccordionDetail)
          return cloneElement(child, { expanded });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <div
      className={twMerge("accordion", disabled && "opacity-50")}
      data-testid="arke-accordion"
    >
      {content}
    </div>
  );
}

export default Accordion;
