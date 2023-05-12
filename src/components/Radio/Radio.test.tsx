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

import Radio from "./Radio";
import { render } from "@testing-library/react";

describe("Radio", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Radio value="test" onChange={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render radio", () => {
    const { getByTestId } = render(
      <Radio value="test" onChange={() => null} />
    );
    expect(getByTestId("arke-radio")).toBeInTheDocument();
  });

  test("should render label", () => {
    const { getByText } = render(
      <Radio value="test" label="test" onChange={() => null} />
    );
    expect(getByText("test")).toBeInTheDocument();
  });

  test("should be checked when checked is true", () => {
    const { getByRole } = render(
      <Radio value="test" checked onChange={() => null} />
    );
    expect(getByRole("radio")).toBeChecked();
  });

  test("should render primary radio", () => {
    const { getByTestId } = render(
      <Radio value="test" color="primary" onChange={() => null} />
    );
    expect(getByTestId("arke-radio")).toHaveClass("radio--primary");
  });

  test("should render secondary radio", () => {
    const { getByTestId } = render(
      <Radio value="test" color="secondary" onChange={() => null} />
    );
    expect(getByTestId("arke-radio")).toHaveClass("radio--secondary");
  });

  test("should render primary checked radio", () => {
    const { getByTestId } = render(
      <Radio value="test" color="primary" checked onChange={() => null} />
    );
    expect(getByTestId("arke-radio-tick")).toHaveClass(
      "radio--primary--checked"
    );
  });

  test("should render secondary radio checked", () => {
    const { getByTestId } = render(
      <Radio value="test" color="secondary" onChange={() => null} checked />
    );
    expect(getByTestId("arke-radio-tick")).toHaveClass(
      "radio--secondary--checked"
    );
  });

  test("should call onChange when clicked", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Radio value="test" onChange={onChange} />);
    const radio = getByRole("radio");
    radio.click();
    expect(onChange).toHaveBeenCalled();
  });
});
