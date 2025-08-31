"use client";
import { useState, useEffect } from "react";
import { LastWeekResponse } from "@/src/entities/profile/type/last-week-api";
import { getLastWeekQuery } from "@/src/entities/profile/api/last-week";

export const useLastWeek = () => {
    const [data, setData] = useState<LastWeekResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLastWeek = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getLastWeekQuery();
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch last week data");
            } finally {
                setLoading(false);
            }
        };

        fetchLastWeek();
    }, []);

    return { data, loading, error };
};
