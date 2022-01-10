const express = require('express');
const app = express();
const port = require('./config.json').port;
const server_info = require('./utils').server_info;
const obj = require('./example.json');

obj.sort((a, b) => b.level - a.level); // по убыванию

let obj_data = {
    lang: "Язык программирования", 
    lean: "Изучен/не изучен", 
    lev: "Уровень изучения", 
    data: obj 
};

app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs"); // npm i hbs

app.get('/', (req, res) => {
    res.render("index.hbs", obj_data); 
});

app.listen(port, server_info(port));
