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

import { TextArea } from "./index";
import { render } from "@testing-library/react";
import React from "react";

describe("Switch", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<TextArea />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render textarea", () => {
    const { getByTestId } = render(<TextArea />);
    expect(getByTestId("arke-textarea")).toBeInTheDocument();
  });

  test("should render placeholder", () => {
    const { getByTestId } = render(<TextArea placeholder="Write here" />);
    expect(getByTestId("arke-textarea")).toBeInTheDocument();
  });

  test("should render label", () => {
    const { getByTestId } = render(<TextArea label="Label" />);
    expect(getByTestId("arke-textarea-label")).toBeInTheDocument();
  });

  test("should render rows", () => {
    const { getByTestId } = render(<TextArea rows={5} />);
    expect(getByTestId("arke-textarea")).toBeInTheDocument();
  });

  test("should render cols", () => {
    const { getByTestId } = render(<TextArea cols={40} />);
    expect(getByTestId("arke-textarea")).toBeInTheDocument();
  });

  test("should render disabled textarea", () => {
    const { getByTestId } = render(<TextArea disabled={false} />);
    expect(getByTestId("arke-textarea")).toBeInTheDocument();
  });
});
