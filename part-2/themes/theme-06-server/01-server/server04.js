const http = require("http");
const port = 3000;
const fs = require('fs');

const server_dialog = (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');

    fs.readFile('./server03.html', 'utf8', (error, content) => {
        if (error) throw error;
        response.end(content);
    }); // асинхронное чтение
};

http.createServer(server_dialog).listen(port);
