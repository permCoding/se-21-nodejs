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

let get_data = (field, direct) => {
    let arr_sort = _(arr).orderBy(field, direct).value();
    return Object.assign(name_fields, {'data': arr_sort});
};

app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs"); // npm i hbs

app.get(['/', '/asc'], (req, res) => {
    res.render("index.hbs", get_data('level', 'asc')); 
});

app.get('/desc', (req, res) => {
    res.render("index.hbs", get_data('level', 'desc'));
});

app.listen(port, server_info(port));
