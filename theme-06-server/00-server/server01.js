const http = require("http"); // модуль http есть по умолчанию

http.createServer((request, response) => {
    response.end("testing the server10");
}).listen(3000, "127.0.0.1", () => {
    console.log("смотрим работу через браузер - http://localhost:3000");
    console.log(process.platform);
    console.log("остановить сервер - Ctrl+C");
});
