import { StatusCodes } from "http-status-codes";
import UserLogin from "../interfaces/request/userLogin.interface";

import UserRegister from "../interfaces/request/userRegister.interface";
import UserUpdate from "../interfaces/request/userUpdate.interface";
import DataResponse from "../interfaces/response/dataResponse.interface";
import { User } from "./../models/index";

class UserService {
    public async register(newUser: UserRegister): Promise<DataResponse> {
        return await User.create(<any>newUser)
        .then(data => {
           return {
              data,
              status: StatusCodes.CREATED,
              message: "User created with sucess"
          };
        })
        .catch(err => {
            console.log("GILLES error {}", err);
            return {
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: err.message
            };
        });
        
    };

    public async find(condition: any): Promise<DataResponse> {
        return await User.findAll({ where: condition })
            .then(data => {
                return {
                    data,
                    status: StatusCodes.OK,
                };
            })
            .catch(err => {
                return {
                    status: StatusCodes.INTERNAL_SERVER_ERROR,
                    message: err.message
                };
            });
    };

    public async login(userLogin: UserLogin): Promise<DataResponse> {
        return await User.findOne({ where: { username: userLogin.username }})
            .then(userFound => {
                if (userFound && userFound.correctPassword(userLogin.password)) {
                    return {
                        data: userFound,
                        status: StatusCodes.OK,
                        message: "User authenticated with sucess"
                    };
                };

                return {
                    status: StatusCodes.BAD_REQUEST,
                    message: "Password/Username invalid"
                };
            })
            .catch(err => {
                return {
                    status: StatusCodes.INTERNAL_SERVER_ERROR,
                    message: err.message
                };
            });
    };

    public async get(userId: string): Promise<DataResponse> {
        return await User.findOne({ where: { id: userId } })
            .then(user => {
                if (user) {
                    return {
                        data: user,
                        status: StatusCodes.OK,
                    };
                } else {
                    return {
                        status: StatusCodes.NOT_FOUND,
                        message: "Not found user with this id"
                    };
                }
            })
            .catch(err => {
                return {
                    status: StatusCodes.INTERNAL_SERVER_ERROR,
                    message: err.message
                };
            });
    };

    public async update(userUpdate: UserUpdate): Promise<DataResponse> {
        return await User.findOne({ where: { username: userUpdate.username }})
            .then(async userFound => {
                if (userFound && userFound.correctPassword(userUpdate.password)) {
                    const newFields = {
                        ...userUpdate,
                        password: userUpdate.new_password
                    };

                    return await userFound.update(newFields).then(response => {
                        return {
                            data: response,
                            status: StatusCodes.OK,
                            message: "User updated with sucess"
                        };
                    }).catch(err => {
                        return {
                            status: StatusCodes.INTERNAL_SERVER_ERROR,
                            message: err.message
                        };
                    });
                } else {
                    return {
                        status: StatusCodes.BAD_REQUEST,
                        message: "Invalid Username/Password"
                    };
                };
            })
            .catch(err => {
                return {
                    status: StatusCodes.INTERNAL_SERVER_ERROR,
                    message: err.message
                };
            });
    };
};

export default new UserService();