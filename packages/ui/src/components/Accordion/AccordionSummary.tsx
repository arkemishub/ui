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
import { IAccordionProps } from "./Accordion.types";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface IAccordionSummaryProps extends Omit<IAccordionProps, "expanded"> {
  index?: number;
  expandIcon: ReactNode;
  expanded?: boolean;
}

function AccordionSummary({
  children,
  expanded,
  expandIcon,
  onChange,
  index,
  disabled,
}: IAccordionSummaryProps) {
  return (
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
}

export default AccordionSummary;
