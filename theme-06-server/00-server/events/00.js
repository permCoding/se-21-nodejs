const http = require("http");

const server = http
    .createServer((req, res) => res.end('- start server'))
    .listen(3000);

server.on('close', function() {
    console.log('- stop server');
});

process.on('SIGINT', function() {
    server.close();
});
