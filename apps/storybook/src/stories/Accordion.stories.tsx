import type { Meta } from "@storybook/react";

import { Accordion } from "@arkejs/ui";
import { useState } from "react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

export const Default = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <Accordion expanded={expanded} onChange={() => setExpanded((p) => !p)}>
        <Accordion.Summary expandIcon={"^"}>
          <p>Accordion 1</p>
        </Accordion.Summary>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <hr />
      <Accordion
        expanded={false}
        disabled
        onChange={() => setExpanded((p) => !p)}
      >
        <Accordion.Summary expandIcon={"^"}>
          <p>Disabled Accordion 3</p>
        </Accordion.Summary>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </div>
  );
};
