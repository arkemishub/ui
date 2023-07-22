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

import { Avatar } from "./index";
import { render } from "@testing-library/react";

describe("Avatar", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render initials when name is provided composed by name and surname", () => {
    const { getByText } = render(<Avatar name="John Doe" />);
    expect(getByText("JD")).toBeInTheDocument();
  });

  test("should render initial when name is provided", () => {
    const { getByText } = render(<Avatar name="John" />);
    expect(getByText("J")).toBeInTheDocument();
  });

  test("should render primary avatar when color is not provided", () => {
    const { getByTestId } = render(<Avatar name="John Doe" />);
    expect(getByTestId("arke-avatar")).toHaveClass("bg-primary");
  });

  test("should render primary avatar", () => {
    const { getByTestId } = render(<Avatar name="John Doe" color="primary" />);
    expect(getByTestId("arke-avatar")).toHaveClass("bg-primary");
  });

  test("should render secondary avatar", () => {
    const { getByTestId } = render(
      <Avatar name="John Doe" color="secondary" />
    );
    expect(getByTestId("arke-avatar")).toHaveClass("bg-secondary");
  });

  test("should render xs avatar", () => {
    const { getByTestId } = render(<Avatar name="John Doe" size="xs" />);
    expect(getByTestId("arke-avatar")).toHaveClass("h-6 w-6");
  });

  test("should render sm avatar", () => {
    const { getByTestId } = render(<Avatar name="John Doe" size="sm" />);
    expect(getByTestId("arke-avatar")).toHaveClass("h-7 w-7");
  });

  test("should render md avatar", () => {
    const { getByTestId } = render(<Avatar name="John Doe" size="md" />);
    expect(getByTestId("arke-avatar")).toHaveClass("h-8 w-8");
  });

  test("should render lg avatar", () => {
    const { getByTestId } = render(<Avatar name="John Doe" size="lg" />);
    expect(getByTestId("arke-avatar")).toHaveClass("h-9 w-9");
  });

  test("should render xl avatar", () => {
    const { getByTestId } = render(<Avatar name="John Doe" size="xl" />);
    expect(getByTestId("arke-avatar")).toHaveClass("h-10 w-10");
  });

  test("should add custom class", () => {
    const { getByTestId } = render(
      <Avatar name="John Doe" className="custom-class" />
    );
    expect(getByTestId("arke-avatar")).toHaveClass("custom-class");
  });
});
