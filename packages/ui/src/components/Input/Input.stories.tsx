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
import React, { ChangeEventHandler } from "react";
import { IInputProps } from "./Input.types";
import { useArgs } from "@storybook/client-api";

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

  return <Input {...args} value={value} onChange={handleChange} />;
};
