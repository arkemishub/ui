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
import { twMerge } from "tailwind-merge";
import { IAvatarProps } from "./Avatar.types";

function Avatar({
  name,
  className,
  color = "primary",
  size = "md",
}: IAvatarProps) {
  const initials = useMemo(() => {
    if (name) {
      const splittedName = name.split(" ");
      if (splittedName.length === 1 || splittedName[1] === "") {
        return `${splittedName[0][0]}`;
      } else if (splittedName.length >= 2)
        return `${splittedName[0][0]}${splittedName[1][0]}`;
    }
    return "";
  }, [name]);

  return (
    <div
      data-testid="arke-avatar"
      className={twMerge(
        "avatar",
        color === "primary" && "avatar--primary",
        color === "secondary" && "avatar--secondary",
        size === "xs" && "avatar--xs",
        size === "sm" && "avatar--sm",
        size === "md" && "avatar--md",
        size === "lg" && "avatar--lg",
        size === "xl" && "avatar--xl",
        size === "2xl" && "avatar--2xl",
        className
      )}
    >
      {initials}
    </div>
  );
}

export default Avatar;
