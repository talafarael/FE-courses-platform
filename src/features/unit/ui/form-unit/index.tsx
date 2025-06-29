import { FormProvider, useForm } from "react-hook-form";
import { FormUnitSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { unitDefaultValue } from "../../model/mock-data";
import { IFormUnit } from "../../model/unit";
import { InputsUnits } from "../inputs-unit";
export interface FormUnitProps {
	handlerSend: (data: IFormUnit) => void;
}
export const FormUnit = ({ handlerSend }: FormUnitProps) => {
	const form = useForm<IFormUnit>({
		resolver: zodResolver(FormUnitSchema),
		defaultValues: unitDefaultValue,
	});
	return (
		<FormProvider {...form}>
			<form
				className="w-auto bg-purplelight border-[#49454F] border-[2px] max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-center  "
				onSubmit={form.handleSubmit((data) => handlerSend(data))}
			>
				<InputsUnits errors={form.formState.errors} register={form.register} />
			</form>
		</FormProvider>
	);
};
