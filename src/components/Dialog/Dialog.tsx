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

import { Dialog as HeadlessDialog } from "@headlessui/react";
import type { IDialogProps } from "./Dialog.types";
import { Button } from "../Button";
import { twMerge } from "tailwind-merge";

function Dialog({
  open,
  onClose,
  title,
  children,
  className,
  initialFocus,
}: IDialogProps) {
  return (
    <HeadlessDialog
      initialFocus={initialFocus}
      className="dialog__container"
      open={open}
      onClose={onClose}
    >
      <div className="dialog__overlay" aria-hidden="true" />
      <div className="dialog__overlay__content">
        <HeadlessDialog.Panel
          data-testid="arke-dialog"
          className={twMerge("dialog", className)}
        >
          <div className="dialog__head">
            {title && <p className="dialog__title">{title}</p>}
            <Button onClick={onClose} className="dialog__close__button">
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
          <div className="dialog__body">{children}</div>
        </HeadlessDialog.Panel>
      </div>
    </HeadlessDialog>
  );
}

export default Dialog;
