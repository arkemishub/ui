import type { Meta } from "@storybook/react";

import { Json } from "@arkejs/ui";
import { useState } from "react";

const meta: Meta<typeof Json> = {
  component: Json,
};

export default meta;

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <div className="h-[500px]">
      <Json value={value} onChange={(value) => setValue(value)} />
    </div>
  );
};
