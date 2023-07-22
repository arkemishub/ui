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

import { useMemo } from "react";
import { cn } from "../../lib/utils";
import type { AvatarProps } from "./avatar.types";

const classNames = {
  avatar: cn("rounded-full h-7 w-7 flex justify-center items-center", "avatar"),
  primary: cn("bg-primary text-primary-contrast", "avatar--primary"),
  secondary: cn("bg-secondary text-secondary-contrast", "avatar--secondary"),
  xs: cn("h-6 w-6", "avatar--xs"),
  sm: cn("h-7 w-7", "avatar--sm"),
  md: cn("h-8 w-8", "avatar--md"),
  lg: cn("h-9 w-9", "avatar--lg"),
  xl: cn("h-10 w-10", "avatar--xl"),
};

function Avatar({
  name,
  className,
  color = "primary",
  size = "md",
}: AvatarProps) {
  const initials = useMemo(() => {
    const words = name?.split(" ");
    return words?.map((word) => word[0]).join("") ?? null;
  }, [name]);

  return (
    <div
      data-testid="arke-avatar"
      className={cn(
        classNames.avatar,
        color === "primary" && classNames.primary,
        color === "secondary" && classNames.secondary,
        size === "xs" && classNames.xs,
        size === "sm" && classNames.sm,
        size === "md" && classNames.md,
        size === "lg" && classNames.lg,
        size === "xl" && classNames.xl,
        className
      )}
    >
      {initials}
    </div>
  );
}

export default Avatar;
