// Dialog component

import type { DialogProps } from "./dialog.types";
import { cn } from "../../lib/utils";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";
import DialogHead from "./dialog-head";
import DialogBody from "./dialog-body";

const classNames = {
  container: cn(
    "z-50 px-6 py-4 max-w-[70%] m-auto top-0 bottom-0 h-[50vh]",
    "dialog"
  ),
  overlay: cn(
    "absolute w-full h-full top-0 left-0 bg-gray-500/50",
    "dialog__overlay"
  ),
};

function Dialog({ open, onClose, children, className, overlay }: DialogProps) {
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
    <>
      {open && overlay && (
        <div
          className={cn(classNames.overlay, className)}
          data-testid="arke-dialog-overlay"
        ></div>
      )}
      <dialog
        className={cn(classNames.container, open && "flex flex-col", className)}
        open={open}
        onCancel={() => {
          console.log("daje");
          onClose();
        }}
        data-testid="arke-dialog"
        ref={dialogRef}
      >
        {children}
      </dialog>
    </>
  );
}

Dialog.Head = DialogHead;
Dialog.Body = DialogBody;

export default Dialog;
