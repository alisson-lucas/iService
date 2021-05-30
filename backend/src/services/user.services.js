const HttpCodes = require("../utils/HttpCodes");
const UserDB = require("../models").user;

module.exports.register = (newUser, callback) => {
    UserDB.create(newUser)
    .then(data => {
        callback({
          data,
          status: HttpCodes.CREATED,
          message: "User created with sucess"
      })
    })
    .catch(err => {
        callback({
            status: HttpCodes.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    });
};

module.exports.login = (user, callback) => {
    UserDB.findOne({ where: { username: user.username }})
    .then(userFound => {
        if (userFound.correctPassword(user.password)) {
            return callback({
                status: HttpCodes.OK,
                message: "User authenticated with sucess"
            });
        }
        return callback({
            status: HttpCodes.BAD_REQUEST,
            message: "Password/Username invalid"
        
      });
    })
    .catch(err => {
        callback({
            status: HttpCodes.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    });
};

module.exports.update = (newUser, callback) => {
    UserDB.findOne({ where: { username: newUser.username }})
    .then(userFound => {
        if (userFound.correctPassword(newUser.password)) {
            const newFields = {
                ...newUser,
                password: newUser.new_password
            };
            newFields.username = undefined; // Don't want update the username
            userFound.update(newFields)
            .then(response => {
                callback({
                    data: response,
                    status: HttpCodes.OK,
                    message: "User update with sucess"
                });
            }).catch(err => {
                callback({
                    data: response,
                    status: HttpCodes.INTERNAL_SERVER_ERROR,
                    message: err.message
                });
            })
            
        } else {
            callback({
                status: HttpCodes.BAD_REQUEST,
                message: "Password invalid"
            });
        }
    })
    .catch(err => {
        callback({
            status: HttpCodes.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    });
};