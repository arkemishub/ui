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

import { Switch } from "./index";
import { act, render } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

describe("Switch", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render switch", () => {
    const { getByTestId } = render(<Switch />);
    expect(getByTestId("arke-switch")).toBeInTheDocument();
  });

  test("should call onChange when switch is clicked", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Switch onChange={onChange} />);
    expect(onChange).not.toHaveBeenCalled();

    act(() => {
      userEvent.click(getByTestId("arke-switch"));
    });
    expect(onChange).toHaveBeenCalled();
  });

  test("should render label", () => {
    const { getByText } = render(<Switch label="Test" />);
    expect(getByText("Test")).toBeInTheDocument();
  });
});
