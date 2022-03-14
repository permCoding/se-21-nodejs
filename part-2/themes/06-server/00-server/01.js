const http = require("http");

const request = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"} );
    let url = req.url;
    if ((url === "/index.html") || (url === "/")) {
        res.write("1111111111");
    }
    else {
        res.write("2222222222");
    }
    res.end();
};

const server = http.createServer();
server.listen(3000);
server.on("request", request);
