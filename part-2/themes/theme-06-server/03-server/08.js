const http = require('http');

const server = http.createServer();

let data_type = {'Content-Type': 'application/json'};

server.on('request', (req, res) => {
    res.writeHead(200, data_type);
    let data = JSON.stringify(require("./08.json"));
    res.end(data);
});

server.listen(3000, () => console.log('http://localhost:3000'));
