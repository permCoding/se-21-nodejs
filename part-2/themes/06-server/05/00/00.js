const http = require("http");
const fs = require("fs");
// https://metanit.com/web/nodejs/3.4.php
const server = http.createServer();

server.listen(3000);

server.on("listening", () => { console.log("server listening"); })

// server.on("request", ((req, res) => res.end("server")));

server.on("request", (req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain"});
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write("server");
    res.write('<br>');
    res.write("response");
    res.end();
})

// server.on("request", (req, res) => {
//     let url = req.url;
//     if (url === "/") namefile = "index.html";
//     if (url === "/style.css") namefile = "style.css";
//     console.log(url);
//     fs.readFile(namefile, (error, content) => {
//         res.end(content);
//     })
// });

// server.on("request", (req, res) => {
//     let url = req.url;
//     if (url === "/") namefile = "index.html";
//     if (url === "/style.css") namefile = "style.css";
//     console.log(url);
//     let content = fs.readFileSync(namefile, "utf-8");
//     res.end(content);
// });

// server.on("request", (req, res) => {
//     console.log("request");
//
//     let url = req.url;
//     if (url === "/") namefile = "index.html";
//     if (url === "/style.css") namefile = "style.css";
//     console.log(url);
//
//     fs.createReadStream(namefile).pipe(res);
// });
