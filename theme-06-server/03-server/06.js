const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile('./es_multi/index.html', 'utf8', (error, content) => {
                if (error) throw error;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            });
            break;
        case '/es.css':
            fs.readFile('./es_multi/es.css', 'utf8', (error, content) => {
                if (error) throw error;
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(content);
            });
            break;
        case '/es.js':
            fs.readFile('./es_multi/es.js', 'utf8', (error, content) => {
                if (error) throw error;
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(content);
            });
            break;
        case '/db.js':
            fs.readFile('./es_multi/db.js', 'utf8', (error, content) => {
                if (error) throw error;
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(content);
            });
            break;    
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Файл не найден');
            break; 
    }
});

server.listen(3000, () => console.log('Server on 3000'));
