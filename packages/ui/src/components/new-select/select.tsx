import { SelectProps } from "./select.types";
import Button from "../button/button";
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
import SelectOption from "./select-option";
import useOnClickOutside from "../../hooks/useClickOutside";
import { ModifierPhases } from "@popperjs/core";
import useDropdown from "../../hooks/useDropdown";
import SelectIcon from "./select-icon";
import SelectOptions from "./select-options";
import SelectValue from "./select-value";

const classNames = {
  select: cn(
    sharedClassNames.inputContainer,
    "justify-start px-4 w-full",
    "select__container"
  ),
  popper: cn("z-20", "select__popper"),
  disabled: cn("opacity-50 cursor-not-allowed", "select--disabled"),
  error: cn("outline outline-error focus:outline-error", "select--error"),
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
  ...props
}: SelectProps<TValue>) {
  const [value, setValue] = useState<TValue | null>(props.value ?? null);
  const rootRef = useRef(null);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const handleChange = useCallback(
    (value: TValue | null) => {
      setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  const rawOptions = useMemo(() => {
    let opts: Array<{ value: TValue; children: ReactNode }> = [];
    Children.map(children, (child: ReactNode) => {
      if (isValidElement(child) && child?.type === SelectOptions) {
        Children.map(child.props.children, (child: ReactNode) => {
          if (isValidElement(child) && child?.type === SelectOption) {
            opts.push({
              value: child.props.value,
              children: child.props.children,
            });
          }
        });
      }
    });

    return opts;
  }, [children]);

  const { isOpen, setIsOpen, activeIndex, setActiveIndex, selectOption } =
    useDropdown({
      values: rawOptions.map((option) => option.value),
      onChange: handleChange,
    });

  const options = useMemo(() => {
    const getOptions = (children: ReactElement) => {
      let index = -1;

      return Children.map(children, (child: ReactNode) => {
        if (isValidElement(child) && child?.type === SelectOption) {
          index = index + 1;
          return cloneElement(child as ReactElement, {
            value: child.props.value,
            children: child.props.children,
            isSelected: child.props.value === value,
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
            children: getOptions(child.props.children),
          });
        }
      }) ?? []
    );
  }, [children, value, activeIndex, selectOption]);

  useOnClickOutside(rootRef, () => setIsOpen(false));

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

  const getDisplayValue = useCallback(() => {
    if (!value) return null;

    const option = rawOptions.find((option) => option.value === value);
    return option?.children ?? (option?.value as string);
  }, [value, rawOptions]);

  return (
    <div ref={rootRef}>
      {label && <span className={classNames.label}>{label}</span>}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          classNames.select,
          disabled && classNames.disabled,
          hasError && classNames.error
        )}
        ref={setReferenceElement}
        role="combobox"
      >
        <SelectValue placeholder={placeholder}>{getDisplayValue()}</SelectValue>
        <SelectIcon />
      </Button>
      {isOpen && (
        <div
          {...attributes.popper}
          style={styles.popper}
          ref={setPopperElement}
          className={classNames.popper}
        >
          {options}
        </div>
      )}
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

Select.Options = SelectOptions;
Select.Option = SelectOption;

export default Select;
