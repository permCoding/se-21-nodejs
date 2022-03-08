const http = require("http");

let count = 0; // глобальная переменная

// создали объект сервера
const server = http.createServer((req, res) => res.end('start server\nbrowser view'));

// назначили обработчики событий
server.on("error", err => console.log(`error: ${err}`));

server.on("request", () => console.log(`request: ${++count}`));

server.on("listening", () => console.log(`listening: http://127.0.0.1:${server.address().port}`));

// запустили сервер
server.listen(3000);

// отслеживайте реацию приложения на события
// есть мнение, что второй request браузер делает для favicon.ico
