const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload());

let form = ' \
    <form action="/upload" method="POST" enctype="multipart/form-data" > \
        <input type="file" name="file"> <br> \
        <input type="submit" value="Загрузить файл"> \
    </form> ';

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end(form);
});

app.post('/upload', function(req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Файл не загружен.');
    };
    let sample_file = req.files.file;
    let uploadPath = __dirname + '/public/files/' + sample_file.name;
    sample_file.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
        res.send('Файл загружен.');
    });
});

// запуск приложения
const params = {"port": 3000, "hostname": "127.0.0.1"};
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});