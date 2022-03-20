// подключение внешних зависимостей
const express = require('express');
const path = require('path');
const hbs = require('hbs');

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
console.log(obj); // вывод для контроля

// настройка приложения
const app = express();
const path_static = path.join(__dirname, 'static');
app.use('/static', express.static(path_static));
app.set("view engine", "hbs");
hbs.registerHelper('change', header => header.toUpperCase());
hbs.registerHelper('check', value => value == false);

// обработчики событий
app.get('/', (req, res) => {
    res.render("app4.hbs", obj_data); 
});

// запуск приложения
app.listen(port, server_info(port));
