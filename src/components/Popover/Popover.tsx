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

import { Popover as HeadlessPopover } from "@headlessui/react";
import { IPopopverProps } from "./Popover.types";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { usePopper } from "react-popper";

function Popover({
  children,
  popover,
  className,
  tooltip,
  placement = "auto",
}: IPopopverProps) {
  const [open, setOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    strategy: "fixed",
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "viewport",
        },
      },
    ],
  });

  return (
    <HeadlessPopover data-testid="arke-popover" className="popover__container">
      <HeadlessPopover.Button
        className="focus-visible:outline-0"
        ref={setReferenceElement}
        onMouseEnter={() => {
          if (tooltip) {
            setOpen(true);
          }
        }}
        onMouseLeave={() => {
          if (tooltip) {
            setOpen(false);
          }
        }}
      >
        {children}
      </HeadlessPopover.Button>

      <HeadlessPopover.Panel
        static={open}
        {...attributes.popper}
        style={styles.popper}
        ref={setPopperElement}
        className={twMerge("popover", className)}
      >
        {popover}
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  );
}

export default Popover;
