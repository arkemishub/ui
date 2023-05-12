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

// Badge component test

import Badge from "./Badge";
import { render, screen } from "@testing-library/react";

describe("Badge", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Badge>Badge</Badge>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render Badge component", () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByTestId("arke-badge")).toBeInTheDocument();
  });

  test("should render label", () => {
    render(<Badge label="Label">Badge</Badge>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  test("should render primary badge", () => {
    render(<Badge color="primary">Badge</Badge>);
    expect(screen.getByTestId("arke-badge")).toHaveClass("badge--primary");
  });

  test("should render secondary badge", () => {
    render(<Badge color="secondary">Badge</Badge>);
    expect(screen.getByTestId("arke-badge")).toHaveClass("badge--secondary");
  });

  test("should add custom class", () => {
    render(<Badge className="custom-class">Badge</Badge>);
    expect(screen.getByTestId("arke-badge")).toHaveClass("custom-class");
  });
});
