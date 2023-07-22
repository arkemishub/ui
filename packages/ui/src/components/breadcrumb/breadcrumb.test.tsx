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

// Breadcrumb component test:

import { Breadcrumb } from "./index";
import { render, screen } from "@testing-library/react";

describe("Breadcrumb", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Crumb>Home</Breadcrumb.Crumb>
        <Breadcrumb.Crumb>Library</Breadcrumb.Crumb>
        <Breadcrumb.Crumb>Data</Breadcrumb.Crumb>
      </Breadcrumb>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with children", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Crumb>Home</Breadcrumb.Crumb>
        <Breadcrumb.Crumb>Library</Breadcrumb.Crumb>
        <Breadcrumb.Crumb>Data</Breadcrumb.Crumb>
      </Breadcrumb>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("should render with single child", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Crumb>Home</Breadcrumb.Crumb>
      </Breadcrumb>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should not render not recognized children", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Crumb>Home</Breadcrumb.Crumb>
        <div>Library</div>
        <Breadcrumb.Crumb>Data</Breadcrumb.Crumb>
      </Breadcrumb>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.queryByText("Library")).toBeNull();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });
});
