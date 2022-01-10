const http = require("http");
const port = 3000;
const fs = require('fs');

const server_dialog = (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');
    
    let content = fs.readFileSync('./server03.html', 'utf8'); // синхронное чтение
    response.write(content);

    response.end();
};

http.createServer(server_dialog).listen(port);
