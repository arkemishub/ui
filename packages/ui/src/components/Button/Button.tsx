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

import { twMerge } from "tailwind-merge";
import type { IButtonProps } from "./Button.types";
function Button({
  onClick,
  className,
  children,
  color,
  disabled = false,
  fullWidth = false,
  type,
  form,
}: IButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        "btn",
        color === "primary" && "btn--primary",
        color === "secondary" && "btn--secondary",
        disabled && "btn--disabled",
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      onClick={(e) => !disabled && onClick?.(e)}
      form={form}
    >
      {children}
    </button>
  );
}

export default Button;
