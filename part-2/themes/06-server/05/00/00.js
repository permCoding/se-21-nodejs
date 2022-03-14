const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.listen(3000);

server.on("listening", () => { console.log("http://localhost:3000"); })

// server.on("request", ((req, res) => res.end("server")));

// server.on("request", (req, res) => {
//     // res.writeHead(200, { "Content-Type": "text/plain"});
//     res.writeHead(200, { "Content-Type": "text/html"});
//     res.write("server");
//     res.write('<br>');
//     res.write("response");
//     res.end();
// })

let html = `
<!doctype html> 
<html lang="ru"> 
<head>
    <meta charset="UTF-8">
    <title>server</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>server 1</h1>
    <h2>server 2</h2>
</body>
</html>`;

// server.on("request", (req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html"});
//     res.write(html);
//     res.end();
// });

// server.on("request", (req, res) => {
//     let url = req.url;
//     if (url === "/") namefile = "index.html";
//     if (url === "/style.css") namefile = "style.css";
//     console.log(url);
//     fs.readFile(namefile, (error, content) => {
//         res.end(content);
//     })
//     console.log("===========");
// });

server.on("request", (req, res) => {
    let url = req.url;
    if (url === "/") namefile = "index.html";
    if (url === "/style.css") namefile = "style.css";
    console.log(url);
    let content = fs.readFileSync(namefile, "utf-8");
    res.end(content);
});

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
