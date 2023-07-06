import { Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

export interface IAccordionDetailProps {
  expanded?: boolean;
  children: ReactNode;
  expandIcon?: ReactNode;
}

function AccordionDetail({ children, expanded }: IAccordionDetailProps) {
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
      className={twMerge(
        "accordion__detail",
        !expanded ? "h-0 overflow-hidden" : "h-[40px]"
      )}
    >
      {children}
    </Transition>
  );
}

export default AccordionDetail;
