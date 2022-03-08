exports.server_info = function (port) {
    console.log(`сервер запущен - http://localhost:${port}`);
    console.log(process.platform);
    console.log("остановить сервер - Ctrl+C");
};
