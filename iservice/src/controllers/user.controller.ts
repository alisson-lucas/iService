import { API } from './../services/api';

export abstract class UserController {
    private static DEFAULT_ROUTE: string = "/users";

    public static async login(loginRequest: any) {
        return API.post(this.DEFAULT_ROUTE.concat("/login"), loginRequest)
            .then(response => {
                console.log("Response =", response.data);
                return response;
            })
            .catch(error => {
                console.log("Error =", error.response.data);
                return error;
            });
    };

    public static async register(newUser: any) {
        const dataReturn = {
            data: <any>null,
            error: <any>null,
        };

        return API.post(this.DEFAULT_ROUTE.concat("/register"), newUser)
            .then(response => {
                console.log("Response =", response.data);
                dataReturn.data = response.data;
                return dataReturn;
            })
            .catch(error => {
                console.log("Response =", error.response.data.message);
                dataReturn.error = this.mapError(error.response.data.message);
                return dataReturn;
            });
    };

    private static mapError(message: string) {
        const error = {
            field: "",
            message: "",
        };

        if (message.indexOf('"username"') > -1) {
            error.field = "username";
            error.message = "Usuario invalido";
        } else if (message.indexOf('"password"') > -1 || message.indexOf('"repeat_password"') > -1) {
            error.field = "password";
            error.message = "Senha nao coincidem ou invalida";
        }

        return error;
    }
}