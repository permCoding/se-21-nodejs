const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
    console.log("request");
    response.end("testing the server03");
});

server.on("listening", () => {
    console.log(`http://localhost:${server.address().port}`);
});

server.listen(3000, "localhost", error => {
    error? console.error(error): console.log("listen port 3000")
});
