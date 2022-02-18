// подключение внешних зависимостей
const express = require('express');

// подключение своих модулей
const params = require('./public/config.json').debug;
const { server_info } = require('./public/utils.js');
const { get_list_files, get_list_pdf } = require('./public/tools');
const { readFileSync } = require('fs');
const path = require('path');

// подготовка данных
let obj_data = {
    title: "Список файлов",
    heading: "Список файлов",
    list_files: [], // тут будет список объектов про файлы
    list_pdf: []
};
const dir_public = "public";
const dirs = ["docs", "pdf"].map(item => path.join(dir_public, item));

// настройка приложения
const app = express();
app.use('/public', express.static('public'));
// app.use('/files', express.static('public/docs')); // serve the actual files
app.set('view engine', 'ejs'); // npm i ejs

// обработчики событий
app.get(['/', '/start'], function (req, res) {
    // obj_data.list_files = get_list(dir_files, obj_data.url);
    obj_data.list_files = get_list_files(dirs[0]);
    obj_data.list_pdf = get_list_pdf(dirs[1]);
    res.render('index', obj_data);
});

app.get(['/file/:type/:id'], function (req, res) {
    const id = Number(req.params.id);
    const type_file = req.params.type;
    if (type_file === "pdf") {
        const file_name = obj_data.list_pdf[id].file_name;
        let file_path = path.join(dirs[1], file_name);
        res.sendFile(path.join(__dirname, file_path));
        // fs.readFile(__dirname + filePath , function (err,data){
        //     res.contentType("application/pdf");
        //     res.send(data);
        // });
    } else {
        const file_name = obj_data.list_files[id].file_name;
        let file_path = path.join(dirs[0], file_name);
        let content = readFileSync(file_path, 'utf-8');
        res.render('file', { content: content, title: file_name });
    }
});

// запуск приложения
app.listen(params.port, params.hostname, server_info(params));
