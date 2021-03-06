const http = require("http");

const server_info = require('./utils').server_info;
const PORT = 3000;
const HOST = '127.0.0.1';
const fs = require('fs');
const filename = './block.txt';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let myReadStream = fs.createReadStream(filename, 'utf8');
    myReadStream.pipe(res);
});

server.listen(PORT, HOST, server_info(PORT));
