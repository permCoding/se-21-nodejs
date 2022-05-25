const http = require("http");

const server = http.createServer();

const request = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"} );
    console.log("request");
    res.write('<meta charset="utf-8">');
    res.write('<div style="text-align: center;">');
    res.write('<h3>The server is running</h3>');
    res.write('<h2>Сервер запущен</h2>');
    res.write('</div>');
    res.end();
};

server.listen(3000, () => console.log("Сервер запущен"));

server.on("request", request);
