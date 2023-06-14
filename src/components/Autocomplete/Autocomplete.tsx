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

import { Combobox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { Fragment, useEffect, useState } from "react";
import { IAutocompleteProps } from "./Autocomplete.types";
import { Chip } from "../Chip";

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

function Autocomplete<TValue>({
  values,
  value,
  hasError,
  disabled = false,
  label,
  placeholder,
  multiple,
  renderLabel,
  startAdornment,
  endAdornment,
  helperText,
  onChange,
  onInputChange,
  getDisplayValue,
  renderChips = true,
}: IAutocompleteProps<TValue, boolean | undefined>): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  type TActualValue = true extends typeof multiple ? TValue[] : TValue;

  const onGetDisplayValue = (value: TValue) =>
    (value &&
      (Array.isArray(value)
        ? (value as TValue[]).map((val) => getDisplayValue(val)).join(", ")
        : getDisplayValue(value))) ??
    "";

  useEffect(() => {
    if (multiple) {
      setInputValue("");
    } else {
      setInputValue(onGetDisplayValue(value as TValue));
    }
  }, [value]);

  function handleOnDelete(index: number) {
    if (Array.isArray(value) && multiple) {
      value?.splice(index, 1);
      onChange([...value] as TActualValue);
    }
  }

  return (
    <div className="relative">
      <Combobox
        // temporary fix for HeadlessUI types - https://github.com/tailwindlabs/headlessui/issues/1895
        value={value}
        multiple={multiple as undefined}
        onChange={onChange}
        disabled={disabled}
      >
        {label && <Combobox.Label className="label">{label}</Combobox.Label>}
        <div className="relative flex items-center">
          {startAdornment && (
            <Combobox.Button className="autocomplete__startAdornment">
              {startAdornment}
            </Combobox.Button>
          )}
          <Combobox.Button as="div" className="w-full">
            <Combobox.Input
              as={Fragment}
              onChange={(e) => onInputChange?.(e)}
              displayValue={onGetDisplayValue}
            >
              <>
                <div
                  className={twMerge(
                    "autocomplete__input__container",
                    multiple && "autocomplete__input__container--multiple",
                    hasError && "autocomplete__input__container--error",
                    startAdornment && "pl-10"
                  )}
                >
                  {Array.isArray(value) &&
                    renderChips &&
                    multiple &&
                    value.map((item: any, index) => (
                      <Chip
                        key={item?.id ?? item}
                        className="autocomplete__chip"
                        onDelete={() => handleOnDelete(index)}
                      >
                        {onGetDisplayValue(item)}
                      </Chip>
                    ))}
                  <input
                    data-testid="arke-autocomplete"
                    className="autocomplete__input"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      onInputChange?.(e);
                    }}
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
                </div>
              </>
            </Combobox.Input>
          </Combobox.Button>
          <Combobox.Button className="autocomplete__endAdornment">
            {!endAdornment ? <ArrowIcon /> : endAdornment}
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="autocomplete__options">
            {values?.length === 0 && (
              <li className={twMerge("autocomplete__option")}>Nothing found</li>
            )}
            {values?.map((val, index) => (
              <Combobox.Option key={index} value={val} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={twMerge(
                      "autocomplete__option",
                      (selected || active) && "autocomplete__option--active"
                    )}
                  >
                    {renderLabel ? renderLabel(val) : getDisplayValue(val)}
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
