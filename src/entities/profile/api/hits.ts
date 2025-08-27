import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";
import {HitsResponse} from "@/src/entities/profile/type/hits-api";

export const getHitsQuery = async (): Promise<HitsResponse | null> => {
    const axios = createApi();

    try{
     const res: AxiosResponse<HitsResponse> = await axios.get("/get-hits");
     return res.data;
    }catch (e) {
        console.error(e);
        return null;
    }
}
