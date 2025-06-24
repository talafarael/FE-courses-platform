"use client";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { AxiosResponse } from "axios";
import { getMeQuery } from "../api/user";
import { handlerError } from "@/src/shared/lib/error/error-handler";
import { IUser } from "../type/user";
import { IUserResponse } from "../type/user-api";

export interface IUserStore {
  user: IUser | undefined;
  error: string | undefined;
  loading: boolean;
  getUser: () => Promise<void>;
}

const localMiddlewares = (f: StateCreator<IUserStore>) =>
  devtools(
    persist(f, {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }),
  );

export const useUserStore = create<IUserStore>()(
  localMiddlewares((set) => ({
    user: undefined,
    loading: false,
    error: undefined,
    getUser: async () => {
      set(() => ({ error: undefined }));

      if (!localStorage.getItem("token")) return;
      set(() => ({ loading: true }));
      try {
        const res: AxiosResponse<IUserResponse> = await getMeQuery();
        if (res?.data?.data)
          set({ loading: false, user: res.data.data, error: undefined });
      } catch (e) {
        const errMessagehandlerError = handlerError(e);
        set({ loading: false, user: undefined, error: errMessagehandlerError });
      }
    },
  })),
);
