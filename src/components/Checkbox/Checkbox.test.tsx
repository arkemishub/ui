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

// Checkbox component test file

import { Checkbox } from "./index";
import { render } from "@testing-library/react";
import { CheckboxColor } from "./Checkbox.types";

describe("Checkbox", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Checkbox checked={false} onChange={() => null} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render checkbox", () => {
    const { getByTestId } = render(
      <Checkbox checked={false} onChange={() => null} />
    );
    expect(getByTestId("arke-checkbox")).toBeInTheDocument();
  });

  test("should call onChange when clicked", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Checkbox checked={false} onChange={onChange} />
    );
    getByTestId("arke-checkbox").click();
    expect(onChange).toHaveBeenCalled();
  });

  test("should be checked when checked prop is true", () => {
    const { getByTestId } = render(
      <Checkbox checked={true} onChange={() => null} />
    );
    expect(getByTestId("arke-checkbox")).toBeChecked();
  });

  test("should render label", () => {
    const { getByText } = render(
      <Checkbox checked={false} onChange={() => null} label="Label" />
    );
    expect(getByText("Label")).toBeInTheDocument();
  });

  test("should render helper text", () => {
    const { getByText } = render(
      <Checkbox
        checked={false}
        onChange={() => null}
        helperText="Helper text"
      />
    );
    expect(getByText("Helper text")).toBeInTheDocument();
  });

  test("should render checkbox with error", () => {
    const { getByTestId } = render(
      <Checkbox checked={false} onChange={() => null} hasError />
    );
    expect(getByTestId("arke-checkbox")).toHaveClass("checkbox--error");
  });

  test("should render primary checkbox", () => {
    const { getByTestId } = render(
      <Checkbox
        checked={false}
        onChange={() => null}
        color={CheckboxColor.PRIMARY}
      />
    );
    expect(getByTestId("arke-checkbox")).toHaveClass("checkbox--primary");
  });

  test("should render secondary checkbox", () => {
    const { getByTestId } = render(
      <Checkbox
        checked={false}
        onChange={() => null}
        color={CheckboxColor.SECONDARY}
      />
    );
    expect(getByTestId("arke-checkbox")).toHaveClass("checkbox--secondary");
  });
});
