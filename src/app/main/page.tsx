import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import '../style/globals.css'
import React from "react";
import {MainPage} from "@/src/pages/main-page/unauthorized-main";

export default function Home() {
  return (
      <ProtectedRoute >
              <MainPage/>
      </ProtectedRoute>
  );
}