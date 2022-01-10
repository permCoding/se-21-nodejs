const express = require('express');
const app = express();
const port = require('./config.json').port;
const server_info = require('./utils').server_info;
const arr = require('./example.json');
const _ = require('lodash');

let name_fields = {
    lang: "Язык программирования", 
    lean: "Изучен/не изучен", 
    lev: "Уровень изучения"
};

app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs");

app.get('/', (req, res) => { // как есть, без сортировки
    res.render("app5.hbs", {"fields": name_fields, "data": arr}, console.log('Построение завершено...'));
});

app.get('/:field.:direct', (req, res) => { // с параметрами
    let field = req.params.field; // http://localhost:3000/lang.asc
    let direct = req.params.direct;
    let arr_sort = _(arr).orderBy(field, direct).value();
    res.render("app5.hbs", {"fields": name_fields, "data": arr_sort}, console.log('Сортировка завершена...'));
});

app.listen(port, server_info(port));
