const http = require("http");

const request = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );
    let url = req.url;
    if ((url === "/index.html") || (url === "/")) {
        res.write("капусТА");
    }
    else {
        res.write("коМАр");
    }
    res.end();
};

const server = http.createServer();
server.listen(3000);
server.on("request", request);
