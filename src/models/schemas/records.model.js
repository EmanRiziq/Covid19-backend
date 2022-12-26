"use strict";

const record = (sequelize, DataTypes) => sequelize.define('record', {
    country:
        { type: DataTypes.STRING },
    totalConfirmedCases:
        { type: DataTypes.INTEGER },
    totalDeathsCases:
        { type: DataTypes.INTEGER },
    totalRecoveredCases:
        { type: DataTypes.INTEGER },
    Date:
        { type: DataTypes.DATE },
}, { timestamps: false });



module.exports = record;