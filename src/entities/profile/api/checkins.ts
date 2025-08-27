import {createApi} from "@/src/shared/api/axios";
import {AxiosResponse} from "axios";
import {CheckinsResponse} from "@/src/entities/profile/type/checkins-api";

export const getCheckinsQuery =async ():Promise<CheckinsResponse | null> => {
    const axios = createApi();

    try{
        const res:AxiosResponse<CheckinsResponse>=await axios.get("/user/get-checkins")
        return res.data
    }catch (e){
        console.error(e);
        return null;
    }
}