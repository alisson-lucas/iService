import { DataTypes, Sequelize, BuildOptions, Model } from "sequelize";
import * as crypto from "crypto";

import Gender from "../enum/gender.enum";
import Type from "../enum/type.enum";

export interface UserAttributes {
    id: number,
    username: string,
    password: string,
    salt: string,
    type: Type,
    name: string,
    cpf: string,
    address: string,
    phone: string,
    gender: Gender,
    description: string,
    occupation: string,
    lat: number,
    lng: number
};

export interface UserModel extends Model<UserAttributes>, UserAttributes {
    correctPassword(password: string): boolean;
};

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
    generateSalt() : string;
    encryptPassword(plainText: crypto.BinaryLike, salt: crypto.BinaryLike) : string;
 };

export function UserFactory(sequelize: Sequelize): UserStatic {
    const User = <UserStatic>sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            get() {
                return () => this.getDataValue("password")
            }
        },
        salt: {
            type: DataTypes.STRING,
            get() {
                return () => this.getDataValue("salt")
            }
        },
        type: {
            type: DataTypes.ENUM("CLIENTE", "PROFISSIONAL"),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.ENUM("M", "F")
        },
        description: {
            type: DataTypes.STRING
        },
        occupation: {
            type: DataTypes.STRING,
            get() {
                return (this.getDataValue("occupation") || "").split(';');
            },
            set(ocuppations: String[]) {
                this.setDataValue("occupation", ocuppations.join(';'));
            },
        },
        lat: {
            type: DataTypes.FLOAT
        },
        lng: {
            type: DataTypes.FLOAT
        }
    });

    User.generateSalt = (): string => {
        return crypto.randomBytes(16).toString("base64");
    };

    User.encryptPassword = (plainText: crypto.BinaryLike, salt: crypto.BinaryLike) => {
        return crypto
            .createHash("RSA-SHA256")
            .update(plainText)
            .update(salt)
            .digest("hex");
    };

    const setSaltAndPassword = (user: UserModel) => {
        if (user.changed("password")) {
            user.salt = User.generateSalt();
            user.password = User.encryptPassword(user.getDataValue("password"), user.getDataValue("salt"));
        }
    }

    User.prototype.correctPassword = function (enteredPassword : string) {
        return User.encryptPassword(enteredPassword, this.salt()) === this.password();
    }

    User.beforeCreate(setSaltAndPassword);
    User.beforeUpdate(setSaltAndPassword);

    return User;
}