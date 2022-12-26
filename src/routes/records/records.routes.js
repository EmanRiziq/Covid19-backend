
const express = require("express");
const { json } = require("express/lib/response");

const {recordCollection} = require("../../models/index");
const recordRouter = express.Router();
const {getAll, creatRecord,getTotalRecords,getCountryDataRecords,getSummary,deleteRecord}=require('./records.controller')


recordRouter.get("/record",getAll);
recordRouter.post("/record",creatRecord);
recordRouter.delete("/record/:id",deleteRecord);
recordRouter.get("/totalRecords",getTotalRecords);
recordRouter.get("/totalCountryRecords",getCountryDataRecords);
recordRouter.get("/summary",getSummary);


module.exports = {
    recordRouter,
  };
  