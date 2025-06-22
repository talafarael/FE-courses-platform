"use client";
import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import "../style/globals.css";
import React, { useEffect, useState } from "react";
import MainAuth from "@/src/pages/main-page/authorized-main";
import MainUnAuth from "@/src/pages/main-page/unauthorized-main";
import { getMeQuery } from "@/src/entities/user/api/user";
import { useUserStore } from "@/src/entities/user/model/userStore";
import { useGetUser } from "@/src/entities/user/lib/useGetUser";

export default function Home() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const { } = useGetUser()
  const { user } = useUserStore()
  if (isAuth === null) {
    return <div>Загрузка...</div>;
  }

  return (
    <ProtectedRoute>{isAuth ? <MainAuth /> : <MainUnAuth />}</ProtectedRoute>
  );
}
