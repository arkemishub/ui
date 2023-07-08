import type { Meta, StoryObj } from "@storybook/react";

import { Button, Drawer } from "@arkejs/ui";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default = (args: Story["args"]) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        {...args}
        title="Drawer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="mb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ultrices mauris malesuada, aliquet nisl ornare, pellentesque risus.
            Donec ut orci tempus, tincidunt purus sit amet, egestas magna. Duis
            quis augue semper, varius eros vitae, aliquam urna. Vestibulum
            tortor leo, porttitor vitae magna non, ultrices porttitor odio.
            Praesent lorem enim, cursus vitae magna ut, accumsan aliquam purus.
            Suspendisse ligula justo, placerat sit amet iaculis eu, hendrerit ac
            mauris. Etiam ultrices, turpis sit amet vestibulum porttitor, velit
            sem facilisis dui, id semper augue purus non neque. Curabitur
            commodo nibh sed viverra commodo. Sed nec ligula sapien. In hac
            habitasse platea dictumst. Maecenas sed ornare ex, in ultricies dui.
            Praesent vitae dui at leo volutpat pulvinar. Duis lacinia magna et
            dictum facilisis. Phasellus sit amet sollicitudin erat. Nulla
            efficitur ullamcorper urna et tempus. Vivamus nec diam quis mi
            vehicula vestibulum. Praesent in dolor lorem. Donec sit amet orci
            mattis, malesuada est accumsan, imperdiet diam. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Maecenas porttitor turpis ac
            mauris ultrices maximus. Fusce eget dignissim dolor, non laoreet
            orci. Nunc hendrerit venenatis rutrum. Morbi lacinia consequat nisi,
            vitae lobortis orci porta quis. Quisque tincidunt dictum nunc, a
            dapibus eros vehicula nec. Donec finibus urna ut placerat finibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue sapien nisl, quis cursus turpis aliquam at.
          </p>
        </div>
      </Drawer>
    </>
  );
};
