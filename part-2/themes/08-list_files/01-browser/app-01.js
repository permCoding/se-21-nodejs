// подключение внешних зависимостей
const express = require('express');

// подключение модулей
const path = require('path');
const {readdirSync, statSync} = require("fs");

// сервисные данные и функции
const params = {"port": 3000, "hostname": "127.0.0.1"};

const server_info = (params) => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
};

const get_list_files = (dir) => {
    let list_file_info = [];
    let dirs = [dir]; // список директорий для поиска файлов
    let last;
    let status;
    while (dirs.length > 0) { // пока очередь директорий не пуста
        last = dirs.pop(); // берём крайнюю директрию из списка
        readdirSync(last, 'utf8').forEach(item => { // для каждого элемента директории
            status = statSync(path.join(last, item));
            if (status.isFile()) { // если это файл
                let file_obj = { // формируем объект файла
                    file_path: last,
                    file_name: item,
                    file_size: status.size
                };
                list_file_info.push(file_obj); // добавляем в список
            } else { // если это не файл, а директория
                dirs.unshift(path.join(last, item)); // добавим новую директорию
            }
        });
    }
    return list_file_info;
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
    model_data.list_files = get_list_files(dir_files);
    res.render('index-00', model_data);
});

// запуск приложения
app.listen(params.port, params.hostname, server_info(params));
