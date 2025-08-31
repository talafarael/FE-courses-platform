export interface CheckinsResponse {
    ok: boolean;
    message: string;
    data: {
        date: string;
    }[];
}