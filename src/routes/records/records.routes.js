
const express = require("express");
const { json } = require("express/lib/response");

const {recordCollection} = require("../../models/index");
const recordRouter = express.Router();
// const bearer=require("../middleware/bearer");
const {getAll, creatRecord,getTotalRecords,getCountryDataRecords,getSummary,deleteRecord}=require('./records.controller')


recordRouter.get("/record",getAll);
recordRouter.post("/record",creatRecord);
recordRouter.delete("/record/:id",deleteRecord);
recordRouter.get("/totalRecords",getTotalRecords);
recordRouter.get("/totalCountryRecords",getCountryDataRecords);
recordRouter.get("/summary",getSummary);


// recordRouter.put("/record/:id",updating);
// recordRouter.get("/record/:id",getOneRecored);

module.exports = {
    recordRouter,
  };
  