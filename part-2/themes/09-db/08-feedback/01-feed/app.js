// подключение зависимостей
const express = require('express');
const tools = require('./private/tools');
const params = require('./private/config.json').debug;

// настройка приложения
const app = express();
const htmlParser = express.urlencoded({extended: false});
app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.set('view engine', 'ejs'); // npm i ejs

/* паттерн MVC */

// models - модели данных
const md = require('./models/model');

// controllers - обработчики событий
app.get('/', function (req, res) { // главная страница
    let file_records = './private/feeds.csv'; // файл с отзывами
    md.md_index.feeds = md.get_records(file_records); // получить из csv-файла
    // md.md_index.feeds = md.md_index.feeds.reverse(); // новые записи вверху списка
    // md.md_index.feeds = md.md_index.feeds.sort((a,b) => a.name>b.name? +1: -1);
    md.md_index.feeds = md.md_index.feeds.sort((a,b) => a.date_time>b.date_time? -1: +1);
    res.render('index', md.md_index); // render view
});

app.get('/feedback', (req, res) => {
    res.render("feedback", md.md_feed); // render view
});

app.post('/feedback', htmlParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    tools.append_record(req.body.name, req.body.feed); // находим по имени в шаблоне
    res.redirect("/"); // возвращаемся на главную
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`>>> ${params.hostname}:${params.port}/\n>>> to stop: Ctrl+C`);
});
