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

import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Chip } from "../chip";
import useContainerRect from "../../hooks/useContainerRect";
import { AutocompleteProps } from "./autocomplete.types";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";

const classNames = {
  inputContainer: cn(
    sharedClassNames.inputContainer,
    "autocomplete__input__container"
  ),
  multipleInputContainer: cn(
    "flex-wrap items-center",
    "autocomplete__input__container--multiple"
  ),
  errorInputContainer: cn(
    "outline outline-error focus:outline-error",
    "autocomplete__input__container--error"
  ),
  disabledInputContainer: cn(
    "opacity-50 cursor-not-allowed",
    "autocomplete__input__container--disabled"
  ),
  input: cn(
    "px-2 grow focus-visible:outline-0 bg-background text-background-contrast h-[40px]",
    "autocomplete__input"
  ),
  chip: cn("max-h-8 m-1", "autocomplete__chip"),
  options: cn(
    "fixed z-20 mt-2 w-full overflow-y-auto max-h-[220px] rounded-theme-sm bg-background text-background-contrast py-2 border border-neutral",
    "autocomplete__options"
  ),
  option: cn("cursor-pointer px-4 py-1", "autocomplete__option"),
  activeOption: cn(
    "bg-primary text-primary-contrast",
    "autocomplete__option--active"
  ),
  clear: cn("mr-2 px-0", "autocomplete__clear"),
  startAdornment: cn("px-1 flex items-center", "autocomplete__startAdornment"),
  endAdornment: cn("px-1 flex items-center", "autocomplete__endAdornment"),
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
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
    className={"stroke-neutral h-4 w-4 cursor-pointer stroke-2"}
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
}: AutocompleteProps<
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
                  className={cn(
                    classNames.inputContainer,
                    disabled && classNames.disabledInputContainer,
                    multiple && classNames.multipleInputContainer,
                    hasError && classNames.errorInputContainer,
                    className
                  )}
                >
                  {startAdornment && (
                    <Combobox.Button className={classNames.startAdornment}>
                      {startAdornment}
                    </Combobox.Button>
                  )}
                  {Array.isArray(value) &&
                    renderChips &&
                    multiple &&
                    value.map((item: any, index) => (
                      <Chip
                        key={item?.id ?? item}
                        className={classNames.chip}
                        onDelete={() => handleOnDelete(index)}
                      >
                        {onRenderValue(item)}
                      </Chip>
                    ))}
                  <input
                    disabled={disabled}
                    data-testid="arke-autocomplete"
                    className={classNames.input}
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

                  <div className={classNames.endAdornment}>
                    {shouldDisplayClear && (
                      <button
                        className={classNames.clear}
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
            className={classNames.options}
            style={getPosition()}
          >
            {values?.length === 0 && (
              <li className={classNames.options}>Nothing found</li>
            )}
            {values?.map((val, index) => (
              <Combobox.Option key={index} value={val} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={cn(
                      "cursor-pointer px-4 py-1",
                      classNames.option,
                      (selected || active) && classNames.activeOption
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
            className={cn(
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
