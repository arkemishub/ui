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

import { act, render, screen } from "@testing-library/react";
import Alert from "./alert";

describe("Alert", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Alert>Alert</Alert>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render Alert component", () => {
    render(<Alert>Alert</Alert>);
    expect(screen.getByText("Alert")).toBeInTheDocument();
  });

  test("should add custom class", () => {
    render(<Alert className="custom-class">Alert</Alert>);
    expect(screen.getByRole("presentation")).toHaveClass("custom-class");
  });

  test("should render dismiss button when dismissible", () => {
    render(<Alert dismissible>Alert</Alert>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should call onDismiss prop when dismiss button is clicked", () => {
    const onDismiss = jest.fn();
    render(
      <Alert dismissible onDismiss={onDismiss}>
        Alert
      </Alert>
    );
    const button = screen.getByRole("button");
    act(() => {
      button.click();
    });

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("should render error alert", () => {
    render(<Alert color="error">Alert</Alert>);
    expect(screen.getByRole("presentation")).toHaveClass("bg-error");
  });

  it("should render warning alert", () => {
    render(<Alert color="warning">Alert</Alert>);
    expect(screen.getByRole("presentation")).toHaveClass("bg-warning");
  });

  it("should render info alert", () => {
    render(<Alert color="info">Alert</Alert>);
    expect(screen.getByRole("presentation")).toHaveClass("bg-info");
  });

  it("should render success alert", () => {
    render(<Alert color="success">Alert</Alert>);
    expect(screen.getByRole("presentation")).toHaveClass("bg-success");
  });
});
