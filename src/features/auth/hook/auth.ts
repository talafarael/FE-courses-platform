"use client";
import { useEffect, useState } from "react";
import { LoginUserMutation, RegisterUserMutation } from "../api/auth";
import { LoginSchema, RegisterSchema } from "../model/auth-schema";
import { z } from "zod";
import { ResponseAuth } from "../type/api-auth";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/src/shared/lib/constants/routes";

export const useAuth = () => {
  const [error, setError] = useState<string | undefined>();
  const [response, setResponse] = useState<ResponseAuth | undefined>();
  const router = useRouter();

  const authMutation = async (
    data: z.infer<typeof LoginSchema> | z.infer<typeof RegisterSchema>,
  ) => {
    const registerCheck = RegisterSchema.safeParse(data);
    if (registerCheck.success) {
      await RegisterUserMutation(registerCheck.data, setError, setResponse);
      return;
    }
    const loginCheck = LoginSchema.safeParse(data);
    if (loginCheck.success) {
      await LoginUserMutation(loginCheck.data, setError, setResponse);
      return;
    }

    setError("Invalid data for login or registration");
  };
  useEffect(() => {
    if (response) {
      localStorage.setItem("token", response?.message);
      router.push(ROUTES.home);
    }
  }, [response, router]);
  return { authMutation, error };
};
