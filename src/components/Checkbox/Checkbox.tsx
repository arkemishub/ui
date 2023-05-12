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

import { CheckboxColor, ICheckboxProps } from "./Checkbox.types";
import { twMerge } from "tailwind-merge";

function Checkbox({
  checked,
  onChange,
  disabled = false,
  name,
  label,
  helperText,
  hasError = false,
  labelPlacement = "right",
  color = CheckboxColor.PRIMARY,
}: ICheckboxProps) {
  return (
    <div
      className={twMerge(
        "checkbox__container",
        labelPlacement === "left" && "items-center gap-4",
        labelPlacement === "right" &&
          "items-center gap-4 flex-row-reverse justify-end",
        labelPlacement === "top" && "flex-col gap-1",
        labelPlacement === "bottom" && "flex-col-reverse gap-1"
      )}
    >
      {label && (
        <label className="checkbox__label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        data-testid="arke-checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        type="checkbox"
        name={name}
        id={name}
        className={twMerge(
          "checkbox",
          hasError && "checkbox--error",
          color === CheckboxColor.PRIMARY && "checkbox--primary",
          color === CheckboxColor.SECONDARY && "checkbox--secondary"
        )}
      />
      {helperText && (
        <div
          className={twMerge(
            "mt-2 text-sm ",
            hasError ? "text-error" : "opacity-50"
          )}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}
export default Checkbox;
