const HttpCodes = require("../utils/HttpCodes");

// User Validators
const userLoginValidator = require("./userLogin.validator");
const userRegisterValidator = require("./userRegister.validator");
const userUpdateValidator = require("./userUpdate.validator");

const checkRequest = (req, res, validator) => {
    const result = validator.validate(req.body);
      
    if (result.error) {
      return res.status(HttpCodes.BAD_REQUEST).send({
        message: result.error.details[0].message
      });
    }
}

module.exports = {
    user: {
        login: (req, res) => {
            checkRequest(req, res, userLoginValidator);
        },
        register: (req, res) => {
            checkRequest(req, res, userRegisterValidator);
        },
        update: (req, res) => {
            checkRequest(req, res, userUpdateValidator);
        }
    }
}


