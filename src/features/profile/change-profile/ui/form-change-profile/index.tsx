import { FormProvider, useForm } from "react-hook-form";
import { ProfileSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormChangeProfile } from "../../model/change-profile";
import { useState } from "react";
import { string } from "zod";
import Image from "next/image";

export interface FormChangeProfileProps {
	user: IFormChangeProfile;
	profileImage: string;
}

export const FormChangeProfile: React.FC<FormChangeProfileProps> = ({
	user,
	profileImage,
}) => {
	const [image, setImage] = useState<string>(profileImage);
	const [file, setFile] = useState<File>();
	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const currentFile = e.target.files?.[0];
		if (currentFile) {
			setFile(currentFile);
			setImage(URL.createObjectURL(currentFile));
		}
	};
	const form = useForm<IFormChangeProfile>({
		resolver: zodResolver(ProfileSchema),
		defaultValues: user,
	});
	const handlerSend = (data: IFormChangeProfile) => {};
	return (
		<FormProvider {...form}>
			<form
				className="w-[50%] max-lg:w-[100%]  flex flex-col items-end justify-center max-lg:items-center "
				onSubmit={form.handleSubmit(handlerSend)}
			>
				<input
					type="file"
					id="uploadImage"
					onChange={handleImageChange}
					className="upload-input"
				/>
				<label htmlFor="uploadImage" className="upload-image-button">
					Choose An Image
				</label>
				<Image src={image} alt="" className="image-preview" />
			</form>
		</FormProvider>
	);
};
