"use client";
import { FormProvider, useForm } from "react-hook-form";
import { ProfileSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormChangeProfile } from "../../model/change-profile";
import { useRef, useState } from "react";
import Image from "next/image";
import { InputsChangeProfile } from "../inputs-change-profile";
import { Button } from "@/src/shared/ui/button/button";
import { useChangeProfile } from "../../lib/use-change-profile";

export interface FormChangeProfileProps {
  user: IFormChangeProfile;
  profileImage: string;
  handlerClose: () => void;
}

export const FormChangeProfile: React.FC<FormChangeProfileProps> = ({
  user,
  profileImage,
  handlerClose,
}) => {
  const [image, setImage] = useState<string>(profileImage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { loading, handlerChangeProfile, error } = useChangeProfile();

  const [file, setFile] = useState<File>();
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = e.target.files?.[0];
    if (currentFile) {
      setFile(currentFile);
      setImage(URL.createObjectURL(currentFile));
    } else {
      setFile(undefined);
      setImage(profileImage);
    }
  };
  const form = useForm<IFormChangeProfile>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: user,
  });
  const handlerRemovePhoto = () => {
    setFile(undefined);
    setImage(profileImage);
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handlerSend = async (data: IFormChangeProfile) => {
    await handlerChangeProfile(data, file);
    if (!error) handlerClose();
  };
  return (
    <FormProvider {...form}>
      <form
        className="rounded-[12px] w-[90%] bg-purpleExtraLight h-[88%]     flex flex-col items-center justify-around max-lg:items-center "
        onSubmit={form.handleSubmit(handlerSend)}
      >
        <div className=" flex items-center flex-col">
          <input
            type="file"
            id="uploadImage"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="upload-input hidden"
          />
          <label htmlFor="uploadImage" className="upload-image-button">
            <Image
              src={image}
              height="175"
              width="175"
              alt=""
              className="image-preview rounded-[50%] w-[175px] h-[175px] object-cover "
            />
          </label>
          <div className="flex">
            <div className="flex justify-end p-2">
              <Button
                type="button"
                label="Вилучити!"
                handlerEvent={handlerRemovePhoto}
              />
            </div>
            <div className="flex justify-end p-2">
              <Button
                type="button"
                label="Змінити!"
                handlerEvent={handleClick}
              />
            </div>
          </div>
        </div>

        <InputsChangeProfile
          errors={form.formState.errors}
          register={form.register}
        />
        {loading && <h1>Завантаження</h1>}
        {error && <h1>{error}</h1>}
        <div className="flex justify-end p-2">
          <Button disable={loading} type="submit" label="готово!" />
        </div>
      </form>
    </FormProvider>
  );
};
