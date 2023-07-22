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

import React, { MouseEventHandler } from "react";
import { Button } from "../button";
import { ChipProps } from "./chip.types";
import { cn } from "../../lib/utils";

const classNames = {
  chip: cn("flex items-center w-fit p-2 gap-2 rounded-full", "chip"),
  content: cn("px-2", "chip__content"),
  disabled: cn("pointer-events-none opacity-50", "chip--disabled"),
  primary: cn("bg-primary text-primary-contrast", "chip--primary"),
  secondary: cn("bg-secondary text-secondary-contrast", "chip--secondary"),
  deleteBtn: cn("p-0", "chip__delete"),
};

const DeleteButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <Button className={classNames.deleteBtn} onClick={onClick}>
    <svg
      data-testid="arke-chip-delete"
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
);

function Chip({
  children,
  disabled = false,
  onClick,
  color,
  startAdornment,
  endAdornment,
  className,
  onDelete,
}: ChipProps) {
  return (
    <span
      data-testid="arke-chip"
      role="presentation"
      className={cn(
        classNames.chip,
        disabled && classNames.disabled,
        onClick && "cursor-pointer",
        color === "primary" && classNames.primary,
        color === "secondary" && classNames.secondary,
        className
      )}
      onClick={onClick}
    >
      {startAdornment}
      <span className={classNames.content}>{children}</span>
      {onDelete && <DeleteButton onClick={onDelete} />}
      {endAdornment}
    </span>
  );
}

export default Chip;
