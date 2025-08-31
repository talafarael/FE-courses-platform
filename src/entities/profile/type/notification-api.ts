export interface NotificationResponse {
    ok: boolean;
    message: string;
    data: {
        notifications: {
            id: number;
            user_id: string;
            type: "chat_with_admins";
            data: {
                id: string;
                user_id: string;
                messages: {
                    id: string;
                    thread_id: string;
                    is_from_admin: boolean;
                    text: string;
                }[];
            };
            created_at: string;
        }[];
        total_count: number;
    };
}