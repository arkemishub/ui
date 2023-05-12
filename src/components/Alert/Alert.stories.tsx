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

import { IAlertProps } from "./Alert.types";
import { Alert } from "../Alert";
import React, { useState } from "react";

const variants: IAlertProps[] = [
  { color: "error", title: "Error" },
  { color: "warning", title: "Warning" },
  { color: "info", title: "Info" },
  { color: "success", title: "Success" },
];

export default {
  title: "Alert",
  component: Alert,
};

export const Default = (args: Partial<IAlertProps>) => {
  return (
    <div className="flex flex-col gap-4">
      <Alert {...args}>
        <p className="text-sm ml-7">Here alert message</p>
      </Alert>
      {variants.map((item, index) => (
        <Alert key={index} {...args} color={item.color} title={item.title}>
          <p className="text-sm ml-7">Here alert message</p>
        </Alert>
      ))}
    </div>
  );
};
