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
import { RadioProps } from "./radio.types";
import { cn } from "../../lib/utils";

const classNames = {
  radio: cn(
    "border rounded-full h-4 w-4 relative flex justify-center items-center",
    "radio"
  ),
  primary: cn("border-primary", "radio--primary"),
  secondary: cn("border-secondary", "radio--secondary"),
  primaryChecked: cn("bg-primary", "radio--primary--checked"),
  secondaryChecked: cn("bg-secondary", "radio--secondary--checked"),
};

function Radio({
  label,
  name,
  labelPlacement = "right",
  value,
  checked = false,
  onChange,
  color = "secondary",
  disabled = false,
}: RadioProps) {
  return (
    <div
      className={cn(
        "w-fit",
        labelPlacement === "top" && "flex flex-col gap-1",
        labelPlacement === "bottom" && "flex flex-col-reverse gap-1",
        labelPlacement === "right" &&
          "flex flex-row-reverse items-center gap-2",
        labelPlacement === "left" && "flex flex-row items-center gap-2"
      )}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <div
        data-testid="arke-radio"
        className={cn(
          classNames.radio,
          color === "primary" && classNames.primary,
          color === "secondary" && classNames.secondary
        )}
      >
        <input
          className="opacity-0"
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {checked && !disabled && (
          <span
            data-testid="arke-radio-tick"
            className={cn(
              "h-2.5 w-2.5 absolute rounded-full",
              color === "primary" && classNames.primaryChecked,
              color === "secondary" && classNames.secondaryChecked
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Radio;
