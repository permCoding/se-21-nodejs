const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload({})); // default

let form = ' \
    <form action="/upload" method="POST" enctype="multipart/form-data" > \
        <input type="file" name="fileA"> <br> \
        <input type="file" name="fileB"> <br> \
        <input type="submit" value="Загрузить файлы"> \
    </form> ';

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end(form);
});

app.post('/upload', function(req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    if (req.files.fileA) req.files.fileA.mv('public/files/'+req.files.fileA.name);
    if (req.files.fileB) req.files.fileB.mv('public/files/'+req.files.fileB.name);
    res.send('Файлы загружены.');
});

// запуск приложения
const params = {"port": 3000, "hostname": "127.0.0.1"};
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});