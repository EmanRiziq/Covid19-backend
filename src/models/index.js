'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.DATABASE_URL || "postgresql://localhost:5432/postgres";

const record = require('./schemas/records.model')
const user = require('./schemas/users.model')
const collection = require("./collection/collection");

const sequelizeOption = {};
// const sequelizeOption = {
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// };

const sequelize = new Sequelize(POSTGRES_URI, sequelizeOption);

const recordModel = record(sequelize, DataTypes);
const recordCollection = new collection(recordModel);

const userModel = user(sequelize, DataTypes)
const userCollection = new collection(userModel);


userModel.hasMany(recordModel, { foreignKey: 'userID', sourceKey: 'id' });
recordModel.belongsTo(userModel, { foreignKey: 'userID', targetKey: 'id' });


module.exports = {
    db: sequelize,
    userModel,
    recordModel,
    userCollection,
    recordCollection
};