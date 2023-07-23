import { cn } from "../../lib/utils";
import { CSSProperties, forwardRef, PropsWithChildren } from "react";

type SelectOptionsProps = PropsWithChildren<
  { className?: string } & Readonly<{}>
>;

const classNames = {
  options: cn(
    "mt-2 w-full overflow-y-auto max-h-[220px] rounded-theme-sm bg-background text-background-contrast py-2 border border-neutral",
    "select__options"
  ),
};

const SelectOptions = forwardRef<HTMLDivElement, SelectOptionsProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        role="presentation"
        className={cn(classNames.options, className)}
      >
        {children}
      </div>
    );
  }
);

SelectOptions.displayName = "SelectOptions";

export default SelectOptions;
