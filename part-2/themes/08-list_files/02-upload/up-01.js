const express = require('express'); // npm i express
const fileUpload = require('express-fileupload'); // npm i express-fileupload

const app = express();
app.use(fileUpload({}));

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
    req.files.file.mv('public/images/'+req.files.file.name);
    res.end(req.files.file.name);
    console.log(req.files.file); // the uploaded file object
});

// запуск приложения
const params = {"port": 3000, "hostname": "127.0.0.1"};
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
