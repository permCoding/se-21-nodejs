// подключение внешних зависимостей
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// подключение своих модулей
const params = require('./static/config.json').debug;

// подготовка данных
const obj_data = { 
    title: "Оставить отзыв", 
    heading: "Форма онлайн отзыва", 
    button: "Отправить отзыв" 
};

// настройка приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/static', express.static(__dirname + '/static'));
app.set('view engine', 'ejs'); // npm i ejs

// обработчики событий
app.get("/feedback", function(req, res) {
    res.render("feedback.ejs", obj_data);
});

app.post("/feedback", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const feed = req.body.feed;
    const db = new sqlite3.Database('./static/feedbacks.db');
    let query = `INSERT INTO feeds(name,feed) VALUES(?,?)`;
    let values = [name, feed];
    db.run(query, values, function (err) {
        if (err) console.log(err.message);
        res.redirect("/");
    });
    db.close();
});

app.get(['/', '/start'], function (req, res) {
    const db = new sqlite3.Database('./static/feedbacks.db');
    let query = `SELECT name, feed FROM feeds ORDER BY id DESC LIMIT ?`;
    let values = [10];
    db.all(query, values, (err, arr) => {
        if (err) console.log(err.message);
        res.render('index', { feeds: arr });
    });
    db.close();
});

// запуск приложения
app.listen(params.port, params.hostname, 
    console.log(`Сервер запущен - ${params.hostname}:${params.port}/`)
);
