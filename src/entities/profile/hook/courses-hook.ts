import {getCoursesQuery} from "@/src/entities/profile/api/courses";
import {useEffect, useState} from "react";
import {CoursesResponse} from "@/src/entities/profile/type/courses-api";

export const useCourses = (id:string) => {
    const [data, setData] = useState<CoursesResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getCoursesQuery(id);
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch courses");
            } finally {
                setLoading(false);
            }
        }
        fetchCourses();

    }, [id])

return {data, loading, error};
}
