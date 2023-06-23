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

import Calendar from "./Calendar";
import { render } from "@testing-library/react";

describe("Calendar", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Calendar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should call onSelect when a day is clicked", () => {
    const onSelect = jest.fn();
    const { queryAllByText } = render(
      <Calendar mode="single" onSelect={onSelect} />
    );
    queryAllByText("1")[0].click();
    expect(onSelect).toHaveBeenCalled();
  });
});
