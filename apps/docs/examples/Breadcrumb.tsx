import { Breadcrumb } from "@arkejs/ui";
import React from "react";

function MyBreadcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Crumb>Home</Breadcrumb.Crumb>
      <Breadcrumb.Crumb>Products</Breadcrumb.Crumb>
      <Breadcrumb.Crumb>Accessories</Breadcrumb.Crumb>
      <Breadcrumb.Crumb className="text-neutral-400">
        Headphones
      </Breadcrumb.Crumb>
    </Breadcrumb>
  );
}

export default MyBreadcrumb;
