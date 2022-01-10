const express = require('express');
const app = express();
const params = require('./config.json');
const port = params.port;

app.get('/', (req, res) => {
    const obj = require('./example.json');
    res.send(JSON.stringify(obj)); 
});

app.listen(port, function () {
    console.log(`сервер запущен - http://localhost:${port}`);
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
