const crypto = require('crypto')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        get() {
          return () => this.getDataValue("password")
        }
      },
      salt: {
        type: Sequelize.STRING,
        get() {
            return() => this.getDataValue("salt")
        }
      },
      type: {
        type: Sequelize.ENUM("CLIENTE", "PROFISSIONAL"),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM("M", "F")
      },
      description: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING,
        get() {
            return this.getDataValue("occupation").split(';')
        },
        set(val) {
           this.setDataValue("occupation", val.join(';'));
        },
      },
    });
  
    User.generateSalt = () => {
      return crypto.randomBytes(16).toString("base64")
    }

    User.encryptPassword = (plainText, salt) => {
      return crypto
          .createHash("RSA-SHA256")
          .update(plainText)
          .update(salt)
          .digest("hex")
    }

    const setSaltAndPassword = user => {
      if (user.changed("password")) {
          user.salt = User.generateSalt()
          user.password = User.encryptPassword(user.password(), user.salt())
      }
    }

    User.prototype.correctPassword = function (enteredPassword) {
      return User.encryptPassword(enteredPassword, this.salt()) === this.password();
    }
    
    User.beforeCreate(setSaltAndPassword);
    User.beforeUpdate(setSaltAndPassword);

    return User;
  };