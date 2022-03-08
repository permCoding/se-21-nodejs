const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
    response.end("testing the server02");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("http://localhost:3000");
    console.log(process.platform);
    console.log("остановить сервер - Ctrl+C");
});
