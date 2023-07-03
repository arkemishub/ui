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

import Menu from "./Menu";
import { act, render } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

const mockItems = [{ label: "Test 1", icon: <></> }];

describe("Menu", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Menu items={mockItems}>Test</Menu>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render menu", () => {
    const { getByTestId } = render(<Menu items={mockItems}>Test</Menu>);
    expect(getByTestId("arke-menu")).toBeInTheDocument();
  });

  test("should display menu items when menu is open", () => {
    const { getByText } = render(<Menu items={mockItems}>Test</Menu>);

    act(() => {
      userEvent.click(getByText("Test"));
    });
    expect(getByText("Test 1")).toBeInTheDocument();
  });

  test("should call menu item onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Menu items={[{ label: "Test 1", icon: <></>, onClick }]}>Test</Menu>
    );

    act(() => {
      userEvent.click(getByText("Test"));
    });
    act(() => {
      userEvent.click(getByText("Test 1"));
    });
    expect(onClick).toHaveBeenCalled();
  });
});
