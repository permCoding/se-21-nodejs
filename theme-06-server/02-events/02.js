const http = require("http");

const server = http
    .createServer((req, res) => res.end('- start server'))
    .listen(3000, () => console.log('- server start'));

server.on('close', function() {
    console.log('- server stop');
});

process.on('SIGINT', function() { // отловить остановку
    server.close(); // вызвать обработчик
});
