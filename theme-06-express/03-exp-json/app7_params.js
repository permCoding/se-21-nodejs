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
    let obj_data = Object.assign(name_fields, {'data': arr});
    res.render(__dirname + "/views/app1.hbs", obj_data); 
});

app.get('/:field.:direct', (req, res) => { // с параметрами
    let field = req.params.field; // http://localhost:3000/lang.asc
    let direct = req.params.direct;
    let arr_sort = _(arr).orderBy(field, direct).value();
    let obj_data = Object.assign(name_fields, {'data': arr_sort});
    res.render(__dirname + "/views/app1.hbs", obj_data); 
});

// запуск приложения
app.listen(port, server_info(port));
