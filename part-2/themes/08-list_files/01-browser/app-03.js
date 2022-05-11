// подключение зависимостей
const express = require('express');
const path = require('path');

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs
const params = {"port": 3000, "hostname": "127.0.0.1"};
// const dir_files = path.join("public", "docs");
const dir_files = "docs";

// паттерн проектирования MVC

// model data
const {model_data, get_list_files} = require("./models/model");
const {readFileSync} = require("fs");

// controller
app.get('/', function (req, res) {
    model_data.list_files = get_list_files(path.join("public", dir_files));
    res.render('index-03', model_data);
});

app.get(`/${dir_files}/:id`, (req, res) => {
    const id = Number(req.params.id);
    const file_name = model_data.list_files[id].file_name;
    let file_path = path.join("public", dir_files, file_name);
    let content = readFileSync(file_path, 'utf-8');
    res.render('file', { content: content, title: file_name });
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
