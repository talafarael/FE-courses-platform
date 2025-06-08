import {RegisterInput} from "@/src/features/auth/register/ui/register-input";
import {Button} from "@/src/shared/ui/button/button";
import { useForm, SubmitHandler } from "react-hook-form"

export const RegisterForm = () => {


    return (
        <form>
            <RegisterInput/>
            <div className={`flex justify-end p-2`}>
                <Button type="submit" label="готово!"/>
            </div>
        </form>
    );
}