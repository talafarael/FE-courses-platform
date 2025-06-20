import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { IUser } from "../type/user-api";

export interface IUserStore {
  user: IUser | undefined;
  addUser: (newUser: IUser) => void;
}

const localMiddlewares = (f: StateCreator<IUserStore>) =>
  devtools(
    persist(f, {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    })
  );

export const useUserStore = create<IUserStore>()(
  localMiddlewares((set) => ({
    user: undefined,
    addUser: (newUser) => {
      set(() => ({
        user: newUser,
      }));
    },
  }))
);
