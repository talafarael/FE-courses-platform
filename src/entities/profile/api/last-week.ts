import {createApi} from "@/src/shared/api/axios";
import {AxiosResponse} from "axios";
import {LastWeekResponse} from "@/src/entities/profile/type/last-week-api";

export const getLastWeekQuery =async ():Promise<LastWeekResponse | null> => {
    const axios = createApi();

    try{
        const res:AxiosResponse<LastWeekResponse>=await axios.post("/get-last-week-stats")
        return res.data
    }catch (e){
        console.error(e);
        return null;
    }

}