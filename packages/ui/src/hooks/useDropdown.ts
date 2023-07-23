import { Dispatch, useCallback, useEffect, useState } from "react";

function registerFocusHandlers({
  setIsOpen,
}: {
  setIsOpen: Dispatch<boolean>;
}) {
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Up":
      case "ArrowUp":
      case "Down":
      case "ArrowDown":
      case " ": // Space
      case "Enter":
        event.preventDefault();
        setIsOpen(true);
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}

function registerOpenHandlers<TValue>({
  activeIndex,
  setActiveIndex,
  onChange,
  values,
}: {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
  onChange: (value: TValue | null) => void;
  values: TValue[];
}) {
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Up":
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex(activeIndex <= 0 ? values.length - 1 : activeIndex - 1);
        return;
      case "Down":
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex(activeIndex + 1 === values.length ? 0 : activeIndex + 1);
        return;
      case "Enter":
      case " ": // Space
        event.preventDefault();
        onChange(values[activeIndex]);
        return;
      case "Esc":
      case "Escape":
        event.preventDefault();
        onChange(null);
        return;
      case "PageUp":
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        return;
      case "PageDown":
      case "End":
        event.preventDefault();
        setActiveIndex(values.length - 1);
        return;
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}

function useDropdown<TValue>({
  values,
  onChange,
}: {
  values: TValue[];
  onChange: (value: TValue | null) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectOption = useCallback(
    (value: TValue | null) => {
      onChange(value);
      setIsOpen(false);
    },
    [onChange]
  );

  useEffect(() => {
    if (isOpen) {
      return registerOpenHandlers({
        values,
        activeIndex,
        setActiveIndex,
        onChange: selectOption,
      });
    }

    if (isFocus) {
      return registerFocusHandlers({ setIsOpen });
    }
  }, [activeIndex, isOpen, isFocus, values, selectOption]);

  return {
    isOpen,
    setIsOpen,
    isFocus,
    setIsFocus,
    activeIndex,
    setActiveIndex,
    selectOption,
  };
}

export default useDropdown;
