"use client"
import { ProfilePage } from "@/src/pages/profile";
import React, { useEffect, useState } from "react";
import { getMeQuery } from "@/src/entities/user/api/user";

const Page = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);

    (async () => {
      await getMeQuery();
    })();
  }, []);

  if (isAuth === false) {
    return (<div className="flex items-center self-center">you are not auth</div>)
  }
  if (isAuth === null) {
    return <div>Загрузка...</div>;
  }

  return (
    <ProfilePage />
  )
}
export default Page;
