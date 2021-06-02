import { Dialect } from "sequelize/types";

import DBConfig from "../interfaces/config/dbConfig.interface";
import JWTConfig from "../interfaces/config/jwtConfig.interface";
import ServerConfig from "../interfaces/config/serverConfig";

export default abstract class Config {
    public static getServerConfig(): ServerConfig {
        return {
            Hostname: process.env.APP_HOSTNAME || "localhost",
            Port: parseInt(process.env.APP_PORT || "3000")
        };
    };

    public static getDBConfig() : DBConfig {
        return {
            Hostname: process.env.DB_HOSTNAME || "localhost",
            Port: parseInt(process.env.DB_PORT || "3306") ,
            Dialect: (<Dialect> process.env.DB_DIALECT || "mysql"),
            User: process.env.DB_USER || "root",
            Password: process.env.DB_PASSWORD || "root12345",
            Schema: process.env.DB_SCHEMA || "iservice"
        };
    };

    public static getJWTConfig(): JWTConfig {
        return {
            SecretKey: process.env.JWT_SECRET || "not-configured",
            ExpireSeconds: parseInt(process.env.JWT_EXPIRE_SECONDS || "30")
        };
    };
};