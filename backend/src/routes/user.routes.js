const express = require('express');
const routes = express.Router();

const userController = require('../controllers/user.controller');

const MAIN_PATH = "/user";

routes.post(MAIN_PATH.concat("/register"), userController.register);
routes.post(MAIN_PATH.concat("/login"), userController.login);
routes.post(MAIN_PATH.concat("/update"), userController.update);

module.exports = routes;