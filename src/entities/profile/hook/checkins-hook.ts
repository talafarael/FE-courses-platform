"use client"
import {useState, useEffect} from "react";
import {CheckinsResponse} from "@/src/entities/profile/type/checkins-api";
import {getCheckinsQuery} from "@/src/entities/profile/api/checkins";

export const useCheckins = () => {
    const [dataWeek, setData] = useState<CheckinsResponse | null>(null);
    const [loadingWeek, setLoading] = useState(true);
    const [errorWeek, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCheckins = async () => {
            try{
                setLoading(true);
                setError(null);
                const response=await getCheckinsQuery();
                setData(response);
            }catch (err){
                setError(err instanceof Error ? err.message : "Failed to fetch  checkins");
            }finally {
                setLoading(false);
            }
        }

        fetchCheckins()
    },[])

    return {dataWeek, loadingWeek, errorWeek};
}