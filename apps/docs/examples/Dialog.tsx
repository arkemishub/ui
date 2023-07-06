import { Button, Dialog } from "@arkejs/ui";
import React from "react";

function MyDialog() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog title="Dialog" open={open} onClose={() => setOpen(false)}>
        Hey!
      </Dialog>
    </>
  );
}

export default MyDialog;
