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

import { Calendar } from "./index";
import React, { useState } from "react";
import { ICalendarProps } from "./Calendar.types";

export default {
  title: "Calendar",
  component: Calendar,
};

export const Default = (args: ICalendarProps) => {
  return <Calendar {...args} />;
};

export const Controlled = (args: ICalendarProps) => {
  const [date, setDate] = useState(new Date());
  return <Calendar selected={date} onDayClick={(date) => setDate(date)} />;
};
