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

import {
  Actions,
  ActionTypes,
  HighlightType,
  SelectProps,
  State,
} from "./select.types";
import {
  createContext,
  CSSProperties,
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";
import SelectOption from "./select-option";
import useOnClickOutside from "../../hooks/useClickOutside";
import SelectOptions from "./select-options";
import SelectButton from "./select-button";
import { ModifierPhases } from "@popperjs/core";
import { usePopper } from "react-popper";

const classNames = {
  label: cn(sharedClassNames.label, "select__label"),
  helperText: cn("mt-2 text-sm", "select__helperText"),
};

function getHighlightIndex(
  options: { id: string }[],
  currentIndex: number | null,
  highlightType: HighlightType,
  id?: string
) {
  switch (highlightType) {
    case HighlightType.First:
      return 0;
    case HighlightType.Last:
      return options.length - 1;
    case HighlightType.Next:
      if (currentIndex === null) return 0;
      return currentIndex + 1 === options.length ? 0 : currentIndex + 1;
    case HighlightType.Previous:
      if (currentIndex === null) return options.length - 1;
      return currentIndex <= 0 ? options.length - 1 : currentIndex - 1;
    case HighlightType.Id:
      return options.findIndex((option) => option.id === id);
    default:
      return null;
  }
}

function reducers<TValue>(state: State<TValue>, action: Actions<TValue>) {
  switch (action.type) {
    case ActionTypes.RegisterOption:
      const options = state.options.some((option) => option.id === action.id)
        ? state.options
        : [...state.options, { id: action.id, value: action.value }];
      return { ...state, options };
    case ActionTypes.OpenOptions:
      return { ...state, open: true };
    case ActionTypes.CloseOptions:
      return { ...state, open: false, highlightedIndex: null };
    case ActionTypes.HighlightOption:
      return {
        ...state,
        highlightedIndex: getHighlightIndex(
          state.options,
          state.highlightedIndex,
          action.highlightType,
          action.id
        ),
      };
    default:
      return state;
  }
}

const SelectContext = createContext<
  | ({
      openOptions: () => void;
      closeOptions: () => void;
      highlightOption(highlightType: HighlightType.Id, id: string): void;
      highlightOption(highlightType: HighlightType, id?: string): void;
      registerOption: (id: string, value: any) => void;
      open: boolean;
      optionsRef?: RefObject<HTMLDivElement>;
      selectOption: (id: string) => void;
      internalValue: any;
      popper: {
        buttonRef: Dispatch<SetStateAction<HTMLDivElement | null>>;
        popperRef: Dispatch<SetStateAction<HTMLDivElement | null>>;
        styles?: CSSProperties;
        attributes?: Record<string, unknown>;
      };
    } & State<any> &
      Pick<
        SelectProps<any>,
        | "multiple"
        | "hasError"
        | "disabled"
        | "startAdornment"
        | "endAdornment"
        | "placeholder"
      >)
  | null
>(null);

export const useSelect = () => {
  let context = useContext(SelectContext);

  if (context === null) {
    let err = new Error(`Component is not child of <Select/> component.`);
    if (Error.captureStackTrace) Error.captureStackTrace(err, useSelect);
    throw err;
  }

  return context;
};

function SelectComponent<TValue>({
  children,
  label,
  helperText,
  hasError,
}: SelectProps<TValue>) {
  const { closeOptions } = useSelect();

  const rootRef = useRef(null);

  useOnClickOutside(rootRef, () => closeOptions());

  return (
    <div ref={rootRef} data-testid="arke-select">
      {label && <span className={classNames.label}>{label}</span>}
      {children}
      {helperText && (
        <div
          className={cn(
            classNames.helperText,
            hasError ? "text-error" : "opacity-50"
          )}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}

function Select<TValue = string>({
  onChange,
  value,
  multiple,
  hasError,
  startAdornment,
  endAdornment,
  disabled,
  placeholder,
  ...props
}: SelectProps<TValue>) {
  const optionsRef = useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = useState<TValue | null>(
    (value as TValue) ?? null
  );
  const [state, dispatch] = useReducer(reducers, {
    options: [],
    open: false,
    highlightedIndex: null,
  });

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const modifiers = useMemo(() => {
    return [
      {
        name: "sameWidth",
        enabled: true,
        phase: "beforeWrite" as ModifierPhases,
        requires: ["computeStyles"],
        fn({ state }: any) {
          state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        effect({ state }: any) {
          state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
        },
      },
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "viewport",
        },
      },
    ];
  }, []);

  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    strategy: "fixed",
    modifiers,
  });

  const registerOption = useCallback((id: string, value: TValue) => {
    dispatch({ type: ActionTypes.RegisterOption, id, value });
  }, []);

  const openOptions = useCallback(() => {
    dispatch({ type: ActionTypes.OpenOptions });
  }, []);

  const closeOptions = useCallback(() => {
    dispatch({ type: ActionTypes.CloseOptions });
  }, []);

  const selectOption = useCallback(
    (id: string) => {
      const option = state.options.find((option) => option.id === id);

      if (!option) return;

      if (multiple) {
        const oldValue: TValue[] = Array.isArray(internalValue)
          ? internalValue
          : [];
        const newValue = oldValue?.includes(option.value as TValue)
          ? oldValue.filter((val) => val !== option.value)
          : [...oldValue, option.value];

        setInternalValue(newValue as TValue);
        onChange?.(newValue as TValue);
      } else {
        setInternalValue(option.value as TValue);
        onChange?.(option.value as TValue);
        closeOptions();
      }
    },
    [state.options, internalValue]
  );

  const highlightOption = useCallback(
    (highlightType: HighlightType, id?: string) => {
      if (highlightType === HighlightType.Id) {
        return dispatch({
          type: ActionTypes.HighlightOption,
          highlightType,
          id,
        });
      }
      return dispatch({ type: ActionTypes.HighlightOption, highlightType });
    },
    []
  );

  return (
    <SelectContext.Provider
      value={{
        ...state,
        registerOption,
        openOptions,
        closeOptions,
        highlightOption,
        optionsRef,
        selectOption,
        internalValue,
        hasError,
        disabled,
        startAdornment,
        endAdornment,
        placeholder,
        popper: {
          buttonRef: setReferenceElement,
          popperRef: setPopperElement,
          styles: styles.popper,
          attributes: attributes.popper,
        },
      }}
    >
      <SelectComponent {...props} />
    </SelectContext.Provider>
  );
}

Select.Button = SelectButton;
Select.Options = SelectOptions;
Select.Option = SelectOption;

export default Select;
