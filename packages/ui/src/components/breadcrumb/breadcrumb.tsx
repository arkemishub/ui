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

import React, { Children, isValidElement, useMemo } from "react";
import { BreadcrumbProps, CrumbProps } from "./breadcrumb.types";
import { cn } from "../../lib/utils";

const classNames = {
  breadcrumb: cn("flex items-center gap-2", "breadcrumb"),
  crumb: cn("flex items-center gap-2", "breadcrumb__crumb"),
  separator: cn("text-neutral h-5 w-5", "breadcrumb__crumb__separator"),
};

function Crumb({ children, className }: CrumbProps) {
  return <span className={className}>{children}</span>;
}

const Breadcrumb = ({ children, className }: BreadcrumbProps) => {
  const crumbs = useMemo(() => {
    const childrenCrumbs = Children.map(children, (child) => {
      if (isValidElement(child) && child?.type === Crumb) {
        return child;
      }
    });
    if (!childrenCrumbs || childrenCrumbs?.length == 0) return null;
    return childrenCrumbs;
  }, [children]);

  return (
    <ul className={cn(classNames.breadcrumb, className)}>
      {crumbs?.map((crumb, index) => (
        <li key={index} className={classNames.crumb}>
          {crumb}
          {index !== crumbs.length - 1 && (
            <svg
              className={classNames.separator}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </li>
      ))}
    </ul>
  );
};

Breadcrumb.Crumb = Crumb;
export default Breadcrumb;
