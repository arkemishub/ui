import { cn } from "../../lib/utils";
import { DialogBodyProps } from "./dialog.types";

const classNames = {
  body: cn("px-6 py-4 overflow-y-auto h-full", "dialog__body"),
};

function DialogHead({ children, className }: DialogBodyProps) {
  return (
    <div
      className={cn(classNames.body, className)}
      data-testid="arke-dialog-head"
    >
      {children}
    </div>
  );
}

export default DialogHead;
