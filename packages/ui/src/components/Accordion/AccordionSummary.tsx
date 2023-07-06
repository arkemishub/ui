import { IAccordionProps } from "./Accordion.types";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface IAccordionSummaryProps extends Omit<IAccordionProps, "expanded"> {
  index?: number;
  expandIcon: ReactNode;
  expanded?: boolean;
}

function AccordionSummary({
  children,
  expanded,
  expandIcon,
  onChange,
  index,
  disabled,
}: IAccordionSummaryProps) {
  return (
    <div
      className="accordion__summary"
      tabIndex={index}
      role="button"
      onClick={() => !disabled && onChange?.()}
      onKeyDown={() => !disabled && onChange?.()}
      data-testid="arke-accordion-summary"
    >
      <div className="accordion__summary__content">{children}</div>
      <div
        className={twMerge(
          "accordion__summary__icon",
          !disabled ? "cursor-pointer" : "cursor-default",
          expanded && "rotate-180"
        )}
        data-testid="arke-accordion-icon"
      >
        {onChange && expandIcon}
      </div>
    </div>
  );
}

export default AccordionSummary;
