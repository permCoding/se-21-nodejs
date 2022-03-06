const http = require("http");
const get_dt = require("./time").get_data_time;

let ts_start;

function intervalFunc() {
    let current = get_dt("s");
    console.log(`Текущее время: ${current}`);
}

const intervalObj = setInterval(intervalFunc, 1000); // в миллисекундах

const server = http
    .createServer((req, res) => {
        res.end('events'); // ответ клиенту в браузер
    })
    .listen(port=3000, hostname="127.0.0.1", () => {
        ts_start = Date.now(); // start timestamp in milliseconds
        let current = get_dt("s");
        console.log(`Сервер запущен: ${current}`);
        intervalObj;
    });

// server.on('connection', () => { console.log('connect'); server.close(); });

server.on('close', () => { // назначим обработчик события
    console.log('-- Сервер остановлен ---');
    process.exit(1);
});

process.on('SIGINT', function() {
    clearInterval(intervalObj);

    let current = get_dt("s");
    console.log(`Сигнал на выключение сервера: ${current}`);

    let ts_stop = Date.now();
    let time = ts_stop - ts_start;
    // time working program in seconds
    console.log(`Продолжительность работы = ${Math.floor(time/1000)} сек`);

    server.close(); // вызовем событие
});
