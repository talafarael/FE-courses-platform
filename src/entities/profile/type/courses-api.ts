export interface CoursesResponse {
    ok: boolean;
    message: string;
    data: {
        id: string;
        name: string;
        description: string;
        price_in_pln: number;
        picture: string;
        is_hidden: boolean;
        units: Array<{
            id: string;
            course_id: string;
            name: string;
            order: number;
            price_in_pln?: number;
            entries?: Array<{
                id: string;
                unit_id: string;
                order: number;
                is_completed: boolean;
                lecture?: {
                    id: string;
                    name: string;
                    sections: Array<{
                        id: string;
                        lecture_id: string;
                        task: string;
                        text: string;
                        rounded_image: string;
                        images: Record<string, string>;
                        files: Record<string, string>;
                    }>;
                };
                test?: {
                    id: string;
                    name: string;
                    questions: Array<{
                        id: string;
                        test_id: string;
                        order: number;
                        select_question?: {
                            id: string;
                            question_text: string;
                            question_images: Record<string, string>;
                            answers: Array<{
                                id: string;
                                question_id: string;
                                answer_text: string;
                                answer_images: Record<string, string>;
                                order: number;
                                is_correct?: boolean;
                            }>;
                        };
                        form_question?: {
                            id: string;
                            question_text: string;
                            question_images: Record<string, string>;
                            answers: Record<string, Array<null>>;
                        };
                    }>;
                };
            }>;
        }>;
    };
}
