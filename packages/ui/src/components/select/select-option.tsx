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

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useId,
  useMemo,
} from "react";
import { cn } from "../../lib/utils";
import { HighlightType } from "./select.types";
import { useSelect } from "./select";

const classNames = {
  option: cn("cursor-pointer px-4 py-1", "select__option"),
  highlightedOption: cn(
    "bg-primary text-primary-contrast",
    "select__option--highlighted"
  ),
  activeOption: cn(
    "bg-primary text-primary-contrast",
    "select__option--active"
  ),
};

type SelectOptionProps<TValue> = PropsWithChildren<{
  value: TValue;
  className?: string;
}>;

function SelectOption<TValue>({
  children,
  className,
  value,
}: SelectOptionProps<TValue>) {
  const {
    registerOption,
    highlightOption,
    highlightedIndex,
    options,
    selectOption,
    internalValue,
  } = useSelect();
  const reactId = useId();
  const id = `select-option-${reactId}`;

  useEffect(() => {
    registerOption(id, value);
  }, [id]);

  const handleClick = useCallback(() => {
    selectOption(id);
  }, [selectOption]);

  const handleMouseOver = useCallback(() => {
    highlightOption(HighlightType.Id, id);
  }, []);

  const isHighlighted = useMemo(() => {
    if (highlightedIndex === null) return false;
    return options[highlightedIndex]?.id === id;
  }, [highlightedIndex, options]);

  const isSelected = useMemo(() => {
    if (Array.isArray(internalValue)) {
      return internalValue.includes(value);
    }
    return internalValue === value;
  }, [internalValue, value]);

  return (
    <div
      className={cn(
        classNames.option,
        isHighlighted && classNames.highlightedOption,
        isSelected && classNames.activeOption,
        className
      )}
      role="option"
      aria-selected={isSelected}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      {children}
    </div>
  );
}

export type { SelectOptionProps };
export default SelectOption;
