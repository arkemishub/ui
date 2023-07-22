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

import { DayPicker } from "react-day-picker";
import { CalendarProps } from "./calendar.types";
import { cn } from "../../lib/utils";

const classNames = {
  calendar: "calendar",
  leftIcon: cn("w-4 h-4 stroke-background-contrast", "calendar__icon--left"),
  rightIcon: cn("w-4 h-4 stroke-background-contrast", "calendar__icon--right"),
};

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className={classNames.leftIcon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className={classNames.rightIcon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function Calendar({
  showOutsideDays = true,
  className,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      components={{
        IconLeft: () => <ChevronLeft />,
        IconRight: () => <ChevronRight />,
      }}
      className={cn(classNames.calendar, className)}
      classNames={{
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        cell: "text-center text-sm p-0 relative",
        day: "h-9 w-9 p-0 font-normal hover:bg-neutral hover:text-neutral-contrast flex items-center justify-center px-4 py-2 outline-none rounded-theme",
        day_selected:
          "bg-primary text-primary-contrast hover:!bg-primary hover:!text-primary-contrast",
        day_outside: "text-neutral opacity-50",
        day_disabled: "text-neutral opacity-50",
        day_hidden: "hidden",
        head_row: "flex",
        head_cell: "text-neutral rounded-theme-sm w-9 font-normal text-xs",
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        nav: "space-x-1 flex items-center",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        row: "flex w-full mt-2",
        ...props.classNames,
      }}
      {...props}
    />
  );
}
export default Calendar;
