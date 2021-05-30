const userValidator = require("../validators").user;
const userService = require("../services/user.services");

exports.register = (req, res) => {
  userValidator.register(req, res);

  userService.register(req.body, (response) => {
    return res.status(response.status).send({ data: response.data, message: response.message });
  })
};

exports.login = (req, res) => {
  userValidator.login(req, res);

  userService.login(req.body, (response) => {
    return res.status(response.status).send({ data: response.data, message: response.message });
  })
};

exports.update = (req, res) => {
  userValidator.update(req, res);

  userService.update(req.body, (response) => {
    return res.status(response.status).send({ data: response.data, message: response.message });
  })
};

exports.find = (req, res) => {
  const condition = req.query;

  userService.find(condition,(response) => {
    return res.status(response.status).send({ data: response.data, message: response.message });
  })
};

exports.get = (req, res) => {
  const userId = req.params.id;

  userService.get(userId, (response) => {
    return res.status(response.status).send({ data: response.data, message: response.message });
  })
};