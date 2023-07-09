import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "@arkejs/ui";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
