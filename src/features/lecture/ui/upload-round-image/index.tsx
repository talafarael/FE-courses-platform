"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/src/shared/ui/button/button";
import { useUploadRoundImgLectureSection } from "../../hook/use-upload-round-image";
import { useParams } from "next/navigation";

export interface UploadRoundImageProps {
  img?: string;
}
export const UploadRoundImage = ({ img }: UploadRoundImageProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const params = useParams<{ "section-id": string }>();
  const handleSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const { uploadRoundImg, loading, error } = useUploadRoundImgLectureSection();
  const handlerSubmit = async () => {
    if (!image || !params?.["section-id"]) return;
    await uploadRoundImg(image, params?.["section-id"]);
    if (!error) setImage(null);
  };
  const targgetInput = () => {
    ref.current?.click();
  };
  return (
    <div className="h-[100%] absolute top-[20px] left-[20px]">
      <div className="w-[100px] h-[100px]">
        <input
          onChange={handleSetImage}
          type="file"
          ref={ref}
          className="hidden w-[0px] h-[0px]"
        />

        {image || img ? (
          <Image
            onClick={targgetInput}
            src={img ? img : URL.createObjectURL(image as File)}
            alt="preview"
            width={100}
            height={100}
            className="rounded-[50%] w-[100px] h-[100px] object-cover bg-white cursor-pointer"
          />
        ) : (
          <div
            onClick={targgetInput}
            className="w-[100px] h-[100px] rounded-[50%] bg-white cursor-pointer flex items-center justify-center text-gray-500"
          >
            +
          </div>
        )}
        {error && <h1>{error}</h1>}
        {image && (
          <div>
            <Button
              disable={loading}
              label="submit"
              handlerEvent={handlerSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};
