import { Json } from "@arkejs/ui";
import React from "react";

function MyJson() {
  const [value, setValue] = React.useState("{}");

  return (
    <div className="h-[300px] w-full">
      <Json onChange={(value) => setValue(value)} value={value} />
    </div>
  );
}

export default MyJson;
