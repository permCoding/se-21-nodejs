// подключение внешних зависимостей и модулей
const express = require('express');
const path = require('path');
const {readdirSync, statSync} = require("fs");

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs
const params = {"port": 3000, "hostname": "127.0.0.1"};
const dir_files = path.join("public", "docs");

// паттерн проектирования MVC

// model data - модель данных
let model_data = {
    title: "List of files",
    heading: "Список файлов",
    list_files: [], // тут будет список объектов про файлы
};

let get_file_obj = function (dir, item) {
    return { // формируем объект с данными про файл
        'file_path': dir, 
        'file_name': item, 
        'file_size': statSync(path.join(dir, item)).size
    }
};

/* эта функция будет получать список файлов из папки dir с путями к ним и их размерами */
const get_list_files = (dir) => {
    return readdirSync(dir, 'utf8') // всё содержимое dir - и файлы и папки
        .filter(item => statSync(path.join(dir, item)).isFile()) // только файлы
        .map(item => get_file_obj(dir, item)); // возвращаем массив объектов с данными про файлы
};

// controller - обработчики событий - запрос-ответ
app.get('/', function (req, res) {
    model_data.list_files = get_list_files(dir_files);
    res.render('index-01', model_data);
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
