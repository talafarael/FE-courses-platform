import { useState } from "react";
import { ChangeMeMutation } from "../api/change-profile";
import { IFormChangeProfile } from "../model/change-profile";

export const useChangeProfile = () => {
  const [error, setError] = useState<string | undefined>();
  const handlerChangeProfile = async (data: IFormChangeProfile, img: File) => {
    const form = new FormData();
    Object.keys(data).forEach((key) =>
      form.append(key, data[key as keyof IFormChangeProfile]),
    );
    form.append("profile_pic", img);
    try {
      await ChangeMeMutation(form);
    } catch (e) {
      setError();
    }
  };
  return { handlerChangeProfile, error };
};
