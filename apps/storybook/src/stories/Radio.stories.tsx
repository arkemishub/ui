import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "@arkejs/ui";

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Radio",
  },
};
