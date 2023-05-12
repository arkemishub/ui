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

import { render } from "@testing-library/react";
import { Dialog } from "./index";
import { userEvent } from "@storybook/testing-library";

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Dialog", () => {
  test("it should match snapshot", () => {
    const { asFragment } = render(<Dialog open={true} onClose={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render dialog", () => {
    const { getByTestId } = render(<Dialog open={true} onClose={() => null} />);
    expect(getByTestId("arke-dialog")).toBeInTheDocument();
  });

  it("should not render dialog when open prop is false", () => {
    const { queryAllByTestId } = render(
      <Dialog open={false} onClose={() => null} />
    );
    expect(queryAllByTestId("arke-dialog")).toHaveLength(0);
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Dialog open={true} onClose={onClose} />);
    userEvent.click(getByTestId("arke-dialog-close"));
    expect(onClose).toHaveBeenCalled();
  });

  it("should render title", () => {
    const { getByText } = render(
      <Dialog open={true} onClose={() => null} title="Title" />
    );
    expect(getByText("Title")).toBeInTheDocument();
  });

  it("should render children", () => {
    const { getByText } = render(
      <Dialog open={true} onClose={() => null} title="Title">
        Children
      </Dialog>
    );
    expect(getByText("Children")).toBeInTheDocument();
  });
});
