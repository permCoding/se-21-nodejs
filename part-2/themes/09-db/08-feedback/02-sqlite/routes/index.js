const express = require('express');
const sqlite = require('sqlite-sync'); // https://www.npmjs.com/package/sqlite-sync
let { md_index } = require('../models/model-index');
const router = express.Router();

const get_records = (nameFile) => {
    sqlite.connect(nameFile); 
    let query = "SELECT name, feed FROM feeds ORDER BY id DESC LIMIT 50";
    let records = sqlite.run(query);
    sqlite.close();
    return records;
}

router.get('/', (req, res, next) => {
    md_index.feeds = get_records('./private/feeds.db');
    res.render('index', md_index);
});

module.exports = router;
