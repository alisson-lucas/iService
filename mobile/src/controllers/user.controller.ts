import { API } from './../services/api';

export abstract class UserController {
    private static DEFAULT_ROUTE: string = "/users";

    public static async getAllProfissionais()  {
        return await API.post(this.DEFAULT_ROUTE.concat("/find?type=PROFISSIONAL"))
        .then(response => {
            console.log("Response FIND =", response);
            return response.data;
        })
        .catch(error => {
            console.log("Error FIND =", error.response.data);
            return error;
        });
    };

    public static async getUser(username: any)  {
        return await API.post(this.DEFAULT_ROUTE.concat("/find?username=",username))
        .then(response => {
            console.log("Response FIND =", response);
            return response.data;
        })
        .catch(error => {
            console.log("Error FIND =", error.data.error);
            return error;
        });
    };

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
                console.log("Response sem erro =", response.data);
                dataReturn.data = response.data;
                return dataReturn;
            })
            .catch(error => {
                console.log("Response com erro=", error.response.data.message);
                dataReturn.error = this.mapError(error.response.data.message);
                return dataReturn;
            });
    };

    public static async update(updateUser: any) {
        const dataReturn = {
            data: <any>null,
            error: <any>null,
        };

        return API.post(this.DEFAULT_ROUTE.concat("/update"), updateUser)
            .then(response => {
                console.log("Response sem erro =", response.data);
                dataReturn.data = response.data;
                return dataReturn;
            })
            .catch(error => {
                console.log("Response com erro=", error.response.data.message);
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