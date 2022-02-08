module.exports.server_info = function (port) {
    console.log(`сервер запущен - http://localhost:${port}`);
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
};
