"use client";

interface DropdownProps {
  name: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
}

export function Dropdown({ name, items, value, onChange }: DropdownProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option defaultValue={""}> </option>

      {items &&
        items.map((item, index) => (
          <option key={`${item}-${index}`} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
}
