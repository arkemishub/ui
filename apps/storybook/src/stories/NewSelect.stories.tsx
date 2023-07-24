import { NewSelect as Select } from "@arkejs/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

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
  const [value, setValue] = useState(null);
  return (
    <Select
      onChange={(value) => setValue(value)}
      label="test"
      helperText="test"
      placeholder="test"
    >
      <Select.Button>
        {departments.find((item) => item.id == value)?.name}
      </Select.Button>
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

export const WithObject = (args: Story["args"]) => {
  const [value, setValue] = useState(null);
  return (
    <Select
      onChange={(value) => setValue(value)}
      label="test"
      helperText="test"
      placeholder="test"
    >
      <Select.Button>{value?.name}</Select.Button>
      <Select.Options>
        {departments.map((dpt) => (
          <Select.Option key={dpt.id} value={dpt}>
            {dpt.name}
          </Select.Option>
        ))}
      </Select.Options>
    </Select>
  );
};

export const Multiple = (args: Story["args"]) => {
  const [value, setValue] = useState([]);

  return (
    <Select
      onChange={(value) => setValue(value)}
      label="test"
      helperText="test"
      placeholder="test"
      multiple
    >
      <Select.Button>
        {departments
          .filter((item) => value?.includes(item.id))
          .map((item) => item.name)
          .join(", ")}
      </Select.Button>
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

export const MultipleObjects = (args: Story["args"]) => {
  const [value, setValue] = useState([]);

  return (
    <Select
      onChange={(value) => setValue(value)}
      label="test"
      helperText="test"
      placeholder="test"
      multiple
    >
      <Select.Button>{value.map((item) => item.name).join(", ")}</Select.Button>
      <Select.Options>
        {departments.map((dpt) => (
          <Select.Option key={dpt.id} value={dpt}>
            {dpt.name}
          </Select.Option>
        ))}
      </Select.Options>
    </Select>
  );
};
