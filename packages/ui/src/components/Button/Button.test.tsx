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

import { render, screen } from "@testing-library/react";

import Button from "./Button";
import React from "react";

describe("Button", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Button>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders Button component", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  test("should call onClick prop when clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    const button = screen.getByText("Button");
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("should not call onClick prop when disabled", () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Button
      </Button>
    );
    const button = screen.getByText("Button");
    button.click();
    expect(onClick).not.toHaveBeenCalled();
  });

  test("should render primary button", () => {
    render(<Button color="primary">Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("btn--primary");
  });

  test("should render secondary button", () => {
    render(<Button color="secondary">Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("btn--secondary");
  });

  test("should render fullWidth button", () => {
    render(<Button fullWidth>Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("w-full");
  });

  test("should add custom class", () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("custom-class");
  });
});
