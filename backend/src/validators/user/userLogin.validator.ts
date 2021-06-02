import Joi from "joi";
import { CommonValidatorConfig } from "../../common/commom.validator.config";

const userLoginSchema = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().required(),
});

class UserLoginValidator extends CommonValidatorConfig {
    constructor(schema: Joi.ObjectSchema) {
        super(schema);
    }
};

export default new UserLoginValidator(userLoginSchema);