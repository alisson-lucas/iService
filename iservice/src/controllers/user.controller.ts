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
        return API.post(this.DEFAULT_ROUTE.concat("/register"), newUser)
            .then(response => {
                console.log("Response =", response.data);
                return response;
            })
            .catch(error => {
                console.log("Error =", error.response.data);
                return error;
            });
    };
}