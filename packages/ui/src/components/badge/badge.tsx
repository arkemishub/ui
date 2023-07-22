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
import { BadgeProps } from "./badge.types";
import { cn } from "../../lib/utils";

const classNames = {
  badge: cn(
    "absolute -top-3 -right-4 z-10 p-0.5 flex items-center justify-center rounded-full text-xs min-w-[1.25rem] min-h-[1.25rem]",
    "badge"
  ),
  primary: cn("bg-primary text-primary-contrast", "badge--primary"),
  secondary: cn("bg-secondary text-secondary-contrast", "badge--secondary"),
};

function Badge({ className, color, label, children }: BadgeProps) {
  return (
    <span className="relative">
      <div
        data-testid="arke-badge"
        className={cn(
          classNames.badge,
          color === "primary" && classNames.primary,
          color === "secondary" && classNames.secondary,
          className
        )}
      >
        {label}
      </div>
      {children}
    </span>
  );
}

export default Badge;
