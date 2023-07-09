import type { Meta, StoryObj } from "@storybook/react";

import { Radio, RadioGroup } from "@arkejs/ui";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default = (args: Story["args"]) => {
  const [value, setValue] = useState("");

  return (
    <RadioGroup
      {...args}
      name={"numbers"}
      value={value}
      onChange={(e) => setValue(e ? e.target.value : "")}
    >
      <Radio value="first" label="first" />
      <Radio value="second" label="second" />
      <Radio value="third" label="third" />
      <Radio value="fourth" label="fourth" />
    </RadioGroup>
  );
};
