import { createApi } from "@/src/shared/api/axios";
import { AxiosResponse } from "axios";
import {LeaderBoardResponse} from "../type/leader-board-api";


export const getLeaderBoardQuery = async (): Promise <LeaderBoardResponse | null> => {
    const axios = createApi();

    try {
        const res: AxiosResponse<LeaderBoardResponse> = await axios.get("/user/get-leaderboard");
        console.log(res.data);
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
