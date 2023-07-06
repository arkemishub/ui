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

import Chip from "./Chip";
import { render } from "@testing-library/react";

describe("Chip", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Chip>Chip</Chip>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render Chip component", () => {
    const { getByTestId } = render(<Chip>Chip</Chip>);
    expect(getByTestId("arke-chip")).toBeInTheDocument();
  });

  test("should call onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Chip onClick={onClick}>Chip</Chip>);
    getByTestId("arke-chip").click();
    expect(onClick).toHaveBeenCalled();
  });

  test("should render startAdornment", () => {
    const { getByTestId } = render(
      <Chip startAdornment={<div data-testid="start-adornment" />}>Chip</Chip>
    );
    expect(getByTestId("start-adornment")).toBeInTheDocument();
  });

  test("should render endAdornment", () => {
    const { getByTestId } = render(
      <Chip endAdornment={<div data-testid="end-adornment" />}>Chip</Chip>
    );
    expect(getByTestId("end-adornment")).toBeInTheDocument();
  });

  test("should add custom class", () => {
    const { getByTestId } = render(<Chip className="custom-class">Chip</Chip>);
    expect(getByTestId("arke-chip")).toHaveClass("custom-class");
  });

  test("should render delete button if onDelete is passed", () => {
    const { getByTestId } = render(<Chip onDelete={() => {}}>Chip</Chip>);
    expect(getByTestId("arke-chip-delete")).toBeInTheDocument();
  });

  test("should render disabled chip", () => {
    const { getByTestId } = render(<Chip disabled>Chip</Chip>);
    expect(getByTestId("arke-chip")).toHaveClass("chip--disabled");
  });

  test("should render primary chip", () => {
    const { getByTestId } = render(<Chip color="primary">Chip</Chip>);
    expect(getByTestId("arke-chip")).toHaveClass("chip--primary");
  });

  test("should render secondary chip", () => {
    const { getByTestId } = render(<Chip color="secondary">Chip</Chip>);
    expect(getByTestId("arke-chip")).toHaveClass("chip--secondary");
  });
});
