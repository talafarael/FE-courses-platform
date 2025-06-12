interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ label, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="bg-purple text-white rounded-3xl px-4 h-[50px]  w-[140px] py-2"
    >
      {label}
    </button>
  );
};
