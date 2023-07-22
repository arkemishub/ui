import { PropsWithChildren } from "react";

type SelectProps<T extends unknown> = PropsWithChildren<{
  value?: T;
  onChange?: (value: T | null) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  hasError?: boolean;
  disabled?: boolean;
}>;

export type { SelectProps };
