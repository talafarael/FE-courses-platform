import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFromEntries } from "../../model/form-entries";
import { inputEntriesData } from "./inputs-entries.data";
import { InputForm } from "@/src/shared/ui/input-form";
import { InputOptional } from "@/src/shared/ui/optional-input";
import { Button } from "@/src/shared/ui/button/button";

export interface InputEntriesProps {
	register: UseFormRegister<IFromEntries>;
	errors?: FieldErrors<IFromEntries>;
}
export const InputEntries = ({ register, errors }: InputEntriesProps) => {
	return (
		<div>
			{inputEntriesData.map((elem) => {
				if (elem.state === "normal-input") {
					return (
						<div key={elem.name}>
							<InputForm<IFromEntries>
								type={elem.name}
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
							/>
						</div>
					);
				}
				if (elem.state === "optional-input") {
					return (
						<div key={elem.name}>
							<InputOptional<IFromEntries>
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
								optional={elem.optional}
							/>
						</div>
					);
				}
				return null;
			})}
			<Button label="Створити" type="submit" />
		</div>
	);
};
