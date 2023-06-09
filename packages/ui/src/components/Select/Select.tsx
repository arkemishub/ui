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
import { ISelectProps } from "./Select.types";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import useContainerRect from "../../hooks/useContainerRect";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="select__endAdornment__icon"
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
}: ISelectProps<T>) {
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
          className={twMerge("select__container", className)}
        >
          <div className="flex w-full items-center">
            {startAdornment && (
              <Listbox.Button className="select__startAdornment">
                {startAdornment}
              </Listbox.Button>
            )}
            <Listbox.Button
              className={twMerge(
                "select__input",
                hasError && "outline outline-error focus:outline-error"
              )}
              data-testid="arke-select"
            >
              {value ? (
                Array.isArray(value) ? (
                  value.map((val) => renderValue(val)).join(", ")
                ) : (
                  renderValue(value)
                )
              ) : (
                <span className="select__placeholder">
                  {placeholder ? placeholder : null}
                  &nbsp;
                </span>
              )}
            </Listbox.Button>
            <Listbox.Button className="select__endAdornment">
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
          <Listbox.Options className="select__options" style={getPosition()}>
            {values?.map((val, index) => (
              <Listbox.Option key={index} value={val} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={twMerge(
                      "select__option",
                      (selected || active) && "select__option--active"
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
            className={twMerge(
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
