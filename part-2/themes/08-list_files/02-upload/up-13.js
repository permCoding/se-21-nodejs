const express = require('express'); // npm i express
const multer = require('multer'); // npm i multer

const app = express();
app.use(express.static(__dirname)); // используем текущую папку

const cfg = multer.diskStorage({
    destination: (req, file, cb) =>{ cb(null, "uploads/"); }, // папка, куда будем грузить
    filename: (req, file, cb) =>{ cb(null, file.originalname); }
});

let form = ' \
    <form action="/upload" method="POST" enctype="multipart/form-data" > \
        <input type="file" name="file"> <br> \
        <input type="submit" va lue="Загрузить файл"> \
    </form> ';

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end(form);
});

app.use(multer({storage:cfg}).single("file"));
app.post("/upload", function (req, res, next) {
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
