import log from "@/public/Logo.svg";
import { RegisterText } from "@/src/entities/register/ui/register-text";
import { FormAuth } from "@/src/features/auth/ui/auth-form";

export const RegisterPage = () => {
	return (
		<div className="bg-milk flex justify-center h-screen w-screen">
			<div className="p-2 flex flex-col justify-center self-center items-center bg-pinklight w-2/3 h-1/2 border-2 border-purple rounded-2xl relative">
				<div className="flex w-full justify-around">
					<div className={`flex flex-col justify-around`}>
						<div>
							<img src={log.src} alt="" />
						</div>
						<RegisterText />
					</div>
					<FormAuth state="register" />
				</div>
			</div>
		</div>
	);
};
