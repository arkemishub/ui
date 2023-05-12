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

import { RadioGroup } from "./index";
import { IRadioGroupProps } from "./RadioGroup.types";
import React, { useState, useMemo } from "react";
import Radio from "../Radio/Radio";

export default {
  title: "RadioGroup",
  component: RadioGroup,
};

export const Default = (args: Partial<IRadioGroupProps>) => {
  const [selected, setSelected] = useState("");

  return (
    <RadioGroup
      {...args}
      name={"numbers"}
      selected={selected}
      onChange={(e) => setSelected(e ? e.target.value : "")}
    >
      <Radio value="first" label="first" />
      <Radio value="second" label="second" />
      <Radio value="third" label="third" />
      <p>this should not be rendered</p>
      <Radio value="fourth" label="fourth" />
    </RadioGroup>
  );
};
