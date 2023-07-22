import { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

const classNames = {
  placeholder: cn("text-neutral", "select__placeholder"),
};

function SelectPlaceholder({ children }: PropsWithChildren<{}>) {
  return children && <span className={classNames.placeholder}>{children}</span>;
}

export default SelectPlaceholder;
