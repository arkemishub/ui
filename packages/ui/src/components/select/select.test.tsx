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
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

type ExampleData = { id: string; name: string };

const mockValues: ExampleData[] = [
  { id: "1", name: "Test 1" },
  { id: "2", name: "Test 2" },
  { id: "3", name: "Test 3" },
];

describe("Select", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Select onChange={() => null}>
        <Select.Button>test</Select.Button>
        <Select.Options>
          {mockValues.map((v) => (
            <Select.Option key={v.id} value={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render select", () => {
    const { getByTestId } = render(
      <Select onChange={() => null}>
        <Select.Button>test</Select.Button>
        <Select.Options>
          {mockValues.map((v) => (
            <Select.Option key={v.id} value={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    expect(getByTestId("arke-select")).toBeInTheDocument();
  });

  test("should render values", async () => {
    const { getByTestId, getByText } = render(
      <Select onChange={() => null}>
        <Select.Button>test</Select.Button>
        <Select.Options>
          {mockValues.map((v) => (
            <Select.Option key={v.id} value={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    await userEvent.click(getByTestId("arke-select"));
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
    expect(getByText("Test 3")).toBeInTheDocument();
  });

  test("should call onChange when value is selected", async () => {
    const onChange = jest.fn();
    const { getByTestId, getByText } = render(
      <Select onChange={onChange}>
        <Select.Button>test</Select.Button>
        <Select.Options>
          {mockValues.map((v) => (
            <Select.Option key={v.id} value={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    await userEvent.click(getByTestId("arke-select"));
    await userEvent.click(getByText("Test 1"));
    expect(onChange).toHaveBeenCalled();
  });

  test("should render selected value", () => {
    const { getByText } = render(
      <Select onChange={() => null}>
        <Select.Button>test</Select.Button>
        <Select.Options>
          {mockValues.map((v) => (
            <Select.Option key={v.id} value={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    expect(getByText("Test 1")).toBeVisible();
  });

  test("should contain start/end Adornment when props is passed", () => {
    const { getAllByText } = render(
      <Select
        startAdornment={"start adornment"}
        endAdornment={"end adornment"}
        onChange={() => null}
      >
        <Select.Button>test</Select.Button>
        <Select.Options>
          {mockValues.map((v) => (
            <Select.Option key={v.id} value={v.id}>
              {v.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    expect(getAllByText("start adornment").length).toBe(1);
    expect(getAllByText("end adornment").length).toBe(1);
  });
});
