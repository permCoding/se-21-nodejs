const http = require("http"); // требовать

const server = http.createServer();

server.listen(3000);

// такой сервер ничего не отдаёт
// добавим обработку события request

server.on("request", (req, res) => res.end("test"));

// обратите внимание, что request проходит дважды
// второй запрос такой - http://localhost:3000/favicon.ico
