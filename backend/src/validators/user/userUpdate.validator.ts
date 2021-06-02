import Joi from "joi";

import { CommonValidatorConfig } from "../../common/commom.validator.config";
import Gender from "../../enum/gender.enum";

const passwordRegex : RegExp = new RegExp('^[a-zA-Z0-9]{3,30}$');
const cpfRegex : RegExp = new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$');

const userUpdateSchema = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().pattern(passwordRegex).required(),
    repeat_password: Joi.ref("password"),
    new_password: Joi.string().pattern(passwordRegex),
    confirm_new_password: Joi.ref("new_password"),
    name: Joi.string(),
    cpf: Joi.string().pattern(cpfRegex),
    address: Joi.string(),
    phone: Joi.string(),
    gender: Joi.string().valid(Gender.MASCULINO, Gender.FEMININO),
    description: Joi.string(),
    occupation: Joi.array().items(Joi.string())
});

class UserUpdateValidator extends CommonValidatorConfig {
    constructor(schema: Joi.ObjectSchema) {
        super(schema);
    }
};

export default new UserUpdateValidator(userUpdateSchema);