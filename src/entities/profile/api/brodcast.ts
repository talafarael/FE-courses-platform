import {createApi} from "@/src/shared/api/axios";
import {AxiosResponse} from "axios";
import {BrodcastResponse} from "@/src/entities/profile/type/brodcast-api";

export const getBrodcastQuery =async (link:string):Promise<BrodcastResponse | null> => {
    const axios = createApi();

    try{
        const res:AxiosResponse<BrodcastResponse>=await axios.post("/admin/broadcast",{
            text:link
        })
        return res.data
    }catch (e){
        console.error(e);
        return null;
    }
}