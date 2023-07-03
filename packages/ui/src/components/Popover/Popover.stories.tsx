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

import { IPopopverProps, Popover } from "./index";
import React from "react";
import { Button } from "../Button";

export default {
  title: "Popover",
  component: Popover,
};

export const Default = (args: Partial<IPopopverProps>) => {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <Popover
        className="p-4"
        popover={
          <div className="bg-secondary text-secondary-contrast px-4 py-2 rounded-theme">
            Hey! I am a f**cking popover
          </div>
        }
        {...args}
      >
        <Button color="primary">Click me</Button>
      </Popover>
    </div>
  );
};
