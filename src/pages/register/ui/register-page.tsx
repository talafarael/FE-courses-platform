import {RegisterForm} from "@/src/features/auth/register/ui/register-form";
import log from "@/public/Logo.svg"
import {RegisterText} from "@/src/entities/register/ui/register-text";
import Image from "next/image";

const RegisterPage = () => {
    return (
        <div className={`bg-milk flex justify-center h-screen w-screen`}>
            <div className={`p-2 flex flex-col justify-center self-center items-center bg-pinklight w-2/3 h-1/2 border-2 border-purple rounded-2xl relative`}>
                <div className={`flex w-full justify-around`}>
                    <div className={`flex flex-col justify-around`}>
                        <div>
                            <Image src={log.src} alt="logo"/>
                        </div>
                        <RegisterText/>
                    </div>
                    <RegisterForm/>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage;