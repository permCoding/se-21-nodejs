const http = require("http"); // модуль http есть по умолчанию

const server_info = require('./utils').server_info;

const PORT = 3000;

http.createServer((request, response) => {
    response.end("testing the server05");
}).listen(PORT, "127.0.0.1", server_info(PORT));
