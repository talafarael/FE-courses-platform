import {
	FieldError,
	FieldValues,
	Path,
	UseFormRegister,
} from "react-hook-form";
import { IOptional } from "../../model/input-data";

export interface InputOptionalProps<T extends FieldValues> {
	register: UseFormRegister<T>;
	error?: FieldError | undefined;
	name: Path<T>;
	optional: IOptional[];
	placeholder: string;
}
export const InputOptional = <T extends FieldValues>({
	register,
	name,
	error,
	optional,
}: InputOptionalProps<T>) => {
	return (
		<div>
			<select
				className="w-full h-full border-[2px] rounded-[10px] border-inputBorder"
				{...register(name)}
			>
				{optional.map((elem) => (
					<option key={elem.value} value={elem.value}>
						{elem.text}
					</option>
				))}
			</select>
			{error && (
				<span className="error-message text-darkPurple ">{error?.message}</span>
			)}
		</div>
	);
};
