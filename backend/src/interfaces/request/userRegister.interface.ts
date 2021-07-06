import Gender from "../../enum/gender.enum";
import Type from "../../enum/type.enum";

export default interface UserRegister {
    username: string,
    password: string,
    repeat_password: string,
    type: Type,
    name: string,
    cpf: string,
    address?: string,
    phone?: string,
    latitude?: string,
    longitude?: string,
    gender?: Gender,
    description?: string,
    occupation?: string[]
};