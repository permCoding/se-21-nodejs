const express = require('express');
const app = express();
const params = require('./config.json');
const port = params.port;

app.get('/', (req, res) => { // запрос http://localhost:3000
    const obj = require('./example.json');
    res.send(JSON.stringify(obj)); 
});

app.get('/level', (req, res) => { // http://localhost:3000/level
    const obj = require('./example.json');
    // res.send(String(obj.level));
    res.send(`level = ${obj.level}`); 
});

app.get('/lang', (req, res) => { // http://localhost:3000/lang
    const obj = require('./example.json');
    res.send(obj.lang); 
});

app.listen(port, function () {
    console.log(`сервер запущен - http://localhost:${port}`);
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
