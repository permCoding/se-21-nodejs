const http = require("http");

const callback = (req, res) => res.end('start server\nbrowser view');

// создали объект сервера
const server = http.createServer(callback);

// назначили обработчики событий
server.on("error", err => console.log(`Error: ${err}`));
server.on("request", () => console.log('request'));
server.on("listening", () => console.log(`listening: ${server.address().port}`));

// запустили сервер
server.listen(3000);

// отслеживайте реацию приложения на события
// есть мнение, что второй request браузер делает для favicon.ico
