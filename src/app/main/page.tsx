"use client";

import { ProtectedRoute } from "@/src/shared/lib/router/protected-route";
import "../style/globals.css";
import React, { useEffect } from "react";
import { Main } from "@/src/pages/main-page/authorized-main";
import { useUserStore } from "@/src/entities/user/model/userStore";
import { Button } from "@/src/shared/ui/button/button";
import Link from "next/link";
import { ROUTES } from "@/src/shared/lib/constants/routes";

export default function Home() {
  const { getUser, loading, error } = useUserStore();
  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);
  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return (
      <div className=" flex flex-col justify-center items-center">
        {error}
        <Link href={ROUTES.login} className="mt-[20px]">
          <Button label="Relogin" />
        </Link>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <Main />
    </ProtectedRoute>
  );
}
