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

import { Select } from "./index";
import { act, render } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

const mockValues = [
  { id: "1", name: "Test 1" },
  { id: "2", name: "Test 2" },
  { id: "3", name: "Test 3" },
];

describe("Select", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Select
        values={mockValues}
        onChange={() => null}
        renderLabel={(val) => val.name}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render select", () => {
    const { getByTestId } = render(
      <Select
        values={mockValues}
        onChange={() => null}
        renderLabel={(val) => val.name}
      />
    );
    expect(getByTestId("arke-select")).toBeInTheDocument();
  });

  test("should render values", () => {
    const { getByTestId, getByText } = render(
      <Select
        values={mockValues}
        onChange={() => null}
        renderLabel={(val) => val.name}
      />
    );
    act(() => {
      userEvent.click(getByTestId("arke-select"));
    });
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
    expect(getByText("Test 3")).toBeInTheDocument();
  });

  test("should call onChange when value is selected", () => {
    const onChange = jest.fn();
    const { getByTestId, getByText } = render(
      <Select
        values={mockValues}
        onChange={onChange}
        renderLabel={(val) => val.name}
      />
    );
    act(() => {
      userEvent.click(getByTestId("arke-select"));
    });
    act(() => {
      userEvent.click(getByText("Test 1"));
    });
    expect(onChange).toHaveBeenCalled();
  });

  test("should render selected value", () => {
    const { getByText } = render(
      <Select
        values={mockValues}
        onChange={() => null}
        renderLabel={(val) => val.name}
        value={mockValues[0]}
      />
    );
    expect(getByText("Test 1")).toBeVisible();
  });
});
