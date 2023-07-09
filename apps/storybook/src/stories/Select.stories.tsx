import { Select } from "@arkejs/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/client-api";

const departments = [
  { id: 1, name: "Marketing", contact: "Durward Reynolds" },
  { id: 2, name: "HR", contact: "Kenton Towne" },
  { id: 3, name: "Sales", contact: "Therese Wunsch" },
  { id: 4, name: "Finance", contact: "Benedict Kessler" },
  { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
];

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default = (args: Story["args"]) => {
  const [{ value, values = departments }, updateArgs] = useArgs();

  const handleChange = (val: unknown) => updateArgs({ value: val });

  return (
    <Select
      {...args}
      label="Select an item"
      value={value}
      onChange={handleChange}
      values={values}
      renderLabel={(item) => item?.name}
    />
  );
};

export const Multiple = (args: Story["args"]) => {
  const [{ value, values = departments }, updateArgs] = useArgs();

  const handleChange = (val: unknown) => updateArgs({ value: val });

  return (
    <Select
      {...args}
      label="Select an item"
      value={value}
      onChange={handleChange}
      values={values}
      multiple
      renderLabel={(item) => item?.name}
    />
  );
};
