const express = require('express');
const sqlite = require('sqlite3').verbose(); // sqlite3 не поддерживает async/await
const htmlParser = express.urlencoded({extended: false});
let { md_index } = require('../models/model-index');
const router = express.Router();
const fileDB = './private/feeds.db'; // файл БД
const db = new sqlite.Database(fileDB);

router.get('/', (req, res) => {
    let query = `SELECT uid, nameUser, feedUser FROM feeds ORDER BY uid DESC LIMIT ?`;
    let values = [50];

    db.all(query, values, (err, records) => {
        if (err) console.error(err.message);
        md_index.feeds = records;
        res.render('index', md_index);
    });
});

router.post('/del', htmlParser, (req, res) => {
    let query = `DELETE FROM feeds WHERE uid=?`;
    let items = [] // req.body.option массив или переменная
        .concat(req.body.option) // получить массив
        .map(item => parseInt(item)) // перевести в int
        .filter(item => !isNaN(item)); // выбрать только числа
    if (items.length > 0) { // если есть что удалять
        items.forEach(item => { // item подставляется вместо ?
            db.run(query, item, (err) => {
                if (err) console.error(err.message);
            });
        });
    }
    res.redirect("/");
});

module.exports = router;
