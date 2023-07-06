import { Alert } from "@arkejs/ui";
import React from "react";

function MyAlert() {
  return (
    <Alert color="warning" title="Warning">
      <p className="text-sm">Hey! I am warning you :)</p>
    </Alert>
  );
}
export default MyAlert;
