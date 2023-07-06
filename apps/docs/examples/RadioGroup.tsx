import { Radio, RadioGroup } from "@arkejs/ui";
import React from "react";

function MyRadioGroup() {
  const [value, setValue] = React.useState("");
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e?.target.value ?? "")}>
      <Radio color="primary" value="first" label="First" />
      <Radio color="primary" value="second" label="Second" />
      <Radio color="primary" value="third" label="Third" />
      <Radio color="primary" value="fourth" label="Fourth" />
    </RadioGroup>
  );
}

export default MyRadioGroup;
