import { PropsWithChildren, ReactNode } from "react";

type SelectBaseProps = PropsWithChildren<{
  placeholder?: string;
  label?: string;
  helperText?: string;
  hasError?: boolean;
  disabled?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}>;

type SelectProps<TValue, TMultiple extends boolean | undefined> = Extract<
  | {
      multiple?: false;
      value?: TValue;
      onChange?: (value: TValue | null) => void;
    }
  | {
      multiple: true;
      value?: TValue[];
      onChange?: (value: TValue[] | null) => void;
    },
  { multiple?: TMultiple }
> &
  SelectBaseProps;

export type { SelectProps };
