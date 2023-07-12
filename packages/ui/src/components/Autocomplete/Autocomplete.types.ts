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

import { ChangeEventHandler, ReactNode } from "react";

type AutocompleteBaseProps<TValue> = {
  values?: TValue[];
  label?: string | ReactNode;
  renderValue: (val: TValue) => string | undefined;
  renderOption?: (val: TValue) => ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  placeholder?: string;
  helperText?: string;
  hasError?: boolean;
  disabled?: boolean;
  onInputChange?: ChangeEventHandler<HTMLInputElement>;
  renderChips?: boolean;
  className?: string;
  clearIcon?: ReactNode;
};

export type IAutocompleteProps<
  TValue,
  TMultiple extends boolean | undefined,
  TNullable extends boolean | undefined
> = Extract<
  | ({
      nullable: true;
      multiple: true;
      onChange: (val: TValue[]) => void;
      value?: TValue[];
      clearable?: boolean;
    } & AutocompleteBaseProps<TValue>)
  | ({
      nullable: true;
      multiple?: false;
      onChange: (val: TValue | null) => void;
      value?: TValue | null;
      clearable?: boolean;
    } & AutocompleteBaseProps<TValue>)
  | ({
      nullable?: false;
      multiple: true;
      onChange: (val: TValue[]) => void;
      value?: TValue[];
      clearable?: never;
    } & AutocompleteBaseProps<TValue>)
  | ({
      nullable?: false;
      multiple?: false;
      onChange: (val: TValue) => void;
      value?: TValue;
      clearable?: never;
    } & AutocompleteBaseProps<TValue>),
  { multiple?: TMultiple; nullable?: TNullable }
>;
