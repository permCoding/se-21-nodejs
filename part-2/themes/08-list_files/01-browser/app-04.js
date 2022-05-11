// подключение внешних зависимостей
const express = require('express');

// подключение модулей
const { readFileSync, readdirSync, statSync} = require('fs');
const path = require('path');

// сервисные данные и функции
const params = {"port": 3000, "hostname": "127.0.0.1"};

const server_info = (params) => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
};

const get_list_files = (dir) => {
    let list_file_info = [];
    let dirs = [dir];
    let last;
    let status;
    while (dirs.length > 0) {
        last = dirs.pop();
        readdirSync(last, 'utf8').forEach(item => {
            status = statSync(path.join(last, item));
            if (status.isFile()) {
                let file_obj = {
                    file_path: last,
                    file_name: item,
                    file_size: status.size
                };
                list_file_info.push(file_obj);
            } else {
                dirs.unshift(path.join(last, item));
            }
        });
    }
    return list_file_info;
};

let obj_data = {
    title: "Список файлов",
    heading: "Список файлов",
    list_files: [], // тут будет список объектов про файлы
    list_pdf: []
};

const dir_files = path.join("public", "docs");

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.set('view engine', 'ejs'); // npm i ejs

// обработчики событий
app.get(['/', '/start'], function (req, res) {
    obj_data.list_files = get_list_files(dir_files);
    res.render('index', obj_data);
});

app.get(['/file/:type/:id'], function (req, res) {
    const id = Number(req.params.id);
    const type_file = req.params.type;
    const file_name = obj_data.list_files[id].file_name;
    let file_path = path.join(dir_files, file_name);
    let content = readFileSync(file_path, 'utf-8');
    res.render('file', { content: content, title: file_name });
});

// запуск приложения
app.listen(params.port, params.hostname, server_info(params));
