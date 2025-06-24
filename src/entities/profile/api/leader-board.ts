import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";
import {TopRatingResponse} from "../type/leader-board-api";


export const leaderBoardQuery = async (): Promise <TopRatingResponse | null> => {
    const axios = createApi();

    try {
        const res: AxiosResponse<TopRatingResponse> = await axios.get("/user/get-leaderboard");
        console.log(res.data);
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
