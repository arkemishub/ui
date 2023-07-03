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

import { Popover } from "../Popover";
import { twMerge } from "tailwind-merge";
import { IMenuProps } from "./Menu.types";

function Menu({
  children,
  items,
  onClick,
  className,
  placement = "bottom",
}: IMenuProps) {
  return (
    <div
      data-testid="arke-menu"
      role="presentation"
      className={twMerge("menu__container", className)}
      onClick={onClick}
    >
      <Popover
        popover={
          <ul className="menu">
            {items?.map((item, index) => (
              <li
                role="none"
                key={index}
                className="menu__item"
                onClick={item.onClick}
              >
                <div className="flex gap-1 px-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        }
        placement={placement}
        className="p-1"
      >
        {children}
      </Popover>
    </div>
  );
}

export default Menu;
