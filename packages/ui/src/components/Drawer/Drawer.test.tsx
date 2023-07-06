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

import React from "react";
import { render } from "@testing-library/react";
import { Drawer } from "./index";
import userEvent from "@testing-library/user-event";

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Drawer", () => {
  test("it should match snapshot", () => {
    const { asFragment } = render(<Drawer open={true} onClose={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render drawer", () => {
    const { getByTestId } = render(<Drawer open={true} onClose={() => null} />);
    expect(getByTestId("arke-drawer")).toBeInTheDocument();
  });

  test("should render right drawer", () => {
    const { getByTestId } = render(
      <Drawer open={true} onClose={() => null} position="right" />
    );
    expect(getByTestId("arke-drawer")).toHaveClass("drawer--right");
  });

  test("should render left drawer", () => {
    const { getByTestId } = render(
      <Drawer open={true} onClose={() => null} position="left" />
    );
    expect(getByTestId("arke-drawer")).toHaveClass("drawer--left");
  });

  it("should not render drawer when open prop is false", () => {
    const { getByTestId } = render(
      <Drawer open={false} onClose={() => null} />
    );
    expect(getByTestId("arke-drawer")).toHaveClass("-translate-x-full");
  });

  it("should call onClose when close button is clicked", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Drawer open={true} onClose={onClose} />);
    await userEvent.click(getByTestId("arke-drawer-close"));
    expect(onClose).toHaveBeenCalled();
  });

  it("should render title", () => {
    const { getByText } = render(
      <Drawer open={true} onClose={() => null} title="Title" />
    );
    expect(getByText("Title")).toBeInTheDocument();
  });

  it("should render children", () => {
    const { getByText } = render(
      <Drawer open={true} onClose={() => null} title="Title">
        Children
      </Drawer>
    );
    expect(getByText("Children")).toBeInTheDocument();
  });
});
