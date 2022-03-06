const http = require("http");
const get_dt = require("./time").get_data_time;

let ts_start;

const server = http
    .createServer((req, res) => {
        res.end('events'); // ответ клиенту в браузер
    })
    .listen(port=3000, hostname="127.0.0.1", () => {
        ts_start = Date.now(); // start timestamp in milliseconds
        let current = get_dt("s");
        console.log(`Сервер запущен: ${current}`);
    });

// server.on('connection', () => { console.log('connect'); server.close(); });

server.on('close', () => { // назначим обработчик события
    console.log('-- Сервер остановлен ---');
    process.exit();
});

process.on('SIGINT', function() {
    let current = get_dt("s");
    console.log(`Сигнал на выключение сервера: ${current}`);

    let ts_stop = Date.now();
    let time = ts_stop - ts_start;
    // time working program in seconds
    console.log(`Продолжительность работы = ${Math.floor(time/1000)} сек`);

    server.close(); // вызовем событие
});

/*
Имя	Код	Подлежит ли сигнал обработке	Стандартная реакция Node.js	Цель сигнала
SIGHUP 1	Да	Завершение работы	Закрытие терминала
SIGINT 2	Да	Завершение работы	Сигнал прерывания (Ctrl+C) с терминала
SIGQUIT 3	Да	Завершение работы	Сигнал Quit с терминала (Ctrl+D)
SIGKILL 9	Нет	Завершение работы	Безусловное завершение процесса
SIGUSR1 10	Да	Запуск отладчика	Пользовательский сигнал №1
SIGUSR2 12	Да	Завершение работы	Пользовательский сигнал №2
SIGTERM 15	Да	Завершение работы	Запрос на завершение работы процесса
SIGSTOP 19	Нет	Завершение работы	Остановка выполнения процесса
*/