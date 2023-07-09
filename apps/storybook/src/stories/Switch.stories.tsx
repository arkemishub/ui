import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@arkejs/ui";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default = (args: Story["args"]) => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      {...args}
      checked={checked}
      color="primary"
      onChange={() => setChecked((prevState) => !prevState)}
    />
  );
};
