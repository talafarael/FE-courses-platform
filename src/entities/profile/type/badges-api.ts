export interface BadgeResponse {
    ok: boolean;
    message: string;
    data: {
        id: string;
        name: string;
        description: string;
    }[];
}