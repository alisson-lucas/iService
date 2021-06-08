import Joi from "joi";
import Gender from "../../enum/gender.enum";

import Type from "../../enum/type.enum";
import UserRegister from "../../interfaces/request/userRegister.interface";

class UserRegisterValidator {
    private passwordRegex : RegExp = new RegExp('^[a-zA-Z0-9]{3,30}$');
    private cpfRegex : RegExp = new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$');

    private userRegisterSchema = Joi.object({
        username: Joi.string().email().required(),
        password: Joi.string().pattern(this.passwordRegex).required(),
        repeat_password: Joi.ref("password"),
        type: Joi.string().valid(Type.CLIENTE, Type.PROFISSIONAL).required(),
        name: Joi.string().required(),
        cpf: Joi.string().pattern(this.cpfRegex).required(),
        address: Joi.string().allow(null),
        phone: Joi.string().allow(null),
        gender: Joi.string().valid(Gender.MASCULINO, Gender.FEMININO).allow(null),
        description: Joi.string().allow(null),
        occupation: Joi.array().items(Joi.string()).allow(null)
    });

    public validate(userRegister: UserRegister) : Joi.ValidationError | undefined {
        return this.userRegisterSchema.validate(userRegister).error
    };
};
export default new UserRegisterValidator();