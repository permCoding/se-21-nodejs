// подключение зависимостей
const express = require('express');
const path = require('path');
const {readFileSync,statSync} = require('fs')

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
let model_data = {
    title: "List of files",
    heading: "Список файлов",
    list_files: [], // тут будет список объектов про файлы
};

const get_list = (dir) => {
    return require("fs")
        .readdirSync(dir, 'utf8') // всё содержимое папки dir
        .filter(item => statSync(path.join(dir, item)).isFile())
        .map(item => path.join(__dirname,dir,item));
};

// controller
app.get('/', (req, res) => {
    model_data.list_files = get_list(path.join("public", dir_files));
    res.render('index-05', model_data);
});

app.get(`/${dir_files}/:id`, (req, res) => {
    const id = Number(req.params.id);
    let file_path_name = model_data.list_files[id];
    let file_name = path.basename(file_path_name);
    console.log(file_path_name);
    console.log(file_name);
    let content = readFileSync(path.join("public",dir_files,file_name), 'utf-8');
    res.render('file', { content: content, title: file_name });
});

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
