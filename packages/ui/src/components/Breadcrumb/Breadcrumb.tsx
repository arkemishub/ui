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
import { IBreadcrumbProps, ICrumb, ICrumbProps } from "./Breadcrumb.types";
import { twMerge } from "tailwind-merge";

function Crumb({ children, className }: ICrumbProps) {
  return <span className={className}>{children}</span>;
}

const Breadcrumb = ({ children, className, ...props }: IBreadcrumbProps) => {
  const crumbs = useMemo(() => {
    const childrenCrumbs = Children.map(children, (child) => {
      if (isValidElement(child) && child?.type === Crumb) {
        return child;
      }
    });
    if (!childrenCrumbs || childrenCrumbs?.length == 0) return props.crumbs;
    return childrenCrumbs;
  }, [children, props.crumbs]);

  return (
    <ul className={twMerge("breadcrumb", className)}>
      {crumbs?.map((crumb, index) => (
        <li key={index} className="breadcrumb__crumb">
          {isValidElement(crumb) ? (
            crumb
          ) : (
            <a href={(crumb as ICrumb).href}>{(crumb as ICrumb).content}</a>
          )}
          {index !== crumbs.length - 1 && (
            <svg
              className="breadcrumb__crumb__arrow"
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
