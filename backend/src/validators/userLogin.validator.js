const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().required(),
});

module.exports = userSchema;