// https://www.npmjs.com/package/express-fileupload

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// настройка приложения
app.use(fileUpload({}));
app.use(express.static('public'));

// обработчики событий
app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/form', function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.write('<form action="/upload" method="POST" enctype="multipart/form-data" >');
    res.write('<input type="file" name="up_file"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
})

app.post('/upload', function(req, res) {
    let up_file = req.files.up_file;
    console.log(up_file); // the uploaded file object
    if (up_file.size < 10000000) {
        up_file.mv("public/pics/" + up_file.name);
        res.end(up_file.name);
    } else {
        res.write(up_file.size);
        res.end("слишком большой файл");
    }
});

// запуск приложения
app.listen(3000);
