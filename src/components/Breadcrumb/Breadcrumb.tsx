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

import React, { isValidElement, ReactComponentElement, useMemo } from "react";
import { IBreadcrumbProps, ICrumb, ICrumbProps } from "./Breadcrumb.types";
import { twMerge } from "tailwind-merge";

function Crumb({ children, className }: ICrumbProps) {
  return <span className={className}>{children}</span>;
}

const Breadcrumb = ({ children, className, ...props }: IBreadcrumbProps) => {
  const crumbs = useMemo(() => {
    if (!children) return props.crumbs;

    const rawChildren = Array.isArray(children) ? children : [children];
    const childrenCrumbs = rawChildren.reduce(
      (acc: ReactComponentElement<any>[], child) => {
        if (child.type === Crumb) {
          acc.push(child);
        }
        return acc;
      },
      []
    );

    return childrenCrumbs.length > 0 ? childrenCrumbs : props.crumbs;
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
