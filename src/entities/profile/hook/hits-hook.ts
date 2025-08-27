"use client";
import { useState, useEffect } from "react";
import { HitsResponse } from "@/src/entities/profile/type/hits-api";
import { getHitsQuery } from "@/src/entities/profile/api/hits";

export const useHits = () => {
    const [data, setData] = useState<HitsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHits = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getHitsQuery();
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch hits");
            } finally {
                setLoading(false);
            }
        };

        fetchHits();
    }, []);

    return { data, loading, error };
};
