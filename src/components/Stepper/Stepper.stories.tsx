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
import { Stepper } from "./index";
import { IStepperProps } from "./index";
import { useArgs } from "@storybook/client-api";

import { Button } from "../Button";

export default {
  title: "Stepper",
  component: Stepper,
};

const listOfSteps = [
  { title: "step 1", description: "this is the first step" },
  { title: "step 2", description: "this is the second step" },
  { title: "step 3", description: "this is the third step" },
  { title: "step 4", description: "this is the fourth step" },
  { title: "step 5", description: "this is the fifth step" },
  { title: "step 6", description: "this is the sixth step" },
];

export const Default = (args: Partial<IStepperProps>) => {
  const [{ active = 1 }, updateArgs] = useArgs();

  const handlePrev = () => updateArgs({ active: active - 1 });
  const handleNext = () => updateArgs({ active: active + 1 });

  return (
    <>
      <div className="h-32">
        <Stepper active={1} {...args}>
          {listOfSteps.map((step, i) => (
            <Stepper.Step title={step.title} key={i} />
          ))}
        </Stepper>
      </div>
      <div className="w-full flex justify-center">
        <Button
          color="secondary"
          onClick={handlePrev}
          className="px-8 mr-2"
          disabled={active < 2}
        >
          prev
        </Button>
        <Button
          color="secondary"
          onClick={handleNext}
          className="px-8"
          disabled={active === listOfSteps.length}
        >
          next
        </Button>
      </div>
    </>
  );
};

const listOfStepsWithIcons = [
  {
    title: "step 1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "step 2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
        />
      </svg>
    ),
  },
  {
    title: "step 3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
  {
    title: "step 4",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
];

export const Icons = (args: Partial<IStepperProps>) => {
  const [{ active = 1 }, updateArgs] = useArgs();

  const handlePrev = () => updateArgs({ active: active - 1 });
  const handleNext = () => updateArgs({ active: active + 1 });

  return (
    <>
      <div className="h-32">
        <Stepper active={1} {...args}>
          {listOfStepsWithIcons.map((step, i) => (
            <Stepper.Step title={step.title} icon={step.icon} key={i} />
          ))}
        </Stepper>
      </div>
      <div className="w-full flex justify-center">
        <Button
          color="secondary"
          onClick={handlePrev}
          className="px-8 mr-2"
          disabled={active < 2}
        >
          prev
        </Button>
        <Button
          color="secondary"
          onClick={handleNext}
          className="px-8"
          disabled={active === listOfStepsWithIcons.length}
        >
          next
        </Button>
      </div>
    </>
  );
};
