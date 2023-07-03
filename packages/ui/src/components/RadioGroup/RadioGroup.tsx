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

import React, { useMemo } from "react";
import { IRadioGroupProps } from "./RadioGroup.types";
import { Radio } from "../Radio";
import { twMerge } from "tailwind-merge";

function RadioGroup({
  children,
  name,
  direction = "column",
  onChange,
  selected,
  className,
}: IRadioGroupProps) {
  const radioButtons = useMemo(() => {
    const rawChildren = Array.isArray(children) ? children : [children];

    return rawChildren
      .filter((child) => child.type === Radio)
      .map((item, i) => {
        return React.cloneElement(item, {
          name: name,
          key: i,
          checked: selected === item.props.value,
          onChange: onChange,
        });
      });
  }, [children, name, selected, onChange]);

  return (
    <div
      data-testid="arke-radio-group"
      className={twMerge(
        "radio--group__container",
        "w-fit",
        direction === "column" && "flex flex-col",
        direction === "row" && "flex flex-row gap-4",
        direction === "row-reverse" && "flex flex-row-reverse gap-4",
        direction === "column-reverse" && "flex flex-col-reverse",
        className
      )}
    >
      {radioButtons}
    </div>
  );
}

export default RadioGroup;
