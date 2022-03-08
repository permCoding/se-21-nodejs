const http = require("http");

const server = http.createServer();

const request = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"} );
    console.log("request");
    res.write(" =========== ");
    res.write('<br>');
    res.write("<h2>- server -</h2>");
    res.end();
};

server.listen(3000, () => console.log("Сервер запущен"));

server.on("request", request);
