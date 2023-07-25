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

import { Transition } from "@headlessui/react";
import { AccordionDetailProps } from "./accordion.types";
import { cn } from "../../lib/utils";

const classNames = {
  detail: cn("relative", "accordion__detail"),
};

function AccordionDetail({
  children,
  expanded,
  className,
}: AccordionDetailProps) {
  return (
    <Transition
      show={expanded}
      enter="transition-all ease-in-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all ease-in-out duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      data-testid="arke-accordion-detail"
      className={cn(
        classNames.detail,
        !expanded ? "h-0 overflow-hidden" : "h-fit",
        className
      )}
    >
      {children}
    </Transition>
  );
}

export default AccordionDetail;
