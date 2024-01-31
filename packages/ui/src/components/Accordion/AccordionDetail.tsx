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
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

export interface IAccordionDetailProps {
  expanded?: boolean;
  children: ReactNode;
  expandIcon?: ReactNode;
}

function AccordionDetail({ children, expanded }: IAccordionDetailProps) {
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
      className={twMerge(
        "accordion__detail",
        !expanded ? "h-0 overflow-hidden" : "h-fit"
      )}
    >
      {children}
    </Transition>
  );
}

export default AccordionDetail;
