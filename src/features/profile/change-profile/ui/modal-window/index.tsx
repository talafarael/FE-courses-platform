"use client";
import { useUserStore } from "@/src/entities/user/model/userStore";
import { IFormChangeProfile } from "../../model/change-profile";
import { FormChangeProfile } from "../form-change-profile";
import closeImg from "@/public/Group241.svg";
import Image from "next/image";
import defaultImgUser from "@/public/avatar.svg";
import React from "react";

export interface ModalWindowChangeProfileProps {
  handlerClose: () => void;
}
export const ModalWindowChangeProfile = ({
  handlerClose,
}: ModalWindowChangeProfileProps) => {
  const user = useUserStore((state) => state.user);
  const formChangeProfile: IFormChangeProfile = {
    nickname: user?.card.nickname ?? "",
    full_name: user?.card.full_name ?? "",
    telegram: user?.contact_info?.telegram,
    instagram: user?.contact_info?.instagram,
  };
  return (
    <div
      onClick={handlerClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlerClose();
        }
      }}
      className="w-[100vw] fixed h-[100vh]  overflow-y-hidden bg-milk/50  backdrop-blur z-10 top-0 left-0 flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className="max-w-[640px] w-[85%]  h-[80%] flex flex-col items-center justify-center   bg-purplelight opacity-100 rounded-[15px] border-[1.5px] border-[purple]"
      >
        <div className="w-[90%] h-[60px] flex items-center">
          <Image
            className="cursor-pointer"
            onClick={handlerClose}
            src={closeImg}
            alt="close img"
            height={25}
            width={25}
          />
          <h1 className="font-roboto ml-[10px]  text-[30px] max-lg:text-[24px]">
            Налаштування профілю{" "}
          </h1>
        </div>
        <FormChangeProfile
          handlerClose={handlerClose}
          user={formChangeProfile}
          profileImage={user?.card?.profile_pic ?? defaultImgUser}
        />
      </div>
    </div>
  );
};
