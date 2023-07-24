import { forwardRef, PropsWithChildren, useMemo } from "react";
import { Button } from "../button";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";
import SelectIcon from "./select-icon";

type SelectButtonProps = PropsWithChildren<{
  readonly onClick: () => void;
  readonly disabled?: boolean;
  readonly hasError?: boolean;
  readonly placeholder?: string;
  readonly value?: any;
  className?: string;
}>;

const classNames = {
  button: cn(
    sharedClassNames.inputContainer,
    "justify-start px-4 w-full",
    "select__container"
  ),
  disabled: cn("opacity-50 cursor-not-allowed", "select--disabled"),
  error: cn("outline outline-error focus:outline-error", "select--error"),
  placeholder: cn("text-neutral", "select--placeholder"),
};

const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  (
    { children, value, onClick, className, disabled, hasError, placeholder },
    ref
  ) => {
    const hasValue = useMemo(
      () => (Array.isArray(value) ? value && value.length > 0 : value),
      [value]
    );

    return (
      <Button
        className={cn(
          classNames.button,
          disabled && classNames.disabled,
          hasError && classNames.error,
          placeholder && !hasValue && classNames.placeholder,
          className
        )}
        onClick={onClick}
        role="combobox"
        ref={ref}
      >
        {hasValue ? children : placeholder}
        <SelectIcon />
      </Button>
    );
  }
);

SelectButton.displayName = "SelectButton";

export default SelectButton;
