import {
	FieldError,
	FieldValues,
	Path,
	UseFormRegister,
} from "react-hook-form";

export interface TextAreaProps<T extends FieldValues> {
	placeholder: string;
	name: Path<T>;
	register: UseFormRegister<T>;
	error?: FieldError | undefined;
}
export const TextArea = <T extends FieldValues>({
	placeholder,
	name,
	register,
	error,
}: TextAreaProps<T>) => {
	return (
		<div>
			<label {...register(name)} key={name}>
				<textarea id="big-text" name="big-text" placeholder={placeholder} />
			</label>
			{error?.message && <h1>{error?.message}</h1>}
		</div>
	);
};
