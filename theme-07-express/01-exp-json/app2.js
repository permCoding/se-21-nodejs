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
});
