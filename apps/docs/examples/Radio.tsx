import { Radio } from "@arkejs/ui";
import React from "react";

function MyRadio() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Radio
      label="Radio"
      color="primary"
      checked={checked}
      onChange={() => setChecked((prevState) => !prevState)}
    />
  );
}

export default MyRadio;
