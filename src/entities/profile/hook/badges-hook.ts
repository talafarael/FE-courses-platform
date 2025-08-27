"use client"
import {useEffect, useState} from "react";
import {BadgeResponse} from "@/src/entities/profile/type/badges-api";
import {getBadgesQuery} from "@/src/entities/profile/api/badges";


export const useBadges = () => {

    const [data, setData] = useState<BadgeResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBadges = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getBadgesQuery();
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch badges");
            } finally {
                setLoading(false);
            }
        };

        fetchBadges();
    }, []);

    return {data, loading, error};
}