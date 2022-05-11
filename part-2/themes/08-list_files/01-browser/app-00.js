// подключение внешних зависимостей
const express = require('express');

// подключение модулей
const path = require('path');

// сервисные данные и функции
const params = {"port": 3000, "hostname": "127.0.0.1"};

const server_info = (params) => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
};

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs

const dir_files = path.join("public", "docs");
let model_data = {
    list_files: [], // тут будет список объектов про файлы
};

// controller - обработчики событий
app.get(['/'], function (req, res) {
    let example_obj_file = {
        file_path: "",
        file_name: "01.js",
        file_size: 24
    };
    model_data.list_files = [example_obj_file, example_obj_file];
    res.render('index-00', model_data);
});

// запуск приложения
app.listen(params.port, params.hostname, server_info(params));
