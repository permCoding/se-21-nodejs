// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const params = require('./public/config.json').debug;
const { server_info } = require('./public/utils.js');
const { get_list_files} = require('./public/tools');
const { readFileSync } = require('fs');
const path = require('path');

// подготовка данных
let obj_data = {
    url: "http://pcoding.1gb.ru",
    title: "Список файлов",
    heading: "Список файлов"
};
const dir_files = "public/docs";

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
// app.use('/files', express.static('public/docs')); // serve the actual files
app.set('view engine', 'ejs'); // npm i ejs

// обработчики событий
app.get(['/', '/start'], function (req, res) {
    // obj_data.list_files = get_list(dir_files, obj_data.url);
    obj_data.list_files = get_list_files(dir_files);
    res.render('index', obj_data);
});

app.get(['/file/:id'], function (req, res) {
    const id = Number(req.params.id);
    const file_name = obj_data.list_files[id].file_name;
    let file_path = path.join(dir_files, file_name);
    let content = readFileSync(file_path, 'utf-8');
    res.render('file', { content: content, title: file_name });
});

// запуск приложения
app.listen(params.port, params.hostname, server_info(params));
