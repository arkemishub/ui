import type { Meta } from "@storybook/react";

import { Button, Popover } from "@arkejs/ui";

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;

export const Default = () => (
  <div className="h-[500px]">
    <Popover
      className="p-4"
      popover={
        <div className="bg-secondary rounded-theme text-secondary-contrast px-4 py-2 text-sm">
          Hey! I am a popover
        </div>
      }
    >
      <Button color="primary">Click me</Button>
    </Popover>
  </div>
);
