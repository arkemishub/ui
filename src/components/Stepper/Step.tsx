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

import { twMerge } from "tailwind-merge";
import { IStepProps } from "./Stepper.types";

function Step({
  index = 0,
  color = "secondary",
  icon,
  title,
  active = 0,
}: IStepProps) {
  return (
    <div className={"step"} key={index} data-testid="arke-step">
      <div className="z-10 bg-background">
        <div
          className={twMerge(
            "w-10 h-10 flex justify-center items-center rounded-full",
            index <= active - 1 &&
              color === "primary" &&
              "bg-primary text-secondary",
            index <= active - 1 &&
              color === "secondary" &&
              "bg-secondary text-background",
            index > active - 1 && "border-neutral border-2",
            index !== active - 1 && "opacity-70",
            index === active - 1 && "drop-shadow-md"
          )}
        >
          <span className="select-none">{icon ? icon : index + 1}</span>
        </div>
      </div>
      <section className={twMerge("px-4 mt-2 text-center")}>
        <span className={twMerge(index === active - 1 && "font-bold")}>
          {title}
        </span>
      </section>
    </div>
  );
}

export default Step;
