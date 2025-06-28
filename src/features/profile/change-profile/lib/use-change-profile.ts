"use client";
import { useState } from "react";
import { ChangeMeMutation } from "../api/change-profile";
import { IFormChangeProfile } from "../model/change-profile";
import { handlerError } from "@/src/shared/lib/error/error-handler";
import { useUserStore } from "@/src/entities/user/model/userStore";

export const useChangeProfile = () => {
  const { getUser } = useUserStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handlerChangeProfile = async (data: IFormChangeProfile, img?: File) => {
    setLoading(true);
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof IFormChangeProfile];
      if (value !== undefined && value !== null) {
        form.append(key, value as string);
      } else {
      }
    });
    if (img) {
      form.append("profile_pic", img);
    }
    try {
      await ChangeMeMutation(form);
      await getUser();
      setError(undefined);
    } catch (e) {
      const errMessagehandlerError = handlerError(e);
      setError(errMessagehandlerError);
    }
    setLoading(false);
  };
  return { loading, handlerChangeProfile, error };
};
