// подключение зависимостей
const express = require('express');
const params = require('./static/config.json').debug;

// настройка приложения
const app = express();
const htmlParser = express.urlencoded({extended: false});
app.use('/static', express.static(__dirname + '/static'));
app.set('view engine', 'ejs'); // npm i ejs
const file_db = './static/feedbacks.db';

// models - модели данных
const md = require('./models/model01');

// controllers - обработчики событий
app.get('/', (req, res) => {
    md.md_index.feeds = md.get_records(file_db);
    res.render('index', md.md_index);
});

app.get('/feedback', function(req, res) {
    res.render("feedback", md.md_feed);
});

app.post('/feedback', htmlParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    let nameUser = req.body.name;
    let feedUser = req.body.feed;
    md.inset_records(file_db, nameUser, feedUser);
    res.redirect("/");
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`>>> ${params.hostname}:${params.port}/\n>>> to stop: Ctrl+C`);
});
