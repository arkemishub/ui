import { Checkbox } from "@arkejs/ui";
import React from "react";

function MyCheckbox() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      label="Checkbox"
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}

export default MyCheckbox;
