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
