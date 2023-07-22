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

import { cn } from "../../lib/utils";
import { CheckboxProps } from "./checkbox.types";
import sharedClassNames from "../../shared/classNames";

const classNames = {
  checkbox: cn(
    "select-none bg-background rounded-theme-sm focus:ring-0 focus:ring-transparent focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 h-4 w-4",
    "checkbox"
  ),
  container: cn("inline-flex", "checkbox__container"),
  label: cn(sharedClassNames.label, "mb-0", "checkbox__label"),
  error: cn(
    "outline outline-offset-2 outline-error focus:outline-error",
    "checkbox--error"
  ),
  primary: cn("accent-primary", "checkbox--primary"),
  secondary: cn("accent-secondary", "checkbox--secondary"),
};

function Checkbox({
  checked,
  onChange,
  disabled = false,
  name,
  label,
  helperText,
  hasError = false,
  labelPlacement = "right",
  color = "primary",
}: CheckboxProps) {
  return (
    <div
      className={cn(
        classNames.container,
        labelPlacement === "left" && "items-center gap-4",
        labelPlacement === "right" &&
          "items-center gap-4 flex-row-reverse justify-end",
        labelPlacement === "top" && "flex-col gap-1",
        labelPlacement === "bottom" && "flex-col-reverse gap-1"
      )}
    >
      {label && (
        <label className={classNames.label} htmlFor={name}>
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
        className={cn(
          classNames.checkbox,
          hasError && classNames.error,
          color === "primary" && classNames.primary,
          color === "secondary" && classNames.secondary
        )}
      />
      {helperText && (
        <div
          className={cn(
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
