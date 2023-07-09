import { Alert } from "@arkejs/ui";
import React from "react";

function MyAlert() {
  return (
    <div className="min-w-[80%]">
      <Alert color="warning" title="Warning">
        <p className="text-sm">Hey! I am warning you :)</p>
      </Alert>
    </div>
  );
}
export default MyAlert;
