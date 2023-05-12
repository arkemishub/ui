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
import Skeleton from "./Skeleton";
import { ISkeletonProps } from "./Skeleton.types";

export default {
  title: "Skeleton",
  component: Skeleton,
};

export const Default = (args: Partial<ISkeletonProps>) => {
  return (
    <>
      <Skeleton {...args} />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-80 h-48" />
        <Skeleton className="w-52 h-10 rounded-theme" />
        <Skeleton className="w-80 h-10" />
      </div>
    </>
  );
};
