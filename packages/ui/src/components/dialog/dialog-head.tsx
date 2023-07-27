import { cn } from "../../lib/utils";
import { DialogHeadProps } from "./dialog.types";

const classNames = {
  head: cn(
    "bg-background flex gap-4 sticky top-0 z-10 px-6 mt-4",
    "dialog__head"
  ),
};

function DialogHead({ children, className }: DialogHeadProps) {
  return (
    <div
      className={cn(classNames.head, className)}
      data-testid="arke-dialog-body"
    >
      {children}
    </div>
  );
}

export default DialogHead;
