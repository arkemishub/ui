import { PropsWithChildren, useCallback } from "react";
import { cn } from "../../lib/utils";

const classNames = {
  option: cn("cursor-pointer px-4 py-1", "select__option"),
  highlightedOption: cn(
    "bg-primary text-primary-contrast",
    "select__option--highlighted"
  ),
  activeOption: cn(
    "bg-primary text-primary-contrast",
    "select__option--active"
  ),
};

type SelectOptionProps<TValue> = PropsWithChildren<{
  value: TValue;
  className?: string;
  readonly onChange?: (value: TValue) => void;
  readonly onHighlightChange?: (index: number) => void;
  readonly index: number;
  readonly isSelected: boolean;
  readonly isHighlighted?: boolean;
}>;

function SelectOption<TValue>({
  isSelected,
  children,
  className,
  isHighlighted,
  onChange,
  value,
  onHighlightChange,
  index,
}: SelectOptionProps<TValue>) {
  const handleClick = useCallback(() => {
    onChange?.(value);
  }, [onChange, value]);

  const handleMouseOver = useCallback(() => {
    onHighlightChange?.(index);
  }, [onHighlightChange, index]);

  return (
    <div
      className={cn(
        classNames.option,
        isHighlighted && classNames.highlightedOption,
        isSelected && classNames.activeOption,
        className
      )}
      role="option"
      aria-selected={isSelected}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      {children}
    </div>
  );
}

export type { SelectOptionProps };
export default SelectOption;
