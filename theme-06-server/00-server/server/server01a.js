const http = require("http"); // модуль http есть по умолчанию

const server_dialog = (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');
    response.write("Тип запроса: " + request.method + "<br>");
    response.write("User-Agent: " + request.headers["user-agent"] + "<br>");
    response.write(request.headers.host + "<br>");
};

http.createServer(server_dialog).listen(3000);

/* 
    остановить сервер -> Ctrl+C <- Windows or Linux
    смотрим работу через браузер -> http://localhost:3000
*/
