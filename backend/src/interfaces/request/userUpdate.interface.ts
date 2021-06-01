import Gender from "../../enum/gender.enum";

export default interface UserUpdate {
    username: string,
    password: string,
    repeat_password: string,
    new_password?: string,
    confirm_new_password?: string,
    name: string,
    cpf: string,
    address?: string,
    phone?: string,
    gender?: Gender,
    description?: string,
    occupation?: string[]
};