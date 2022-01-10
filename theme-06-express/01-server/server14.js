const fs = require('fs');
const http = require("http");

var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let myReadStream = fs.createReadStream('./es.html', 'utf8');
    myReadStream.pipe(response);
});

server.listen(3000, "127.0.0.2", () => {
    console.log("смотрим работу через браузер - http://localhost:3000");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
