// подключение внешних зависимостей
const express = require('express');
const path = require('path');

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

// подготовка данных
const obj = require('./static/example.json');
let obj_data = {
    lang: "Язык программирования", 
    lean: "Изучен/не изучен", 
    lev: "Уровень изучения", 
    data: obj,
    title: "Example app",
    header: "Поля объекта"
};

// настройка приложения
const app = express();
const path_static = path.join(__dirname, 'static');
app.use('/static', express.static(path_static));
app.set("view engine", "hbs"); // npm i hbs

// обработчики событий
app.get('/', (req, res) => {
    res.render("app1.hbs", obj_data); 
});

// запуск приложения
app.listen(port, server_info(port));
