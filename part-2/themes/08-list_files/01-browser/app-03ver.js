// подключение зависимостей
const express = require('express');
const path = require('path');
const {readFileSync} = require("fs");

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
const model_data = require("./models/model").model_data;
// const get_list = require("./models/model").get_list_files;
const get_list = require("./models/model").get_list_files_full;

// controller
app.get('/', (req, res) => {
    model_data.list_files = get_list(path.join("public", dir_files));
    res.render('index-03', model_data);
});

app.get(`/${dir_files}/:id`, (req, res) => {
    const id = Number(req.params.id);
    const file_name = model_data.list_files[id].file_name;

    console.log(file_name);
    let rel_path = path.join("public", dir_files, file_name);
    let file_path = path.join(__dirname, rel_path);

    // -- 0 -- отправить в браузер клиенту строку - адрес файла
    // res.send(file_path);

    // -- 1 -- render - отрендерить в html-странице
    // let content = readFileSync(file_path, 'utf-8');
    // res.render('file', { content: content, title: file_name });

    // -- 2 -- send - отправить на загрузку клиенту
    // res.sendFile(file_path);

    // -- 3 -- download - отправить на загрузку клиенту
    // res.download(file_path);
    // res.download(file_path, file_name, (err) => {
    //     if (err) console.error(err);
    //     else console.log("successful download - " + file_name);
    // });
    
    // -- 4-- stream
    // const {createReadStream} = require("fs");
    // let file_stream = createReadStream(file_path);
    // file_stream.pipe(res);
    // file_stream.on("finish", () => {
    //     file_stream.close();
    //     console.log("download completed - " + file_name); 
    // });
});
// тут будет ошибка для файлов из поддиректорий
// если использовать get_list_files_full

// запуск приложения
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
