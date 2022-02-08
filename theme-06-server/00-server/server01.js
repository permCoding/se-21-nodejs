const http = require("http"); // модуль http есть по умолчанию

const server_dialog = (request, response) => {
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log(request.headers.host);
    response.end("testing the server ...");
};

http.createServer(server_dialog).listen(3000);

/* 
    остановить сервер -> Ctrl+C || Ctrl+D <- Windows or Linux
    смотрим работу через браузер -> http://localhost:3000
*/

/*
https://nodejsdev.ru/guide/create-server/#_3
https://metanit.com/web/nodejs/3.1.php
http://code.mu/ru/javascript/nodejs/book/prime/server/response/
*/
