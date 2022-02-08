// подключение внешних зависимостей
const express = require('express');
const _ = require('lodash');

// подключение своих модулей
const port = require('./static/config.json').port;
const server_info = require('./static/utils').server_info;

// подготовка данных
const arr = require('./static/example.json');
let name_fields = {
    lang: "Язык программирования", 
    lean: "Изучен/не изучен", 
    lev: "Уровень изучения"
};

// настройка приложения
const app = express();
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs");

// обработчики событий
app.get('/', (req, res) => { // как есть, без сортировки
    res.render("app8.hbs", 
        {"fields": name_fields, "data": arr}, 
        console.log('Построение завершено...'));
});

app.get('/:field.:direct', (req, res) => { // с параметрами
    let field = req.params.field; // http://localhost:3000/lang.asc
    let direct = req.params.direct;
    let arr_sort = _(arr).orderBy(field, direct).value();
    res.render("app8.hbs", 
        {"fields": name_fields, "data": arr_sort}, 
        console.log('Сортировка завершена...'));
});

// запуск приложения
app.listen(port, server_info(port));
