import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@arkejs/ui";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "w-40 h-20",
  },
};
