const http = require("http");
const port = 3000;
const fs = require('fs');
const { error } = require("console");
let title = 'Экспертная система<br>подбор животного в зоопарк';
let var_title = '{{title}}';
let bgcolor = '#BA6';
let var_bgcolor = '{{bgcolor}}';

const file_to_html = (error, content, resp) => {
    if (error) throw error;
    content = content
        .replace(var_title, title)
        .replace(var_bgcolor, bgcolor);
    resp.end(content);
};

const server_dialog = (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');
    fs.readFile('./server05.html', 'utf8', 
        (error, content) => file_to_html(error, content, response)); // асинхронное чтение
};

http.createServer(server_dialog).listen(port);
