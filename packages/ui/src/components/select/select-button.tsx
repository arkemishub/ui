import {
  PropsWithChildren,
  useMemo,
  KeyboardEvent,
  useCallback,
  MouseEventHandler,
} from "react";
import { Button } from "../button";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";
import SelectIcon from "./select-icon";
import { useSelect } from "./select";

type SelectButtonProps = PropsWithChildren<{
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
  placeholder: cn("text-neutral", "select__placeholder"),
  startAdornment: cn(
    "flex items-center px-2 border-r border-neutral w-fit group-focus-within:border-primary",
    "select__startAdornment"
  ),
  endAdornment: cn(
    "flex items-center px-2 border-l border-neutral w-fit group-focus-within:border-primary",
    "select__endAdornment"
  ),
};

const SelectButton = ({ children, className }: SelectButtonProps) => {
  const {
    openOptions,
    internalValue,
    disabled,
    hasError,
    placeholder,
    startAdornment,
    endAdornment,
    popper: { buttonRef },
  } = useSelect();

  const hasValue = useMemo(
    () =>
      Array.isArray(internalValue)
        ? internalValue && internalValue.length > 0
        : internalValue,
    [internalValue]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case "ArrowDown":
        case "ArrwoUp":
        case "Enter":
        case " ": {
          event.preventDefault();
          openOptions();
        }
      }
    },
    [openOptions]
  );

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      openOptions();
    },
    []
  );

  return (
    <div className={classNames.container} ref={buttonRef}>
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
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="combobox"
      >
        {hasValue ? children : placeholder}
        <SelectIcon />
      </Button>
      {endAdornment && (
        <span className={classNames.endAdornment}>{endAdornment}</span>
      )}
    </div>
  );
};

SelectButton.displayName = "SelectButton";

export default SelectButton;
