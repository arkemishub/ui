import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "@arkejs/ui";

const meta: Meta<typeof Chip> = {
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Chip",
  },
};
