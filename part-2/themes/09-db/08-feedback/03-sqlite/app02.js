// подключение зависимостей
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const params = require('./static/config.json').debug;

// настройка приложения
const app = express();
const htmlParser = express.urlencoded({extended: false});
app.use('/static', express.static(__dirname + '/static'));
app.set('view engine', 'ejs'); // npm i ejs
const file_db = './static/feedbacks.db';

// models - модели данных
const md = require('./models/model02');

// controllers - обработчики событий
app.get('/', (req, res) => {
    const db = new sqlite3.Database(file_db);
    let query = `SELECT name, feed FROM feeds ORDER BY id DESC LIMIT ?`;
    let values = [50];
    db.all(query, values, (err, records) => {
        if (err) console.log(err.message);
        md.md_index.feeds = records;
        res.render('index', md.md_index);    
    });
    db.close();
});

app.get('/feedback', (req, res) => {
    res.render("feedback", md.md_feed);
});

app.post('/feedback', htmlParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const nameUser = req.body.name;
    const feedUser = req.body.feed;
    const db = new sqlite3.Database(file_db);
    let query = `INSERT INTO feeds(name,feed) VALUES(?,?)`;
    let values = [nameUser, feedUser];
    db.run(query, values, (err) => {
        if (err) console.log(err.message);
        res.redirect("/");
    });
    db.close();
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`>>> ${params.hostname}:${params.port}/\n>>> to stop: Ctrl+C`);
});
