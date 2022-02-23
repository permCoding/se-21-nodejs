const http = require("http");
const fs = require('fs');

const server = http.createServer();

server.on("request", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let content = fs.readFileSync('./block.html', 'utf8');
    res.end(content);
});

server.listen(3000, () => console.log("http://localhost:3000"));
