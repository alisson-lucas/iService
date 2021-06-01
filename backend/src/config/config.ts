import { Dialect } from "sequelize/types";
import DBConfig from "../interfaces/dbConfig.interface";

export default abstract class Config {
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
};