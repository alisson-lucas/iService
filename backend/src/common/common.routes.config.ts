import express from "express";

export abstract class CommonRoutesConfig {
    public app: express.Application;
    public name: string;
    public route: string;

    constructor(app: express.Application, name: string, route: string) {
        this.app = app;
        this.name = name;
        this.route = route;
        this.configureRoutes();
    }

    public getName(): String {
        return this.name;
    }

    abstract configureRoutes(): express.Application;
};
