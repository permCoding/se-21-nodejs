const express = require('express');
const sqlite = require('sqlite-sync'); 
// https://www.npmjs.com/package/sqlite-sync
// https://openbase.com/js/sync-sqlite/documentation
const htmlParser = express.urlencoded({extended: false});
const { md_feed } = require('../models/model-feed'); // подключаем модель данных
const router = express.Router();
const fileDB = './private/feeds.db'; // файл БД

const insert_records = (nameUser, feedUser) => {
    sqlite.connect(fileDB); 
    sqlite.insert("feeds", { nameUser: nameUser, feedUser: feedUser }, (res) => {
        if (res.error) throw res.error;
    });
    sqlite.close();
}

router.get('/', (req, res) => {
    res.render('feed', md_feed); // render view
});

router.post('/', htmlParser, (req, res) => {
    let nameUser = req.body.nameUser; // находим по имени тега в шаблоне
    let feedUser = req.body.feedUser; // находим по имени тега в шаблоне
    insert_records(nameUser, feedUser);
    res.redirect("/"); // возвращаемся на главную
});

module.exports = router;
