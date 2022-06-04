const express = require('express');
const SQLite = require('sync-sqlite'); 
// https://www.npmjs.com/package/sqlite-sync
// https://openbase.com/js/sync-sqlite/documentation
const htmlParser = express.urlencoded({extended: false});
let { md_index } = require('../models/model-index');
const router = express.Router();
let configDB = {dbPath: './private/feeds.db', autoSave: true};
let db = new SQLite(configDB);

router.get('/', (req, res, next) => {
    db.connect();
    params = {
        tables: "feeds",
        fields: ["uid", "nameUser", "feedUser"],
        // where: "uid<3",
        orders: "uid desc",
        limit: 50
    };
    md_index.feeds = db.select(params).toJSON(); // можно runSQL
    db.close();
    res.render('index', md_index);
});

router.post('/del', htmlParser, (req, res) => {
    db.connect();
    let items = [] // req.body.option массив или переменная
        .concat(req.body.option) // получить массив
        .map(item => parseInt(item)) // перевести в int
        .filter(item => !isNaN(item)); // выбрать только числа
    if (items.length > 0) { // если есть что удалять
        items.forEach(item => {
            let query = `DELETE FROM feeds WHERE uid=${item}`;
            db.runSQL(query);
        });
    }
    db.close();
    res.redirect("/");
});

module.exports = router;
