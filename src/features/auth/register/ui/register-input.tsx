import {Input} from "@/src/shared/ui/input/input";

export const RegisterInput=()=>{
    return(
        <div className={`flex flex-col gap-2`}>
            <Input placeholder="Ім'я"/>
            <Input placeholder="Прізвище"/>
            <Input placeholder="Електронна пошта"/>
            <Input placeholder="логін"/>
            <Input placeholder="пароль" type="password"/>
        </div>
    )
}