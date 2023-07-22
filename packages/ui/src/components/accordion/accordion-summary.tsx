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
import { AccordionSummaryProps } from "./accordion.types";
import { cn } from "../../lib/utils";

const classNames = {
  summary: cn("flex", "accordion__summary"),
  icon: cn("transition-transform duration-500", "accordion__summary__icon"),
};

function AccordionSummary({
  children,
  expanded,
  expandIcon,
  onChange,
  index,
  disabled,
  className,
}: AccordionSummaryProps) {
  return (
    <div
      className={cn(classNames.summary, className)}
      tabIndex={index}
      role="button"
      onClick={() => !disabled && onChange?.()}
      onKeyDown={() => !disabled && onChange?.()}
      data-testid="arke-accordion-summary"
    >
      <div className={cn("flex-1", "accordion__summary__content")}>
        {children}
      </div>
      <div
        className={cn(
          classNames.icon,
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
