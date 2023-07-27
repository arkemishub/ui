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

import React from "react";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Button } from "../button";
import { DrawerProps } from "./drawer.types";
import { cn } from "../../lib/utils";

const classNames = {
  drawer: cn(
    "flex flex-col w-full h-full bg-background text-background-contrast px-6 py-4 overflow-y-auto fixed z-40 transition-transform duration-300",
    "drawer"
  ),
  overlay: cn("fixed inset-0 bg-black/30", "drawer__overlay"),
  head: cn("mb-6 flex gap-4", "drawer__head"),
  title: cn("text-lg font-bold", "drawer__title"),
  close: cn("ml-auto h-6 w-6 p-1", "drawer__close__button"),
};

function Drawer({
  title,
  open,
  onClose,
  children,
  className,
  position = "left",
}: DrawerProps) {
  const ref = useRef(null);
  useClickOutside(ref, open ? onClose : () => null);
  return (
    <>
      <div
        className={cn(classNames.overlay, !open ? "hidden" : "visible")}
        aria-hidden="true"
      />
      <div
        ref={ref}
        data-testid="arke-drawer"
        role="presentation"
        className={cn(
          classNames.drawer,
          position === "right" && "right-0 top-0 h-full",
          position === "left" && " left-0 top-0 h-full",
          position === "bottom" && "bottom-0 left-0 w-full max-w-[inherit]",
          position === "top" && "left-0 top-0 w-full max-w-[inherit]",
          !open && position === "left" ? "-translate-x-full" : "",
          !open && position === "right" ? "translate-x-full" : "",
          !open && position === "bottom" ? "translate-y-full" : "",
          !open && position === "top" ? "-translate-y-full" : "",
          className
        )}
      >
        <div className={classNames.head}>
          {title && <p className={classNames.title}>{title}</p>}
          <Button onClick={onClose} className={classNames.close}>
            <svg
              data-testid="arke-drawer-close"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        {children}
      </div>
    </>
  );
}

export default Drawer;
