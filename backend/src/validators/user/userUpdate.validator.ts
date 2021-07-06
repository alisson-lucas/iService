import Joi from "joi";

import Gender from "../../enum/gender.enum";
import UserUpdate from "../../interfaces/request/userUpdate.interface";

class UserUpdateValidator {
    private passwordRegex : RegExp = new RegExp('^[a-zA-Z0-9]{3,30}$');
    private cpfRegex : RegExp = new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$');

    private userUpdateSchema = Joi.object({
        username: Joi.string().email().required(),
        password: Joi.string().pattern(this.passwordRegex).required(),
        repeat_password: Joi.ref("password"),
        new_password: Joi.string().pattern(this.passwordRegex),
        confirm_new_password: Joi.ref("new_password"),
        name: Joi.string(),
        cpf: Joi.string().pattern(this.cpfRegex),
        address: Joi.string(),
        phone: Joi.string(),
        latitude: Joi.string(),
        longitude: Joi.string(),
        gender: Joi.string().valid(Gender.MASCULINO, Gender.FEMININO),
        description: Joi.string(),
        occupation: Joi.array().items(Joi.string())
    });

    public validate(userUpdate: UserUpdate) : Joi.ValidationError | undefined {
        return this.userUpdateSchema.validate(userUpdate).error
    };
};

export default new UserUpdateValidator();