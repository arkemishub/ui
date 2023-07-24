import { forwardRef, PropsWithChildren, ReactNode, useMemo } from "react";
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
  readonly startAdornment?: ReactNode;
  readonly endAdornment?: ReactNode;
  className?: string;
}>;

const classNames = {
  container: cn(
    sharedClassNames.inputContainer,
    "justify-start p-0 w-full items-stretch group",
    "select__container"
  ),
  button: cn("grow", "select__button"),
  disabled: cn("opacity-50 cursor-not-allowed", "select--disabled"),
  error: cn("outline outline-error focus:outline-error", "select--error"),
  placeholder: cn("text-neutral", "select--placeholder"),
  startAdornment: cn(
    "flex items-center px-2 border-r border-neutral w-fit group-focus-within:border-primary",
    "select__startAdornment"
  ),
  endAdornment: cn(
    "flex items-center px-2 border-l border-neutral w-fit group-focus-within:border-primary",
    "select__endAdornment"
  ),
};

const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  (
    {
      children,
      value,
      onClick,
      className,
      disabled,
      hasError,
      placeholder,
      startAdornment,
      endAdornment,
    },
    ref
  ) => {
    const hasValue = useMemo(
      () => (Array.isArray(value) ? value && value.length > 0 : value),
      [value]
    );

    return (
      <div className={classNames.container}>
        {startAdornment && (
          <div className={classNames.startAdornment}>{startAdornment}</div>
        )}
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
        {endAdornment && (
          <span className={classNames.endAdornment}>{endAdornment}</span>
        )}
      </div>
    );
  }
);

SelectButton.displayName = "SelectButton";

export default SelectButton;
