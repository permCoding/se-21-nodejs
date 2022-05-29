const express = require('express');
const sqlite = require('sqlite-sync'); // https://www.npmjs.com/package/sqlite-sync
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
    insert_records(fileDB, nameUser, feedUser);
    res.redirect("/"); // возвращаемся на главную
});

module.exports = router;
