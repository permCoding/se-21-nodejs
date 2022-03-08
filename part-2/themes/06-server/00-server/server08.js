const http = require("http");
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let myReadStream = fs.createReadStream('./es.html', 'utf8');
    myReadStream.pipe(response);
});

server.listen(3000, () => console.log("http://localhost:3000"));
