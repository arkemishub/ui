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

import { Dialog } from "./index";
import React from "react";
import { IDialogProps } from "./Dialog.types";
import { Button } from "../Button";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Dialog",
  component: Dialog,
  argTypes: {
    open: {
      defaultValue: true,
    },
    title: {
      defaultValue: "Title",
    },
  },
};

export const Default = (args: IDialogProps) => {
  const [{ open }, updateArgs] = useArgs();

  const handleClose = () => updateArgs({ open: false });
  return (
    <Dialog {...args} open={open} onClose={handleClose}>
      <div className="mb-4">
        <p>Modal body!!</p>
      </div>
      <Button fullWidth color="primary" onClick={() => null}>
        Action
      </Button>
    </Dialog>
  );
};
