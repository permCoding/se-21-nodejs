module.exports.server_info = function (params) {
    console.log(`Сервер запущен - http://${params.hostname}:${params.port}/`);
    let hotKeys = "Ctrl+C";
    console.log(`остановить сервер - ${hotKeys}`);
};

