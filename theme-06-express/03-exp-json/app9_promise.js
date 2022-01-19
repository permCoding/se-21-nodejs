// подключение внешних зависимостей
const express = require('express');
const _ = require('lodash');

// подключение своих модулей
const { port } = require('./static/config.json');
const { server_info, csv_to_json_promise } = require('./static/utils');

// подготовка данных
let keys = ["lang", "lean", "lev"];
let values = ["Язык программирования", "Изучен/не изучен", "Уровень изучения"];
let name_fields = _.zipObject(keys, values);
let arr = [];

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
app.listen(port, async () => {
    arr = await csv_to_json_promise('./static/example.csv');
    console.log(arr);
    server_info(port);
});
