const express = require('express'); // npm i express
const multer = require('multer'); // npm i multer

const app = express();
app.use(express.static(__dirname)); // используем текущую папку
const upload = multer({ dest: "uploads/" }); // папка, куда будем грузить

let form = ' \
    <form action="/upload" method="POST" enctype="multipart/form-data" > \
        <input type="file" name="file"> <br> \
        <input type="submit" value="Загрузить файл"> \
    </form> ';

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end(form);
})

app.post("/upload", upload.single("file"), function (req, res, next) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    let filedata = req.file;
    console.log(filedata);
    if(!filedata) {
        res.send("Ошибка при загрузке файла");
    }
    else {
        res.send("Файл загружен");
    }
});

// запуск приложения
const params = {"port": 3000, "hostname": "127.0.0.1"};
app.listen(params.port, params.hostname, () => {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    console.log('остановить сервер - Ctrl+C');
});
