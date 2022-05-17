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
const dir_files = path.join("public", "docs");

// паттерн проектирования MVC

// model data
const model_data = require("./models/model").model_data;
const get_list = require("./models/model").get_list_files;

// controller
app.get('/', (req, res) => {
    model_data.list_files = get_list(dir_files);
    res.render('index-03', model_data);
});

app.get('/docs/:id', (req, res) => {
    const id = Number(req.params.id);
    const file_name = model_data.list_files[id].file_name;

    // -- 0 -- отправить в браузер клиенту строку - адрес файла
    // res.send(file_name);

    // -- 1 -- render - отрендерить в html-странице
    let content = readFileSync(path.join(dir_files, file_name), 'utf-8');
    res.render('file', { content: content, title: file_name });

    // -- 2 -- send - отправить на загрузку клиенту
    // console.log("send file completed - " + file_name);
    // res.sendFile(path.join(__dirname, dir_files, file_name));

    // -- 3 -- download - отправить на загрузку клиенту
    // console.log("download completed - " + file_name);
    // res.download(path.join(__dirname, dir_files, file_name));
    
    // -- 4-- stream
    // const {createReadStream} = require("fs");
    // let file_stream = createReadStream(path.join(__dirname, dir_files, file_name));
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


    // это черновики

    // let rel_path = path.join("public", dir_files, file_name);
    // let file_path = path.join(__dirname, rel_path);

    // res.download(file_path, file_name, (err) => {
    //     if (err) console.error(err);
    //     else console.log("successful download - " + file_name);
    // });
