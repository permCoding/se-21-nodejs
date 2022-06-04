const express = require('express');
const sqlite = require('sqlite3').verbose();
const htmlParser = express.urlencoded({extended: false});
let { md_feed } = require('../models/model-feed'); // подключаем модель данных
const router = express.Router();
const fileDB = './private/feeds.db'; // файл БД
const db = new sqlite.Database(fileDB);

router.get('/', (req, res) => {
    res.render('feed', md_feed); // render view
});

router.post('/', htmlParser, (req, res) => {
    let nameUser = req.body.nameUser; // находим по имени тега в шаблоне
    let feedUser = req.body.feedUser; // находим по имени тега в шаблоне

    let query = `INSERT INTO feeds(nameUser,feedUser) VALUES(?,?)`;
    let values = [nameUser, feedUser];

    db.run(query, values, (err) => {
        if (err) console.error(err.message);
        res.redirect("/");
    });
});

module.exports = router;
