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

import { useArgs } from "@storybook/client-api";
import React from "react";
import Drawer from "./Drawer";
import { IDrawerProps } from "./Drawer.types";

export default {
  title: "Drawer",
  component: Drawer,
  argTypes: {
    open: {
      defaultValue: true,
    },
    title: {
      defaultValue: "Title",
    },
  },
};

export const Default = (args: Partial<IDrawerProps>) => {
  const [{ open }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ open: false });

  return (
    <div className="relative h-screen flex justify-center items-center">
      <Drawer {...args} open={open} onClose={handleClose}>
        Hi! I am the content.
      </Drawer>
    </div>
  );
};
