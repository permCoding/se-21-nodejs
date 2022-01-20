const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res) => {
    const dict = {
        '': 'html',
        '.js': 'javascript',
        '.css': 'css'
    };
    let dir = './es_multi';
    let url = req.url;
    let ext = path.parse(url).ext;
    if (ext == '') url = '/index.html';
    
    let content = fs.readFileSync(dir + url, 'utf8');
    res.writeHead(200, {'Content-Type': 'text/' + dict[ext]});
    res.end(content);
});

server.listen(3000, () => console.log('Server on 3000'));
