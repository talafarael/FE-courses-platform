import { FormProvider, useForm } from "react-hook-form";
import { FormUnitSchema } from "../../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { unitDefaultValue } from "../../model/mock-data";
import { IFormUnit } from "../../model/unit";
import { InputsUnits } from "../inputs-unit";
export interface FormUnitProps {
	handlerSend: (data: IFormUnit) => void;
	loading: boolean;
	error: string | undefined;
}
export const FormUnit = ({ handlerSend, loading, error }: FormUnitProps) => {
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
				{loading && <h1>Завантаження</h1>}
				{error && <h1>{error}</h1>}
			</form>
		</FormProvider>
	);
};
