import React, { useState } from "react";
import { Autocomplete } from "@arkejs/ui";

function MyAutocomplete() {
  const values = [
    { id: 1, name: "Marketing", contact: "Durward Reynolds" },
    { id: 2, name: "HR", contact: "Kenton Towne" },
    { id: 3, name: "Sales", contact: "Therese Wunsch" },
    { id: 4, name: "Finance", contact: "Benedict Kessler" },
    { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
  ];

  const [value, setValue] = useState<{
    id: number;
    name: string;
    contact: string;
  } | null>(null);
  const [search, setSearch] = useState("");

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    <div className="min-w-[80%]">
      <Autocomplete
        label="Search for an item"
        value={value}
        values={filteredValues}
        onInputChange={(e) => setSearch(e.target.value)}
        onChange={(val) => setValue(val)}
        renderLabel={(val) => val?.name}
      />
    </div>
  );
}

export default MyAutocomplete;
