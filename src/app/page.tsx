import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import './style/globals.css'
import React from "react";


export default function Home() {
    return (
        <ProtectedRoute >
            ok
        </ProtectedRoute>
    );
}