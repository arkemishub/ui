import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "@arkejs/ui";

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    children: "Alert body",
    title: "Alert",
    color: "info",
  },
};

export const Success: Story = {
  args: {
    ...Info.args,
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    ...Info.args,
    color: "warning",
  },
};

export const Error: Story = {
  args: {
    ...Info.args,
    color: "error",
  },
};
