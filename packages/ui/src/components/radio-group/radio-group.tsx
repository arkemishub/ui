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
import { Radio } from "../radio";
import { RadioGroupProps } from "./radio-group.types";
import { cn } from "../../lib/utils";

const classNames = {
  radioGroup: cn("w-fit", "radio__group"),
};

function RadioGroup({
  children,
  name,
  direction = "column",
  onChange,
  value,
  className,
}: RadioGroupProps) {
  const radioButtons = useMemo(() => {
    const rawChildren = Array.isArray(children) ? children : [children];

    return rawChildren
      .filter((child) => child.type === Radio)
      .map((item, i) => {
        return React.cloneElement(item, {
          name: name,
          key: i,
          checked: value === item.props.value,
          onChange: onChange,
        });
      });
  }, [children, name, value, onChange]);

  return (
    <div
      data-testid="arke-radio-group"
      className={cn(
        classNames.radioGroup,
        direction === "column" && "flex flex-col",
        direction === "row" && "flex flex-row gap-4",
        className
      )}
    >
      {radioButtons}
    </div>
  );
}

export default RadioGroup;
