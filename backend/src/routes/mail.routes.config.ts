import express from "express";

import { CommonRoutesConfig } from "../common/common.routes.config";
import mailController from "../controllers/mail.controller";

export class MailRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "UsersRoutes", "/users");
    }

    configureRoutes(): express.Application {
        this.app.route(this.route.concat("/send-email"))
            .post(mailController.post);

        return this.app;
    };
};