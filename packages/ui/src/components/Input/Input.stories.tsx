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

import { Input } from "./index";
import React, { ChangeEventHandler, ReactNode, useState } from "react";
import { IInputProps } from "./Input.types";
import { useArgs } from "@storybook/client-api";
import {
  CopyIcon,
  CreditCardIcon,
  EyeIcon,
  EyeSlashIcon,
  InfoIcon,
  ItaIcon,
  PhoneIcon,
  UsaIcon,
  UserIcon,
} from "../../storiesUtils/Icons";
import { Select } from "../Select";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    value: {
      defaultValue: "",
    },
    label: {
      defaultValue: "Label",
    },
    name: {
      defaultValue: "test",
    },
  },
};

export const Default = (args: IInputProps) => {
  const [{ value }, updateArgs] = useArgs();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    updateArgs({ value: e.target.value });

  return (
    <>
      <Input {...args} value={value} onChange={handleChange} />
      <Input {...args} disabled />
    </>
  );
};

export const Adornments = (args: IInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [{ value }, updateArgs] = useArgs();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    updateArgs({ value: e.target.value });

  return (
    <div className="flex flex-col gap-2">
      <Input
        label="Username"
        placeholder="Add your username"
        startAdornment={<UserIcon />}
      />
      <Input
        label="Password"
        placeholder="**********"
        value={value}
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        endAdornment={
          <span
            role="presentation"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </span>
        }
      />
      <Input
        label="Username"
        placeholder="Add your username"
        startAdornment={<UserIcon />}
        endAdornment={<InfoIcon />}
      />
      <Input
        label="Website"
        placeholder="Add your credit website"
        prefixAdornment={<div>https://</div>}
        suffixAdornment={<div>Copy</div>}
      />
      <Input
        hasError
        label="Credit Card"
        placeholder="Add your credit card name"
        helperText="Insert your credit card"
        endAdornment={<CreditCardIcon />}
      />
      <Input
        label="Unit"
        placeholder="Add your measure unit"
        suffixAdornment={"px"}
      />
      <Input
        label="Full optional"
        placeholder="Add your text"
        helperText="This is an amazing input"
        startAdornment={<EyeIcon />}
        endAdornment={<InfoIcon />}
        prefixAdornment={<div>https://</div>}
        suffixAdornment={
          <div className="flex items-center gap-1">
            <CopyIcon />
            <p>Copy</p>
          </div>
        }
      />
    </div>
  );
};

export const Complex = (args: IInputProps) => {
  const [currency, setCurrency] = useState<{ value: string; label: string }>();
  const [phonePrefix, setPhonePrefix] = useState<{
    value: string;
    label: string;
    icon(): ReactNode;
  }>();

  const currencyValues = [
    { label: "EUR", value: "euro" },
    { label: "USD", value: "usd" },
  ];

  const phoneValues = [
    {
      icon: () => <ItaIcon className="w-4 h-4" />,
      label: "Italia",
      value: "it",
    },
    {
      icon: () => <UsaIcon className="w-4 h-4" />,
      label: "United States",
      value: "en",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <Input
        label="Currency"
        placeholder="Insert value"
        helperText="This is an amazing currency input"
        endAdornment={<InfoIcon />}
        suffixAdornment={
          <Select
            values={currencyValues}
            value={currency}
            onChange={(val) => setCurrency(val)}
            renderLabel={(val) => val.label}
            className="border-none min-w-[inherit]"
          />
        }
      />
      <Input
        label="Phone"
        placeholder="Add your phone number"
        startAdornment={<PhoneIcon className="w-5 h-5" />}
        prefixAdornment={
          <Select
            values={phoneValues}
            value={phonePrefix}
            onChange={(val) => setPhonePrefix(val)}
            renderLabel={(val) => val.icon()}
            renderOption={(val) => (
              <div className="flex items-center gap-2 whitespace-nowrap">
                {val.icon()}
                {val.label}
              </div>
            )}
            className="p-0 border-none min-w-[inherit]"
          />
        }
      />
    </div>
  );
};
