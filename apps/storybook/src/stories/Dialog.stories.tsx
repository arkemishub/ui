import type { Meta, StoryObj } from "@storybook/react";

import { Button, Dialog } from "@arkejs/ui";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default = (args: Story["args"]) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...args} open={open} onClose={() => setOpen(false)}>
        <Dialog.Head>
          <p className="mb-4 text-lg font-bold">Title Dialog</p>
          <Button
            onClick={() => setOpen(false)}
            className="ml-auto h-6 w-6 p-1"
          >
            <svg
              data-testid="arke-dialog-close"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </Dialog.Head>
        <Dialog.Body>
          <div className="mb-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ultrices mauris malesuada, aliquet nisl ornare, pellentesque
              risus. Donec ut orci tempus, tincidunt purus sit amet, egestas
              magna. Duis quis augue semper, varius eros vitae, aliquam urna.
              Vestibulum tortor leo, porttitor vitae magna non, ultrices
              porttitor odio. Praesent lorem enim, cursus vitae magna ut,
              accumsan aliquam purus. Suspendisse ligula justo, placerat sit
              amet iaculis eu, hendrerit ac mauris. Etiam ultrices, turpis sit
              amet vestibulum porttitor, velit sem facilisis dui, id semper
              augue purus non neque. Curabitur commodo nibh sed viverra commodo.
              Sed nec ligula sapien. In hac habitasse platea dictumst. Maecenas
              sed ornare ex, in ultricies dui. Praesent vitae dui at leo
              volutpat pulvinar. Duis lacinia magna et dictum facilisis.
              Phasellus sit amet sollicitudin erat. Nulla efficitur ullamcorper
              urna et tempus. Vivamus nec diam quis mi vehicula vestibulum.
              Praesent in dolor lorem. Donec sit amet orci mattis, malesuada est
              accumsan, imperdiet diam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas porttitor turpis ac mauris ultrices
              maximus. Fusce eget dignissim dolor, non laoreet orci. Nunc
              hendrerit venenatis rutrum. Morbi lacinia consequat nisi, vitae
              lobortis orci porta quis. Quisque tincidunt dictum nunc, a dapibus
              eros vehicula nec. Donec finibus urna ut placerat finibus. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              congue sapien nisl, quis cursus turpis aliquam at.
            </p>
          </div>
        </Dialog.Body>
      </Dialog>
    </>
  );
};
