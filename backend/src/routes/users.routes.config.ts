import express from "express";

import { CommonRoutesConfig } from "../common/common.routes.config";
import userController from "../controllers/user.controller";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "UsersRoutes", "/users");
    }

    configureRoutes(): express.Application {
        this.app.route(this.route.concat("/find"))
            .post(userController.find);
        this.app.route(this.route.concat("/register"))
            .post(userController.register)
        this.app.route(this.route.concat("/login"))
            .post(userController.login)
        this.app.route(this.route.concat("/:id"))
            .get(userController.get)
        this.app.route(this.route.concat("/update"))
            .post(userController.update)

        return this.app;
    };
};