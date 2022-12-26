'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.DATABASE_URL || "postgresql://localhost:5432/postgres";

const record = require('./schemas/records.model')
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




module.exports = {
    db: sequelize,
    recordModel,
    recordCollection
};