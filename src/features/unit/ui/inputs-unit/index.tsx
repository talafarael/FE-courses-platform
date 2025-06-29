import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormUnit } from "../../model/unit";
import { inputsPriceUnitData, inputsUnitData } from "./inputs-unit.data";
import { InputForm } from "@/src/shared/ui/input-form";
import { TextArea } from "@/src/shared/ui/text-area";
import { Button } from "@/src/shared/ui/button/button";

export interface InputsUnitsProps {
	register: UseFormRegister<IFormUnit>;
	errors?: FieldErrors<IFormUnit>;
}
export const InputsUnits = ({ register, errors }: InputsUnitsProps) => {
	return (
		<div>
			{inputsUnitData.map((elem) => {
				if (elem.state === "normal-input") {
					return (
						<div key={elem.name} className="w-[350px]">
							<InputForm<IFormUnit>
								type={elem.name}
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
							/>
						</div>
					);
				}
				if (elem.state === "large-input") {
					return (
						<div className="" key={elem.name}>
							<TextArea
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
							/>
						</div>
					);
				}
				return null;
			})}
			<div>
				<div>
					<InputForm<IFormUnit>
						type={inputsPriceUnitData.name}
						placeholder={inputsPriceUnitData.name}
						name={inputsPriceUnitData.name}
						register={register}
						error={errors ? errors[inputsPriceUnitData.name] : undefined}
					/>
				</div>
				<div>
					<Button label="Створити" type="submit" />
				</div>
			</div>
		</div>
	);
};
