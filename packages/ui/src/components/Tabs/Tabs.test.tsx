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

import Tabs from "./Tabs";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tabs", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(
      <Tabs active={0}>
        <Tabs.Tab>Tab 1 </Tabs.Tab>
        <Tabs.Tab>Tab 2 </Tabs.Tab>
        <Tabs.TabPanel> Panel 1 </Tabs.TabPanel>
        <Tabs.TabPanel> Panel 2</Tabs.TabPanel>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should show next tab", async () => {
    const { getByText } = render(
      <Tabs active={0}>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.TabPanel>Panel 1</Tabs.TabPanel>
        <Tabs.TabPanel>Panel 2</Tabs.TabPanel>
      </Tabs>
    );

    await userEvent.click(getByText("Tab 2"));

    expect(getByText("Panel 2")).toBeVisible();
  });

  test("should not render not recognized children", () => {
    const { queryAllByText } = render(
      <Tabs active={0}>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.TabPanel>Panel 1</Tabs.TabPanel>
        <Tabs.TabPanel>Panel 2</Tabs.TabPanel>
        <div>Not recognized</div>
      </Tabs>
    );

    expect(queryAllByText("Not recognized")).toHaveLength(0);
  });
});
