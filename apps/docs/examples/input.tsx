import { Input } from "@arkejs/ui";
import React from "react";

function MyInput() {
  const [value, setValue] = React.useState("");
  return (
    <div className="min-w-[80%]">
      <Input
        label="Input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default MyInput;
