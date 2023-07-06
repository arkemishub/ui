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

import { IChipProps } from "../Chip";
import { twMerge } from "tailwind-merge";
import React, { MouseEventHandler } from "react";
import { Button } from "../Button";

const DeleteButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <Button className="chip__delete" onClick={onClick}>
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
}: IChipProps) {
  return (
    <span
      data-testid="arke-chip"
      role="presentation"
      className={twMerge(
        "chip",
        disabled && "chip--disabled",
        onClick && "cursor-pointer",
        color === "primary" && "chip--primary",
        color === "secondary" && "chip--secondary",
        className
      )}
      onClick={onClick}
    >
      {startAdornment}
      <span className="chip__content">{children}</span>
      {onDelete && <DeleteButton onClick={onDelete} />}
      {endAdornment}
    </span>
  );
}

export default Chip;
