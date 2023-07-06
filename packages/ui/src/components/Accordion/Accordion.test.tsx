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
import Accordion from "./Accordion";
import userEvent from "@testing-library/user-event";

const ExpandIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929L5 9"
      stroke="#141C24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

describe("Accordion", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Accordion expanded={true}>
        <Accordion.Summary expandIcon={<ExpandIcon />}>
          Accordion title
        </Accordion.Summary>
        <Accordion.Detail>Accordion title</Accordion.Detail>
      </Accordion>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should call onInputChange when input changes", async () => {
    const onExpandChange = jest.fn();
    const { getByTestId } = render(
      <Accordion expanded={true} onChange={onExpandChange}>
        <Accordion.Summary expandIcon={<ExpandIcon />}>
          Accordion title
        </Accordion.Summary>
        <Accordion.Detail>Accordion title</Accordion.Detail>
      </Accordion>
    );

    await userEvent.click(getByTestId("arke-accordion-icon"));
    expect(onExpandChange).toHaveBeenCalled();
  });
});
