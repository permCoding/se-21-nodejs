const http = require("http");
const fs = require("fs");
const path = require("path")

const server = http.createServer();

let load_url = (res, url) => {
    if ((url === "/") || (url === "/start")) url = "/index.html";
    let ext = path.parse(url).ext;
    if (ext === ".ico") return;
    if (ext === ".css") res.setHeader("Content-Type", "text/css");
    if (ext === ".html") res.setHeader("Content-Type", "text/html; charset=utf8;");
    if (ext === ".js") res.setHeader("Content-Type", "text/javascript; charset=utf8;");

    fs.readFile(`./public${url}`, "utf-8", (error, content) => {
        if (error) throw error;
        res.end(content);
    });
}

server.listen(3000);
server.on("listening", () => console.log("http://localhost:3000"));
server.on("request", (req, res) => load_url(res, req.url));
