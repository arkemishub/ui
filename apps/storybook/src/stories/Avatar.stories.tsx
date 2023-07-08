import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@arkejs/ui";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    name: "John Doe",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: "secondary",
  },
};
