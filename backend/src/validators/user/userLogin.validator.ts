import Joi from "joi";

import UserLogin from "../../interfaces/request/userLogin.interface";

class UserLoginValidator {
    private userLoginSchema = Joi.object({
        username: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    public validate(userLogin: UserLogin) : Joi.ValidationError | undefined {
        return this.userLoginSchema.validate(userLogin).error
    };
};

export default new UserLoginValidator();