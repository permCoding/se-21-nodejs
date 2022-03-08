const express = require('express'); // npm i express

const app = express();

const obj = {
    "lang": "Python",
    "isLearning": true,
    "level": 10
};

app.get('/', (req, res) => { 
    let line_json = JSON.stringify(obj, null, 4);
    console.log(line_json); // для контроля
    res.send(line_json); 
});

app.listen(3000, function () {
    console.log('сервер запущен - http://localhost:3000');
    console.log('остановить сервер - Ctrl+C');
});
