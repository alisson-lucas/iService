import Joi from "joi";

import { CommonValidatorConfig } from "../../common/commom.validator.config";
import Gender from "../../enum/gender.enum";
import Type from "../../enum/type.enum";

const passwordRegex : RegExp = new RegExp('^[a-zA-Z0-9]{3,30}$');
const cpfRegex : RegExp = new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$');

const userRegisterSchema = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().pattern(passwordRegex).required(),
    repeat_password: Joi.ref("password"),
    type: Joi.string().valid(Type.CLIENTE, Type.PROFISSIONAL).required(),
    name: Joi.string().required(),
    cpf: Joi.string().pattern(cpfRegex).required(),
    address: Joi.string(),
    phone: Joi.string(),
    gender: Joi.string().valid(Gender.MASCULINO, Gender.FEMININO),
    description: Joi.string(),
    occupation: Joi.array().items(Joi.string())
});

class UserRegisterValidator extends CommonValidatorConfig {
    constructor(schema: Joi.ObjectSchema) {
        super(schema);
    }
};

export default new UserRegisterValidator(userRegisterSchema);