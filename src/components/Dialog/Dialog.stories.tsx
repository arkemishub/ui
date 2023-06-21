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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultrices mauris malesuada, aliquet nisl ornare, pellentesque risus.
          Donec ut orci tempus, tincidunt purus sit amet, egestas magna. Duis
          quis augue semper, varius eros vitae, aliquam urna. Vestibulum tortor
          leo, porttitor vitae magna non, ultrices porttitor odio. Praesent
          lorem enim, cursus vitae magna ut, accumsan aliquam purus. Suspendisse
          ligula justo, placerat sit amet iaculis eu, hendrerit ac mauris. Etiam
          ultrices, turpis sit amet vestibulum porttitor, velit sem facilisis
          dui, id semper augue purus non neque. Curabitur commodo nibh sed
          viverra commodo. Sed nec ligula sapien. In hac habitasse platea
          dictumst. Maecenas sed ornare ex, in ultricies dui. Praesent vitae dui
          at leo volutpat pulvinar. Duis lacinia magna et dictum facilisis.
          Phasellus sit amet sollicitudin erat. Nulla efficitur ullamcorper urna
          et tempus. Vivamus nec diam quis mi vehicula vestibulum. Praesent in
          dolor lorem. Donec sit amet orci mattis, malesuada est accumsan,
          imperdiet diam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas porttitor turpis ac mauris ultrices maximus. Fusce eget
          dignissim dolor, non laoreet orci. Nunc hendrerit venenatis rutrum.
          Morbi lacinia consequat nisi, vitae lobortis orci porta quis. Quisque
          tincidunt dictum nunc, a dapibus eros vehicula nec. Donec finibus urna
          ut placerat finibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum congue sapien nisl, quis cursus turpis
          aliquam at.
        </p>
      </div>
      <Button fullWidth color="primary" onClick={() => null}>
        Action
      </Button>
    </Dialog>
  );
};
