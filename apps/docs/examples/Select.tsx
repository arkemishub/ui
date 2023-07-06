import { Select } from "@arkejs/ui";
import React from "react";

function MySelect() {
  const departments = [
    { id: 1, name: "Marketing", contact: "Durward Reynolds" },
    { id: 2, name: "HR", contact: "Kenton Towne" },
    { id: 3, name: "Sales", contact: "Therese Wunsch" },
    { id: 4, name: "Finance", contact: "Benedict Kessler" },
    { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
  ];

  const [value, setValue] = React.useState(departments[0]);

  return (
    <Select
      label="Select an item"
      value={value}
      values={departments}
      onChange={(value) => setValue(value)}
      renderLabel={(value) => value.name}
    />
  );
}

export default MySelect;
