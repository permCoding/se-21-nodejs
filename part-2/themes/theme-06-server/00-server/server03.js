const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
    response.end("testing the server12");
});

server.on("listening", () => {
    console.log("http://localhost:3000");
    console.log(process.platform);
    console.log(server.address().port);
    console.log("остановить сервер - Ctrl+C");
});

server.on("error", (error) => console.log(`Error => ${error}`));

server.listen(3000);
