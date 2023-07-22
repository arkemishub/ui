import { Accordion } from "@arkejs/ui";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

function MyAccordion() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="h-full w-full">
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded((prevState) => !prevState)}
      >
        <Accordion.Summary expandIcon={<ChevronDownIcon />}>
          <p>Accordion 1</p>
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
}

export default MyAccordion;
