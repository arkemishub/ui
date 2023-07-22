import { Button, Drawer } from "@arkejs/ui";
import React from "react";

function MyDrawer() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button color="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        title="Drawer"
        position="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        Hey!
      </Drawer>
    </>
  );
}

export default MyDrawer;
