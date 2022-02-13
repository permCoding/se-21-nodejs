// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const params = require('./public/config.json').debug;
const { server_info } = require('./public/utils.js');
const { get_list } = require('./public/tools');
const { readFileSync } = require('fs');

// подготовка данных
obj_data = {
    url: "http://pcoding.1gb.ru",
    title: "Список файлов",
    heading: "Список файлов"
};

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
// app.use('/files', express.static('public/docs')); // serve the actual files
app.set('view engine', 'ejs'); // npm i ejs

// обработчики событий
app.get(['/', '/start'], function (req, res) {
    obj_data.list_files = get_list('public', obj_data.url);
    res.render('index', obj_data);
});

app.get(['/file'], function (req, res) {
    let content = readFileSync('public/docs/ini.txt', 'utf-8');
    res.render('file', { content: content });
});

// запуск приложения
app.listen(params.port, params.hostname, server_info(params));
