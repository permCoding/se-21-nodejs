const http = require("http");
const fs = require('fs');

const filename = './block.html';
const filetype = {'Content-Type': 'text/html'};

const server = http.createServer();

server.on("request", (req, res) => {
    res.writeHead(200, filetype);
    let myReadStream = fs.createReadStream(filename, 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, () => console.log("http://localhost:3000"));
