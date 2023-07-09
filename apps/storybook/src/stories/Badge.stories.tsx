import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@arkejs/ui";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Hey",
    label: "1",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: "secondary",
  },
};
