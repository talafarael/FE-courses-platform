"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../providers/auth-provider";

interface Props {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push(ROUTES.login);
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};
