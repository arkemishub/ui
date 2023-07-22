/**
 * Copyright 2023 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use client";

import { Dialog as HeadlessDialog } from "@headlessui/react";
import { Button } from "../button";
import type { DialogCloseReason, DialogProps } from "./dialog.types";
import { cn } from "../../lib/utils";

const classNames = {
  dialog: cn(
    "mx-auto w-full rounded bg-background text-background-contrast max-w-xl max-h-[80vh] flex flex-col overflow-hidden",
    "dialog"
  ),
  container: cn("relative z-50 px-6 py-4", "dialog__container"),
  overlay: cn("fixed inset-0 bg-black/30", "dialog__overlay"),
  overlayContent: cn(
    "fixed inset-0 flex items-center justify-center",
    "dialog__overlay__content"
  ),
  head: cn(
    "bg-background flex gap-4 sticky top-0 z-10 px-6 pt-4",
    "dialog__head"
  ),
  body: cn("px-6 py-4 overflow-y-auto", "dialog__body"),
  title: cn("text-lg font-bold", "dialog__title"),
  close: cn("ml-auto h-6 w-6 p-1", "dialog__close__button"),
};

function Dialog({
  open,
  onClose,
  title,
  children,
  className,
  initialFocus,
  disableBackdropClose = false,
}: DialogProps) {
  const handleClose = (reason: DialogCloseReason) => {
    if (reason == "backdropClick" && !disableBackdropClose) {
      onClose(reason);
    } else if (reason == "closeButton") {
      onClose(reason);
    }
  };

  return (
    <HeadlessDialog
      initialFocus={initialFocus}
      className={classNames.container}
      open={open}
      onClose={() => handleClose("backdropClick")}
      data-testid="arke-dialog-backdrop"
    >
      <div className={classNames.overlay} aria-hidden="true" />
      <div className={classNames.overlayContent}>
        <HeadlessDialog.Panel
          data-testid="arke-dialog"
          className={cn(classNames.dialog, className)}
        >
          <div className={classNames.head}>
            {title && <p className={classNames.title}>{title}</p>}
            <Button
              onClick={() => handleClose("closeButton")}
              className={classNames.close}
            >
              <svg
                data-testid="arke-dialog-close"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <div className={classNames.body}>{children}</div>
        </HeadlessDialog.Panel>
      </div>
    </HeadlessDialog>
  );
}

export default Dialog;
