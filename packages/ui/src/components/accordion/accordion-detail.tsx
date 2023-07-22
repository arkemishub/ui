import { Transition } from "@headlessui/react";
import { AccordionDetailProps } from "./accordion.types";
import { cn } from "../../lib/utils";

const classNames = {
  detail: cn("relative", "accordion__detail"),
};

function AccordionDetail({
  children,
  expanded,
  className,
}: AccordionDetailProps) {
  return (
    <Transition
      show={expanded}
      enter="transition-all ease-in-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all ease-in-out duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      data-testid="arke-accordion-detail"
      className={cn(
        classNames.detail,
        !expanded ? "h-0 overflow-hidden" : "h-fit",
        className
      )}
    >
      {children}
    </Transition>
  );
}

export default AccordionDetail;
