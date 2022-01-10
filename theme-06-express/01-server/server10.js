const http = require("http"); // модуль http есть по умолчанию

http.createServer((request, response) => {
    response.end("testing the server10");
}).listen(3000, "127.0.0.1", () => {
    console.log("смотрим работу через браузер - http://localhost:3000");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
