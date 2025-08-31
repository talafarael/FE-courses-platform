"use client";
import { useState, useEffect } from "react";
import { LeaderBoardResponse } from "@/src/entities/profile/type/leader-board-api";
import { getLeaderBoardQuery } from "@/src/entities/profile/api/leader-board";

export const useLeaderBoard = () => {
    const [data, setData] = useState<LeaderBoardResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeaderBoard = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getLeaderBoardQuery();
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch leader board");
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderBoard();
    }, []);

    return { data, loading, error };
};
