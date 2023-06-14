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

import React from "react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useClickOutside from "../../hooks/useClickOutside";
import { Button } from "../Button";
import { IDrawerProps } from "./Drawer.types";

function Drawer({
  title,
  open,
  onClose,
  children,
  className,
  position = "left",
}: IDrawerProps) {
  const ref = useRef<any>();
  useClickOutside(ref, open ? onClose : () => null);
  return (
    <>
      <div
        className={twMerge("drawer__overlay", !open ? "hidden" : "visible")}
        aria-hidden="true"
      />
      <div
        ref={ref}
        data-testid="arke-drawer"
        role="presentation"
        className={twMerge(
          "drawer",
          position === "right" && "drawer__right",
          position === "left" && "drawer__left",
          position === "bottom" && "drawer__bottom",
          position === "top" && "drawer__top",
          !open && position === "left" ? "-translate-x-full" : "",
          !open && position === "right" ? "translate-x-full" : "",
          !open && position === "bottom" ? "translate-y-full" : "",
          !open && position === "top" ? "-translate-y-full" : "",
          className
        )}
      >
        <div className="drawer__head">
          {title && <p className="drawer__title">{title}</p>}
          <Button onClick={onClose} className="drawer__close__button">
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
