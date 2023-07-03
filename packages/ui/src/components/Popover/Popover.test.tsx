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

import { Popover } from "./index";
import { act, render } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

describe("Popover", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Popover popover={<div>Test</div>}>Test</Popover>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render popover", () => {
    const { getByTestId } = render(
      <Popover popover={<div>Test</div>}>Test</Popover>
    );
    expect(getByTestId("arke-popover")).toBeInTheDocument();
  });

  test("should render popover on click", () => {
    const { getByText } = render(
      <Popover popover={<div>Popover</div>}>Test</Popover>
    );

    act(() => {
      userEvent.click(getByText("Test"));
    });

    expect(getByText("Popover")).toBeVisible();
  });

  test("should render popover on hover when tooltip is true", () => {
    const { getByText } = render(
      <Popover popover={<div>Popover</div>} tooltip>
        Test
      </Popover>
    );

    act(() => {
      userEvent.hover(getByText("Test"));
    });

    expect(getByText("Popover")).toBeVisible();
  });
});
