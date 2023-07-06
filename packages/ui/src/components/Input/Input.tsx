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
  startAdornment,
  endAdornment,
  prefixAdornment,
  suffixAdornment,
  ...props
}: IInputProps) {
  return (
    <div>
      {label && (
        <label className="label input__label" htmlFor={props.name}>
          {label}
        </label>
      )}
      <div className="flex">
        {prefixAdornment && (
          <div className="input__prefixAdornment">{prefixAdornment}</div>
        )}
        <div
          className={twMerge(
            "input__container",
            (startAdornment || endAdornment) && "px-2",
            fullWidth && "w-full",
            hasError && "input--error",
            prefixAdornment && "rounded-bl-none rounded-tl-none",
            suffixAdornment && "rounded-br-none rounded-tr-none",
            className
          )}
          data-testid="arke-container"
        >
          {startAdornment && (
            <div className="input__startAdornment">{startAdornment}</div>
          )}
          <input
            className="input"
            disabled={disabled}
            type={type}
            data-testid="arke-input"
            {...props}
          />
          {endAdornment && (
            <div className="input__endAdornment">{endAdornment}</div>
          )}
        </div>
        {suffixAdornment && (
          <div className="input__suffixAdornment">{suffixAdornment}</div>
        )}
      </div>
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
