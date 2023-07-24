import { SelectProps } from "./select.types";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePopper } from "react-popper";
import { cn } from "../../lib/utils";
import sharedClassNames from "../../shared/classNames";
import SelectOption, { SelectOptionProps } from "./select-option";
import useOnClickOutside from "../../hooks/useClickOutside";
import { ModifierPhases } from "@popperjs/core";
import useDropdown from "../../hooks/useDropdown";
import SelectOptions, { SelectOptionsProps } from "./select-options";
import SelectButton from "./select-button";

const classNames = {
  popper: cn("z-20", "select__popper"),
  label: cn(sharedClassNames.label, "select__label"),
  helperText: cn("mt-2 text-sm", "select__helperText"),
};

function Select<TValue>({
  placeholder,
  children,
  onChange,
  label,
  helperText,
  hasError,
  disabled,
  multiple,
  value,
}: SelectProps<TValue, boolean | undefined>) {
  type TActualValue = true extends typeof multiple ? TValue[] : TValue;
  const [internalValue, setInternalValue] = useState<TActualValue | null>(
    (value as TActualValue) ?? null
  );
  const rootRef = useRef(null);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const rawOptions = useMemo(() => {
    let opts: Array<{ value: TValue; children: ReactNode }> = [];
    Children.map(children, (child: ReactNode) => {
      if (isValidElement(child) && child?.type === SelectOptions) {
        const options = child as ReactElement<SelectOptionsProps>;
        Children.map(options.props.children, (child: ReactNode) => {
          if (isValidElement(child) && child?.type === SelectOption) {
            const option = child as ReactElement<SelectOptionProps<TValue>>;
            opts.push({
              value: option.props.value,
              children: option.props.children,
            });
          }
        });
      }
    });

    return opts;
  }, [children]);

  const handleChange = useCallback(
    (value: TValue | null) => {
      if (multiple) {
        const newValue = internalValue?.includes(value as TValue)
          ? internalValue.filter((val) => val !== value)
          : [...(internalValue ?? []), value];

        setInternalValue(newValue as TActualValue);
        onChange?.(newValue as TValue[]);
      } else {
        setInternalValue(value as TActualValue);
        onChange?.(value);
      }
    },
    [onChange, internalValue]
  );

  const { isOpen, setIsOpen, activeIndex, setActiveIndex, selectOption } =
    useDropdown({
      values: rawOptions.map((option) => option.value),
      onChange: handleChange,
    });

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

  const options = useMemo(() => {
    const getOptions = (children: ReactNode | ReactNode[]) => {
      let index = -1;

      return Children.map(children, (child: ReactNode) => {
        if (isValidElement(child) && child?.type === SelectOption) {
          index = index + 1;
          const option = child as ReactElement<SelectOptionProps<TValue>>;
          return cloneElement(option, {
            value: option.props.value,
            children: option.props.children,
            isSelected: multiple
              ? (internalValue as TValue[])?.includes(option.props.value)
              : option.props.value === internalValue,
            isHighlighted: index === activeIndex,
            onChange: selectOption,
            index,
            onHighlightChange: (index: number) => setActiveIndex(index),
          });
        }
      });
    };

    return (
      Children.map(children, (child: ReactNode) => {
        if (isValidElement(child) && child?.type === SelectOptions) {
          return cloneElement(child as ReactElement, {
            ...attributes.popper,
            children: getOptions(
              (child as ReactElement<SelectOptionsProps>).props.children
            ),
            style: styles.popper,
            ref: setPopperElement,
          });
        }
      }) ?? []
    );
  }, [children, internalValue, activeIndex, selectOption, attributes]);

  useOnClickOutside(rootRef, () => setIsOpen(false));

  const button = useMemo(() => {
    return Children.map(children, (child: ReactNode) => {
      if (isValidElement(child) && child?.type === SelectButton) {
        return cloneElement(child as ReactElement, {
          placeholder,
          onClick: () => setIsOpen(true),
          ref: setReferenceElement,
          hasError,
          disabled,
          value: internalValue,
        });
      }
    });
  }, [children, hasError, disabled, placeholder, internalValue]);

  return (
    <div ref={rootRef}>
      {label && <span className={classNames.label}>{label}</span>}
      {button}
      {isOpen && options}
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

Select.Button = SelectButton;
Select.Options = SelectOptions;
Select.Option = SelectOption;

export default Select;
