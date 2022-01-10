const app = require('express')(); // сразу создать объект
const port = require('./config.json').port; // сразу порт
const es = require('./db.json'); // загрузить данные
const server_info = require('./utils').server_info;

app.get(['/app', '/ver'], (req, res) => 
    res.send('app => version 4.0.1')
);

app.get('/', (req, res) => 
    res.send(JSON.stringify(es))
);

app.get('/title', (req, res) =>
    res.send(`title = ${es.title}`)
);

app.get('/start', (req, res) => 
    res.send(es.start) 
);

app.get('/menu', (req, res) => 
    res.send(es.dict[es.start].join('<br>'))
);

app.listen(port, server_info(port));
