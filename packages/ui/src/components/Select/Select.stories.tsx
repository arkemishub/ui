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

import React from "react";
import { ISelectProps } from "./Select.types";
import { Select } from "./index";
import { useArgs } from "@storybook/client-api";
import { UserIcon, ChevronDownIcon } from "../../storiesUtils/Icons";

const departments = [
  { id: 1, name: "Marketing", contact: "Durward Reynolds" },
  { id: 2, name: "HR", contact: "Kenton Towne" },
  { id: 3, name: "Sales", contact: "Therese Wunsch" },
  { id: 4, name: "Finance", contact: "Benedict Kessler" },
  { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
];

export default {
  title: "Select",
  component: Select,
  argTypes: {
    renderLabel: {
      defaultValue: (val: { name: string }) => val.name,
    },
    values: {
      defaultValue: departments,
    },
    placeholder: {
      defaultValue: "Select here...",
    },
  },
};

export const Default = (args: ISelectProps<unknown>) => {
  const [{ value }, updateArgs] = useArgs();

  const handleChange = (val: unknown) => updateArgs({ value: val });

  return (
    <>
      <Select
        {...args}
        label="Select an item"
        value={value}
        onChange={handleChange}
      />
      <Select
        {...args}
        label="Select an item"
        value={value}
        onChange={handleChange}
        startAdornment={<UserIcon />}
        endAdornment={<ChevronDownIcon className="w-4 h-4" />}
      />
      <Select
        {...args}
        disabled
        label="Select an item"
        value={value}
        onChange={handleChange}
        startAdornment={<UserIcon />}
      />
    </>
  );
};

export const Multiple = (args: ISelectProps<unknown>) => {
  const [{ value }, updateArgs] = useArgs();

  const handleChange = (val: unknown) => updateArgs({ value: val });

  return <Select {...args} value={value} multiple onChange={handleChange} />;
};
