import { FormQuestion } from "../form-question";
import { ITest } from "@/src/entities/test/model/test";

interface FactoryQuestionProps {
	question?: ITest;
}

export const FactoryQuestion = ({ question }: FactoryQuestionProps) => {
	return (
		<div className="w-[100%] h-[200px] bg-questPurple">
			<FormQuestion />
		</div>
	);
};
