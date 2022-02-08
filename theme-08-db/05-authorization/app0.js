// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

// настройка приложения
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs");

// обработчики событий
app.get('/', (req, res) => {
    res.render("index.hbs", {username:"username", passwors:"password"}); 
});

app.post("/login", urlencodedParser, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
});

// запуск приложения
app.listen(port, server_info(port));
