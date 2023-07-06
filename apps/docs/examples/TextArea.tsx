import { TextArea } from "@arkejs/ui";
import React from "react";

function MyTextarea() {
  const [value, setValue] = React.useState("");

  return (
    <TextArea
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default MyTextarea;
