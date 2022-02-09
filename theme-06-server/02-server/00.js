const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Test server Node.js');
});

server.listen(3000, () => console.log('Server on 3000'));
