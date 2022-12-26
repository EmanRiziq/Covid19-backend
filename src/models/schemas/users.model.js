"use strict";

// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.VIRTUAL,
      get: function () {

        // return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "100m" });


        return jwt.sign({ username: this.username }, process.env.JWT_SECRET);
      },
      set(tokenObj) {
        return jwt.sign(tokenObj, process.env.JWT_SECRET);
      }
    },
  });
  user.authenticateToken = token => {
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return err;
      } else {
        return decoded;
      }
    });
  };
  return user;
};

module.exports = user;