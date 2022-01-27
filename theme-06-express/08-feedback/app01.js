// подключение внешних зависимостей
const express = require('express');
const sqlite = require('sqlite-sync'); // https://www.npmjs.com/package/sqlite-sync

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
    sqlite.connect('./static/feedbacks.db'); 
    sqlite.insert("feeds", { name: name, feed: feed }, function (res) {
        if (res.error) throw res.error;
        // console.log(res);
    });
    sqlite.close();
    res.redirect("/");
});

app.get(['/', '/start'], function (req, res) {
    sqlite.connect('./static/feedbacks.db'); 
    let arr = sqlite.run("SELECT name, feed FROM feeds ORDER BY id DESC LIMIT 10");
    // console.log(feeds);
    sqlite.close();
    res.render('index', { feeds: arr });
});

// запуск приложения
app.listen(params.port, params.hostname, 
    console.log(`Сервер запущен - ${params.hostname}:${params.port}/`)
);
