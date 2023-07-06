import { Input } from "@arkejs/ui";
import React from "react";

function MyInput() {
  const [value, setValue] = React.useState("");
  return (
    <Input value={value} onChange={(event) => setValue(event.target.value)} />
  );
}

export default MyInput;
