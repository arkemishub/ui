import { Select } from "@arkejs/ui";
import React, { useState } from "react";

function MySelect() {
  const departments = [
    { id: 1, name: "Marketing", contact: "Durward Reynolds" },
    { id: 2, name: "HR", contact: "Kenton Towne" },
    { id: 3, name: "Sales", contact: "Therese Wunsch" },
    { id: 4, name: "Finance", contact: "Benedict Kessler" },
    { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
  ];

  const [value, setValue] = useState<number | null>(null);
  return (
    <Select
      onChange={setValue}
      label="My Select"
      placeholder="Select an option..."
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
}

export default MySelect;
