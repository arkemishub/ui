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

import { RadioGroup } from "./index";
import { act, render } from "@testing-library/react";
import { Radio } from "../Radio";

const mockOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

describe("RadioGroup", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <RadioGroup name="test" onChange={() => null}>
        {mockOptions.map((option, index) => (
          <Radio key={index} value={option.value} />
        ))}
      </RadioGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render radio group", () => {
    const { getByTestId } = render(
      <RadioGroup name="test" onChange={() => null}>
        {mockOptions.map((option, index) => (
          <Radio key={index} value={option.value} />
        ))}
      </RadioGroup>
    );
    expect(getByTestId("arke-radio-group")).toBeInTheDocument();
  });

  test("should render all radio buttons", () => {
    const { getAllByTestId } = render(
      <RadioGroup name="test" onChange={() => null}>
        {mockOptions.map((option, index) => (
          <Radio key={index} value={option.value} />
        ))}
      </RadioGroup>
    );
    expect(getAllByTestId("arke-radio")).toHaveLength(3);
  });

  test("should call onChange when radio is clicked", () => {
    const onChange = jest.fn();
    const { getAllByRole } = render(
      <RadioGroup name="test" onChange={onChange}>
        {mockOptions.map((option, index) => (
          <Radio key={index} value={option.value} />
        ))}
      </RadioGroup>
    );

    const radio = getAllByRole("radio")[0];
    act(() => {
      radio.click();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
