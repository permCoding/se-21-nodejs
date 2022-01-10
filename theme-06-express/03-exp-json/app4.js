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
app.set("view engine", "hbs"); // npm i hbs

app.get('/', (req, res) => { // как есть, без сортировки
    let obj_data = Object.assign(name_fields, {'data': arr});
    res.render(__dirname + "/views/index.hbs", obj_data); 
});

app.get('/:field.:direct', (req, res) => { // с параметрами
    let field = req.params.field; // http://localhost:3000/lang.asc
    let direct = req.params.direct;
    let arr_sort = _(arr).orderBy(field, direct).value();
    let obj_data = Object.assign(name_fields, {'data': arr_sort});
    res.render(__dirname + "/views/index.hbs", obj_data); 
});

app.listen(port, server_info(port));
