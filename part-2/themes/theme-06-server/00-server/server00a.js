const http = require("http");

const server = http.createServer();

server.listen(3000);

server.on("request", (req, res) => {
    res.write("server ");
    res.end("test");
});

// обратите внимание, что request проходит дважды
// второй запрос такой - http://localhost:3000/favicon.ico
