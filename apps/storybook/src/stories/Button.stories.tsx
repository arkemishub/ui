import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@arkejs/ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Hey",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: "secondary",
  },
};
