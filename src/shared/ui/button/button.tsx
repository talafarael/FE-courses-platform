"use client";
interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  handlerEvent?: () => void;
  disable?: boolean;
}

export const Button = ({
  label,
  type,
  handlerEvent,
  disable = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={handlerEvent}
      disabled={disable}
      className="bg-purple text-white rounded-3xl px-4 h-[50px]  w-[140px] py-2"
    >
      {label}
    </button>
  );
};
