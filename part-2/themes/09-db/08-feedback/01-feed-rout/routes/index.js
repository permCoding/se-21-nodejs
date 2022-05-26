const express = require('express');
const fs = require('fs');
const csvjson = require('csvjson'); // npm i csvjson
let { md_index } = require('../models/model-index');
const router = express.Router();

const get_records = (nameFile, del='|') => {
    let textCSV = fs.readFileSync(nameFile, { encoding: 'utf8' }); // из csv файла 
    return csvjson.toObject(textCSV, { delimiter: del }); // в массив json
}

router.get('/', (req, res, next) => {
    md_index.feeds = get_records('./private/feeds.csv');
    md_index.feeds = md_index.feeds
        .sort((a,b) => a.date_time>b.date_time? -1: +1);
    res.render('index', md_index);
});

module.exports = router;
