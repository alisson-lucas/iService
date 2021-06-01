import { StatusCodes } from 'http-status-codes';
import express from "express";
import UserService from "../services/user.services";
import UserRegisterValidator from "../validators/user/userRegister.validator";
import UserLoginValidator from '../validators/user/userLogin.validator';
import userUpdateValidator from '../validators/user/userUpdate.validator';

class UserController {
    public async register(request: express.Request, response: express.Response) {
        const error = UserRegisterValidator.validate(request.body);
       
        if (!error) {
            const result = await UserService.register(request.body);
            return response.status(result.status).send({ data: result.data, message: result.message });
        };

        return response.status(StatusCodes.BAD_REQUEST).send({
            message: error.details[0].message
        });
    };

    public async update(request: express.Request, response: express.Response) {
        const error = userUpdateValidator.validate(request.body);
       
        if (!error) {
            const result = await UserService.update(request.body);
            return response.status(result.status).send({ data: result.data, message: result.message });
        };

        return response.status(StatusCodes.BAD_REQUEST).send({
            message: error.details[0].message
        });
    };

    public async login(request: express.Request, response: express.Response) {
        const error = UserLoginValidator.validate(request.body);
       
        if (!error) {
            const result = await UserService.login(request.body);
            return response.status(result.status).send({ data: result.data, message: result.message });
        };

        return response.status(StatusCodes.BAD_REQUEST).send({
            message: error.details[0].message
        });
    };

    public async find(request: express.Request, response: express.Response) {
        const condition = request.query;
    
        const result = await UserService.find(condition);
        
        return response.status(result.status).send({ data: result.data, message: result.message });
    };

    public async get(request: express.Request, response: express.Response) {
        const userId = request.params.id;

        const result = await UserService.get(userId);

        return response.status(result.status).send({ data: result.data, message: result.message });
    };
};

export default new UserController();


// exports.update = (req, res) => {
//   userValidator.update(req, res);

//   userService.update(req.body, (response) => {
//     return res.status(response.status).send({ data: response.data, message: response.message });
//   })
// };

