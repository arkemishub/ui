import { TextArea } from "@arkejs/ui";
import React from "react";

function MyTextarea() {
  const [value, setValue] = React.useState("");

  return (
    <div className="min-w-[80%]">
      <TextArea
        label="Textarea"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default MyTextarea;
