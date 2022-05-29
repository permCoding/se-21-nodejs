const express = require('express');
const sqlite = require('sqlite3').verbose();
let { md_index } = require('../models/model-index');
const router = express.Router();

router.get('/', (req, res, next) => {
    let fileDB = './private/feeds.db'; // файл БД
    const db = new sqlite.Database(fileDB);
    let query = `SELECT name, feed FROM feeds ORDER BY id DESC LIMIT ?`;
    let values = [50];
    db.all(query, values, (err, records) => {
        if (err) console.log(err.message);
        md_index.feeds = records;
        res.render('index', md_index);    
    });
    db.close();
});

module.exports = router;
