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

import { Popover as HeadlessPopover } from "@headlessui/react";
import { PopopverProps } from "./popover.types";
import { useState } from "react";
import { usePopper } from "react-popper";
import { cn } from "../../lib/utils";

const classNames = {
  popover: cn("absolute z-10", "popover"),
};

function Popover({
  children,
  popover,
  className,
  tooltip,
  placement = "auto",
}: PopopverProps) {
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
    <HeadlessPopover data-testid="arke-popover" className="relative">
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
        className={cn(classNames.popover, className)}
      >
        {popover}
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  );
}

export default Popover;
