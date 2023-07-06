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

import React, { useState } from "react";
import { IAutocompleteProps } from "./Autocomplete.types";
import { Autocomplete } from "./index";
import { useArgs } from "@storybook/client-api";
import { ChevronDownIcon, ClearIcon, UserIcon } from "../../storiesUtils/Icons";

const departments = [
  { id: 1, name: "Marketing", contact: "Durward Reynolds" },
  { id: 2, name: "HR", contact: "Kenton Towne" },
  { id: 3, name: "Sales", contact: "Therese Wunsch" },
  { id: 4, name: "Finance", contact: "Benedict Kessler" },
  { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
];

export default {
  title: "Autocomplete",
  component: Autocomplete,
  argTypes: {
    getDisplayValue: {
      defaultValue: (val: { name: string }) => val?.name,
    },
    values: {
      defaultValue: departments,
    },
    placeholder: {
      defaultValue: "Search here...",
    },
  },
};

export const Default = (args: IAutocompleteProps<unknown, false, false>) => {
  const [{ value, values }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    <div className="flex flex-col gap-2">
      <Autocomplete
        {...args}
        value={value}
        values={filteredValues}
        onInputChange={(e) => setSearch(e.target.value)}
        onChange={handleChange}
      />
      <Autocomplete
        {...args}
        value={value}
        values={filteredValues}
        onInputChange={(e) => setSearch(e.target.value)}
        onChange={handleChange}
        startAdornment={<UserIcon />}
        endAdornment={<ChevronDownIcon className="w-4 h-4" />}
        clearIcon={<ClearIcon className="w-4 h-4 stroke-black" />}
        clearable
        nullable
      />
      <Autocomplete
        {...args}
        disabled
        value={value}
        values={filteredValues}
        onInputChange={(e) => setSearch(e.target.value)}
        onChange={handleChange}
        startAdornment={<UserIcon />}
      />
    </div>
  );
};

export const Nullable = (args: IAutocompleteProps<unknown, false, false>) => {
  const [{ value, values }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    <>
      <button onClick={() => handleChange(null)}>reset</button>
      <Autocomplete
        {...args}
        nullable
        value={value}
        values={filteredValues}
        onInputChange={(e) => {
          setSearch(e.target.value);
        }}
        onChange={handleChange}
      />
    </>
  );
};

export const Clearable = (args: IAutocompleteProps<unknown, false, false>) => {
  const [{ value, values }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    <Autocomplete
      {...args}
      nullable
      clearable
      value={value}
      values={filteredValues}
      onInputChange={(e) => {
        setSearch(e.target.value);
      }}
      onChange={handleChange}
    />
  );
};

export const Multiple = (args: IAutocompleteProps<unknown, true, false>) => {
  const [{ value, values }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => {
    updateArgs({ value: val });
  };

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    <Autocomplete
      {...args}
      label="Select an item"
      value={value}
      nullable
      clearable
      values={filteredValues}
      onInputChange={(e) => setSearch(e.target.value)}
      onChange={handleChange}
      multiple
    />
  );
};

export const Icons = (args: IAutocompleteProps<unknown, false, false>) => {
  const [{ value, values }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  const StartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );

  const EndIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  );

  return (
    <Autocomplete
      {...args}
      value={value}
      values={filteredValues}
      onInputChange={(e) => setSearch(e.target.value)}
      onChange={handleChange}
      startAdornment={<StartIcon />}
      endAdornment={<EndIcon />}
    />
  );
};
