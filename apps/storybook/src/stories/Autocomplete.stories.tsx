import { useState } from "react";
import { Autocomplete } from "@arkejs/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/client-api";

const departments = [
  { id: 1, name: "Marketing", contact: "Durward Reynolds" },
  { id: 2, name: "HR", contact: "Kenton Towne" },
  { id: 3, name: "Sales", contact: "Therese Wunsch" },
  { id: 4, name: "Finance", contact: "Benedict Kessler" },
  { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
];

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default = (args: Story["args"]) => {
  const [{ value, values = departments }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    //   @ts-ignore
    <Autocomplete
      {...args}
      value={value}
      values={filteredValues}
      onInputChange={(e) => setSearch(e.target.value)}
      onChange={handleChange}
      renderValue={(val) => val?.name}
      placeholder="Search..."
    />
  );
};

export const Nullable = (args: Story["args"]) => {
  const [{ value, values = departments }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    <>
      <button onClick={() => handleChange(null)}>reset</button>
      <Autocomplete
        {...args}
        nullable
        value={value}
        values={filteredValues}
        onInputChange={(e) => {
          setSearch(e.target.value);
        }}
        onChange={handleChange}
        renderValue={(val) => val?.name}
        placeholder="Search..."
      />
    </>
  );
};

export const Clearable = (args: Story["args"]) => {
  const [{ value, values = departments }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    <Autocomplete
      {...args}
      nullable
      clearable
      value={value}
      values={filteredValues}
      onInputChange={(e) => {
        setSearch(e.target.value);
      }}
      onChange={handleChange}
      renderValue={(val) => val?.name}
      placeholder="Search..."
    />
  );
};

export const Multiple = (args: Story["args"]) => {
  const [{ value, values = departments }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => {
    updateArgs({ value: val });
  };

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  return (
    //   @ts-ignore
    <Autocomplete
      {...args}
      label="Select an item"
      value={value}
      nullable
      clearable
      values={filteredValues}
      onInputChange={(e) => setSearch(e.target.value)}
      onChange={handleChange}
      multiple
      placeholder="Search..."
    />
  );
};

export const Icons = (args: Story["args"]) => {
  const [{ value, values = departments }, updateArgs] = useArgs();
  const [search, setSearch] = useState("");

  const handleChange = (val: unknown) => updateArgs({ value: val });

  const filteredValues = values.filter((v: { name: string }) =>
    v.name.toLowerCase().includes(search)
  );

  const StartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );

  const EndIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  );

  return (
    //   @ts-ignore
    <Autocomplete
      {...args}
      value={value}
      values={filteredValues}
      onInputChange={(e) => setSearch(e.target.value)}
      onChange={handleChange}
      startAdornment={<StartIcon />}
      endAdornment={<EndIcon />}
      placeholder="Search..."
    />
  );
};
