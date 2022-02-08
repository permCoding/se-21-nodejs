// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

let obj = {
    "lang": "Python",
    "isLearning": true,
    "level": 10
};

// настройка приложения
const app = express();
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs"); // npm i hbs

// обработчики событий
app.get('/', (req, res) => {
    res.render("app0.hbs", obj); 
});

// запуск приложения
app.listen(port, server_info(port));
