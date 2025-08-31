"use client"
import { ProfilePage } from "@/src/pages/profile";
import React, { useEffect, useState } from "react";
import { getMeQuery } from "@/src/entities/user/api/user";
import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";

const Page = () => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuth(!!token);

        (async () => {
            try {
                const { data } = await getMeQuery();
                setId(data?.data.id)
                setIsAdmin(data?.data.has_admin_rights);
            } catch (e) {
                setIsAuth(false);
            }
        })();
    }, []);

    if (isAuth === false) {
        return <div className="flex items-center self-center">you are not auth</div>;
    }
    if (isAuth === null) {
        return <div>Загрузка...</div>;
    }

    return (
        <ProtectedRoute>
            <ProfilePage admin={isAdmin} id={id}/>
        </ProtectedRoute>
    );
};

export default Page;
