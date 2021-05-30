const Joi = require('joi');

const passwordRegex = new RegExp('^[a-zA-Z0-9]{3,30}$');
const cpfRegex = new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$');

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
    gender: Joi.string().valid("M", "F"),
    description: Joi.string(),
    occupation: Joi.array().items(Joi.string())
});

module.exports = userUpdateSchema;