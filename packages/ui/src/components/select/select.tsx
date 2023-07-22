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

import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useContainerRect from "../../hooks/useContainerRect";
import { SelectProps } from "./select.types";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";

const classNames = {
  container: cn(
    sharedClassNames.inputContainer,
    "w-full text-left px-4",
    "select__container"
  ),
  input: cn("w-full text-left px-2 outline-0 border-0"),
  disabled: cn("opacity-50 cursor-not-allowed", "select--disabled"),
  error: cn("outline outline-error focus:outline-error", "select--error"),
  placeholder: cn("text-neutral", "select__placeholder"),
  options: cn(
    "fixed z-20 mt-2 w-full overflow-y-auto max-h-[220px] rounded-theme-sm bg-background text-background-contrast py-2 border border-neutral",
    "select__options"
  ),
  option: cn("cursor-pointer px-4 py-1", "select__option"),
  activeOption: cn(
    "bg-primary text-primary-contrast",
    "select__option--active"
  ),
  startAdornment: cn(
    "px-1 flex items-center focus-visible:outline-none",
    "select__startAdornment"
  ),
  endAdornment: cn(
    "px-1 flex items-center focus-visible:outline-none",
    "select__endAdornment"
  ),
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-4 w-4 cursor-pointer stroke-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    />
  </svg>
);

function Select<T>({
  value,
  values,
  multiple = false,
  onChange,
  label,
  renderValue,
  renderOption,
  startAdornment,
  endAdornment,
  helperText,
  disabled = false,
  hasError = false,
  className,
  placeholder,
}: SelectProps<T>) {
  const { containerRef, setPosition, getPosition } = useContainerRect();
  return (
    <div className="relative">
      <Listbox
        value={value}
        multiple={multiple}
        onChange={onChange}
        disabled={disabled}
      >
        {label && <Listbox.Label className="label">{label}</Listbox.Label>}
        <div
          ref={containerRef}
          onClick={setPosition}
          className={cn(
            classNames.container,
            disabled && classNames.disabled,
            className
          )}
        >
          <div className="flex w-full items-center">
            {startAdornment && (
              <Listbox.Button className={classNames.startAdornment}>
                {startAdornment}
              </Listbox.Button>
            )}
            <Listbox.Button
              className={cn(classNames.input, hasError && classNames.error)}
              data-testid="arke-select"
            >
              {value ? (
                Array.isArray(value) ? (
                  value.map((val) => renderValue(val)).join(", ")
                ) : (
                  renderValue(value)
                )
              ) : (
                <span className={classNames.placeholder}>
                  {placeholder ? placeholder : null}
                  &nbsp;
                </span>
              )}
            </Listbox.Button>
            <Listbox.Button className={classNames.endAdornment}>
              {!endAdornment ? <ArrowIcon /> : endAdornment}
            </Listbox.Button>
          </div>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className={classNames.options} style={getPosition()}>
            {values?.map((val, index) => (
              <Listbox.Option key={index} value={val} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={cn(
                      classNames.option,
                      (selected || active) && classNames.activeOption
                    )}
                  >
                    {renderOption ? renderOption(val) : renderValue(val)}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
        {helperText && (
          <div
            className={cn(
              "mt-2 text-sm ",
              hasError ? "text-error" : "opacity-50"
            )}
          >
            {helperText}
          </div>
        )}
      </Listbox>
    </div>
  );
}

export default Select;
