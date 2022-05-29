const express = require('express');
const sqlite = require('sqlite3').verbose();
const htmlParser = express.urlencoded({extended: false});
const { md_feed } = require('../models/model-feed'); // подключаем модель данных
const router = express.Router();

const insert_records = (nameFile, nameUser, feedUser) => {
    sqlite.connect(nameFile); 
    sqlite.insert("feeds", { name: nameUser, feed: feedUser }, (res) => {
        if (res.error) throw res.error;
    });
    sqlite.close();
}

router.get('/', (req, res, next) => {
    res.render('feed', md_feed); // render view
});

router.post('/', htmlParser, (req, res) => {
    let fileDB = './private/feeds.db'; // файл БД
    let nameUser = req.body.name; // находим по имени тега в шаблоне
    let feedUser = req.body.feed; // находим по имени тега в шаблоне
    const db = new sqlite.Database(fileDB);
    let query = `INSERT INTO feeds(name,feed) VALUES(?,?)`;
    let values = [nameUser, feedUser];
    db.run(query, values, (err) => {
        if (err) console.log(err.message);
        res.redirect("/");
    });
    db.close();
});

module.exports = router;
