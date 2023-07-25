import { Select } from "@arkejs/ui";
import { Meta } from "@storybook/react";
import { useState } from "react";
import { BuildingIcon, ShipIcon } from "lucide-react";

type Department = {
  id: number;
  name: string;
  contact: string;
};

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

export const Default = () => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <Select
      onChange={setValue}
      label="test"
      helperText="test"
      placeholder="test"
      value={value}
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

export const WithObject = () => {
  const [value, setValue] = useState<Department | null>(null);
  return (
    <Select
      onChange={setValue}
      label="test"
      helperText="test"
      placeholder="test"
      value={value}
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

export const Multiple = () => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <Select
      onChange={(value) => setValue(value)}
      label="test"
      helperText="test"
      placeholder="test"
      multiple
      value={value}
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

export const MultipleObjects = () => {
  const [value, setValue] = useState<Department[]>([]);

  return (
    <Select
      onChange={(v) => setValue(v)}
      label="test"
      helperText="test"
      placeholder="test"
      multiple
      value={value}
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

export const WithAdornments = () => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <Select
      onChange={setValue}
      label="test"
      helperText="test"
      placeholder="test"
      startAdornment={<BuildingIcon />}
      endAdornment={<ShipIcon />}
      value={value}
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
