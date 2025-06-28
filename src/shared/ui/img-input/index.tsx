"use client";
import Image from "next/image";
import { RefObject } from "react";
import { Button } from "../button/button";

export interface ImgInputProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  fileInputRef: RefObject<HTMLInputElement | null>;
  image: string | undefined;
  handlerRemovePhoto: () => void;
  handleClick: () => void;
  styleButton?: string;
  styleContainer?: string;
}

export const ImgInput = ({
  handleImageChange,
  fileInputRef,
  image,
  handlerRemovePhoto,
  handleClick,
  styleButton,
  styleContainer,
}: ImgInputProps) => {
  return (
    <div className={` flex items-center  ${styleContainer}`}>
      <input
        type="file"
        id="uploadImage"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="upload-input hidden"
      />
      <label htmlFor="uploadImage" className="upload-image-button">
        {image ? (
          <Image
            src={image}
            height="175"
            width="175"
            alt=""
            className="image-preview rounded-[50%] w-[175px] h-[175px] object-cover "
          />
        ) : (
          <div className="w-[175px] rounded-[50%] h-[175px] bg-[#7D5260]" />
        )}
      </label>
      <div className={`flex ${styleButton} `}>
        <div className="flex justify-end p-2">
          <Button
            type="button"
            label="Вилучити!"
            handlerEvent={handlerRemovePhoto}
          />
        </div>
        <div className="flex justify-end p-2">
          <Button type="button" label="Змінити!" handlerEvent={handleClick} />
        </div>
      </div>
    </div>
  );
};
