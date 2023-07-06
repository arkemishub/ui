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

import { Switch as HeadlessSwitch } from "@headlessui/react";
import { ISwitchProps } from "./Switch.types";
import { twMerge } from "tailwind-merge";

function Switch({
  onChange,
  checked,
  color,
  label,
  labelPosition = "top",
  size = "md",
  disabled = false,
  name,
  className,
}: ISwitchProps) {
  return (
    <div
      className={twMerge(
        labelPosition === "top" && "flex flex-col justify-center gap-1",
        labelPosition === "bottom" &&
          "flex flex-col-reverse justify-center gap-1",
        labelPosition === "right" && "flex flex-row-reverse items-center gap-4",
        labelPosition === "left" && "flex flex-row items-center gap-4",
        "w-fit"
      )}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <div className="flex h-fit items-center">
        <HeadlessSwitch
          name={name}
          checked={checked}
          onChange={onChange}
          className={twMerge(
            "switch__container",
            color === "primary" && checked && "switch__container--primary",
            color === "secondary" && checked && "switch__container--secondary",
            size === "sm" && "switch__container--sm",
            size === "md" && "switch__container--md",
            disabled && "switch__container--disabled",
            className
          )}
          disabled={disabled}
          data-testid="arke-switch"
        >
          <span
            className={twMerge(
              "switch",
              `${checked ? "translate-x-6" : "translate-x-1"}`,
              color === "primary" && checked && "bg-secondary",
              color === "secondary" && checked && "bg-primary",
              size === "sm" && "h-3 w-3",
              size === "md" && "h-4 w-4"
            )}
          />
        </HeadlessSwitch>
      </div>
    </div>
  );
}

export default Switch;
