import {createApi} from "@/src/shared/api/axios";
import {AxiosResponse} from "axios";
import {NotificationResponse} from "@/src/entities/profile/type/notification-api";

export const getNotificationQuery=async (): Promise <NotificationResponse | null> =>{
    const axios = createApi();

    try {
        const res: AxiosResponse<NotificationResponse> = await axios.get("/notifications/get-list", {
            params: {
                limit: 5000,
                offset: 0,
            },
        });
        return res.data;
    }catch (e) {
        console.error(e);
        return null;
    }

}