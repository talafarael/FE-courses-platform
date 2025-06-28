"use client";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { AxiosResponse } from "axios";
import { handlerError } from "@/src/shared/lib/error/error-handler";
import { IFullCourse } from "./course";
import { IApiResponse } from "@/src/shared/model/api/api-response";
import { AxiosQuery } from "@/src/shared/api/axios";

export interface ICurrentCourseStore {
  currentCurse: IFullCourse | undefined;
  error: string | undefined;
  loading: boolean;
  getCurrentCourse: (id: string) => Promise<void>;
}

const localMiddlewares = (f: StateCreator<ICurrentCourseStore>) =>
  devtools(
    persist(f, {
      name: "currentCurse",
      storage: createJSONStorage(() => sessionStorage),
    }),
  );

export const useCurrentCourseStore = create<ICurrentCourseStore>()(
  localMiddlewares((set) => ({
    currentCurse: undefined,
    loading: false,
    error: undefined,
    getCurrentCourse: async (id: string) => {
      set(() => ({ error: undefined }));

      set(() => ({ loading: true }));
      try {
        const res: AxiosResponse<IApiResponse<IFullCourse>> = await AxiosQuery(
          `courses/get-full?id=${id}`,
        );
        if (res?.data?.data)
          set({
            loading: false,
            currentCurse: res.data.data,
            error: undefined,
          });
      } catch (e) {
        const errMessagehandlerError = handlerError(e);
        set({
          loading: false,
          currentCurse: undefined,
          error: errMessagehandlerError,
        });
      }
    },
  })),
);
