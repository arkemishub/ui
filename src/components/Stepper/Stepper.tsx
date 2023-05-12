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

import { IStepperProps } from "./Stepper.types";
import React, { ReactComponentElement, useMemo } from "react";
import Step from "./Step";
export function Stepper({ children, active, color }: IStepperProps) {
  const steps = useMemo(() => {
    const rawChildren = Array.isArray(children) ? children : [children];

    return rawChildren.reduce((acc: ReactComponentElement<any>[], child, i) => {
      if (child.type === Step) {
        const newChild = React.cloneElement(child, {
          active: active,
          key: i,
          index: i,
          color: color,
        });
        console.log(newChild);
        acc.push(newChild);
      }
      return acc;
    }, []);
  }, [children, active, color]);

  return (
    <div
      className={"flex-column justify-center items-center h-10"}
      data-testid="arke-stepper"
    >
      <section className={`flex w-full`}>{steps}</section>
    </div>
  );
}

Stepper.Step = Step;
export default Stepper;
