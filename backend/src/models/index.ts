import * as sequelize from "sequelize";

import Config from "../config/config";
import { UserFactory } from "../models/user.model";

export const database = new sequelize.Sequelize(
    Config.getDBConfig().Schema,
    Config.getDBConfig().User,
    Config.getDBConfig().Password,
    {
        port: Config.getDBConfig().Port,
        host: Config.getDBConfig().Hostname,
        dialect: Config.getDBConfig().Dialect,
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

export const User = UserFactory(database);