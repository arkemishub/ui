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
import { IRadioProps } from "./Radio.types";
import { twMerge } from "tailwind-merge";

function Radio({
  label,
  name,
  labelPlacement = "right",
  value,
  checked = false,
  onChange,
  color = "secondary",
  disabled,
}: IRadioProps) {
  return (
    <div
      className={twMerge(
        "radio__container",
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
        className={twMerge(
          "radio",
          color === "primary" && "radio--primary",
          color === "secondary" && "radio--secondary"
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
            className={twMerge(
              "h-2.5 w-2.5 absolute rounded-full",
              color === "primary" && "radio--primary--checked",
              color === "secondary" && "radio--secondary--checked"
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Radio;
