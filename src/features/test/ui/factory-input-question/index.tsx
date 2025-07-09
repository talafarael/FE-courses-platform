import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ICraeteQuestionForm } from "../../model/api-question";
import { factoryInputQuestionData } from "./factory-input-question.data";
import { InputForm } from "@/src/shared/ui/input-form";
import { InputOptional } from "@/src/shared/ui/optional-input";

interface FactoryInputQuestionProps {
	register: UseFormRegister<ICraeteQuestionForm>;
	errors?: FieldErrors<ICraeteQuestionForm>;
}
export const FactoryInputQuestion = ({
	register,
	errors,
}: FactoryInputQuestionProps) => {
	return (
		<div>
			{factoryInputQuestionData?.map((elem) => {
				if (elem.state === "normal-input") {
					return (
						<div key={elem.name} className="w-[350px]">
							<InputForm<ICraeteQuestionForm>
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
							<InputOptional<ICraeteQuestionForm>
								placeholder={elem.name}
								name={elem.name}
								register={register}
								error={errors ? errors[elem.name] : undefined}
								optional={elem.optional}
							/>
						</div>
					);
				}
			})}
		</div>
	);
};
