import { ChangeEvent, HTMLAttributes } from "react";

interface SearchBarProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: string) => void;
}

export const SearchBar = ({
  onChange,
  placeholder = "Search...",
  ...rest
}: SearchBarProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="input w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm sm:w-auto"
      placeholder={placeholder}
      onChange={handleOnChange}
      {...rest}
    />
  );
};
