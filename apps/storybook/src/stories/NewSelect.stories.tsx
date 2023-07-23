import { NewSelect as Select } from "@arkejs/ui";
import { Meta, StoryObj } from "@storybook/react";

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
  return (
    <Select label="test" helperText="test" placeholder="test">
      <Select.Options>
        {departments.map((dpt) => (
          <Select.Option key={dpt.id} value={dpt.id}>
            {dpt.name}
          </Select.Option>
        ))}
      </Select.Options>
    </Select>
  );
};
