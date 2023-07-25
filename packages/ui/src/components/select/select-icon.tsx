import { cn } from "../../lib/utils";

const classNames = {
  icon: cn("h-5 w-5 text-neutral ml-auto", "select__icon"),
};

function SelectIcon() {
  return (
    <span className={classNames.icon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </span>
  );
}

export default SelectIcon;
