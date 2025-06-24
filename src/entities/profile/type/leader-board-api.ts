export interface TopRatingResponse {
    ok: boolean;
    message: string;
    data: {
        top: Array<[string | null, string | null]>;
        user_place: number;
        user_rating: string;
    };
}