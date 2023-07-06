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

import type { IInputProps } from "./Input.types";
import { twMerge } from "tailwind-merge";

function Input({
  type,
  label,
  className,
  fullWidth = false,
  helperText,
  hasError = false,
  disabled = false,
  ...props
}: IInputProps) {
  return (
    <div>
      {label && (
        <label className="label input__label" htmlFor={props.name}>
          {label}
        </label>
      )}
      <input
        data-testid="arke-input"
        disabled={disabled}
        className={twMerge(
          "input",
          fullWidth && "w-full",
          hasError && "input--error",
          className
        )}
        type={type}
        {...props}
      />
      {helperText && (
        <div
          className={twMerge(
            "input__helperText",
            hasError && "input__helperText--error"
          )}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}

export default Input;
