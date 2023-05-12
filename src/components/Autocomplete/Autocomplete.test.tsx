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

import { Autocomplete } from "./index";
import { act, render } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

const mockValues = [
  { id: "1", name: "Test 1" },
  { id: "2", name: "Test 2" },
  { id: "3", name: "Test 3" },
];

describe("Autocomplete", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Autocomplete
        onChange={() => null}
        values={mockValues}
        renderLabel={(val) => val.id}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render autocomplete", () => {
    const { getByTestId } = render(
      <Autocomplete
        onChange={() => null}
        values={mockValues}
        renderLabel={(val) => val.id}
      />
    );
    expect(getByTestId("arke-autocomplete")).toBeInTheDocument();
  });

  test("should call onInputChange when input changes", () => {
    const onInputChange = jest.fn();
    const { getByTestId } = render(
      <Autocomplete
        onChange={() => null}
        values={mockValues}
        renderLabel={(val) => val.id}
        onInputChange={onInputChange}
      />
    );

    act(() => {
      userEvent.type(getByTestId("arke-autocomplete"), "Test");
    });
    expect(onInputChange).toHaveBeenCalled();
  });

  test("should render values", () => {
    const { getByTestId, getByText } = render(
      <Autocomplete
        onChange={() => null}
        values={mockValues}
        renderLabel={(val) => val.name}
      />
    );
    act(() => {
      userEvent.type(getByTestId("arke-autocomplete"), "Test");
    });

    expect(getByText("Test 1")).toBeInTheDocument();
  });

  test("should call onChange when value is selected", () => {
    const onChange = jest.fn();
    const { getByTestId, getByText } = render(
      <Autocomplete
        onChange={onChange}
        values={mockValues}
        renderLabel={(val) => val.name}
      />
    );
    act(() => {
      userEvent.type(getByTestId("arke-autocomplete"), "Test");
    });

    act(() => {
      userEvent.click(getByText("Test 1"));
    });

    expect(onChange).toHaveBeenCalled();
  });

  test("should render correct label when renderLabel is provided", () => {
    const { getByTestId, getByText } = render(
      <Autocomplete
        onChange={() => null}
        values={mockValues}
        renderLabel={(val) => val.name}
      />
    );
    act(() => {
      userEvent.type(getByTestId("arke-autocomplete"), "Test");
    });
    expect(getByText("Test 1")).toBeInTheDocument();
  });

  test("should render value when is selected", () => {
    const { getByTestId } = render(
      <Autocomplete
        onChange={() => null}
        values={mockValues}
        renderLabel={(val) => val.name}
        value={mockValues[0]}
      />
    );
    expect(getByTestId("arke-autocomplete")).toHaveValue("Test 1");
  });

  test("should render chips when multiple value are selected", () => {
    const { queryAllByTestId } = render(
      <Autocomplete
        onChange={() => null}
        values={mockValues}
        renderLabel={(val) => val.name}
        multiple
        value={mockValues}
      />
    );

    expect(queryAllByTestId("arke-chip")).toHaveLength(mockValues.length);
  });

  test("should delete value when chip delete button is clicked", () => {
    const onChange = jest.fn();
    const { queryAllByTestId } = render(
      <Autocomplete
        onChange={onChange}
        values={mockValues}
        renderLabel={(val) => val.name}
        multiple
        value={[mockValues[0], mockValues[1]]}
      />
    );

    act(() => {
      userEvent.click(queryAllByTestId("arke-chip-delete")[0]);
    });

    expect(onChange).toHaveBeenCalled();
  });
});
