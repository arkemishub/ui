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

import React from "react";
import { render } from "@testing-library/react";
import { Stepper } from "./index";

describe("Stepper", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Stepper active={1}>
        <Stepper.Step title={"first"} />
        <Stepper.Step title={"second"} />
        <Stepper.Step title={"third"} />
      </Stepper>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render stepper", () => {
    const { getByTestId } = render(
      <Stepper active={1}>
        <Stepper.Step title={"first"} />
        <Stepper.Step title={"second"} />
        <Stepper.Step title={"third"} />
      </Stepper>
    );
    expect(getByTestId("arke-stepper")).toBeInTheDocument();
  });

  test("should render all steps", () => {
    const { getAllByTestId } = render(
      <Stepper active={1}>
        <Stepper.Step title={"first"} />
        <Stepper.Step title={"second"} />
        <Stepper.Step title={"third"} />
      </Stepper>
    );
    expect(getAllByTestId("arke-step")).toHaveLength(3);
  });

  test("should have a number as text content", () => {
    const { getByTestId } = render(
      <Stepper active={1}>
        <Stepper.Step title={"first"} />
      </Stepper>
    );
    expect(getByTestId("arke-step")).toHaveTextContent("1");
  });

  test("only steps should be rendered", () => {
    render(
      <Stepper active={1}>
        <Stepper.Step title={"first"} />
        <Stepper.Step title={"second"} />
        <Stepper.Step title={"third"} />
        <button>no</button>
      </Stepper>
    );
    expect(<button>no</button>).not.toBeVisible;
  });
});
