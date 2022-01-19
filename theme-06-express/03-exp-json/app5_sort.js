// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

// подготовка данных
const arr = require('./static/example.json');
arr.sort((a, b) => b.level - a.level); // по убыванию
let obj_data = {
    lang: "Язык программирования", 
    lean: "Изучен/не изучен", 
    lev: "Уровень изучения", 
    data: arr 
};

// настройка приложения
const app = express();
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs");

// обработчики событий
app.get('/', (req, res) => {
    res.render("app1.hbs", obj_data); 
});

// запуск приложения
app.listen(port, server_info(port));
