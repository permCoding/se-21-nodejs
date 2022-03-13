const http = require("http");
const fs = require("fs");
const path = require("path")

const server = http.createServer();

let load_url = (res, url) => {
    if (url === "/") url = "/index.html";
    res.setHeader("Content-Type", "text/html; charset=utf8;");
    fs.readFile(`./public${url}`, "utf-8", (error, content) => {
        if (error) throw error;
        res.end(content);
    });
}

server.listen(3000);
server.on("request", (req, res) => load_url(res, req.url));
