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

import { PropsWithChildren, ReactNode } from "react";

type SelectProps<TValue> = PropsWithChildren<{
  placeholder?: string;
  label?: string;
  helperText?: string;
  hasError?: boolean;
  disabled?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  value?: TValue;
  onChange?(value: TValue): void;
  multiple?: boolean;
}>;

enum ActionTypes {
  RegisterOption = "REGISTER_OPTION",
  OpenOptions = "OPEN_OPTIONS",
  CloseOptions = "CLOSE_OPTIONS",
  HighlightOption = "HIGHLIGHT_OPTION",
}

enum HighlightType {
  First = "FIRST",
  Last = "LAST",
  Next = "NEXT",
  Previous = "PREVIOUS",
  Id = "ID",
}

type Actions<TValue> =
  | { type: ActionTypes.RegisterOption; id: string; value: TValue }
  | { type: ActionTypes.OpenOptions }
  | { type: ActionTypes.CloseOptions }
  | {
      type: ActionTypes.HighlightOption;
      highlightType: HighlightType;
      id?: string;
    };

type State<TValue> = {
  options: { id: string; value: TValue }[];
  open: boolean;
  highlightedIndex: number | null;
};

export { HighlightType, ActionTypes };
export type { SelectProps, Actions, State };
