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

import { InputProps } from "./input.types";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";

const classNames = {
  input: cn(
    "bg-transparent min-h-[40px] min-w-[120px] w-full px-2 outline-0 border-0",
    "input"
  ),
  container: cn(sharedClassNames.inputContainer, "input__container"),
  error: cn("outline outline-error focus:outline-error", "input--error"),
  label: cn(sharedClassNames.label, "input__label"),
  disabled: cn("opacity-50 cursor-not-allowed", "input--disabled"),
  prefixAdornment: cn(
    "flex items-center px-2 border border-neutral rounded-theme w-fit rounded-tr-none rounded-br-none border-r-0",
    "input__prefixAdornment"
  ),
  suffixAdornment: cn(
    "flex items-center px-2 border border-neutral rounded-theme w-fit rounded-tl-none rounded-bl-none border-l-0",
    "input__suffixAdornment"
  ),
  startAdornment: cn("cursor-pointer ml-1", "input__startAdornment"),
  endAdornment: cn("cursor-pointer ml-1", "input__endAdornment"),
  helperText: cn("mt-2 text-sm opacity-50", "input__helperText"),
  helperTextError: cn("opacity-100 text-error", "input__helperText--error"),
};

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
}: InputProps) {
  return (
    <div>
      {label && (
        <label className={classNames.label} htmlFor={props.name}>
          {label}
        </label>
      )}
      <div className="flex">
        {prefixAdornment && (
          <div className={classNames.prefixAdornment}>{prefixAdornment}</div>
        )}
        <div
          className={cn(
            classNames.container,
            disabled && classNames.disabled,
            (startAdornment || endAdornment) && "px-2",
            fullWidth && "w-full",
            hasError && classNames.error,
            prefixAdornment && "rounded-bl-none rounded-tl-none",
            suffixAdornment && "rounded-br-none rounded-tr-none",
            className
          )}
          data-testid="arke-container"
        >
          {startAdornment && (
            <div className={classNames.startAdornment}>{startAdornment}</div>
          )}
          <input
            className={classNames.input}
            disabled={disabled}
            type={type}
            data-testid="arke-input"
            {...props}
          />
          {endAdornment && (
            <div className={classNames.endAdornment}>{endAdornment}</div>
          )}
        </div>
        {suffixAdornment && (
          <div className={classNames.suffixAdornment}>{suffixAdornment}</div>
        )}
      </div>
      {helperText && (
        <div
          className={cn(
            classNames.helperText,
            hasError && classNames.helperTextError
          )}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}

export default Input;
