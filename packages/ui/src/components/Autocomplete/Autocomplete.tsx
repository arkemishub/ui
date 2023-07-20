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

import { useRef, RefObject } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { Fragment, useEffect, useMemo, useState } from "react";
import { IAutocompleteProps } from "./Autocomplete.types";
import { Chip } from "../Chip";
import useContainerRect from "../../hooks/useContainerRect";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="autocomplete__endAdornment__icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    />
  </svg>
);

const ClearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    className="autocomplete__clear__icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function Autocomplete<TValue>({
  values,
  value,
  hasError,
  disabled = false,
  label,
  placeholder,
  multiple,
  renderOption,
  startAdornment,
  endAdornment,
  helperText,
  onChange,
  onInputChange,
  renderValue,
  renderChips = true,
  nullable,
  clearable,
  className,
  clearIcon,
  filterOptions,
}: IAutocompleteProps<
  TValue,
  boolean | undefined,
  boolean | undefined
>): JSX.Element {
  const { containerRef, setPosition, getPosition } = useContainerRect();
  const [inputValue, setInputValue] = useState<string>("");
  type TActualValue = true extends typeof multiple ? TValue[] : TValue;

  const onRenderValue = (value: TValue) =>
    (value &&
      (Array.isArray(value)
        ? (value as TValue[]).map((val) => renderValue(val)).join(", ")
        : renderValue(value))) ??
    "";

  function updateInputValue() {
    if (multiple) {
      setInputValue("");
    } else {
      if (inputValue !== onRenderValue(value as TValue))
        setInputValue(onRenderValue(value as TValue));
    }
  }

  useEffect(() => {
    updateInputValue();
  }, [value]);

  function handleOnDelete(index: number) {
    if (Array.isArray(value) && multiple) {
      value?.splice(index, 1);
      onChange([...value] as TActualValue);
    }
  }

  function handleBlur() {
    updateInputValue();
  }

  function handleClear() {
    // @ts-ignore
    onChange(multiple ? [] : null);
  }

  const shouldDisplayClear = useMemo(
    () => clearable && nullable && value !== null,
    [clearable, nullable, value]
  );

  const filteredOptions = useMemo(() => {
    if (filterOptions) {
      return values?.filter((v) => filterOptions(v, inputValue));
    }
    return values;
  }, [values, filterOptions, inputValue]);

  return (
    <div className="relative">
      <Combobox
        // temporary fix for HeadlessUI types - https://github.com/tailwindlabs/headlessui/issues/1895
        value={typeof value === "undefined" ? (multiple ? [] : null) : value}
        multiple={multiple as undefined}
        onChange={onChange}
        disabled={disabled}
        nullable={nullable as undefined}
      >
        {label && <Combobox.Label className="label">{label}</Combobox.Label>}
        <div className="relative flex items-center">
          <Combobox.Button as="div" className="w-full">
            <Combobox.Input
              as={Fragment}
              onChange={(e) => onInputChange?.(e)}
              displayValue={onRenderValue}
            >
              <>
                <div
                  ref={containerRef}
                  onClick={setPosition}
                  className={twMerge(
                    "autocomplete__input__container",
                    multiple && "autocomplete__input__container--multiple",
                    hasError && "autocomplete__input__container--error",
                    className
                  )}
                >
                  {startAdornment && (
                    <Combobox.Button className="autocomplete__startAdornment">
                      {startAdornment}
                    </Combobox.Button>
                  )}
                  {Array.isArray(value) &&
                    renderChips &&
                    multiple &&
                    value.map((item: any, index) => (
                      <Chip
                        key={item?.id ?? item}
                        className="autocomplete__chip"
                        onDelete={() => handleOnDelete(index)}
                      >
                        {onRenderValue(item)}
                      </Chip>
                    ))}
                  <input
                    disabled={disabled}
                    data-testid="arke-autocomplete"
                    className="autocomplete__input"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      onInputChange?.(e);
                    }}
                    onBlur={handleBlur}
                    onKeyDown={(e) => {
                      if (
                        multiple &&
                        e.code === "Backspace" &&
                        Array.isArray(value) &&
                        inputValue.length === 0
                      ) {
                        handleOnDelete(value.length - 1);
                        onChange(value as TActualValue);
                      }
                    }}
                  />

                  <div className="autocomplete__endAdornment">
                    {shouldDisplayClear && (
                      <button
                        className="autocomplete__clear"
                        onClick={handleClear}
                      >
                        {clearIcon ? clearIcon : <ClearIcon />}
                      </button>
                    )}
                    <Combobox.Button>
                      {!endAdornment ? <ArrowIcon /> : endAdornment}
                    </Combobox.Button>
                  </div>
                </div>
              </>
            </Combobox.Input>
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options
            className="autocomplete__options"
            style={getPosition()}
          >
            {filteredOptions?.length === 0 && (
              <li className={twMerge("autocomplete__option")}>Nothing found</li>
            )}
            {filteredOptions?.map((val, index) => (
              <Combobox.Option key={index} value={val} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={twMerge(
                      "autocomplete__option",
                      (selected || active) && "autocomplete__option--active"
                    )}
                  >
                    {renderOption ? renderOption(val) : renderValue(val)}
                  </li>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
        {helperText && (
          <div
            className={twMerge(
              "mt-2 text-sm",
              hasError ? "text-error" : "opacity-50"
            )}
          >
            {helperText}
          </div>
        )}
      </Combobox>
    </div>
  );
}

export default Autocomplete;
