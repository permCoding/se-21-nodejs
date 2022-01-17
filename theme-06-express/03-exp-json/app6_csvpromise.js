const express = require('express');
const app = express();
const port = require('./config.json').port;
const { server_info, csv_to_json_promise } = require('./utils');
const _ = require('lodash');

let keys = ["lang", "lean", "lev"];
let values = ["Язык программирования", "Изучен/не изучен", "Уровень изучения"];
let name_fields = _.zipObject(keys, values);
let arr = [];

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

app.listen(port, async () => {
    arr = await csv_to_json_promise('./example.csv');
    console.log(arr);
    server_info(port);
});
