import { Popover } from "@arkejs/ui";
import React from "react";

function MyPopover() {
  return (
    <Popover
      className="p-4"
      popover={
        <div className="bg-secondary text-secondary-contrast rounded-theme px-4 py-2">
          Hey! I am a popover
        </div>
      }
    >
      <span className="btn btn--primary">Click me</span>
    </Popover>
  );
}

export default MyPopover;
