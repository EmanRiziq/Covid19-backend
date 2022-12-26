"use strict";
const express = require("express");
const { json } = require("express/lib/response");
const axios = require('axios');


// const {recordCollection} = require("../models/index.js");
const { recordCollection } = require("../../models/index");


const getAll = async (req, res) => {
    try {
        const records = await recordCollection.read();
        console.log(records)
        res.status(200).json(records);
    } catch (error) {
        res.status(500).send(error)
    }
};


const creatRecord = async (req, res) => {
    try {
        const newRecord = req.body;
        console.log(newRecord)
        const addedRecord = await recordCollection.create(newRecord);
        res.status(201).json(addedRecord);

        res.status(204);
    } catch (error) {
        res.status(500).send(error)
    }
};

const deleteRecord = async (req, res) => {
    try {
        const id = req.params;
        const deletedRecord = await recordCollection.delete(id);
        res.status(204);
    } catch (error) {
        res.status(500).send(error)
    }
};

async function getTotalRecords(req, res) {
    console.log('---------------------------------------------------------------')
    const url = 'https://api.covid19api.com/world/total'
    const response = await axios.get(url)
    try {
        res.send(response.data)
    }
    catch (error) {
        res.status(400).send(error)
    }
}


async function getCountryDataRecords(req, res) {
    const country = req.query.country;

    const from = new Date(req.query.from)
    const fromDate = from.toISOString()

    const to = new Date(req.query.to)
    const toDate = to.toISOString()

    const url = (
        `https://api.covid19api.com/country/${country}/status/confirmed?from=${fromDate}&to=${toDate}`
    )
    const response = await axios.get(url)
    try {
        res.send(response.data)
    }
    catch (error) {
        res.status(400).send(error)
    }
}


async function getSummary(req, res) {
    console.log('---------------------------------------------------------------')
    const url = 'https://api.covid19api.com/summary'
    const response = await axios.get(url)
    try {
        res.send(response.data.Countries)
    }
    catch (error) {
        res.status(400).send(error)
    }
}


module.exports = {
    getAll,
    creatRecord,
    deleteRecord,
    getTotalRecords,
    getCountryDataRecords,
    getSummary
};
