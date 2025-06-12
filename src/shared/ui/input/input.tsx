import { useState } from "react";

interface InputProps {
  placeholder: string;
  type?: string;
}

export const Input = ({ placeholder, type }: InputProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isLabelFloating = isFocused || value.length > 0;

  return (
    <div className="relative">
      <input
        className="h-14 w-[500px] border-2 border-purple rounded px-4 py-2 outline-none focus:border-purple-600 transition-all duration-200"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 ease-in-out bg-pinklight px-1 ${isLabelFloating
            ? "top-[-6px] text-xs text-purple"
            : "top-2 text-base text-gray-600"
          }`}
      >
        {placeholder}
      </label>
    </div>
  );
};
