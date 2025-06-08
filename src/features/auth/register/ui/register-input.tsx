import { Input } from "@/src/shared/ui/input/input";

const fields = [
    { placeholder: "Ім'я" },
    { placeholder: "Прізвище" },
    { placeholder: "Електронна пошта", type: "email" },
    { placeholder: "Логін" },
    { placeholder: "Пароль", type: "password" },
];

export const RegisterInput = () => {
    return (
        <div className="flex flex-col gap-2">
            {fields.map(({ placeholder, type = "text" }) => (
                <Input placeholder={placeholder} type={type} />
            ))}
        </div>
    );
};
