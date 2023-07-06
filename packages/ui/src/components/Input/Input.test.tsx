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

import Input from "./Input";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Input value="Value" type="text" onChange={() => null} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render input", () => {
    const { getByTestId } = render(
      <Input value="Value" type="text" onChange={() => null} />
    );
    expect(getByTestId("arke-container")).toBeInTheDocument();
  });

  test("should call onChange when input changes", async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Input value="Value" type="text" onChange={onChange} />
    );
    await userEvent.type(getByTestId("arke-input"), "Test");
    expect(onChange).toHaveBeenCalled();
  });

  test("should render label", () => {
    const { getByText } = render(
      <Input value="Value" type="text" onChange={() => null} label="Label" />
    );
    expect(getByText("Label")).toBeInTheDocument();
  });

  test("should render helper text", () => {
    const { getByText } = render(
      <Input
        value="Value"
        type="text"
        onChange={() => null}
        helperText="Helper text"
      />
    );
    expect(getByText("Helper text")).toBeInTheDocument();
  });

  test("should render error input when hasError is true", () => {
    const { getByTestId } = render(
      <Input value="Value" type="text" onChange={() => null} hasError />
    );
    expect(getByTestId("arke-container")).toHaveClass("input--error");
  });

  test("should render full width input when fullWidth is true", () => {
    const { getByTestId } = render(
      <Input value="Value" type="text" onChange={() => null} fullWidth />
    );

    expect(getByTestId("arke-container")).toHaveClass("w-full");
  });

  test("should render helperText with error class when hasError is true", () => {
    const { getByText } = render(
      <Input
        value="Value"
        type="text"
        onChange={() => null}
        helperText="Helper text"
        hasError
      />
    );
    expect(getByText("Helper text")).toHaveClass("input__helperText--error");
  });

  test("should add custom class when className is passed", () => {
    const { getByTestId } = render(
      <Input
        value="Value"
        type="text"
        onChange={() => null}
        className="custom-class"
      />
    );
    expect(getByTestId("arke-container")).toHaveClass("custom-class");
  });

  test("should contain start/end Adornment when props is passed", () => {
    const { container } = render(
      <Input
        value="Value"
        type="text"
        onChange={() => null}
        startAdornment={"start adornment"}
        endAdornment={"end adornment"}
      />
    );
    expect(
      container.getElementsByClassName("input__startAdornment").length
    ).toBe(1);
    expect(container.getElementsByClassName("input__endAdornment").length).toBe(
      1
    );
  });

  test("should contain prefix/suffix Adornment when props is passed", () => {
    const { container } = render(
      <Input
        value="Value"
        type="text"
        onChange={() => null}
        prefixAdornment={"https://"}
        suffixAdornment={".com"}
      />
    );
    expect(
      container.getElementsByClassName("input__prefixAdornment").length
    ).toBe(1);
    expect(
      container.getElementsByClassName("input__suffixAdornment").length
    ).toBe(1);
  });
});
