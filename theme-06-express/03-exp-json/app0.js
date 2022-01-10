const express = require('express');
const app = express();
const port = require('./config.json').port;
const server_info = require('./utils').server_info;

let obj_data = {
    "lang": "Python",
    "isLearning": true,
    "level": 10
};

app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs"); // npm i hbs

app.get('/', (req, res) => {
    res.render("app0.hbs", obj_data); 
});

app.listen(port, server_info(port));
