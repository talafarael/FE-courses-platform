import {createApi} from "@/src/shared/api/axios";
import {AxiosResponse} from "axios";
import {CoursesResponse} from "@/src/entities/profile/type/courses-api";

export const getCoursesQuery =async (id:string):Promise<CoursesResponse | null> => {
    const axios = createApi();

    try{
        const res:AxiosResponse<CoursesResponse>=await axios.get("/admin/courses/get-full", {
            params:{
                id:id
            }
        })
        console.log(res.data);
        return res.data;
    }catch (e){
        console.log(e)
        return null;
    }
}