"use client";
import { useState, useEffect } from "react";
import { NotificationResponse } from "@/src/entities/profile/type/notification-api";
import { getNotificationQuery } from "@/src/entities/profile/api/notification";

export const useNotifications = () => {
    const [data, setData] = useState<NotificationResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getNotificationQuery();
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch notifications");
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    return { data, loading, error };
};
