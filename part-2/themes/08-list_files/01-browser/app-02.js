// подключение зависимостей
const express = require('express');
const path = require('path');

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs
const params = {"port": 3000, "hostname": "127.0.0.1"};
const dir_files = path.join("public", "docs");

// паттерн проектирования MVC

// model data
const {model_data, get_list_files} = require("./models/model"); // или get_list_files_full

// controller
app.get('/', function (req, res) {
    model_data.list_files = get_list_files(dir_files);
    res.render('index-01', model_data);
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
