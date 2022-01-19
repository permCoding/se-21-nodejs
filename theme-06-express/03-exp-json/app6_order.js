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

// вспомогательные функции
let get_data = (field, direct) => {
    let arr_sort = _(arr).orderBy(field, direct).value();
    return Object.assign(name_fields, {'data': arr_sort});
};

// настройка приложения
const app = express();
app.use('/static', express.static(__dirname + '/static'));
app.set("view engine", "hbs");

// обработчики событий
app.get(['/', '/asc'], (req, res) => {
    res.render("app1.hbs", get_data('level', 'asc')); 
});

app.get('/desc', (req, res) => {
    res.render("app1.hbs", get_data('level', 'desc'));
});

// запуск приложения
app.listen(port, server_info(port));
