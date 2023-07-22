import { Switch } from "@arkejs/ui";
import React from "react";

function MySwitch() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch
      color="primary"
      checked={checked}
      onChange={() => setChecked((prevState) => !prevState)}
    />
  );
}

export default MySwitch;
