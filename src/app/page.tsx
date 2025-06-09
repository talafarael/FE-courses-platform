import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import './style/globals.css'
import React from "react";

export default function Home() {
  return (
      <ProtectedRoute>
        <div className={`bg-milk text-black h-screen`}>
            <p className={`text-purple`}>qwertyuiop</p>
            <p className={`text-purplelight`}>qwertyuiop</p>
        </div>
      </ProtectedRoute>
  );
}