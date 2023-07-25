import { cn } from "../../lib/utils";
import {
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
} from "react";
import { HighlightType } from "./select.types";
import { useSelect } from "./select";

type SelectOptionsProps = PropsWithChildren<{
  className?: string;
}>;

const classNames = {
  popper: cn("z-20 mt-2", "select__options__popper"),
  options: cn(
    "w-full overflow-y-auto max-h-[220px] outline-none rounded-theme-sm bg-background text-background-contrast py-2 border border-neutral",
    "select__options"
  ),
  closedOptions: cn("hidden", "select__options--closed"),
};

function SelectOptions({ className, children, ...rest }: SelectOptionsProps) {
  const {
    open,
    highlightOption,
    highlightedIndex,
    options,
    popper,
    optionsRef,
    selectOption,
    closeOptions,
  } = useSelect();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          highlightOption(HighlightType.Previous);
          return;
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          highlightOption(HighlightType.Next);
          return;
        case "Enter":
        case " ":
          event.preventDefault();
          if (highlightedIndex !== null) {
            const option = options[highlightedIndex];
            if (option) {
              selectOption(option.id);
            }
          }
          return;
        case "Esc":
        case "Escape":
          event.preventDefault();
          closeOptions();
          return;
        case "PageUp":
        case "Home":
          event.preventDefault();
          highlightOption(HighlightType.First);
          return;
        case "PageDown":
        case "End":
          event.preventDefault();
          highlightOption(HighlightType.Last);
          return;
      }
    },
    [highlightedIndex, options]
  );

  useEffect(() => {
    if (!open) return;

    optionsRef?.current?.focus();
  }, [open, optionsRef]);

  return (
    <div
      ref={popper.popperRef}
      style={popper.styles}
      {...popper.attributes}
      className={classNames.popper}
    >
      <div
        ref={optionsRef}
        tabIndex={0}
        role="presentation"
        className={cn(
          classNames.options,
          !open && classNames.closedOptions,
          className
        )}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}

SelectOptions.displayName = "SelectOptions";

export type { SelectOptionsProps };
export default SelectOptions;