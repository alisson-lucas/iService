import { Dialect } from "sequelize/types";

export default interface DBConfig {
    Hostname: string,
    Port: number,
    Dialect: Dialect,
    User: string,
    Password: string,
    Schema: string
};