import { cn } from "../../lib/utils";
import { PropsWithChildren } from "react";

const classNames = {
  placeholder: cn("text-neutral", "select__placeholder"),
  value: cn("select__value"),
};

function SelectValue({
  placeholder,
  children,
}: PropsWithChildren<{ placeholder?: string }>) {
  return (
    <span
      className={cn(
        classNames.value,
        !children && placeholder && classNames.placeholder
      )}
    >
      {children ?? placeholder}
    </span>
  );
}

export default SelectValue;
