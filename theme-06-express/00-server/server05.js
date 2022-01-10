const http = require("http");
const port = 3000;
const fs = require('fs');
let title = 'Экспертная система<br>подбор животного в зоопарк';
let var_title = '{{title}}';
let bgcolor = '#BA6';
let var_bgcolor = '{{bgcolor}}';

const server_dialog = (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');

    fs.readFile('./server05.html', 'utf8', (error, content) => {
        if (error) throw error;
        content = content
            .replace(var_title, title)
            .replace(var_bgcolor, bgcolor);
        response.write(content);
        response.end();
    }); // асинхронное чтение
};

http.createServer(server_dialog).listen(port);
