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

import { render } from "@testing-library/react";
import { Skeleton } from "./index";

describe("Skeleton", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Skeleton />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render skeleton", () => {
    const { getByTestId } = render(<Skeleton />);
    expect(getByTestId("arke-skeleton")).toBeInTheDocument();
  });

  test("should pass className to skeleton", () => {
    const { getByTestId } = render(<Skeleton className="test" />);
    expect(getByTestId("arke-skeleton")).toHaveClass("test");
  });
});
