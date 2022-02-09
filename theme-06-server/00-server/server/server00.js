require("http") // модуль http есть по умолчанию
    .createServer((request, response) => response.end("testing the server ..."))
    .listen(3000);

/* 
    остановить сервер -> Ctrl+C <- Windows or Linux
    смотрим работу через браузер -> http://localhost:3000
*/
