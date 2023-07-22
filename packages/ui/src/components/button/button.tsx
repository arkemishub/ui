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

import type { ButtonProps } from "./button.types";
import { cn } from "../../lib/utils";
import { forwardRef } from "react";

const classNames = {
  btn: cn(
    "flex items-center justify-center px-4 py-2 outline-none rounded-theme",
    "btn"
  ),
  primary: cn("bg-primary text-primary-contrast", "btn--primary"),
  secondary: cn("bg-secondary text-secondary-contrast", "btn--secondary"),
  disabled: cn("cursor-not-allowed opacity-50", "btn--disabled"),
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      className,
      children,
      color,
      disabled = false,
      fullWidth = false,
      type,
    },
    ref
  ) => {
    return (
      <button
        type={type}
        className={cn(
          classNames.btn,
          color === "primary" && classNames.primary,
          color === "secondary" && classNames.secondary,
          disabled && classNames.disabled,
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        onClick={(e) => !disabled && onClick?.(e)}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
