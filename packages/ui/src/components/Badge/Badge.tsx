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
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { IBadgeProps } from "./Badge.types";

function Badge({ className, color, label, children }: IBadgeProps) {
  return (
    <div className="relative">
      <div
        data-testid="arke-badge"
        className={twMerge(
          "badge",
          color === "primary" && "badge--primary",
          color === "secondary" && "badge--secondary",
          className
        )}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

export default Badge;
