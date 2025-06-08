interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
}

export const Button = ({ label, type }: ButtonProps) => {
    return (

            <button type={type} className="bg-purple text-white rounded-3xl px-4 py-2">
                {label}
            </button>

    );
};
