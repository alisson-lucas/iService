import express from "express";
import { StatusCodes } from "http-status-codes";

import UserService from "../services/user.services";
import UserRegisterValidator from "../validators/user/userRegister.validator";
import UserLoginValidator from '../validators/user/userLogin.validator';
import userUpdateValidator from '../validators/user/userUpdate.validator';
import JWTUtils from "../utils/jwt.utils";
import CookieUtils from "../utils/cookies.util";

abstract class UserController {
    public static async register(request: express.Request, response: express.Response) {
        const error = UserRegisterValidator.validate(request.body);
       
        if (!error) {
            const result = await UserService.register(request.body);
            return response.status(result.status).send({ data: result.data, message: result.message });
        };

        return response.status(StatusCodes.BAD_REQUEST).send({
            message: error.details[0].message
        });
    };

    public static async update(request: express.Request, response: express.Response) {
        const error = userUpdateValidator.validate(request.body);
       
        if (!error) {
            const result = await UserService.update(request.body);
            return response.status(result.status).send({ data: result.data, message: result.message });
        };

        return response.status(StatusCodes.BAD_REQUEST).send({
            message: error.details[0].message
        });
    };

    public static async login(request: express.Request, response: express.Response) {
        const error = UserLoginValidator.validate(request.body);
       
        if (!error) {
            const result = await UserService.login(request.body);
            const data = JWTUtils.encodeSession(result.data);

            CookieUtils.addCookie("jwt_token", data.token, response);

            return response.status(result.status)
                .send({ data, message: result.message });
        };

        return response.status(StatusCodes.BAD_REQUEST).send({
            message: error.details[0].message
        });
    };

    public static async find(request: express.Request, response: express.Response) {
        const condition = request.query;
    
        const result = await UserService.find(condition);
        
        return response.status(result.status).send({ data: result.data, message: result.message });
    };

    public static async get(request: express.Request, response: express.Response) {
        const userId = request.params.id;

        const result = await UserService.get(userId);

        return response.status(result.status).send({ data: result.data, message: result.message });
    };
};

export default UserController;
