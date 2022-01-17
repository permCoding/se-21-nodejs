const fs = require('fs');
const csvjson = require('csvjson'); // npm i csvjson

exports.server_info = function (port) {
    console.log(`сервер запущен - http://localhost:${port}`);
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
};

exports.csv_to_json = function (nameFile, del = ',') {
    let textCSV = fs.readFileSync(nameFile, 'utf-8');
    let arr = csvjson.toObject(textCSV, { delimiter: del });
    return arr.map(obj => ({
        "lang": obj.lang, 
        "isLearning": obj.isLearning === "true",
        "level": parseInt(obj.level)
    }));
};

exports.csv_to_json_promise = function (nameFile, del = ',') {
    return new Promise(function (resolve, reject) {
        let textCSV = fs.readFileSync(nameFile, 'utf-8');
        let arr = csvjson.toObject(textCSV, { delimiter: del });
        arr.forEach(obj => obj["level"] = parseInt(obj.level));
        resolve(arr);
    });
};
