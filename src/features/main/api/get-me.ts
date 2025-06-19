import { createApi } from "@/src/shared/api/axios";
import { AxiosError, AxiosResponse } from "axios";

export interface UserResponse {
    ok: boolean;
    message: string;
    data: {
        id: string;
        has_admin_rights: boolean;
        has_access_to_courses: string[];
        card: {
            full_name: string;
            nickname: string;
            profile_pic: string[];
        };
        email: string;
        badges: {
            id: string;
            name: string;
            description: string;
        }[];
        contact_info: {
            telegram: string;
            instagram: string;
        };
    };
}

export const getMe = async (
    setError: React.Dispatch<React.SetStateAction<string | undefined>>,
    setResponse: React.Dispatch<React.SetStateAction<UserResponse | undefined>>,
): Promise<void> => {
    const axios = createApi();

    try {
        const res: AxiosResponse<UserResponse> = await axios.get("/user/get-me");
        setResponse(res.data);
    } catch (e) {
        if (e instanceof AxiosError && e?.response?.data?.detail?.message) {
            setError(e.response.data.detail.message);
        } else {
            setError("Не удалось получить данные пользователя.");
        }
    }
};