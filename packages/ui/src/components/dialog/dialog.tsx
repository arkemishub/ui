// Dialog component

import type { DialogProps } from "./dialog.types";
import { cn } from "../../lib/utils";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";
import DialogHead from "./dialog-head";
import DialogBody from "./dialog-body";

const classNames = {
  container: cn(
    "relative z-50 px-6 py-4 max-w-[70%] mx-auto h-[50vh]",
    "dialog"
  ),
};

function Dialog({ open, onClose, children, className }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useOnClickOutside(dialogRef, () => {
    if (open) {
      onClose();
    }
  });

  useEffect(() => {
    if (open) {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <dialog
      className={cn(classNames.container, className)}
      open={open}
      onCancel={() => {
        onClose();
      }}
      data-testid="arke-dialog"
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}

Dialog.Head = DialogHead;
Dialog.Body = DialogBody;

export default Dialog;
