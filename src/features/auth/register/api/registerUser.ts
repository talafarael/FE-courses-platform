interface IregisterUser{
    full_name: string;
    email: string;
    login: string;
    password: string;
}

export const registerUser = async ({full_name,email,login,password}: IregisterUser) => {
    const response = await fetch("https://plcoursestestapi.esp.ovh/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ full_name, email, login, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "error registering user");
    }

    return response.json();
};
